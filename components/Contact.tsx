
import React from 'react';
import { MapPin, Mail, Send, Clock, Calendar } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm">Canales de Atención</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Contactate con nosotros</h3>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Estamos en el centro de City Bell para brindarte la mejor atención. Escribinos o acercate a nuestra clínica.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Información de Contacto */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-sky-500 rounded-full"></span>
              Información Local
            </h4>
            
            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="bg-sky-50 w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Ubicación</p>
                  <p className="text-slate-800 font-semibold leading-snug">
                    City Bell, La Plata
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-sky-50 w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:clinicaginecologicacitybell@gmail.com" className="text-slate-800 font-semibold hover:text-sky-600 transition-colors break-all">
                    clinicaginecologicacitybell@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-sky-50 w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Horarios Administrativos</p>
                  <p className="text-slate-800 font-semibold">Lunes a Viernes: 08:00 - 20:00</p>
                  <p className="text-slate-800 font-semibold">Sábados: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Formulario de Contacto */}
        <div className="lg:col-span-3">
          <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
            
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Envianos tu consulta</h4>
              <p className="text-slate-500 mb-8">Completá el formulario y un asesor se contactará con vos.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Nombre y Apellido</label>
                    <input 
                      type="text" 
                      placeholder="Ej: Juan Pérez" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500/50 focus:bg-white transition-all text-slate-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Correo Electrónico</label>
                    <input 
                      type="email" 
                      placeholder="tu@email.com" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500/50 focus:bg-white transition-all text-slate-800"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Asunto</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500/50 focus:bg-white transition-all text-slate-800 appearance-none">
                    <option>Consulta General</option>
                    <option>Turnos y Especialidades</option>
                    <option>Obras Sociales</option>
                    <option>Sugerencias</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Mensaje</label>
                  <textarea 
                    rows={5} 
                    placeholder="Escribí tu mensaje aquí..." 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500/50 focus:bg-white transition-all text-slate-800 resize-none"
                  ></textarea>
                </div>

                <button className="group w-full bg-slate-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all active:scale-[0.99] shadow-xl shadow-slate-200">
                  Enviar Mensaje
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Logos de Coberturas */}
      <div className="mt-24 pt-12 border-t border-slate-100">
        <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-12">Instituciones y Coberturas</p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IOMA_logo.png" alt="IOMA" className="h-8 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Pami_logo.svg" alt="PAMI" className="h-6 object-contain" />
          <div className="text-xl font-black text-slate-400 tracking-tighter italic">OSDE</div>
          <div className="text-xl font-black text-slate-400 tracking-tighter italic">SWISS MEDICAL</div>
          <div className="text-xl font-black text-slate-400 tracking-tighter italic">GALENO</div>
        </div>
      </div>
    </div>
  );
};
