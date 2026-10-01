import aurisLogoNova from "@/assets/auris-logo-nova.png";
import heroProfissional from "@/assets/hero-profissional.jpg";
import {
  Phone,
  CheckCircle2,
  Calendar,
  Stethoscope,
  HeadphonesIcon,
  Star,
  ArrowRight,
  MapPin,
  Clock,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/551925126487?text=" + encodeURIComponent("Olá! Gostaria de agendar minha avaliação.");

const trackWhatsApp = (clickText: string) => {
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    event: "click_url",
    whatsapp_url: WHATSAPP_URL,
    whatsapp_click_text: clickText,
  });
};

// ─── Reusable button components ───────────────────────────────────────────────
const BtnPrimary = ({
  href,
  onClick,
  children,
  large,
}: {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
  large?: boolean;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`inline-flex items-center gap-2 font-semibold transition-colors duration-200 rounded cursor-pointer border-0 no-underline ${
      large ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
    }`}
    style={{ background: "hsl(var(--primary))", color: "white" }}
    onMouseEnter={(e) => (e.currentTarget.style.background = "hsl(var(--primary-dark))")}
    onMouseLeave={(e) => (e.currentTarget.style.background = "hsl(var(--primary))")}
  >
    {children}
  </a>
);

const BtnOutline = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className="inline-flex items-center gap-2 font-semibold transition-colors duration-200 rounded px-6 py-3 text-sm border-2 cursor-pointer bg-transparent no-underline"
    style={{ borderColor: "hsl(var(--primary))", color: "hsl(var(--primary))" }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "hsl(var(--primary))";
      e.currentTarget.style.color = "white";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "hsl(var(--primary))";
    }}
  >
    {children}
  </a>
);

// ─── Main page ─────────────────────────────────────────────────────────────────
const Index = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Open Sans', sans-serif" }}>

      {/* ── TOP BAR ─────────────────────────────────────────────────────── */}
      <div className="hidden md:block py-2 text-sm" style={{ background: "hsl(var(--section-dark))", color: "rgba(255,255,255,0.75)" }}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Clock size={13} /> Seg–Sex: 8h–17h</span>
            <span className="flex items-center gap-1.5"><MapPin size={13} /> Campinas | Paulínia | Hortolândia | Sumaré | Cosmópolis | Artur Nogueira</span>
          </div>
          <span className="flex items-center gap-1.5"><Phone size={13} /> (19) 2512-6487</span>
        </div>
      </div>

      {/* ── NAVBAR ───────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: "hsl(var(--border))" }}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <img src={aurisLogoNova} alt="Auris Centro Auditivo" className="h-14 w-auto" />
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold" style={{ color: "hsl(var(--foreground))" }}>
            <a href="#sobre" className="hover:text-primary transition-colors" style={{ color: "inherit" }}>Sobre</a>
            <a href="#beneficios" className="hover:text-primary transition-colors" style={{ color: "inherit" }}>Serviços</a>
            <a href="#como-funciona" className="hover:text-primary transition-colors" style={{ color: "inherit" }}>Como funciona</a>
          </nav>
          <BtnPrimary href={WHATSAPP_URL} onClick={() => trackWhatsApp("Agendar Avaliação")}>
            <Phone size={15} />
            Agendar Avaliação
          </BtnPrimary>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* BOX 1 – HERO                                                      */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="relative" style={{ minHeight: 560 }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroProfissional}
            alt="Especialista Auris Centro Auditivo segurando aparelho auditivo"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 72%" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(20,28,48,0.82) 45%, rgba(20,28,48,0.25) 100%)" }}
          />
        </div>

        <div className="relative container mx-auto px-6 py-24 items-center flex flex-row" style={{ minHeight: 560 }}>
          <div style={{ maxWidth: 580 }}>
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-5 px-3 py-1.5 rounded"
              style={{ background: "hsl(var(--primary))", color: "white" }}
            >
              <Star size={12} fill="currentColor" />
              Atuando desde 2002
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: "white", fontFamily: "'Playfair Display', serif" }}
            >
              Volte a ouvir com<br />
              clareza e segurança
            </h1>

            <p className="text-base md:text-lg mb-8" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
              Soluções auditivas completas com acompanhamento profissional para devolver qualidade de vida a você e à sua família.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <BtnPrimary href={WHATSAPP_URL} onClick={() => trackWhatsApp("Quero agendar minha avaliação auditiva")} large>
                <Calendar size={18} />
                Quero agendar minha avaliação auditiva
              </BtnPrimary>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {["+ de 20 anos de experiência", "Equipe especializada", "Tecnologia de ponta"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.80)" }}>
                  <CheckCircle2 size={15} style={{ color: "hsl(var(--primary-light))" }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* BOX 2 – DOR                                                       */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16" style={{ background: "hsl(var(--section-dark))" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: "white", fontFamily: "'Playfair Display', serif" }}
            >
              Você se identifica com alguma dessas situações?
            </h2>
            <div className="mx-auto mt-3 mb-0 h-1 w-14 rounded" style={{ background: "hsl(var(--primary))" }} />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              "Você tem aumentado o volume da televisão cada vez mais?",
              "Precisa pedir para repetir o que foi dito?",
              "Evita conversas em família porque sente dificuldade para entender?",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded p-6"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <div
                  className="w-9 h-9 rounded flex items-center justify-center text-sm font-bold mb-4"
                  style={{ background: "hsl(var(--primary))", color: "white" }}
                >
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div
            className="rounded p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)", maxWidth: 620 }}>
              Esses são sinais comuns de perda auditiva.{" "}
              <strong style={{ color: "white" }}>Quanto antes você buscar uma avaliação especializada,</strong>{" "}
              maiores são as chances de recuperar sua qualidade de vida.
            </p>
            <div className="flex-shrink-0">
              <BtnPrimary href={WHATSAPP_URL} onClick={() => trackWhatsApp("Falar com especialista agora")}>
                <Phone size={15} />
                Falar com especialista agora
              </BtnPrimary>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* BOX 3 – APRESENTAÇÃO                                              */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section id="sobre" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div
              className="flex flex-col items-center justify-center rounded"
              style={{ background: "hsl(var(--primary-soft))", border: "1px solid hsl(var(--primary-light))", padding: "2.5rem" }}
            >
              <img
                src={aurisLogoNova}
                alt="Auris Centro Auditivo"
                className="object-contain"
                style={{ width: "100%", maxWidth: "340px", display: "block", margin: "0 auto" }}
              />
              <div className="mt-6 grid grid-cols-3 gap-4 w-full max-w-xs">
                {[
                  { value: "2002", label: "Ano de fundação" },
                  { value: "+20", label: "Anos de experiência" },
                  { value: "100%", label: "Foco no paciente" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center rounded p-3"
                    style={{ background: "white", border: "1px solid hsl(var(--border))" }}
                  >
                    <p className="text-xl font-bold" style={{ color: "hsl(var(--primary))", fontFamily: "'Playfair Display', serif" }}>
                      {s.value}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "hsl(var(--primary))" }}>
                Sobre a clínica
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-1">Auris Centro Auditivo</h2>
              <div className="h-1 w-12 rounded mb-5" style={{ background: "hsl(var(--primary))" }} />
              <p className="text-base mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
                Na <strong style={{ color: "hsl(var(--foreground))" }}>Auris Centro Auditivo</strong>, você encontra
                atendimento especializado em saúde auditiva com foco total na sua necessidade individual.
              </p>
              <p className="text-base mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
                Atuando desde <strong style={{ color: "hsl(var(--foreground))" }}>2002</strong>, nossa equipe realiza
                uma avaliação completa e indica a melhor solução para o seu caso, com acompanhamento profissional em
                todas as etapas — desde o diagnóstico até a adaptação do aparelho auditivo.
              </p>
              <p className="text-base mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                Aqui, cada paciente é atendido com{" "}
                <em className="not-italic font-semibold" style={{ color: "hsl(var(--primary-dark))" }}>
                  atenção, clareza e orientação personalizada.
                </em>
              </p>
              <BtnOutline href={WHATSAPP_URL} onClick={() => trackWhatsApp("Saiba mais")}>
                Saiba mais <ArrowRight size={15} />
              </BtnOutline>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* BOX 4 – BENEFÍCIOS                                                */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section id="beneficios" className="py-16" style={{ background: "hsl(var(--section-alt))" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "hsl(var(--primary))" }}>
              Por que escolher a Auris
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">Nossos Diferenciais</h2>
            <div className="mx-auto mt-3 h-1 w-12 rounded" style={{ background: "hsl(var(--primary))" }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
            {[
              { icon: HeadphonesIcon, title: "Aparelhos modernos e discretos", desc: "Tecnologia de ponta com design discreto e alta eficiência para cada estilo de vida." },
              { icon: Stethoscope, title: "Avaliação individualizada", desc: "Diagnóstico preciso e personalizado para identificar suas necessidades específicas." },
              { icon: CheckCircle2, title: "Acompanhamento profissional", desc: "Suporte completo do exame à plena adaptação do aparelho auditivo." },
              { icon: Star, title: "Facilidade de pagamento", desc: "Condições especiais de parcelamento para que sua saúde auditiva seja acessível." },
              { icon: Phone, title: "Atendimento humanizado", desc: "Cada paciente recebe atenção exclusiva, com escuta ativa e orientação clara." },
              { icon: Calendar, title: "Agendamento fácil e rápido", desc: "Marque sua avaliação com comodidade pelo WhatsApp e seja atendido no horário preferido." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded p-6 transition-shadow duration-200 hover:shadow-md"
                style={{ border: "1px solid hsl(var(--border))" }}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center mb-4"
                  style={{ background: "hsl(var(--primary-soft))", border: "1px solid hsl(var(--primary-light))" }}
                >
                  <item.icon size={20} style={{ color: "hsl(var(--primary))" }} />
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: "hsl(var(--foreground))", fontFamily: "'Open Sans', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <BtnPrimary href={WHATSAPP_URL} onClick={() => trackWhatsApp("Agendar avaliação pelo WhatsApp")} large>
              <Calendar size={18} />
              Agendar avaliação pelo WhatsApp
            </BtnPrimary>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* BOX 5 – COMO FUNCIONA                                             */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section id="como-funciona" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "hsl(var(--primary))" }}>
              Processo
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">Como funciona o seu atendimento?</h2>
            <div className="mx-auto mt-3 h-1 w-12 rounded" style={{ background: "hsl(var(--primary))" }} />
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Agende sua avaliação auditiva",
                desc: "Entre em contato com nossa equipe e escolha o melhor dia e horário para seu atendimento.",
              },
              {
                step: "02",
                title: "Realize seus exames com especialista",
                desc: "A fonoaudióloga realiza a avaliação auditiva completa para identificar seu grau de perda e suas necessidades específicas.",
              },
              {
                step: "03",
                title: "Receba a indicação e inicie a adaptação",
                desc: "Com base no diagnóstico, indicamos o aparelho auditivo mais adequado e acompanhamos todo o processo de adaptação para garantir conforto e eficiência.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 mb-0 last:mb-0">
                <div className="flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded flex items-center justify-center font-bold text-lg flex-shrink-0"
                    style={{ background: "hsl(var(--primary))", color: "white", fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {item.step}
                  </div>
                  {i < 2 && (
                    <div className="w-px flex-1 my-2" style={{ background: "hsl(var(--primary-light))", minHeight: 32 }} />
                  )}
                </div>
                <div className="pb-8">
                  <h3
                    className="text-lg font-bold mb-2 mt-3"
                    style={{ fontFamily: "'Playfair Display', serif", color: "hsl(var(--section-dark))" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* BOX 6 – CTA FINAL                                                 */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: "hsl(var(--primary))" }}>
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "white", fontFamily: "'Playfair Display', serif" }}
          >
            Volte a ouvir com clareza.<br />
            Volte a participar das conversas.
          </h2>
          <div className="mx-auto my-4 h-1 w-14 rounded" style={{ background: "rgba(255,255,255,0.4)" }} />
          <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
            Dê o primeiro passo para recuperar sua qualidade de vida hoje.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp("Agendar minha avaliação agora")}
            className="inline-flex items-center gap-3 px-8 py-4 rounded font-bold text-base transition-colors duration-200 cursor-pointer border-0 no-underline"
            style={{ background: "white", color: "hsl(var(--primary-dark))" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "hsl(var(--primary-soft))")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
          >
            <Calendar size={18} />
            Agendar minha avaliação agora
          </a>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer style={{ background: "hsl(var(--section-dark))" }}>
        <div className="container mx-auto px-6 py-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={aurisLogoNova} alt="Auris" className="h-16 w-auto mb-4" />
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                Cuidado auditivo especializado com mais de 20 anos de experiência e dedicação ao bem-estar dos nossos pacientes.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-4" style={{ color: "white", fontFamily: "'Open Sans', sans-serif" }}>
                Horário de Funcionamento
              </h4>
              <ul className="text-sm space-y-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                <li>Segunda a Sexta: 8h às 17h</li>
                <li>Sábado e Domingo: Fechado</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-4" style={{ color: "white", fontFamily: "'Open Sans', sans-serif" }}>
                Contato
              </h4>
              <ul className="text-sm space-y-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                <li className="flex items-center gap-2"><Phone size={13} /> (19) 2512-6487</li>
                <li className="flex items-center gap-2"><MapPin size={13} /> Campinas | Paulínia | Hortolândia | Sumaré | Cosmópolis | Artur Nogueira</li>
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp("WhatsApp")}
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold px-4 py-2 rounded transition-colors duration-200 cursor-pointer border-0 no-underline"
                style={{ background: "hsl(var(--primary))", color: "white" }}
              >
                <Phone size={13} />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
            <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
              © {new Date().getFullYear()} Auris Centro Auditivo — Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
