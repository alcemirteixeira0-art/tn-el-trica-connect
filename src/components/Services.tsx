import { 
  Zap, 
  Home, 
  Building2, 
  Factory, 
  Cpu, 
  Lightbulb,
  MessageCircle
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Home,
    title: "Instalações Residenciais",
    description: "Instalação e manutenção elétrica completa para sua casa, incluindo quadros, tomadas, iluminação e mais.",
    whatsappMessage: "Olá! Gostaria de um orçamento para instalação elétrica residencial.",
  },
  {
    icon: Building2,
    title: "Instalações Comerciais",
    description: "Projetos elétricos para estabelecimentos comerciais, com foco em eficiência energética e segurança.",
    whatsappMessage: "Olá! Gostaria de um orçamento para instalação elétrica comercial.",
  },
  {
    icon: Factory,
    title: "Instalações Prediais",
    description: "Soluções elétricas em baixa tensão para condomínios e edifícios, serviços modernos em quadros e sistemas de proteção.",
    whatsappMessage: "Olá! Gostaria de um orçamento para instalação elétrica industrial.",
  },
  {
    icon: Cpu,
    title: "Automação Residencial",
    description: "Transforme sua casa em um ambiente inteligente com controle de iluminação, climatização e segurança.",
    whatsappMessage: "Olá! Gostaria de um orçamento para automação residencial.",
  },
  {
    icon: Zap,
    title: "Automação Industrial",
    description: "Sistemas de automação para processos industriais, CLPs, inversores de frequência e painéis de controle.",
    whatsappMessage: "Olá! Gostaria de um orçamento para automação industrial.",
  },
  {
    icon: Lightbulb,
    title: "Manutenção Preventiva",
    description: "Planos de manutenção para garantir a segurança e funcionamento contínuo de suas instalações.",
    whatsappMessage: "Olá! Gostaria de um orçamento para manutenção preventiva.",
  },
];

const Services = () => {
  const getWhatsappLink = (message: string) => {
    return `https://wa.me/5500000000000?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="servicos" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="section-title">
            Soluções Elétricas Completas
          </h2>
          <p className="section-subtitle">
            Oferecemos uma ampla gama de serviços elétricos e de automação para 
            atender todas as suas necessidades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-service bg-card border-none group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-electric-blue-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-electric-blue-light transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="whatsapp" 
                  className="w-full"
                  asChild
                >
                  <a 
                    href={getWhatsappLink(service.whatsappMessage)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Solicitar Orçamento
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
