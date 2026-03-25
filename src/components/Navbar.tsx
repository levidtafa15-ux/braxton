import { motion } from "motion/react";
import { Phone, MapPin, Menu as MenuIcon, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "glass-nav py-4 shadow-lg" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-3xl font-serif font-bold tracking-[0.2em] uppercase">
          Braxton
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-[10px] uppercase tracking-[0.3em] font-bold">
          <a href="#about" className="gold-underline transition-colors">Story</a>
          <a href="#menu" className="gold-underline transition-colors">Menu</a>
          <a href="#experience" className="gold-underline transition-colors">Experience</a>
          <a href="#contact" className="gold-underline transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:2114241906"
            className="flex items-center space-x-2 px-6 py-2 border border-braxton-black hover:bg-braxton-black hover:text-braxton-cream transition-all duration-300 rounded-full text-xs uppercase tracking-widest"
          >
            <Phone size={14} />
            <span>Call</span>
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Πόντου+20,+Άγιος+Δημήτριος,+Αθήνα"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-2 bg-braxton-black text-braxton-cream hover:bg-braxton-gold transition-all duration-300 rounded-full text-xs uppercase tracking-widest"
          >
            <MapPin size={14} />
            <span>Directions</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-braxton-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-braxton-cream border-t border-braxton-beige p-6 flex flex-col space-y-6 md:hidden shadow-xl"
        >
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Our Story</a>
          <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Menu</a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Experience</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Contact</a>
          <div className="flex flex-col space-y-3 pt-4 border-t border-braxton-beige">
            <a
              href="tel:2114241906"
              className="flex items-center justify-center space-x-2 w-full py-3 border border-braxton-black rounded-full text-sm uppercase tracking-widest"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Πόντου+20,+Άγιος+Δημήτριος,+Αθήνα"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3 bg-braxton-black text-braxton-cream rounded-full text-sm uppercase tracking-widest"
            >
              <MapPin size={16} />
              <span>Get Directions</span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
