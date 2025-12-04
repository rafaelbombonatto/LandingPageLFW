import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/hero_healthy_meal_prep_containers.png";

export default function HeroSection() {
  const handleInstaDelivery = () => {
    window.open("https://instadelivery.com.br/lfwcampinaspqbrasilia", "_blank");
  };

  const handleIfood = () => {
    window.open(
      "https://www.ifood.com.br/delivery/campinas-sp/light-food-way---pq-brasilia---executivos-e-sucos-jardim-boa-esperanca/57d891d2-33ad-407c-be3a-5ac4fb7356ff",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Marmitas saudáveis Light Food Way"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            Parque Brasília - Campinas
          </span>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Marmitas Saudáveis Entregues na Sua Casa
          </h1>
          <p className="mb-8 text-lg text-gray-200 md:text-xl">
            Nossa missão é levar sabor, qualidade e praticidade até a sua mesa,
            com nossas deliciosas marmitas ultracongeladas sem glúten e sem
            lactose.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={handleInstaDelivery}
              className="rounded-full px-8 text-base font-semibold"
              data-testid="button-hero-instadelivery"
            >
              Pedir pelo InstaDelivery
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleIfood}
              className="rounded-full border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              data-testid="button-hero-ifood"
            >
              Pedir no iFood
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
