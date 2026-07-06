import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Instagram, Mail, Sparkles, Baby, Sparkle, Heart, Leaf, Laptop, Home } from "lucide-react";
import heroImg from "@/assets/adriane-hero.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const segmentos = [
  { icon: Baby, label: "Maternidade" },
  { icon: Sparkle, label: "Beleza" },
  { icon: Heart, label: "Saúde" },
  { icon: Leaf, label: "Lifestyle" },
  { icon: Laptop, label: "Tecnologia" },
  { icon: Home, label: "Casa" },
];

// TODO: substitua os `src` pelos seus arquivos de vídeo reais em /public/videos/
const videos = [
  { src: "/videos/video1.mp4", poster: "/videos/poster1.jpg", title: "Campanha 1" },
  { src: "/videos/video2.mp4", poster: "/videos/poster2.jpg", title: "Campanha 2" },
  { src: "/videos/video3.mp4", poster: "/videos/poster3.jpg", title: "Campanha 3" },
  { src: "/videos/video4.mp4", poster: "/videos/poster4.jpg", title: "Campanha 4" },
  { src: "/videos/video5.mp4", poster: "/videos/poster5.jpg", title: "Campanha 5" },
  { src: "/videos/video6.mp4", poster: "/videos/poster6.jpg", title: "Campanha 6" },
];

const WHATSAPP = "https://wa.me/message/FEQ2BBKIXH4PC1";

function Landing() {
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "#sobre", label: "Sobre" },
    { href: "#segmentos", label: "Segmentos" },
    { href: "#portfolio", label: "Portfólio" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex w-[min(1200px,92%)] items-center justify-between gap-4 py-4">
          <a href="#" className="text-brand-gradient text-lg font-bold tracking-tight sm:text-xl">
            Adriane Cambuy
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                {n.label}
              </a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-brand-gradient inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5">
              Solicitar orçamento
            </a>
          </nav>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menu"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <nav className="mx-auto flex w-[min(1200px,92%)] flex-col gap-1 py-4">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-foreground/90 hover:bg-secondary">
                  {n.label}
                </a>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-brand-gradient mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground">
                Solicitar orçamento
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-accent/40 blur-3xl" />
        <div className="mx-auto grid w-[min(1200px,92%)] items-center gap-12 py-16 md:grid-cols-[1.1fr_.9fr] md:py-24">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> UGC Creator
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Conteúdos autênticos que <span className="text-brand-gradient">geram confiança</span> e vendas.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg md:mx-0">
              Produzo vídeos e fotos em formato UGC para marcas que desejam aumentar conversão e fortalecer sua presença digital.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-brand-gradient inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5 sm:w-auto">
                Solicitar orçamento
              </a>
              <a href="#portfolio" className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:w-auto">
                Ver portfólio
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-brand-gradient opacity-30 blur-2xl" />
            <img
              src={heroImg}
              alt="Adriane Cambuy — UGC Creator"
              width={1024}
              height={1024}
              className="relative w-full rounded-[2rem] object-cover shadow-2xl shadow-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20">
        <div className="mx-auto w-[min(900px,92%)] text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Sobre <span className="text-brand-gradient">mim</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sou Adriane Cambuy, criadora de conteúdo UGC apaixonada por transformar produtos em histórias que conectam pessoas e marcas. Meu trabalho une naturalidade e estratégia para gerar resultados reais.
          </p>
        </div>
      </section>

      {/* Segmentos */}
      <section id="segmentos" className="py-20">
        <div className="mx-auto w-[min(1200px,92%)]">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              <span className="text-brand-gradient">Segmentos</span> que atendo
            </h2>
            <p className="mt-3 text-muted-foreground">Nichos em que já produzi conteúdo com performance.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
            {segmentos.map(({ icon: Icon, label }) => (
              <div key={label} className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <span className="bg-brand-gradient grid h-12 w-12 place-items-center rounded-full text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfólio - Vídeos */}
      <section id="portfolio" className="py-20">
        <div className="mx-auto w-[min(1200px,92%)]">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              <span className="text-brand-gradient">Portfólio</span>
            </h2>
            <p className="mt-3 text-muted-foreground">Alguns dos vídeos que produzi para marcas parceiras.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <div key={v.src} className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-transform hover:-translate-y-1">
                <video
                  src={v.src}
                  poster={v.poster}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-[9/16] w-full bg-secondary object-cover"
                />
                <div className="p-4">
                  <p className="text-sm font-semibold text-foreground">{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20">
        <div className="mx-auto w-[min(900px,92%)]">
          <div className="bg-brand-gradient relative overflow-hidden rounded-[2rem] p-8 text-center text-primary-foreground shadow-2xl shadow-primary/30 sm:p-14">
            <h2 className="text-3xl font-bold sm:text-4xl">Vamos trabalhar juntos?</h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/90">
              Envie sua ideia e receba uma proposta personalizada para sua marca.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <a href="mailto:contato@adrianecambuy.com.br" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/25 sm:w-auto">
                <Mail className="h-4 w-4" /> contato@adrianecambuy.com.br
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 sm:w-auto">
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex w-[min(1200px,92%)] flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 Adriane Cambuy. Todos os direitos reservados.</p>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
            <Instagram className="h-4 w-4" /> @adrianecambuy
          </a>
        </div>
      </footer>
    </div>
  );
}
