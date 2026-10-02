import aurisLogoNova from "@/assets/auris-logo-nova.png";
import heroProfissional from "@/assets/hero-profissional.jpg";
import {
  Phone,
  CheckCircle2,
  Stethoscope,
  HeadphonesIcon,
  Star,
  ArrowRight,
  MapPin,
  Clock,
  Battery,
  Ear,
  Wrench,
  CreditCard,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/551925126487?text=" + encodeURIComponent("Olá! Gostaria de saber mais sobre aparelhos auditivos.");

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
const AparelhosAuditivos = () => {
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
              className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
              style={{ color: "white", fontFamily: "'Playfair Display', serif" }}
            >
              Aparelho auditivo moderno e discreto, com adaptação feita por fonoaudióloga e suporte depois da compra
            </h1>

            <p className="text-base md:text-lg mb-8" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
              Na Auris Centro Auditivo, você faz a avaliação da sua audição, recebe a indicação do aparelho certo para o seu grau de perda e continua com suporte depois da compra, com pilhas, moldes, manutenção e conserto nas unidades de Campinas, Sumaré, Hortolândia, Paulínia, Cosmópolis e Artur Nogueira.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <BtnPrimary href={WHATSAPP_URL} onClick={() => trackWhatsApp("Quero meu aparelho auditivo")} large>
                <HeadphonesIcon size={18} />
                Quero meu aparelho auditivo
              </BtnPrimary>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {["+ de 20 anos de experiência", "Adaptação com fonoaudióloga", "Suporte depois da compra"].map((t) => (
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
              "Já sabe que precisa de aparelho auditivo e quer escolher o modelo certo para a sua rotina?",
              "Seu aparelho parou de funcionar, está chiando, falhando ou com o som baixo?",
              "O molde do seu aparelho está ressecado ou já não encaixa direito?",
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
              Na Auris você encontra{" "}
              <strong style={{ color: "white" }}>tudo o que precisa para voltar a ouvir bem, em um só lugar:</strong>{" "}
              aparelhos auditivos, pilhas, conserto, moldes e tampões, mesmo que o seu aparelho tenha sido comprado em outro lugar.
            </p>
            <div className="flex-shrink-0">
              <BtnPrimary href={WHATSAPP_URL} onClick={() => trackWhatsApp("Quero meu aparelho auditivo")}>
                <Phone size={15} />
                Quero meu aparelho auditivo
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
                Desde <strong style={{ color: "hsl(var(--foreground))" }}>2002</strong>, a Auris Centro Auditivo trabalha para devolver a quem tem perda auditiva o prazer de conversar, participar dos encontros de família e viver o dia a dia sem precisar pedir para as pessoas repetirem.
              </p>
              <p className="text-base mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
                Trabalhamos com aparelhos auditivos de marcas importadas, com modelos discretos, recarregáveis e com conexão para celular e TV. Se você já tem o seu exame e a indicação do aparelho, é só trazer. Se ainda não tem, também fazemos a audiometria.
              </p>
              <p className="text-base mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                Depois da compra, a Auris continua com você, com{" "}
                <em className="not-italic font-semibold" style={{ color: "hsl(var(--primary-dark))" }}>
                  adaptação acompanhada pela fonoaudióloga, pilhas, moldes, manutenção e conserto,
                </em>{" "}
                para que o seu aparelho funcione bem por muitos anos.
              </p>
              <BtnOutline href={WHATSAPP_URL} onClick={() => trackWhatsApp("Quero meu aparelho auditivo")}>
                Quero meu aparelho auditivo <ArrowRight size={15} />
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
              {
                icon: HeadphonesIcon,
                title: "Aparelhos auditivos modernos e discretos",
                desc: "Modelos intracanais, retroauriculares e recarregáveis, com conexão para celular e TV.",
              },
              {
                icon: Battery,
                title: "Pilhas para aparelho auditivo",
                desc: "Pilhas nos tamanhos dos principais modelos, para você nunca ficar sem ouvir por falta de bateria.",
              },
              {
                icon: Ear,
                title: "Tampão auditivo",
                desc: "Tampões de proteção para quem precisa se proteger do barulho ou evitar a entrada de água no ouvido.",
              },
              {
                icon: Wrench,
                title: "Conserto e moldes",
                desc: "Atendemos também aparelhos comprados em outros lugares, com moldes feitos sob medida.",
              },
              {
                icon: Star,
                title: "Mais de 20 anos de experiência",
                desc: "Desde 2002 ajudando pessoas a voltar a ouvir bem com o aparelho certo.",
              },
              {
                icon: CreditCard,
                title: "Facilidade de pagamento",
                desc: "Condições especiais de parcelamento para o aparelho caber no seu orçamento.",
              },
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
            <BtnPrimary href={WHATSAPP_URL} onClick={() => trackWhatsApp("Quero meu aparelho auditivo")} large>
              <HeadphonesIcon size={18} />
              Quero meu aparelho auditivo
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
                title: "Fale com a nossa equipe",
                desc: "Tire suas dúvidas sobre aparelho auditivo com a nossa equipe e agende seu horário na unidade mais perto de você.",
              },
              {
                step: "02",
                title: "Traga o seu exame",
                desc: "É só trazer o seu exame e a indicação que a gente apresenta os modelos adequados para o seu caso. Se ainda não tem, também fazemos a audiometria.",
              },
              {
                step: "03",
                title: "Faça a adaptação do aparelho",
                desc: "O seu aparelho é regulado e ajustado pela fonoaudióloga de acordo com o seu grau de perda, o seu conforto e as situações do seu dia a dia, com acompanhamento até você se acostumar com ele.",
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
            onClick={() => trackWhatsApp("Quero escolher meu aparelho auditivo")}
            className="inline-flex items-center gap-3 px-8 py-4 rounded font-bold text-base transition-colors duration-200 cursor-pointer border-0 no-underline"
            style={{ background: "white", color: "hsl(var(--primary-dark))" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "hsl(var(--primary-soft))")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
          >
            <HeadphonesIcon size={18} />
            Quero escolher meu aparelho auditivo
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

export default AparelhosAuditivos;
