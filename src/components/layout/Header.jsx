export default function Header() {
  return (
    <header className="py-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">Logo/Name</div>
        <nav className="space-x-4">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#about" className="hover:underline">About</a>
        </nav>
      </div>
    </header>
  );
}
