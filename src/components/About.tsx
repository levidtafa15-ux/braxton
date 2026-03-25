import { motion } from "motion/react";
import { Coffee, Leaf, Heart } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Coffee className="text-braxton-gold" size={32} />,
      title: "Specialty Coffee",
      text: "Εκλεκτές ποικιλίες καφέ για τους λάτρεις της ποιότητας."
    },
    {
      icon: <Leaf className="text-braxton-gold" size={32} />,
      title: "Fresh Ingredients",
      text: "Χρησιμοποιούμε μόνο τα πιο φρέσκα υλικά της αγοράς."
    },
    {
      icon: <Heart className="text-braxton-gold" size={32} />,
      title: "Handmade Creations",
      text: "Κάθε πιάτο είναι μια χειροποίητη δημιουργία με μεράκι."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-braxton-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Στο Braxton, το brunch δεν είναι απλά γεύμα — είναι εμπειρία.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Δημιουργήσαμε έναν χώρο όπου η αισθητική συναντά τη γεύση. Κάθε λεπτομέρεια, από τη διακόσμηση μέχρι την παρουσίαση των πιάτων μας, είναι σχεδιασμένη για να σας προσφέρει μια στιγμή πολυτέλειας στην καθημερινότητά σας.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex flex-col space-y-3">
                  {item.icon}
                  <h4 className="font-serif text-lg">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://braxton-athens.gr/images/tshirts.webp"
                alt="Braxton Specialty Coffee"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-braxton-black text-braxton-cream p-8 rounded-2xl hidden lg:block max-w-xs shadow-xl">
              <p className="font-serif italic text-xl mb-4">"The best brunch spot in the southern suburbs of Athens."</p>
              <span className="text-[10px] uppercase tracking-widest opacity-60">— Athens Food Guide</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
