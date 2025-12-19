
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Mail } from 'lucide-react';

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: '¡Hola! Bienvenido a Clínica City Bell. ¿En qué podemos ayudarte?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    // Simulate a brief pause before responding with the static email message
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: `Somos la Clínica Privada City Bell.

Realizamos Legrado Uterino Instrumental (LUI).
El procedimiento dura 15-30 min bajo anestesia general.

Valores vigentes (03/12/2025):
• Sem 3 a 9: $1.100.000
• Sem 10 a 14: $1.460.000
• Sem 15 a 18: $1.800.000

ATENCIÓN: Se atiende únicamente con DNI.

Contacto: clinicaginecologicacitybell@gmail.com`
      }]);
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white w-[350px] md:w-[400px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm">Centro de Ayuda</p>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Atención Inmediata</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === 'user' 
                    ? 'bg-sky-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex gap-1">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu consulta..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-sky-600 text-white rounded-xl flex items-center justify-center hover:bg-sky-700 transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-3 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              <Mail className="w-3 h-3" /> info@clinicacitybell.com.ar
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-sky-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-200 hover:scale-110 transition-all active:scale-95 group relative"
        >
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-white" />
          <MessageSquare className="w-7 h-7" />
          <span className="absolute -left-36 bg-slate-900 text-white text-xs py-2 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            ¿Dudas? Contactanos
          </span>
        </button>
      )}
    </div>
  );
};
