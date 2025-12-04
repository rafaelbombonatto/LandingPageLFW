import { Card } from "@/components/ui/card";
import { CreditCard, Smartphone, QrCode } from "lucide-react";

const paymentMethods = [
  { name: "Crédito", icon: CreditCard, color: "text-blue-600" },
  { name: "Débito", icon: CreditCard, color: "text-green-600" },
  { name: "PIX", icon: QrCode, color: "text-teal-600" },
  { name: "VR", icon: Smartphone, color: "text-orange-600" },
  { name: "Alelo", icon: Smartphone, color: "text-red-600" },
  { name: "Pluxee", icon: Smartphone, color: "text-purple-600" },
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

        <div className="grid grid-cols-3 gap-4 md:grid-cols-6 md:gap-6">
          {paymentMethods.map((method, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-center p-4 text-center md:p-6"
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
    </section>
  );
}
