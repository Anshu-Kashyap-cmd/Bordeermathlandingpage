import { useRef } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import SignupForm from './components/SignupForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const signupRef = useRef<HTMLDivElement>(null);

  const scrollToSignup = () => {
    signupRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onGetStarted={scrollToSignup} />
      <Features />
      <InteractiveDemo />
      <Testimonials />
      <div ref={signupRef}>
        <SignupForm />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
