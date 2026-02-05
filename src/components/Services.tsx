import { 
  Zap, 
  Home, 
  Building2, 
  Factory, 
  Cpu, 
  Lightbulb,
  MessageCircle,
  Camera,
  KeyRound,
  DoorOpen
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
    description: "Serviços modernos em quadros de distribuição e sistemas de proteção para condomínios e edifícios.",
    whatsappMessage: "Olá! Gostaria de um orçamento para instalação elétrica predial.",
  },
  {
    icon: Cpu,
    title: "Automação Residencial",
    description: "Transforme sua casa em um ambiente inteligente com controle de iluminação, climatização e segurança.",
    whatsappMessage: "Olá! Gostaria de um orçamento para automação residencial.",
  },
  {
    icon: Zap,
    title: "Energia Solar & Mobilidade Elétrica",
    description: "Instalação de placas solares fotovoltaicas, inversores e carregadores para veículos elétricos.",
    whatsappMessage: "Olá! Gostaria de um orçamento para Energia Solar & Mobilidade Elétrica.",
  },
  {
    icon: Lightbulb,
    title: "Manutenções Elétricas",
    description: "Manutenção preventiva e corretiva para garantir a segurança e funcionamento contínuo de suas instalações.",
    whatsappMessage: "Olá! Gostaria de um orçamento para manutenção elétrica.",
  },
  {
    icon: Camera,
    title: "Câmeras de Segurança (CFTV)",
    description: "Instalação e manutenção de sistemas de câmeras de segurança (CFTV), com configuração de gravação, acesso remoto pelo celular e orientação completa ao cliente.",
    whatsappMessage: "Olá! Gostaria de um orçamento para câmeras de segurança (CFTV).",
  },
  {
    icon: KeyRound,
    title: "Segurança Eletrônica & Controle de Acesso",
    description: "Instalação e manutenção de interfones, video porteiros, fechaduras eletrônicas e inteligentes, controle de acesso residencial e predial, garantindo mais praticidade, controle e segurança no dia a dia.",
    whatsappMessage: "Olá! Gostaria de um orçamento para segurança eletrônica e controle de acesso.",
  },
  {
    icon: DoorOpen,
    title: "Motor de Portão Eletrônico",
    description: "Instalação, ajuste e manutenção de motores para portões eletrônicos, garantindo funcionamento seguro, suave e confiável.",
    whatsappMessage: "Olá! Gostaria de um orçamento para motor de portão eletrônico.",
  },
];

const Services = () => {
  const getWhatsappLink = (message: string) => {
    return `https://wa.me/5591999774401?text=${encodeURIComponent(message)}`;
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
