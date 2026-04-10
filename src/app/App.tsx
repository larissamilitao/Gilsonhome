import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from '../imports/Home/Home';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return <Home />;
}