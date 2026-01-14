export default function Header() {
  return (
    <header className="py-4">
      <div className="flex items-center justify-between">
        {/* Left area: placeholder name/logo */}
        <div className="text-xl font-bold">Logo/Name</div>

        {/* Right area: navigation, toggles, mobile menu */}
        <div className="flex items-center space-x-4">
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="#hero" className="hover:underline">Hero</a>
              </li>
              <li>
                <a href="#projects" className="hover:underline">Projects</a>
              </li>
              <li>
                <a href="#about" className="hover:underline">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Placeholder for dark mode toggle */}
          <div className="text-sm">DM</div>

          {/* Placeholder for language toggle */}
          <div className="text-sm">LANG</div>

          {/* Mobile menu placeholder button */}
          <button className="md:hidden text-xl">☰</button>
        </div>
      </div>
    </header>
  );
}
