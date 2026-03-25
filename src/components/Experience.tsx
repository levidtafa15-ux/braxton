import { motion } from "motion/react";
import { Utensils, Calendar, Coffee, Users } from "lucide-react";

export default function Experience() {
  const services = [
    {
      icon: <Utensils size={32} />,
      title: "Daily Brunch",
      text: "Η καθημερινή σας συνήθεια για premium γεύσεις και specialty coffee."
    },
    {
      icon: <Calendar size={32} />,
      title: "Private Events",
      text: "Διοργανώστε το προσωπικό σας event στον μοναδικό μας χώρο."
    },
    {
      icon: <Users size={32} />,
      title: "Catering",
      text: "Φέρνουμε την εμπειρία Braxton στον δικό σας χώρο για κάθε περίσταση."
    },
    {
      icon: <Coffee size={32} />,
      title: "Coffee Workshop",
      text: "Μάθετε τα μυστικά του καφέ από τους έμπειρους barista μας."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-braxton-black text-braxton-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-braxton-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
              The Experience
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              More Than Just <br /> A Brunch Spot
            </h2>
            <p className="text-braxton-cream/60 text-lg leading-relaxed mb-12 max-w-lg">
              Στο Braxton προσφέρουμε μια ολοκληρωμένη σειρά υπηρεσιών για να καλύψουμε κάθε σας ανάγκη, πάντα με την ίδια προσήλωση στην ποιότητα και την αισθητική.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="text-braxton-gold mb-4 transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-serif mb-2">{service.title}</h4>
                  <p className="text-sm text-braxton-cream/40 leading-relaxed">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="https://braxton-athens.gr/images/coffee.webp"
                  alt="Braxton Coffee"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://braxton-athens.gr/images/avocado.webp"
                  alt="Braxton Food"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 pt-12"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://braxton-athens.gr/images/team_photo.webp"
                  alt="Braxton Vibe"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="https://braxton-athens.gr/images/benedict_eggWhite.webp"
                  alt="Braxton Dessert"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
