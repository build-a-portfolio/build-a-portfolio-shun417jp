import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Props = {
  className?: string;
};

export function ParticleBackground({ className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationId = 0;

    const mouse = {
      x: -9999,
      y: -9999,
    };

    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();

    const createParticles = () => {
      particles.length = 0;

      const count = Math.floor(canvas.width / 18);

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }
    };

    createParticles();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    canvas.addEventListener("mousemove", handleMouseMove);

    canvas.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);

        ctx.fillStyle = "rgba(56,189,248,0.9)";

        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;

          const dy = particles[i].y - particles[j].y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();

            ctx.moveTo(particles[i].x, particles[i].y);

            ctx.lineTo(particles[j].x, particles[j].y);

            ctx.strokeStyle = `rgba(56,189,248,${0.15 * (1 - distance / 120)})`;

            ctx.stroke();
          }
        }
      }

      particles.forEach((particle) => {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();

          ctx.moveTo(particle.x, particle.y);

          ctx.lineTo(mouse.x, mouse.y);

          ctx.strokeStyle = "rgba(56,189,248,0.25)";

          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
