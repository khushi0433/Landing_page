import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';

function App() {
  return (
    <body className="m-0 bg-black">
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/abstract_loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>

      {/* Page Content */}
      <Header />
      <Hero />
      <Footer />
    </div>
    </body>
  );
}

export default App;
