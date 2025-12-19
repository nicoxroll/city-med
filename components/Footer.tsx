
import React from 'react';
import { HeartPulse } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="bg-sky-600 p-2 rounded-lg">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Clínica Privada <span className="text-sky-400">City Bell</span>
              </span>
            </a>
            <p className="max-w-xs leading-relaxed">
              Líderes en salud privada en la región norte. Innovación constante para el bienestar de nuestra comunidad.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Explorar</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-sky-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Especialidades</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Nuestros Profesionales</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Blog de Salud</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Información</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-sky-400 transition-colors">Obras Sociales</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Privacidad</a></li>
              <li><a href="mailto:clinicaginecologicacitybell@gmail.com" className="hover:text-sky-400 transition-colors">clinicaginecologicacitybell@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
          <p>© 2024 Clínica Privada City Bell. Todos los derechos reservados.</p>
          <p>Diseñado con excelencia para la comunidad.</p>
        </div>
      </div>
    </footer>
  );
};
