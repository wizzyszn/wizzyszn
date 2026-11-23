import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function current(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

// The inline script in index.html sets the initial theme before paint; this
// only keeps that in sync with the button and remembers the choice.
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => (typeof document === 'undefined' ? 'light' : current()))
  const dark = theme === 'dark'

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#131211' : '#f2efe9')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Private mode: the theme still applies for this visit.
    }
  }, [theme, dark])

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="group grid size-8 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-colors hover:border-fg/40 hover:text-fg"
    >
      {dark ? <Sun className="size-[15px]" /> : <Moon className="size-[15px]" />}
    </button>
  )
}
