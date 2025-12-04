import { Card } from "@/components/ui/card";
import { CheckCircle, Wheat, Milk, FlaskConical, Palette, Scale } from "lucide-react";

const differentials = [
  {
    icon: Scale,
    title: "Ultracongeladas 300g",
    description: "Porções na medida certa para sua refeição",
  },
  {
    icon: Wheat,
    title: "Sem Glúten",
    description: "Ideal para celíacos e intolerantes",
  },
  {
    icon: Milk,
    title: "Sem Lactose",
    description: "Livre de derivados do leite",
  },
  {
    icon: FlaskConical,
    title: "Sem Conservantes",
    description: "100% natural e saudável",
  },
  {
    icon: Palette,
    title: "Sem Corantes",
    description: "Cores naturais dos alimentos",
  },
];

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Nossos Diferenciais
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Alimentação saudável de verdade, pensada para quem busca qualidade e
            bem-estar.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {differentials.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col items-center p-6 text-center hover-elevate"
              data-testid={`card-differential-${index}`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
