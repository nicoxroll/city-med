
import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm">¿Cómo contactarnos?</h2>
        <h3 className="text-4xl font-bold text-slate-900">Estamos para ayudarte</h3>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Atendemos en el corazón de City Bell. Podés llamarnos, escribirnos o visitarnos directamente en nuestras instalaciones.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-stretch">
        <div className="space-y-6">
          <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-sky-100 transition-colors h-full flex-col justify-center">
            <div className="bg-white w-12 h-12 flex items-center justify-center rounded-xl text-sky-600 shadow-sm mb-2">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Dirección</p>
              <p className="text-xl font-bold text-slate-800">Calle 473 Bis N° 1234, City Bell</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-sky-100 transition-colors flex-col">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-xl text-sky-600 shadow-sm mb-2">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Teléfono Emergencias</p>
                <p className="text-lg font-bold text-slate-800">0221 472-3333</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-sky-100 transition-colors flex-col">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-xl text-sky-600 shadow-sm mb-2">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Consultas Generales</p>
                <p className="text-lg font-bold text-slate-800">info@clinicacitybell.com.ar</p>
              </div>
            </div>
          </div>

          <div className="bg-sky-600 p-8 rounded-3xl text-white shadow-xl shadow-sky-100 flex items-center justify-between overflow-hidden relative">
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-2">Turnos Online</h4>
              <p className="text-sky-100 text-sm mb-4">Gestioná tu cita médica de forma rápida y sencilla.</p>
              <button className="bg-white text-sky-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-sky-50 transition-colors shadow-lg">
                Reservar Ahora
              </button>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10">
              <Send className="w-48 h-48 rotate-12" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 flex flex-col justify-center">
          <div className="space-y-2">
            <h4 className="text-2xl font-bold text-slate-900">Envianos un mensaje</h4>
            <p className="text-slate-500">Nuestro equipo de atención te responderá en menos de 24hs.</p>
          </div>
          
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Nombre</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre" 
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-sm"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Mensaje</label>
              <textarea 
                rows={4} 
                placeholder="¿En qué podemos ayudarte?" 
                className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-sm resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all active:scale-[0.98] shadow-lg shadow-slate-200">
              Enviar Consulta <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="mt-20 pt-10 border-t border-slate-100">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Atendemos con las principales coberturas</p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 grayscale opacity-40">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IOMA_logo.png" alt="IOMA" className="h-8 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Pami_logo.svg" alt="PAMI" className="h-6 object-contain" />
          <img src="https://logotipous.com/wp-content/uploads/2021/10/osde-logo.png" alt="OSDE" className="h-6 object-contain" />
          <div className="text-lg font-black text-slate-400 tracking-tighter italic">SWISS MEDICAL</div>
          <div className="text-lg font-black text-slate-400 tracking-tighter italic">GALENO</div>
        </div>
      </div>
    </div>
  );
};