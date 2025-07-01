import { useState, useEffect } from "react";
import { Button } from "./button";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="outline"
        className="rounded-full shadow-2xl bg-background dark:bg-card p-4"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <span role="img" aria-label="Light mode" className="text-3xl">🌞</span>
        ) : (
          <span role="img" aria-label="Dark mode" className="text-3xl">🌙</span>
        )}
      </Button>
    </div>
  );
};

export default DarkModeToggle; 