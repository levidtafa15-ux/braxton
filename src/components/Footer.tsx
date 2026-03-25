import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-braxton-black text-braxton-cream py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold tracking-widest uppercase mb-2">Braxton</h3>
            <p className="text-braxton-cream/40 text-xs uppercase tracking-widest">Premium Brunch Experience</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
            <a href="#about" className="hover:text-braxton-gold transition-colors">Story</a>
            <a href="#menu" className="hover:text-braxton-gold transition-colors">Menu</a>
            <a href="#experience" className="hover:text-braxton-gold transition-colors">Experience</a>
            <a href="#contact" className="hover:text-braxton-gold transition-colors">Contact</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-braxton-cream/40 text-[10px] uppercase tracking-widest mb-2">© 2026 Braxton Athens. All rights reserved.</p>
            <p className="text-braxton-cream/20 text-[8px] uppercase tracking-widest">Designed for Excellence</p>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden flex gap-3">
        <a
          href="tel:2114241906"
          className="flex-1 bg-braxton-black text-braxton-cream border border-white/20 backdrop-blur-md py-4 rounded-full flex items-center justify-center space-x-2 shadow-2xl text-xs uppercase tracking-widest font-bold"
        >
          <Phone size={16} />
          <span>Call</span>
        </a>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Πόντου+20,+Άγιος+Δημήτριος,+Αθήνα"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-braxton-gold text-braxton-black py-4 rounded-full flex items-center justify-center space-x-2 shadow-2xl text-xs uppercase tracking-widest font-bold"
        >
          <MapPin size={16} />
          <span>Map</span>
        </a>
      </div>
    </footer>
  );
}
