import { motion } from "motion/react";
import { Phone, MapPin, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-braxton-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-braxton-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
              Visit Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">Contact & Location</h2>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  <MapPin className="text-braxton-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Address</h4>
                  <p className="text-gray-500 leading-relaxed">
                    Πόντου 20, Άγιος Δημήτριος <br />
                    173 43, Αθήνα
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Πόντου+20,+Άγιος+Δημήτριος,+Αθήνα"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-xs uppercase tracking-widest font-bold border-b border-braxton-black pb-1 hover:text-braxton-gold hover:border-braxton-gold transition-all"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  <Phone className="text-braxton-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Phone</h4>
                  <a href="tel:2114241906" className="text-gray-500 text-lg hover:text-braxton-gold transition-colors">
                    211 424 1906
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  <Clock className="text-braxton-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Opening Hours</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-gray-500 text-sm">
                    <span>Mon — Fri</span>
                    <span>08:00 - 20:00</span>
                    <span>Sat — Sun</span>
                    <span>09:00 - 21:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex items-center space-x-6">
              <a href="#" className="w-12 h-12 bg-braxton-black text-white rounded-full flex items-center justify-center hover:bg-braxton-gold transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-braxton-black text-white rounded-full flex items-center justify-center hover:bg-braxton-gold transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/302114241906" className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] rounded-3xl overflow-hidden luxury-shadow grayscale hover:grayscale-0 transition-all duration-700"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.471481481481!2d23.73148148148148!3d37.93148148148148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd0000000001%3A0x0!2zzqDPjM69z4TOv8+FIDIwLCDOhs6zzrnOv8+CIM6UzrfOvM6uz4TPgc65zr_PgiAxNzMgNDMsIM6VzrvOu86szrTOs!5e0!3m2!1sel!2sgr!4v1620000000000!5m2!1sel!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
