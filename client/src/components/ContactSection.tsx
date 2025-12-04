import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5519971503142", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/lfwcampinas.pqbrasilia/", "_blank");
  };

  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Fale Conosco
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Dúvidas, sugestões ou pedidos especiais? Entre em contato pelos
            nossos canais.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="flex flex-col items-center p-8 text-center hover-elevate">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <MessageCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">WhatsApp</h3>
            <p className="mb-6 text-muted-foreground">
              Em caso de dúvidas, pode nos chamar pelo WhatsApp
            </p>
            <Button
              variant="outline"
              className="gap-2 rounded-full"
              onClick={handleWhatsApp}
              data-testid="button-whatsapp"
            >
              <MessageCircle className="h-4 w-4" />
              Fale Conosco
              <ExternalLink className="h-3 w-3" />
            </Button>
          </Card>

          <Card className="flex flex-col items-center p-8 text-center hover-elevate">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/30">
              <Instagram className="h-8 w-8 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">Instagram</h3>
            <p className="mb-2 text-muted-foreground">
              Para novidades e promoções exclusivas
            </p>
            <p className="mb-6 font-medium text-foreground">
              @lfwcampinas.pqbrasilia
            </p>
            <Button
              variant="outline"
              className="gap-2 rounded-full"
              onClick={handleInstagram}
              data-testid="button-instagram"
            >
              <Instagram className="h-4 w-4" />
              Conhecer o Instagram
              <ExternalLink className="h-3 w-3" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
