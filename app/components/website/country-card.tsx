import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { MessageSquare } from "lucide-react";

interface CountryCardProps {
  name: string;
  flag: string;
  whatsappNumber: string;
}

export default function CountryCard({
  name,
  flag,
  whatsappNumber,
}: CountryCardProps) {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

      <Card className="relative overflow-hidden backdrop-blur-sm bg-white/90 border-2 border-gray-100">
        <CardContent className="p-6">
          <div className="aspect-video relative mb-6 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
            <img
              src={flag}
              alt={`${name} flag`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {name}
          </h3>

          <div className="space-y-3">
            <Button
              className="w-full bg-primary text-white hover:bg-primary/90 transform hover:scale-105 transition-transform duration-200"
            >
              Book Appointment
            </Button>

            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 transform hover:scale-105 transition-transform duration-200"
            >
              <MessageSquare className="w-5 h-5" />
              Contact on WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
