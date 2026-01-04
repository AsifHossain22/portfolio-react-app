import React from "react";
import Theme from "../../hooks/Theme";
import { Moon, Sun } from "lucide-react";

const PrimaryButton = () => {
  const { theme, toggleTheme } = Theme();

  return (
    <>
      <div className="flex items-center gap-3">
        {/* CallToActionButton */}
        <a
          href="#contact"
          className="
                flex items-center justify-center
                px-4 py-2 rounded-xl
                bg-[var(--accent-primary)]
                text-[var(--text-inverted)]
                text-sm font-semibold
                transition-all duration-300
                hover:scale-105 hover:shadow-lg
                active:scale-95
              "
        >
          Let’s Talk
        </a>

        {/* ThemeToggleButton */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="h-10 w-10 flex items-center justify-center rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {theme === "dark" ? (
            <Sun size={18} className="text-yellow-400" />
          ) : (
            <Moon size={18} className="text-indigo-600" />
          )}
        </button>
      </div>
    </>
  );
};

export default PrimaryButton;
