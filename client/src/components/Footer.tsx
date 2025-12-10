import { MessageCircle, Instagram } from "lucide-react";
import logoImage from "@assets/ogImage.png";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <img
              src={logoImage}
              alt="Light Food Way"
              className="mb-4 h-12 w-auto object-contain"
            />
            <p className="mb-4 max-w-md text-muted-foreground">
              Alimentação saudável, prática e deliciosa. Marmitas ultracongeladas
              sem glúten, sem lactose e sem conservantes, entregues na sua casa
              em Campinas.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/5519971503142"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                data-testid="link-footer-whatsapp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/lfwcampinas.pqbrasilia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                data-testid="link-footer-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("#produtos")}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-produtos"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#diferenciais")}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-diferenciais"
                >
                  Diferenciais
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#como-pedir")}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-como-pedir"
                >
                  Como Pedir
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contato")}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-contato"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Peça Agora</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instadelivery.com.br/lfwcampinaspqbrasilia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-instadelivery"
                >
                  InstaDelivery
                </a>
              </li>
              <li>
                <a
                  href="https://www.ifood.com.br/delivery/campinas-sp/light-food-way---pq-brasilia---executivos-e-sucos-jardim-boa-esperanca/57d891d2-33ad-407c-be3a-5ac4fb7356ff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-ifood"
                >
                  iFood
                </a>
              </li>
              <li>
                <a
                  href="https://oia.99app.com/dlp9/0XsnCy?area=BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-99food"
                >
                  99 Food
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Light Food Way Parque Brasília. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
