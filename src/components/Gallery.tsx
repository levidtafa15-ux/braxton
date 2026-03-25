import { motion } from "motion/react";
import { Instagram } from "lucide-react";

export default function Gallery() {
  const images = [
    "https://braxton-athens.gr/images/image1.webp",
    "https://braxton-athens.gr/images/image2.webp",
    "https://braxton-athens.gr/images/image3.webp",
    "https://braxton-athens.gr/images/image4.webp",
    "https://braxton-athens.gr/images/image8.webp",
    "https://braxton-athens.gr/images/tower_sign.webp"
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-braxton-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
              Visual Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-serif">Aesthetic Moments</h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm uppercase tracking-widest font-bold hover:text-braxton-gold transition-colors"
          >
            <Instagram size={20} />
            <span>Follow @braxton_athens</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={img}
                alt={`Braxton Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-braxton-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
