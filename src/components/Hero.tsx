import { ArrowRight, Phone, Shield, Clock, Award } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá! Gostaria de solicitar um orçamento.";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Serviços Elétricos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-secondary font-medium text-sm">
              Soluções Elétricas Profissionais
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Sua Segurança é{" "}
            <span className="text-gradient">Nossa Prioridade</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
            Serviços elétricos residenciais, comerciais e industriais com qualidade, 
            segurança e garantia. Automação residencial e industrial para modernizar 
            seu espaço.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              <a href="#servicos">
                Ver Serviços
              </a>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Shield, label: "Garantia em todos os serviços" },
              { icon: Clock, label: "Atendimento 24h" },
              { icon: Award, label: "Profissionais certificados" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-white/90"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-secondary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
