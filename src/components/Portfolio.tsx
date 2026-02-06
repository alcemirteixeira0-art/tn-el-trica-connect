import { useState } from "react";
import { X } from "lucide-react";
import work1 from "@/assets/quadro.jpg";
import work2 from "@/assets/cftv.png";
import work3 from "@/assets/motor.jpg";
import work4 from "@/assets/work-4.jpg";
const portfolioItems = [{
  image: work1,
  title: "Instalação Residencial",
  category: "Residencial",
  description: "Quadro de distribuição completo com disjuntores e organização de cabos."
}, {
  image: work2,
  title: "Instalação de CFTV",
  category: "CFTV",
  description: "Instalação de sistemas de monitoramento com câmeras estrategicamente posicionadas, gravação contínua e acesso remoto."
}, {
  image: work3,
  title: "Automação Residencial",
  category: "Automação",
  description: "Sistema de automação integrado para controle de iluminação e mídia."
}, {
  image: work4,
  title: "Manutenção Comercial",
  category: "Comercial",
  description: "Manutenção preventiva em quadro elétrico de estabelecimento comercial."
}];
const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);
  return <section id="trabalhos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Portfólio
          </span>
          <h2 className="section-title">
            Trabalhos Realizados
          </h2>
          <p className="section-subtitle">
            Confira alguns dos nossos projetos e veja a qualidade do nosso trabalho.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => <div key={index} className="group relative overflow-hidden rounded-2xl cursor-pointer card-service" onClick={() => setSelectedImage(item)}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            </div>)}
        </div>

        {/* Add More Photos Notice */}
        <div className="mt-12 text-center">
          
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-secondary transition-colors" onClick={() => setSelectedImage(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full animate-scale-in" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} className="w-full rounded-lg shadow-2xl" />
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.description}</p>
            </div>
          </div>
        </div>}
    </section>;
};
export default Portfolio;
