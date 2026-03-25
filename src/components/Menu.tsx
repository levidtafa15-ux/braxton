import { motion } from "motion/react";
import { MenuItem } from "../types";

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Avocado Toast",
    description: "Προζυμένιο ψωμί, κρέμα αβοκάντο, αυγά, hash browns & microgreens.",
    price: "€11.50",
    image: "https://braxton-athens.gr/menu/avocado_toast.webp"
  },
  {
    id: "2",
    name: "Chicken Waffle",
    description: "Τραγανό κοτόπουλο, αφράτη βάφλα, maple syrup & spicy mayo.",
    price: "€14.00",
    image: "https://braxton-athens.gr/menu/chicken_waffle.webp"
  },
  {
    id: "3",
    name: "Benedict Pulled Pork",
    description: "Brioche, σιγομαγειρεμένο χοιρινό, αυγά ποσέ & sauce hollandaise.",
    price: "€13.50",
    image: "https://braxton-athens.gr/menu/benedict_pulled_pork.webp"
  },
  {
    id: "4",
    name: "Tower for 2",
    description: "Pancakes, αυγά, bacon, φρούτα & spreads. Η απόλυτη εμπειρία για δύο.",
    price: "€28.00",
    image: "https://braxton-athens.gr/menu/pyrgos.webp"
  },
  {
    id: "5",
    name: "Skillet Banoffee Cookie",
    description: "Φρεσκοψημένο cookie σε μαντέμι, καραμελωμένη μπανάνα, παγωτό βανίλια & πλούσια σοκολάτα.",
    price: "€10.50",
    image: "https://braxton-athens.gr/menu/banoffee.webp"
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-6 bg-braxton-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-braxton-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
            Signature Selection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Best Sellers</h2>
          <div className="w-24 h-[1px] bg-braxton-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl overflow-hidden luxury-shadow luxury-shadow-hover"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif">{item.name}</h3>
                  <span className="text-braxton-gold font-bold tracking-tighter">{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 h-12 line-clamp-2">
                  {item.description}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-[10px] uppercase tracking-[0.3em] font-black text-braxton-black flex items-center gap-2 group/btn"
                >
                  <span className="border-b border-braxton-black pb-1 group-hover/btn:text-braxton-gold group-hover/btn:border-braxton-gold transition-all">
                    Order Now
                  </span>
                  <div className="w-4 h-[1px] bg-braxton-black group-hover/btn:bg-braxton-gold transition-all" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block px-12 py-4 border border-braxton-black rounded-full text-xs uppercase tracking-widest font-bold hover:bg-braxton-black hover:text-braxton-cream transition-all duration-300"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
