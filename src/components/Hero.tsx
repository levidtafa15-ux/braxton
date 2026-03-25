import { motion } from "motion/react";
import { Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://braxton-athens.gr/images/image4.webp"
          alt="Braxton Brunch Experience"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-braxton-beige uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 block font-bold">
            Agios Dimitrios • Athens
          </span>
          <h1 className="text-6xl md:text-9xl text-white font-serif mb-8 leading-[0.9] tracking-tight">
            Exceptional <br /> <span className="italic">Brunch</span>
          </h1>
          <p className="text-braxton-cream/90 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed italic font-serif">
            "Where every bite tells a story of luxury and taste."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:2114241906"
              className="w-full sm:w-auto px-10 py-4 bg-braxton-gold text-braxton-black font-medium uppercase tracking-widest text-xs rounded-full transition-all shadow-lg"
            >
              Call Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.google.com/maps/dir/?api=1&destination=Πόντου+20,+Άγιος+Δημήτριος,+Αθήνα"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium uppercase tracking-widest text-xs rounded-full hover:bg-white/20 transition-all"
            >
              Get Directions
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
