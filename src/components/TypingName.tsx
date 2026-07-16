import { useEffect, useState } from "react";

type TypingNameProps = {
  text: string;
  className?: string;
};

export function TypingName({ text, className = "" }: TypingNameProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));

      index++;

      if (index >= text.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
