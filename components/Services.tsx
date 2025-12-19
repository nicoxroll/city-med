
import React from 'react';
import { Stethoscope, FlaskConical, Baby, Brain, HeartPulse, Radiation, Microscope, ShieldCheck } from 'lucide-react';

const specialties = [
  { icon: HeartPulse, name: 'Cardiología', desc: 'Prevención y tratamiento de enfermedades cardiovasculares.' },
  { icon: Baby, name: 'Pediatría', desc: 'Cuidado integral desde el nacimiento hasta la adolescencia.' },
  { icon: ShieldCheck, name: 'Salud Reproductiva', desc: 'Atención integral, segura y confidencial en ILE/IVE (Ley 27.610).' },
  { icon: FlaskConical, name: 'Laboratorio', desc: 'Análisis clínicos de alta precisión con resultados rápidos.' },
  { icon: Stethoscope, name: 'Clínica Médica', desc: 'Atención primaria y seguimiento de salud general.' },
  { icon: Radiation, name: 'Diagnóstico', desc: 'Rayos X, Ecografías y tomografías computadas.' },
  { icon: Brain, name: 'Neurología', desc: 'Especialistas en sistema nervioso y salud mental.' },
  { icon: Microscope, name: 'Oncología', desc: 'Tratamientos oncológicos avanzados y acompañamiento.' },
];

export const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm">Servicios Especializados</h2>
        <h3 className="text-4xl font-bold text-slate-900">Nuestras Áreas de Excelencia</h3>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Ofrecemos un abanico completo de especialidades médicas para que encuentres todo lo que necesitas en un solo lugar.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {specialties.map((spec, idx) => (
          <div 
            key={idx} 
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
          >
            <div className="bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 mb-6">
              <spec.icon className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">{spec.name}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              {spec.desc}
            </p>
            <button className="mt-6 text-sky-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
              Saber más <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
