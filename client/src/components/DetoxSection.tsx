import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Leaf, Droplets, Clock, Scale, MessageCircle } from "lucide-react";
import detox1DayImage from "@assets/generated_images/detox_1_day_juice_kit.png";
import detox3DaysImage from "@assets/generated_images/detox_3_days_meal_kit.png";
import detox5DaysImage from "@assets/generated_images/detox_5_days_complete_kit.png";

interface DetoxPlan {
  id: string;
  name: string;
  days: number;
  weightLoss: string;
  description: string;
  image: string;
  highlight?: boolean;
  features: string[];
  includes: string[];
  schedule: { time: string; meal: string }[];
  whatsappMessage: string;
}

const detoxPlans: DetoxPlan[] = [
  {
    id: "1-day",
    name: "Detox 1 Dia",
    days: 1,
    weightLoss: "1,5 kg",
    description: "07 sucos funcionais que vão te ajudar a eliminar até 1,5 kg já no 1º dia.",
    image: detox1DayImage,
    features: [
      "7 sucos detox funcionais",
      "Desintoxicação rápida",
      "Ideal para iniciantes",
      "Resultados imediatos",
    ],
    includes: [
      "Suco Verde Energizante",
      "Suco de Beterraba com Gengibre",
      "Suco de Cenoura com Laranja",
      "Suco de Couve com Limão",
      "Suco de Maçã com Canela",
      "Suco de Abacaxi com Hortelã",
      "Suco Relaxante Noturno",
    ],
    schedule: [
      { time: "07:00", meal: "Suco Verde Energizante" },
      { time: "09:00", meal: "Suco de Beterraba com Gengibre" },
      { time: "11:00", meal: "Suco de Cenoura com Laranja" },
      { time: "13:00", meal: "Suco de Couve com Limão" },
      { time: "15:00", meal: "Suco de Maçã com Canela" },
      { time: "17:00", meal: "Suco de Abacaxi com Hortelã" },
      { time: "19:00", meal: "Suco Relaxante Noturno" },
    ],
    whatsappMessage: "Olá! Gostaria de pedir o Kit Detox 1 Dia.",
  },
  {
    id: "3-days",
    name: "Detox 3 Dias",
    days: 3,
    weightLoss: "2,5 kg",
    description: "Combinação de pratos e sucos que vão te ajudar a eliminar até 2,5 kg em 3 dias.",
    image: detox3DaysImage,
    highlight: true,
    features: [
      "Refeições completas + sucos",
      "Cardápio variado",
      "Maior desintoxicação",
      "Mais popular",
    ],
    includes: [
      "9 refeições balanceadas",
      "6 sucos detox",
      "Saladas funcionais",
      "Proteínas magras",
      "Sopas leves",
      "Snacks saudáveis",
    ],
    schedule: [
      { time: "Dia 1 - Manhã", meal: "Suco detox + Salada de frutas" },
      { time: "Dia 1 - Almoço", meal: "Salada + Frango grelhado" },
      { time: "Dia 1 - Jantar", meal: "Sopa de legumes + Suco" },
      { time: "Dia 2 - Manhã", meal: "Suco verde + Ovos mexidos" },
      { time: "Dia 2 - Almoço", meal: "Bowl de quinoa + Peixe" },
      { time: "Dia 2 - Jantar", meal: "Wrap de vegetais + Suco" },
      { time: "Dia 3 - Manhã", meal: "Smoothie bowl" },
      { time: "Dia 3 - Almoço", meal: "Salada completa + Proteína" },
      { time: "Dia 3 - Jantar", meal: "Suco detox final" },
    ],
    whatsappMessage: "Olá! Gostaria de pedir o Kit Detox 3 Dias.",
  },
  {
    id: "5-days",
    name: "Detox 5 Dias",
    days: 5,
    weightLoss: "3,5 kg",
    description: "Combinação de pratos e sucos que vão te ajudar a eliminar até 3,5 kg em 5 dias.",
    image: detox5DaysImage,
    features: [
      "Programa completo",
      "Máxima desintoxicação",
      "Reeducação alimentar",
      "Resultados duradouros",
    ],
    includes: [
      "15 refeições balanceadas",
      "10 sucos detox",
      "Cardápio completo",
      "Proteínas variadas",
      "Sopas e cremes",
      "Snacks e lanches",
      "Guia alimentar",
    ],
    schedule: [
      { time: "Dia 1-2", meal: "Fase de limpeza inicial" },
      { time: "Dia 3", meal: "Fase de desintoxicação" },
      { time: "Dia 4-5", meal: "Fase de reeducação" },
    ],
    whatsappMessage: "Olá! Gostaria de pedir o Kit Detox 5 Dias.",
  },
];

const WHATSAPP_NUMBER = "5519971503142";

function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function DetoxSection() {
  const [selectedPlan, setSelectedPlan] = useState<DetoxPlan | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openPlanDetails = (plan: DetoxPlan) => {
    setSelectedPlan(plan);
    setDialogOpen(true);
  };

  return (
    <section id="detox" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            <Leaf className="mr-1 h-3 w-3" />
            Programa Especial
          </Badge>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Descubra o Detox Light Food Way
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Conquiste sua meta de verão! Escolha o plano ideal para você e inicie sua
            jornada de transformação com nossos kits detox.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {detoxPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`group relative overflow-visible transition-all ${
                plan.highlight ? "ring-2 ring-primary" : ""
              }`}
              data-testid={`card-detox-plan-${plan.id}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                  <Badge className="whitespace-nowrap">Mais Popular</Badge>
                </div>
              )}

              <div className="relative aspect-[4/3] overflow-hidden rounded-t-md">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {plan.name}
                  </h3>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{plan.days} {plan.days === 1 ? 'dia' : 'dias'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Scale className="h-4 w-4" />
                    <span className="text-sm font-medium">Até -{plan.weightLoss}</span>
                  </div>
                </div>

                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {plan.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {plan.features.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-2">
                  <Button
                    className="w-full gap-2"
                    onClick={() => openPlanDetails(plan)}
                    data-testid={`button-detox-details-${plan.id}`}
                  >
                    Ver Detalhes
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    asChild
                    data-testid={`button-detox-order-${plan.id}`}
                  >
                    <a
                      href={getWhatsAppLink(plan.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Pedir pelo WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">
            Dúvidas sobre qual plano escolher?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 rounded-full"
            asChild
            data-testid="button-detox-whatsapp-help"
          >
            <a
              href={getWhatsAppLink("Olá! Gostaria de saber mais sobre os programas Detox.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              Fale Conosco pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        {selectedPlan && (
          <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 font-serif text-2xl">
                <Droplets className="h-6 w-6 text-primary" />
                {selectedPlan.name}
              </DialogTitle>
              <DialogDescription>{selectedPlan.description}</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-md">
                <img
                  src={selectedPlan.image}
                  alt={selectedPlan.name}
                  className="h-48 w-full object-cover"
                />
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>
                    <strong>{selectedPlan.days}</strong> {selectedPlan.days === 1 ? 'dia' : 'dias'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  <span>
                    Até <strong>-{selectedPlan.weightLoss}</strong>
                  </span>
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-foreground">
                  O que está incluso:
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {selectedPlan.includes.map((item) => (
                    <li
                      key={`${selectedPlan.id}-include-${item}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-foreground">
                  Cronograma:
                </h4>
                <div className="space-y-2">
                  {selectedPlan.schedule.map((item) => (
                    <div
                      key={`${selectedPlan.id}-schedule-${item.time}`}
                      className="flex items-center gap-3 rounded-md bg-muted/50 p-3"
                    >
                      <Badge variant="outline" className="shrink-0">
                        {item.time}
                      </Badge>
                      <span className="text-sm text-foreground">{item.meal}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <Button
                  size="lg"
                  className="w-full gap-2"
                  asChild
                  data-testid="button-modal-order-whatsapp"
                >
                  <a
                    href={getWhatsAppLink(selectedPlan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Pedir {selectedPlan.name} pelo WhatsApp
                  </a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setDialogOpen(false)}
                  data-testid="button-modal-close"
                >
                  Fechar
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
