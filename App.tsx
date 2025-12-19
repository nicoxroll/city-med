
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TimelineSection } from './components/TimelineSection';
import { Services } from './components/Services';
import { ReproductiveHealth } from './components/ReproductiveHealth';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-24 bg-white">
          <TimelineSection />
        </section>
        <section id="reproductive-health" className="py-24 bg-sky-50/50 border-y border-sky-100">
          <ReproductiveHealth />
        </section>
        <section id="services" className="py-24 bg-slate-50">
          <Services />
        </section>
        <section id="contact" className="py-24 bg-white">
          <Contact />
        </section>
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;
