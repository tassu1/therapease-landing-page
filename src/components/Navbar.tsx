import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a 
          href="#" 
          className="text-2xl font-bold text-purple-600 dark:text-purple-400 hover:scale-105 transition-transform"
        >
          TherapEase
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-purple-600" />
            )}
          </button>

          {/* CTA Button */}
          <a
            href="#cta"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-lg hover:shadow-purple-300/40 dark:hover:shadow-purple-900/20"
          >
            Try Free
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 py-2 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-800">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 p-2"
              >
                {theme === "dark" ? (
                  <>
                    <Sun size={18} className="text-yellow-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={18} className="text-purple-600" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
              
              <a
                href="#cta"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Try Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}