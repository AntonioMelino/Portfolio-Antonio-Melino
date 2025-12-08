"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

const ThemeContext = React.createContext<{
  theme: string
  setTheme: (theme: string) => void
  toggleTheme: () => void
}>({
  theme: "light",
  setTheme: () => null,
  toggleTheme: () => null,
})

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)
  const [currentTheme, setCurrentTheme] = React.useState("light")

  React.useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") || props.defaultTheme || "light"
    setCurrentTheme(savedTheme)
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    }
  }, [props.defaultTheme])

  const setTheme = React.useCallback((theme: string) => {
    setCurrentTheme(theme)
    localStorage.setItem("theme", theme)
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = React.useCallback(() => {
    const newTheme = currentTheme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }, [currentTheme, setTheme])

  const value = React.useMemo(
    () => ({
      theme: currentTheme,
      setTheme,
      toggleTheme,
    }),
    [currentTheme, setTheme, toggleTheme],
  )

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={value}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
