
import React, { useEffect, useRef, useState } from 'react';

interface TimelineItemProps {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ image, title, description, reverse }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`flex flex-col lg:flex-row items-center gap-12 py-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${reverse ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className="flex-1 w-full">
        <div className="relative group overflow-hidden rounded-3xl shadow-xl">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-sky-900/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </div>
      <div className="flex-1 space-y-4 text-center lg:text-left">
        <h3 className="text-3xl font-bold text-slate-900">{title}</h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export const TimelineSection: React.FC = () => {
  const items = [
    {
      image: "https://images.pexels.com/photos/4483340/pexels-photo-4483340.jpeg",
      title: "Infraestructura de Clase Mundial",
      description: "Contamos con instalaciones modernas y equipamiento tecnológico de primer nivel para diagnósticos precisos y tratamientos efectivos."
    },
    {
      image: "https://images.pexels.com/photos/6129864/pexels-photo-6129864.jpeg",
      title: "Laboratorio de Análisis Clínicos",
      description: "Resultados rápidos y confiables gracias a nuestros procesos automatizados y al monitoreo constante de especialistas en bioquímica."
    },
    {
      image: "https://images.pexels.com/photos/7789679/pexels-photo-7789679.jpeg",
      title: "Staff Médico de Excelencia",
      description: "Nuestros profesionales son el pilar de la institución, brindando una atención cálida y personalizada a cada integrante de la familia."
    },
    {
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
      title: "Diagnóstico por Imágenes",
      description: "Sistemas digitales de última generación para obtener imágenes de alta resolución, fundamentales para la prevención y el seguimiento médico."
    },
    {
      image: "https://images.pexels.com/photos/7088841/pexels-photo-7088841.jpeg",
      title: "Compromiso con la Comunidad",
      description: "Estamos presentes en City Bell para acompañarte en cada etapa de tu vida, ofreciendo seguridad y contención en los momentos que más nos necesitás."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm">Nuestra Clínica en Imágenes</h2>
        <h3 className="text-4xl font-bold text-slate-900">Trayectoria y Tecnología</h3>
      </div>
      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineItem 
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};
