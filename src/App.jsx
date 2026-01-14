import MainLayout from './components/layout/MainLayout';
import Header from './components/layout/Header';

export default function App() {
  return (
    <MainLayout>
      <Header />
      <section id="hero">Hero</section>
      <section id="projects">Projects</section>
      <section id="about">About</section>
    </MainLayout>
  );
}
