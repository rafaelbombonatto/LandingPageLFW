import { Card } from "@/components/ui/card";
import { CreditCard, QrCode } from "lucide-react";

const mainMethods = [
  { name: "Crédito", icon: CreditCard, color: "text-blue-600" },
  { name: "Débito", icon: CreditCard, color: "text-green-600" },
  { name: "PIX", icon: QrCode, color: "text-teal-600" },
];

const benefitMethods = [
  { name: "VR", icon: CreditCard, color: "text-orange-600" },
  { name: "Alelo", icon: CreditCard, color: "text-red-600" },
  { name: "Pluxee", icon: CreditCard, color: "text-purple-600" },
  { name: "Ticket", icon: CreditCard, color: "text-yellow-600" },
  { name: "Verocard", icon: CreditCard, color: "text-cyan-600" },
];

export default function PaymentMethodsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Formas de Pagamento
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Aceitamos diversas formas de pagamento para sua comodidade.
          </p>
        </div>

        <div className="flex justify-center gap-4 md:gap-6">
          {mainMethods.map((method, index) => (
            <Card
              key={index}
              className="flex w-28 flex-col items-center justify-center p-4 text-center md:w-36 md:p-6"
              data-testid={`card-payment-${method.name.toLowerCase()}`}
            >
              <method.icon className={`mb-2 h-8 w-8 md:h-10 md:w-10 ${method.color}`} />
              <span className="text-sm font-medium text-foreground md:text-base">
                {method.name}
              </span>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cartões de Benefícios
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {benefitMethods.map((method, index) => (
              <Card
                key={index}
                className="flex w-28 flex-col items-center justify-center p-4 text-center md:w-36 md:p-6"
                data-testid={`card-payment-${method.name.toLowerCase()}`}
              >
                <method.icon className={`mb-2 h-8 w-8 md:h-10 md:w-10 ${method.color}`} />
                <span className="text-sm font-medium text-foreground md:text-base">
                  {method.name}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
