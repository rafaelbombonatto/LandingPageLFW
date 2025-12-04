import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Truck,
  MapPin,
  Calendar,
  Tag,
  Percent,
  CreditCard,
} from "lucide-react";

export default function HowToOrderSection() {
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
    <section id="como-pedir" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Como Pedir?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Trabalhamos somente com entrega. Escolha a plataforma de sua
            preferência e receba suas marmitas no conforto da sua casa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="relative overflow-visible p-6 md:p-8">
            <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
              Recomendado
            </Badge>
            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-bold text-foreground">
                InstaDelivery
              </h3>
              <p className="text-muted-foreground">
                Entrega própria com mais benefícios
              </p>
            </div>

            <div className="mb-6 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Horário de funcionamento</p>
                  <p className="text-sm text-muted-foreground">
                    Diariamente das 9h às 20h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Truck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Entrega própria</p>
                  <p className="text-sm text-muted-foreground">
                    Frete calculado por distância
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Agendamento disponível</p>
                  <p className="text-sm text-muted-foreground">
                    Agende sua entrega com antecedência
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Tag className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">
                    Cupom de primeiro pedido:{" "}
                    <span className="font-bold text-primary">NOVO10</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    10% de desconto na primeira compra
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Percent className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Cashback de 5%</p>
                  <p className="text-sm text-muted-foreground">
                    Válido por 90 dias para próximos pedidos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">5% desconto no PIX</p>
                  <p className="text-sm text-muted-foreground">
                    Economia extra pagando via PIX
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="w-full rounded-full"
              size="lg"
              onClick={handleInstaDelivery}
              data-testid="button-order-instadelivery"
            >
              Pedir com Desconto
            </Button>
          </Card>

          <Card className="p-6 md:p-8">
            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-bold text-foreground">iFood</h3>
              <p className="text-muted-foreground">
                A conveniência e familiaridade da plataforma
              </p>
            </div>

            <div className="mb-6 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Horário de funcionamento</p>
                  <p className="text-sm text-muted-foreground">
                    Diariamente das 9h às 22h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Entrega pela plataforma</p>
                  <p className="text-sm text-muted-foreground">
                    Frete calculado pelo iFood
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Pagamento integrado</p>
                  <p className="text-sm text-muted-foreground">
                    Use seu saldo ou cupons do iFood
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <Button
                variant="outline"
                className="w-full rounded-full"
                size="lg"
                onClick={handleIfood}
                data-testid="button-order-ifood"
              >
                Pedir no iFood
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
