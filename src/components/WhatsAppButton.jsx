import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { buildWhatsAppUrl } from "../content/automotiveContent";
import { trackEvent } from "../utils/analytics";

const WhatsAppButton = ({
  whatsappText = "Hola EDU MOTORS, necesito un diagnostico para mi vehiculo.",
}) => {
  const whatsappUrl = buildWhatsAppUrl(whatsappText);

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("click_whatsapp", { location: "floating_button" })}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg flex items-center justify-center text-white"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MessageCircle size={32} fill="white" />
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
