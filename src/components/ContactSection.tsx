
import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };
  
  return (
    <section id="contact" className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="section-inner" ref={ref}>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-950/50 dark:text-blue-400 rounded-full mb-4 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-100 dark:to-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me through any of the following channels.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/50 dark:bg-gray-900/30 backdrop-blur-md p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-8 border-b pb-3 border-gray-200 dark:border-gray-700">Contact Information</h3>
            
            <div className="space-y-8">
              {[
                { icon: <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />, title: "Email", content: "thesyedabubakkar@gmail.com", href: "mailto:thesyedabubakkar@gmail.com" },
                { icon: <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />, title: "Phone", content: "+91 6360 603 020", href: "tel:+916360603020" },
                { icon: <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />, title: "Location", content: "Chamegowda Line, Near Khudadad Masjid, Bhadravathi, Karnataka – 577301", href: null },
                { icon: <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />, title: "LinkedIn", content: "linkedin.com/in/thesyedabubakkar", href: "https://linkedin.com/in/thesyedabubakkar" }
              ].map((item, i) => (
                <motion.div 
                  className="flex items-start group" 
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={contactItemVariants}
                >
                  <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/50 dark:bg-gray-900/30 backdrop-blur-md p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-8 border-b pb-3 border-gray-200 dark:border-gray-700">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 min-h-[150px] bg-white/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full p-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-lg shadow-lg shadow-blue-500/20 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
