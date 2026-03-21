import React from "react";
import { motion } from "motion/react";
import { CheckCircle, Clock3, Quote } from "lucide-react";

const cases = [
  {
    zone: "Villa El Salvador",
    title: "Sedan que no arrancaba temprano",
    comment:
      "El problema parecia bateria, pero termino siendo una combinacion de alimentacion y sensor. Se evito cambiar piezas a ciegas.",
    result: "Diagnostico primero, gasto mejor dirigido",
  },
  {
    zone: "San Juan de Miraflores",
    title: "Auto que se apagaba en semaforos",
    comment:
      "La falla apuntaba a combustible y cuerpo de aceleracion. El enfoque fue resolver la causa y no solo borrar el sintoma.",
    result: "Se priorizo una solucion util para uso diario",
  },
  {
    zone: "Lurin",
    title: "Unidad de trabajo con consumo alto",
    comment:
      "Antes de pensar en conversion a gas, se ordeno mantenimiento y diagnostico para mejorar el rendimiento base del vehiculo.",
    result: "Mejor decision comercial antes del alto ticket",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 bg-[#0A0F1E] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs">
            Casos frecuentes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 italic">
            Asi se convierten las fallas en{" "}
            <span className="text-[#0055FF]">decisiones de compra reales</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 relative group"
            >
              <Quote className="absolute top-6 right-8 text-white/5" size={60} />

              <div className="flex items-center gap-2 text-[#39FF14] text-xs font-bold uppercase tracking-widest mb-5">
                <Clock3 size={14} />
                {item.zone}
              </div>

              <h3 className="text-white font-bold text-xl italic mb-4">{item.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed mb-8">
                {item.comment}
              </p>

              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <p className="text-white/45 text-sm">{item.result}</p>
                <div className="flex items-center gap-1 text-[#39FF14] text-[10px] font-bold uppercase tracking-widest">
                  <CheckCircle size={10} /> Caso comun
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
