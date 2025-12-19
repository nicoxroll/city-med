
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-sky-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-teal-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Excelencia Médica Privada en City Bell
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1]">
              Cuidamos lo que <br />
              <span className="text-sky-600">más valoras.</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              En Clínica Privada City Bell combinamos tecnología de última generación con la calidez humana que nuestra comunidad merece. Tu bienestar es nuestra única prioridad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-sky-600 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-sky-700 transition-all shadow-lg hover:shadow-sky-200 active:scale-95">
                Solicitar Consulta <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold flex items-center justify-center hover:bg-slate-50 transition-all active:scale-95">
                Ver Especialidades
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-slate-800">20+</span>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Especialistas</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-slate-800">24/7</span>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Guardia</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-slate-800">15k</span>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Pacientes</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg" 
                alt="Clínica Moderna" 
                className="w-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            
            <div className="absolute top-1/2 -right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 shadow-teal-50">
              <div className="bg-teal-100 p-3 rounded-xl text-teal-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Seguridad</p>
                <p className="font-bold text-slate-800">Certificación ISO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
