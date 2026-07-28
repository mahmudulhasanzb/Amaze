'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-24 h-9 bg-zinc-100 dark:bg-zinc-800 rounded-xl animate-pulse" />;
  }

  const activeTheme = theme === 'system' ? resolvedTheme : theme;

  const buttons = [
    { id: 'light', icon: Sun},
    { id: 'dark', icon: Moon }
  ];

  return (
    <>
      <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700/50">
        {theme === 'light' ? (
          <button
            title='dark'
            onClick={() => setTheme('dark')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200"
          >
            <Moon className="h-3.5 w-3.5 text-zinc-900" />
          </button>
        ) : (
          <button
            onClick={() => setTheme('light')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200"
          >
            <Sun className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

    </>
  );
}
