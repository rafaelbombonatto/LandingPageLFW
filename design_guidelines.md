# Light Food Way - Landing Page Design Guidelines

## Design Approach
**Reference-Based:** Modern food delivery aesthetic inspired by Freshly, HelloFresh, and contemporary Brazilian food brands. Focus on appetite appeal, clean layouts, and frictionless ordering experience.

## Core Design Principles
1. **Visual Hierarchy:** Food imagery first, information second
2. **Conversion-Focused:** Every section should drive toward ordering
3. **Trust Building:** Highlight health benefits and quality prominently
4. **Brazilian Context:** Warm, welcoming tone aligned with local market expectations

---

## Typography

**Font Stack:**
- Headings: Lora (serif) - maintains brand warmth and sophistication
- Body: Inter or similar sans-serif via Google Fonts for readability
- CTA Buttons: Bold sans-serif weight

**Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl
- Section Titles: text-3xl md:text-4xl
- Product Names: text-xl md:text-2xl font-semibold
- Body Text: text-base md:text-lg
- Small Print: text-sm

---

## Layout System

**Container Widths:**
- Full sections: max-w-7xl mx-auto
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl mx-auto

**Spacing Units (Tailwind):**
Primary spacing: 4, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Card padding: p-6 md:p-8
- Element gaps: gap-4, gap-6, gap-8

**Grid System:**
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns (md:grid-cols-2)
- Desktop: 3-4 columns (lg:grid-cols-3, xl:grid-cols-4)

---

## Page Structure & Components

### 1. Navigation Bar
- Sticky header with logo left, CTA buttons right
- Mobile: Hamburger menu with slide-out drawer
- Desktop: Horizontal links (Produtos, Diferenciais, Como Pedir, Contato)
- Primary CTA: "Pedir Agora" button prominent in nav

### 2. Hero Section
**Layout:** Full-width with large hero image (food photography)
- Left-aligned content overlay with semi-transparent blur background for text/buttons
- Headline: "Marmitas Saudáveis Entregues na Sua Casa"
- Subheadline: Mission statement about quality and convenience
- Two prominent CTAs side-by-side: "Pedir pelo InstaDelivery" + "Pedir no iFood"
- Height: min-h-[600px] md:min-h-[700px]

### 3. Products Showcase
**Layout:** Horizontal scrolling carousel on mobile, 3-column grid on desktop
- 8 product cards with images: Caseirinho de Frango, Canja Integral, Moqueca de cação, Nhoque de mandioquinha, Caseirinho de Macarrão, Caseirinho Bovino, Carne Desfiada, Filé de Frango em Crosta
- Each card: Large food photo, product name overlay
- Subtle hover effect: scale-105 transition
- Below cards: "Ver Cardápio Completo" link to PDF

### 4. Differentials Section
**Layout:** 2x2 grid on mobile, 4-column row on desktop
- Icon + text for each: 
  - ✓ Ultracongeladas 300g
  - ✓ Sem glúten
  - ✓ Sem lactose
  - ✓ Sem conservantes/corantes
- Icons: Use Heroicons check-circle solid in brand green
- Clean card design with light backgrounds

### 5. How to Order Section
**Layout:** Two-column comparison (InstaDelivery vs iFood)
- Each column as prominent card with platform logo
- **InstaDelivery card:**
  - Horário: 9h-20h
  - Entrega própria
  - Frete por distância
  - Agendamento disponível
  - Cupom: NOVO10 (10% desconto)
  - Cashback 5%
  - PIX 5% desconto
  - CTA: "Pedir com Desconto"
  
- **iFood card:**
  - Horário: 9h-22h
  - Conveniência da plataforma
  - Frete por distância
  - CTA: "Pedir no iFood"

### 6. Payment Methods Section
**Layout:** Icon grid (3 columns mobile, 6 columns desktop)
- Visual icons for: Crédito, Débito, PIX, VR, Alelo, Pluxee
- Simple, clean presentation

### 7. Detox CTA Section
**Layout:** Split 50/50 - image left, content right
- Eye-catching image of detox meals
- Headline: "Descubra o Detox Light Food Way"
- Brief description
- CTA button: "Saiba Mais"

### 8. Contact/Social Section
**Layout:** Two prominent cards side-by-side
- WhatsApp card with icon and "Fale Conosco" CTA
- Instagram card with handle @lfwcampinas.pqbrasilia and "Conhecer o Instagram" CTA

### 9. Footer
- Logo, tagline
- Quick links (Produtos, Detox, Contato)
- Payment icons repeated
- Social media icons
- Copyright and legal info

---

## Component Specifications

**Buttons:**
- Primary (InstaDelivery): Full rounded (rounded-full), medium size (px-8 py-3), bold text
- Secondary (iFood): Outlined or ghost variant
- Hover: Add subtle shadow and slight scale
- All buttons with blur background when over images

**Cards:**
- Rounded corners: rounded-xl
- Shadow: shadow-lg
- Hover: shadow-xl transition
- Padding: p-6 to p-8

**Images:**
- Product photos: aspect-square, object-cover
- Hero: Full-width, high-quality food photography showing appetizing meals
- Detox section: lifestyle image of healthy living

**Icons:**
- Use Heroicons via CDN
- Consistent size: w-8 h-8 for feature icons
- w-12 h-12 for payment method icons

---

## Images Required

1. **Hero Background:** Large, appetizing photo of Light Food Way meal (overhead shot of multiple colorful marmitas) - full-width, min 1920px
2. **Product Images (8):** Each featured dish - square format, clean food photography
3. **Platform Logos:** InstaDelivery and iFood official logos
4. **Payment Icons:** Crédito, Débito, PIX, VR, Alelo, Pluxee
5. **Detox Section:** Lifestyle image showing healthy meal prep or fresh ingredients
6. **Social Media Icons:** WhatsApp and Instagram

---

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

**Key Adaptations:**
- Hero: Stack text over image on mobile, side-by-side on desktop
- Product grid: Horizontal scroll on mobile, fixed grid on desktop
- How to Order: Stack cards vertically on mobile, side-by-side on desktop
- Navigation: Hamburger menu on mobile, full nav on desktop
- Font sizes scale down 20-30% on mobile

---

## Animations
Use sparingly for polish:
- Smooth scroll between sections
- Product card hover scale
- Button hover effects
- Fade-in on scroll for section entrances (intersection observer)