
import React from 'react';
import { ShieldCheck, Lock, HeartHandshake, Info, Mail } from 'lucide-react';

export const ReproductiveHealth: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm">Salud Integral y Reproductiva</h2>
            <h3 className="text-4xl font-bold text-slate-900 leading-tight">
              Acompañamiento Profesional y Seguro
            </h3>
            <p className="text-xl text-slate-700 font-medium leading-relaxed">
              Contamos con la mejor atención y cuidados para interrumpir tu embarazo. 
            </p>
            <p className="text-slate-600 leading-relaxed">
              En Clínica City Bell garantizamos tu derecho a la salud integral. Brindamos un espacio de absoluta privacidad, respeto y excelencia médica para la interrupción voluntaria y legal del embarazo (ILE/IVE), siguiendo los protocolos vigentes y la Ley 27.610.
            </p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h4 className="font-bold text-slate-900">Información del Procedimiento (LUI)</h4>
              <p className="text-sm text-slate-600">
                En nuestro centro médico realizamos Legrado Uterino Instrumental (LUI). El procedimiento tiene una duración aproximada de 15 a 30 minutos y se realiza bajo anestesia general, siempre que los valores clínicos de la paciente sean adecuados para el procedimiento.
              </p>
              
              <div className="space-y-2">
                <p className="font-semibold text-slate-800 text-sm">Valores vigentes desde el 03/12/2025:</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                  <li>Semana 3 a semana 9: $1.100.000</li>
                  <li>Semana 10 a semana 14: $1.460.000</li>
                  <li>Semana 15 a semana 18: $1.800.000</li>
                </ul>
                <p className="text-xs text-slate-500 italic mt-2">Para embarazos de mayor edad gestacional, consultar evaluación médica previa.</p>
              </div>

              <div className="bg-amber-50 text-amber-800 px-4 py-3 rounded-xl text-sm font-bold border border-amber-100 flex items-start gap-2">
                <Info className="w-5 h-5 flex-shrink-0" />
                <p>ATENCIÓN: Se atiende únicamente con DNI, sin excepción.</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-white p-2 rounded-lg text-sky-600 shadow-sm border border-sky-100">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">100% Confidencial</h4>
                <p className="text-sm text-slate-500">Tu privacidad es nuestra prioridad absoluta.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white p-2 rounded-lg text-sky-600 shadow-sm border border-sky-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Seguridad Médica</h4>
                <p className="text-sm text-slate-500">Protocolos internacionales de salud.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white p-2 rounded-lg text-sky-600 shadow-sm border border-sky-100">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Contención Humana</h4>
                <p className="text-sm text-slate-500">Equipo multidisciplinario a tu lado.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white p-2 rounded-lg text-sky-600 shadow-sm border border-sky-100">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Asesoramiento</h4>
                <p className="text-sm text-slate-500">Información clara sobre tus opciones.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
            <button className="w-full sm:w-auto bg-sky-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-sky-700 transition-all shadow-lg hover:shadow-sky-100 active:scale-95">
              Solicitar Turno Prioritario
            </button>
            <a 
              href="mailto:clinicaginecologicacitybell@gmail.com?subject=Consulta%20Salud%20Reproductiva"
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-slate-600 font-semibold px-8 py-4 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all"
            >
              <Mail className="w-5 h-5 text-sky-600" />
              Contactanos para más información
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white">
            <img 
              src="https://images.pexels.com/photos/35260717/pexels-photo-35260717.jpeg" 
              alt="Atención Médica Profesional" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100">
            <p className="text-sky-600 font-bold text-lg mb-1">Ley 27.610</p>
            <p className="text-xs text-slate-500 leading-tight">Garantizamos el acceso a la interrupción del embarazo de forma segura y legal.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
