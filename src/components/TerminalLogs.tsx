type TerminalLogsProps = {
  lines: string[];
  className?: string;
  tone?: "terminal" | "default";
};

export function TerminalLogs({ lines, className = "" }: TerminalLogsProps) {
  return (
    <div className={`font-mono text-sm text-green-400 ${className}`}>
      {lines.map((line, index) => (
        <p
          key={index}
          className="opacity-0 animate-[fadeIn_0.4s_forwards]"
          style={{
            animationDelay: `${index * 0.3}s`,
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
