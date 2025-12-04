# Light Food Way - Campinas Parque Brasília

## Overview

Light Food Way is a healthy meal delivery service landing page for a Brazilian food company based in Campinas, specifically serving the Parque Brasília neighborhood. The application showcases frozen meal boxes ("marmitas ultracongeladas") that are gluten-free, lactose-free, and preservative-free. The site is designed to drive conversions through delivery platforms (InstaDelivery and iFood) with a focus on visual appeal and trust-building through health benefits.

This is a full-stack React application with Express backend, built using TypeScript and modern web technologies. The current implementation is primarily frontend-focused, serving as a marketing landing page with sections for products, differentials, ordering information, detox plans, payment methods, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, configured for fast hot module replacement
- Wouter for lightweight client-side routing (single-page application)
- File-based component organization under `client/src/components/`

**UI Component System:**
- shadcn/ui component library (New York style variant) for consistent, accessible UI components
- Radix UI primitives for headless, accessible component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system using CSS variables for colors, spacing, and typography

**Design System:**
- Primary color: Green (#274E13) reflecting health and nature
- Typography: Lora serif font for headings (warmth/sophistication), sans-serif for body text
- Spacing follows consistent Tailwind scale (4, 8, 12, 16, 20, 24)
- Responsive grid system: mobile-first with breakpoints at md (768px) and lg (1024px)
- Brazilian market aesthetic with warm, welcoming tone

**State Management:**
- TanStack Query (React Query) for server state management and data fetching
- Local component state with React hooks for UI state
- No global state management currently implemented (not needed for marketing site)

**Page Structure:**
Single home page composed of modular sections:
- Navbar (sticky header with smooth scroll navigation)
- HeroSection (full-screen with CTA buttons)
- ProductsSection (horizontal scrolling product cards)
- DifferentialsSection (grid of benefits)
- HowToOrderSection (delivery platform comparison)
- PaymentMethodsSection (accepted payment methods grid)
- DetoxSection (detox plan offerings with modal dialogs)
- ContactSection (WhatsApp and Instagram CTAs)
- Footer (links and social media)

### Backend Architecture

**Server Framework:**
- Express.js server with TypeScript
- HTTP server setup (no WebSocket currently implemented)
- Middleware: JSON body parsing, URL-encoded form parsing, request logging
- Static file serving for production build

**Development vs Production:**
- Development: Vite dev server integration with HMR via middleware mode
- Production: Serves pre-built static files from `dist/public`
- Build process uses esbuild for server bundling and Vite for client bundling

**API Structure:**
- Routes registered via `registerRoutes()` function (currently empty - no backend API implemented yet)
- All routes intended to be prefixed with `/api`
- Storage interface defined but using in-memory implementation (MemStorage)

**Data Layer:**
- Drizzle ORM configured for PostgreSQL
- Schema defined in `shared/schema.ts` with basic User model
- Drizzle Kit for migrations (output to `./migrations`)
- Database URL expected via environment variable
- Currently only has user authentication schema (username/password)

### External Dependencies

**Third-Party UI Libraries:**
- shadcn/ui component collection (@radix-ui/* packages)
- Tailwind CSS for styling with autoprefixer
- Lucide React for icons
- cmdk for command palette components
- embla-carousel-react for carousels

**Development Tools:**
- Vite plugins: React, runtime error overlay, Replit-specific tooling (cartographer, dev banner)
- TypeScript with strict mode enabled
- ESModules throughout (type: "module" in package.json)

**Backend Dependencies:**
- express for HTTP server
- drizzle-orm and drizzle-zod for database ORM and schema validation
- connect-pg-simple for PostgreSQL session storage (prepared but not actively used)
- zod for runtime type validation

**Delivery Platform Integrations:**
- InstaDelivery: External link to ordering platform (https://instadelivery.com.br/lfwcampinaspqbrasilia)
- iFood: External link to restaurant page on iFood platform
- No programmatic API integration - purely redirect-based

**Communication Channels:**
- WhatsApp Business: Direct link to wa.me with phone number (5519971503142)
- Instagram: Social media link (@lfwcampinas.pqbrasilia)
- No email integration or contact form backend

**Asset Management:**
- Static images stored in `attached_assets/` directory
- Generated product images (PNG files for dishes)
- Logo and branding assets (ogImage.png)
- Branding JSON file with color scheme and typography definitions

**Build & Deployment:**
- Custom build script (`script/build.ts`) handles both client and server bundling
- Server dependencies bundled via esbuild with selective externalization
- Client built via Vite with output to `dist/public`
- Environment variable based configuration (DATABASE_URL required)