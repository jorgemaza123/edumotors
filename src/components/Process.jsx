import React from "react";
import { ClipboardCheck, MessageCircle, Search, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: <MessageCircle className="text-[#25D366]" />,
    title: "Escribenos con el sintoma",
    desc: "No necesitas saber de mecanica. Solo dinos si no arranca, falla o consume demasiado.",
  },
  {
    icon: <Search className="text-[#0055FF]" />,
    title: "Diagnostico con criterio",
    desc: "Revisamos la causa real para no cambiar piezas a ciegas.",
  },
  {
    icon: <ClipboardCheck className="text-[#39FF14]" />,
    title: "Presupuesto claro",
    desc: "Te explicamos que es urgente, que puede esperar y cuanto costaria resolverlo.",
  },
  {
    icon: <ShieldCheck className="text-white" />,
    title: "Solucion y seguimiento",
    desc: "Reparamos con foco en que el auto vuelva a circular sin retrabajos innecesarios.",
  },
];

const Process = () => {
  return (
    <section className="py-24 bg-[#070B16] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#0055FF] font-bold uppercase tracking-widest text-xs">
            Proceso comercial
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 italic">
            Asi convertimos una falla en una{" "}
            <span className="text-[#39FF14]">decision rapida</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col text-left rounded-3xl border border-white/5 bg-[#0A0F1E] p-8"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative">
                {React.cloneElement(step.icon, { size: 34 })}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0055FF] flex items-center justify-center text-white font-bold text-sm italic">
                  0{index + 1}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 italic">
                {step.title}
              </h3>
              <p className="text-white/45 leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
