import MainLayout from './components/layout/MainLayout';
import Header from './components/layout/Header';
import { useLanguage } from './contexts/LanguageContext';

export default function App() {
  const { translations } = useLanguage();
  return (
    <MainLayout>
      <Header />
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{translations.hero.title}</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">{translations.hero.subtitle}</p>
        </div>
      </section>
      <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-800">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{translations.projects.title}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">{translations.projects.description}</p>
        </div>
      </section>
      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-300 dark:bg-gray-700">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{translations.about.title}</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">{translations.about.description}</p>
        </div>
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-400 dark:bg-gray-600">
        <div className="text-center">
          <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{translations.contact.title}</h4>
          <p className="text-lg text-gray-700 dark:text-gray-300">{translations.contact.description}</p>
        </div>
      </section>
    </MainLayout>
  );
}
