import MainLayout from './components/layout/MainLayout';
import Header from './components/layout/Header';

export default function App() {
  return (
    <MainLayout>
      <Header />
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg">This is the hero section with some introductory content.</p>
        </div>
      </section>
      <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-lg">Here are some of my projects. This section has content to fill the screen.</p>
        </div>
      </section>
      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-300">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="text-lg">Learn more about me in this section. Adding content for scrolling test.</p>
        </div>
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-400">
        <div className="text-center">
          <h4 className="text-xl font-bold mb-4">Contact</h4>
          <p className="text-lg">Get in touch. This is a placeholder for the contact section.</p>
        </div>
      </section>
    </MainLayout>
  );
}
