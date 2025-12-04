import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import detoxImage from "@assets/generated_images/detox_juices_and_salads.png";

export default function DetoxSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative overflow-hidden rounded-md">
            <img
              src={detoxImage}
              alt="Programa Detox Light Food Way"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Programa Especial
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Descubra o Detox Light Food Way
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Conquiste sua meta de peso com nosso programa especial de
              alimentação detox. Refeições balanceadas e nutritivas para ajudar
              você a alcançar seus objetivos.
            </p>

            <ul className="mb-8 space-y-3">
              <li className="flex items-center gap-3 text-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                  1
                </span>
                Planos personalizados
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                  2
                </span>
                Sucos detox inclusos
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                  3
                </span>
                Acompanhamento nutricional
              </li>
            </ul>

            <Button
              size="lg"
              className="gap-2 rounded-full"
              onClick={() => console.log("Navigate to Detox page")}
              data-testid="button-detox-saiba-mais"
            >
              Saiba Mais
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
