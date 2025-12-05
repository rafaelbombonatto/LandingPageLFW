import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { useRef, useState } from "react";

import caseirinhoFrango from "@assets/generated_images/caseirinho_de_frango_dish.png";
import saborSertanejo from "@assets/generated_images/sabor_sertanejo.png.png";
import moqueca from "@assets/generated_images/moqueca_fish_stew_dish.png";
import nhoque from "@assets/generated_images/nhoque_mandioquinha_gnocchi.png";
import carneDesfiada from "@assets/generated_images/carne_desfiada_shredded_beef.png";
import fileFrango from "@assets/generated_images/chicken_cashew_crust_dish.png";

// todo: remove mock functionality - replace with real product data from API
const products = [
  { id: 1, name: "Caseirinho de Frango", image: caseirinhoFrango },
  { id: 2, name: "Sabor Sertanejo", image: saborSertanejo },
  { id: 3, name: "Moqueca de Cação", image: moqueca },
  { id: 4, name: "Nhoque de Mandioquinha", image: nhoque },
  { id: 5, name: "Carne Desfiada", image: carneDesfiada },
  { id: 6, name: "Filé de Frango em Crosta de Castanha", image: fileFrango },
];

export default function ProductsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section id="produtos" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Nossos Pratos
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Marmitas preparadas com ingredientes frescos e naturais, sem glúten,
            sem lactose e sem conservantes.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 md:block">
            <Button
              variant="secondary"
              size="icon"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="rounded-full shadow-lg"
              data-testid="button-scroll-left"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="scrollbar-hide flex gap-4 overflow-x-auto px-2 pb-4 md:gap-6 md:px-12"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {products.map((product) => (
              <Card
                key={product.id}
                className="group relative min-w-[260px] flex-shrink-0 overflow-visible border-0 md:min-w-[300px] hover-elevate"
                style={{ scrollSnapAlign: "start" }}
                data-testid={`card-product-${product.id}`}
              >
                <div className="aspect-square overflow-hidden rounded-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 rounded-b-md bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {product.name}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 md:block">
            <Button
              variant="secondary"
              size="icon"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="rounded-full shadow-lg"
              data-testid="button-scroll-right"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() =>
              console.log("Open nutritional catalog PDF")
            }
            data-testid="button-catalogo"
          >
            <FileText className="h-4 w-4" />
            Ver Catálogo Nutricional
          </Button>
        </div>
      </div>
    </section>
  );
}
