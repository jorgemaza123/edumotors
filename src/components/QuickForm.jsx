import React, { useState } from "react";
import { motion } from "motion/react";
import {
  CheckCircle,
  MessageCircle,
  Phone,
  User,
  Wrench,
} from "lucide-react";
import { buildWhatsAppUrl } from "../content/automotiveContent";
import { trackEvent } from "../utils/analytics";

const defaultQuickOptions = [
  "No arranca",
  "Pierde fuerza",
  "Check engine",
  "Consume mucho",
];

const QuickForm = ({
  eyebrow = "Diagnostico GRATIS",
  title = "Cuentanos que le pasa a tu auto",
  subtitle = "Dejanos tus datos y te respondemos por WhatsApp con una orientacion inicial.",
  quickOptions = defaultQuickOptions,
  ctaText = "Solicitar diagnostico GRATIS",
  contextLabel = "Diagnostico general",
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    problema: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const applyQuickOption = (option) => {
    setFormData((current) => ({
      ...current,
      problema: current.problema ? `${current.problema}. ${option}` : option,
    }));

    if (errors.problema) {
      setErrors((current) => ({ ...current, problema: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "Por favor ingresa tu nombre";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "Por favor ingresa tu telefono";
    } else if (!/^\d{9}$/.test(formData.telefono.trim())) {
      newErrors.telefono = "Ingresa un numero valido de 9 digitos";
    }

    if (!formData.problema.trim()) {
      newErrors.problema = "Cuentanos cual es la falla o sintoma principal";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const message = [
      `Hola EDU MOTORS, solicito orientacion para: ${contextLabel}.`,
      "",
      `Nombre: ${formData.nombre}`,
      `Telefono: ${formData.telefono}`,
      `Problema: ${formData.problema}`,
    ].join("\n");

    const whatsappUrl = buildWhatsAppUrl(message);

    trackEvent("submit_formulario", {
      context: contextLabel,
      problema: formData.problema.substring(0, 80),
    });

    setSubmitted(true);

    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.open(whatsappUrl, "_blank");
      }

      setTimeout(() => {
        setFormData({ nombre: "", telefono: "", problema: "" });
        setSubmitted(false);
      }, 1000);
    }, 800);
  };

  return (
    <section className="py-20 bg-[#070B16] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#39FF14]/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0055FF]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white italic mt-2 mb-4">
              {title}
            </h2>
            <p className="text-white/55 text-lg leading-relaxed">{subtitle}</p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A0F1E] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle size={64} className="text-[#39FF14] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Listo</h3>
                <p className="text-white/60">Te estamos llevando a WhatsApp...</p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <div>
                  <p className="text-white/55 text-sm mb-3">
                    Puedes tocar uno o varios sintomas para llenar mas rapido:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {quickOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => applyQuickOption(option)}
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/75 text-sm font-bold hover:border-[#0055FF]/40 hover:text-white transition-all"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 font-bold text-sm mb-2">
                    <User size={16} className="inline mr-2 text-[#0055FF]" />
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    disabled={submitted}
                    placeholder="Ej: Carlos Perez"
                    className={`w-full px-5 py-4 bg-[#070B16] border ${
                      errors.nombre ? "border-red-500" : "border-white/10"
                    } rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#0055FF] transition-all disabled:opacity-50`}
                  />
                  {errors.nombre ? (
                    <p className="text-red-400 text-xs mt-1 ml-1">{errors.nombre}</p>
                  ) : null}
                </div>

                <div>
                  <label className="block text-white/70 font-bold text-sm mb-2">
                    <Phone size={16} className="inline mr-2 text-[#0055FF]" />
                    Tu telefono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    disabled={submitted}
                    maxLength="9"
                    placeholder="Ej: 987654321"
                    className={`w-full px-5 py-4 bg-[#070B16] border ${
                      errors.telefono ? "border-red-500" : "border-white/10"
                    } rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#0055FF] transition-all disabled:opacity-50`}
                  />
                  {errors.telefono ? (
                    <p className="text-red-400 text-xs mt-1 ml-1">{errors.telefono}</p>
                  ) : null}
                </div>

                <div>
                  <label className="block text-white/70 font-bold text-sm mb-2">
                    <Wrench size={16} className="inline mr-2 text-[#0055FF]" />
                    Cual es el sintoma principal?
                  </label>
                  <textarea
                    name="problema"
                    value={formData.problema}
                    onChange={handleChange}
                    disabled={submitted}
                    placeholder="Ej: No arranca en frio y ayer se apago en un semaforo"
                    rows={4}
                    className={`w-full px-5 py-4 bg-[#070B16] border ${
                      errors.problema ? "border-red-500" : "border-white/10"
                    } rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#0055FF] transition-all resize-none disabled:opacity-50`}
                  />
                  {errors.problema ? (
                    <p className="text-red-400 text-xs mt-1 ml-1">{errors.problema}</p>
                  ) : null}
                </div>

                <motion.button
                  type="submit"
                  disabled={submitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#39FF14] text-black px-8 py-5 rounded-full font-black text-base uppercase tracking-wider hover:bg-[#32e012] transition-all shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:shadow-[0_0_50px_rgba(57,255,20,0.6)] flex items-center justify-center gap-3 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  <MessageCircle size={22} />
                  {ctaText}
                </motion.button>

                <p className="text-white/35 text-xs text-center">
                  Respuesta por WhatsApp, sin llamada obligatoria y con orientacion inicial para que tomes una decision rapida.
                </p>
              </div>
            )}
          </motion.form>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-[#39FF14]" />
              Sin compromiso
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-[#39FF14]" />
              Prioridad para fallas urgentes
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-[#39FF14]" />
              Presupuesto claro si aplica
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickForm;
