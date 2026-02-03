import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Hilder Lobato",
    role: "Empresário",
    content: "Pode confiar, excelentes preços, prazo curto e atendimento de primeira, sem contar com a educação do profissional. Super recomendo.",
    rating: 5,
    avatar: "HL",
  },
  {
    name: "Wellington Bonifácio",
    role: "Gerente de Loja",
    content: "Ótimo profissional!",
    rating: 5,
    avatar: "WB",
  },
  {
    name: "Ricardo Araujo",
    role: "Proprietário Residencial",
    content: "Excelente profissional.",
    rating: 5,
    avatar: "RA",
  },
  {
    name: "Ana Paula Lima",
    role: "Arquiteta",
    content: "Sempre indico a TN Elétrica para meus clientes. O sistema de automação residencial que instalaram ficou perfeito, superou as expectativas.",
    rating: 5,
    avatar: "AL",
  },
];

const Testimonials = () => {
  return (
    <section id="avaliacoes" className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior conquista. 
            Confira alguns depoimentos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-white/10 card-service"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-secondary mb-6 opacity-50" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/90 leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-electric-yellow-dark flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add More Reviews Notice */}
        <div className="mt-12 text-center">
          <p className="text-white/50">
            Esta área pode ser atualizada com avaliações reais dos seus clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
