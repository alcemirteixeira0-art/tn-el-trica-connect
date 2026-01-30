import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Zap } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";
const Footer = () => {
  const whatsappLink = "https://wa.me/5500000000000?text=Olá! Gostaria de solicitar um orçamento.";
  return <footer id="contato" className="bg-electric-navy text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-secondary to-electric-yellow-dark py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Precisa de um eletricista?
              </h3>
              <p className="text-primary/80">
                Entre em contato agora e solicite seu orçamento gratuito!
              </p>
            </div>
            <Button variant="default" size="xl" className="bg-primary hover:bg-primary/90" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <img alt="TN Elétrica & Automação" className="h-16 w-auto mb-6 bg-white rounded-lg p-2" src="/lovable-uploads/e950b1b6-2313-4256-8734-5f29e92b1fd2.png" />
              <p className="text-white/70 mb-6">
                Soluções elétricas e de automação com qualidade, segurança e garantia. 
                Atendemos residências, comércios e indústrias.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-secondary" />
                Serviços
              </h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#servicos" className="hover:text-secondary transition-colors">Instalações Residenciais</a></li>
                <li><a href="#servicos" className="hover:text-secondary transition-colors">Instalações Comerciais</a></li>
                <li><a href="#servicos" className="hover:text-secondary transition-colors">Instalações Prediais</a></li>
                <li><a href="#servicos" className="hover:text-secondary transition-colors">Automação Residencial</a></li>
                <li><a href="#servicos" className="hover:text-secondary transition-colors">Energia Solar & Mobilidade Elétrica</a></li>
                <li><a href="#servicos" className="hover:text-secondary transition-colors">Manutenção Preventiva</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5 text-secondary" />
                Contato
              </h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-medium text-white">(91) 99977-4401</p>
                    <p className="text-sm">WhatsApp disponível</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <p>contato@tneletrica.com.br</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <p>Sua Cidade - Estado</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                Horário de Atendimento
              </h4>
              <ul className="space-y-3 text-white/70">
                <li className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span className="text-white">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado</span>
                  <span className="text-white">08:00 - 12:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo</span>
                  <span className="text-white">Fechado</span>
                </li>
                <li className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-secondary font-medium">
                    ⚡ Emergências 24h
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
            <p>
              © {new Date().getFullYear()} TN Elétrica & Automação. Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido com ⚡ para sua segurança
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;