import { useTheme } from '../../hooks/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="py-4">
      <div className="flex items-center justify-between">
        {/* Left area: placeholder name/logo */}
        <div className="text-xl font-bold text-gray-900 dark:text-white">Logo/Name</div>

        {/* Right area: navigation, toggles, mobile menu */}
        <div className="flex items-center space-x-4">
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="#hero" className="hover:underline text-gray-900 dark:text-white">Hero</a>
              </li>
              <li>
                <a href="#projects" className="hover:underline text-gray-900 dark:text-white">Projects</a>
              </li>
              <li>
                <a href="#about" className="hover:underline text-gray-900 dark:text-white">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline text-gray-900 dark:text-white">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Dark mode toggle button */}
          <button
            onClick={toggleTheme}
            className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Placeholder for language toggle */}
          <div className="text-sm text-gray-900 dark:text-white">LANG</div>

          {/* Mobile menu placeholder button */}
          <button className="md:hidden text-xl text-gray-900 dark:text-white">☰</button>
        </div>
      </div>
    </header>
  );
}
