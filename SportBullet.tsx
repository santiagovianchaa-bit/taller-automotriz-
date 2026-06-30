/*
 * ============================================================
 * SPORT BULLET — TALLER DE ALTO RENDIMIENTO
 * Schema.org JSON-LD Markup (SEO + AI-Ready)
 * ============================================================
 *
 * {
 *   "@context": "https://schema.org",
 *   "@type": "AutoRepair",
 *   "@id": "https://sportbullet.co/#taller",
 *   "name": "Sport Bullet",
 *   "description": "Taller especializado en puesta a punto de autos deportivos. Expertos en reprogramación de ECUs, suspensión de alto rendimiento, frenos de competencia y preparación de motores.",
 *   "url": "https://sportbullet.co",
 *   "telephone": "+57-321-555-0198",
 *   "email": "pit@sportbullet.co",
 *   "address": {
 *     "@type": "PostalAddress",
 *     "streetAddress": "Calle 72 # 45-12, Zona Industrial",
 *     "addressLocality": "Medellín",
 *     "addressRegion": "Antioquia",
 *     "postalCode": "050001",
 *     "addressCountry": "CO"
 *   },
 *   "geo": {
 *     "@type": "GeoCoordinates",
 *     "latitude": 6.2442,
 *     "longitude": -75.5812
 *   },
 *   "openingHoursSpecification": [
 *     {
 *       "@type": "OpeningHoursSpecification",
 *       "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
 *       "opens": "08:00",
 *       "closes": "18:00"
 *     },
 *     {
 *       "@type": "OpeningHoursSpecification",
 *       "dayOfWeek": "Saturday",
 *       "opens": "09:00",
 *       "closes": "14:00"
 *     }
 *   ],
 *   "hasOfferCatalog": {
 *     "@type": "OfferCatalog",
 *     "name": "Servicios Sport Bullet",
 *     "itemListElement": [
 *       { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Puesta a punto de motor", "description": "Diagnóstico OBD2, ajuste de válvulas, timing y rendimiento máximo del tren motriz." } },
 *       { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reprogramación de ECU", "description": "Flash y calibración de mapas de inyección, ignición y boost para ganar potencia real." } },
 *       { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Suspensión de alto rendimiento", "description": "Instalación y alineación de coilovers ajustables, barras estabilizadoras y geometría de competencia." } },
 *       { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Frenos de competencia", "description": "Kits de frenos Brembo y AP Racing, pastillas de carbono-cerámica y bedding profesional." } }
 *     ]
 *   },
 *   "priceRange": "$$",
 *   "aggregateRating": {
 *     "@type": "AggregateRating",
 *     "ratingValue": "4.9",
 *     "reviewCount": "217"
 *   },
 *   "sameAs": [
 *     "https://www.instagram.com/sportbulletco",
 *     "https://www.youtube.com/@sportbulletco",
 *     "https://www.tiktok.com/@sportbulletco"
 *   ]
 * }
 * ============================================================
 */

import { useState, useEffect } from "react";
import {
  Zap, Settings, Gauge, Shield, ChevronRight, Phone,
  MapPin, Clock, Instagram, Youtube, Star, CheckCircle,
  ArrowRight, Wrench, Activity, Target, Award
} from "lucide-react";

// ─── COILOVER DATA ───────────────────────────────────────────
const COILOVERS = {
  street: {
    tag: "Street / Daily",
    name: "SB Street Pro Series",
    subtitle: "Confort sin renunciar al carácter",
    badge: "MÁS VENDIDO",
    badgeColor: "#F5C518",
    specs: [
      { label: "Ajuste de amortiguación", value: "16 vías" },
      { label: "Tecnología", value: "Biturbo monotubo" },
      { label: "Rebaje máximo", value: "–50 mm" },
      { label: "Resortes", value: "6–8 kg/mm" },
      { label: "Materiales", value: "Aluminio T6 anodizado" },
      { label: "Garantía", value: "3 años" },
    ],
    description:
      "Diseñados para el conductor que quiere una postura más baja y una respuesta más viva sin sacrificar el uso diario. Absorción progresiva que filtra los malos pavimentos y te mantiene pegado en curvas.",
    benefit: {
      title: "¿Por qué le sirve a tu auto?",
      body: "El centro de gravedad se reduce entre 30 y 50 mm, lo que disminuye el rolido en curva hasta un 40 %. La amortiguación de 16 vías te permite afinar la respuesta para la calle sin que el auto te golpee en cada badén. Resultado: más agarre, menos fatiga en trayectos largos.",
    },
    color: "#F5C518",
  },
  track: {
    tag: "Track Day",
    name: "SB Track Attack",
    subtitle: "Domina cada curva del circuito",
    badge: "RECOMENDADO PRO",
    badgeColor: "#FF0033",
    specs: [
      { label: "Ajuste de amortiguación", value: "24 vías" },
      { label: "Tecnología", value: "Monotubo invertido" },
      { label: "Rebaje máximo", value: "–80 mm" },
      { label: "Resortes", value: "10–14 kg/mm" },
      { label: "Materiales", value: "Acero inox. N4 + titanio" },
      { label: "Garantía", value: "2 años competencia" },
    ],
    description:
      "Para días de circuito donde cada décima importa. Construcción monotubo invertida que disipa el calor generado en frenadas repetidas y mantiene la respuesta constante durante toda la sesión.",
    benefit: {
      title: "¿Por qué le sirve a tu auto?",
      body: "El monotubo invertido elimina la cavitación del aceite bajo cargas laterales extremas, garantizando amortiguación lineal en S chicanes y frenadas tardías. Las 24 vías permiten ajustar por separado compresión lenta, compresión rápida y extensión para calibrar exacto el balance subviraje/sobreviraje de tu auto en cada circuito.",
    },
    color: "#FF0033",
  },
  comp: {
    tag: "Competition Full",
    name: "SB Race Spec R1",
    subtitle: "El mismo kit que usan los pilotos",
    badge: "ELITE",
    badgeColor: "#C0C0C0",
    specs: [
      { label: "Ajuste de amortiguación", value: "40 vías C+E independientes" },
      { label: "Tecnología", value: "Monotubo remoto con depósito" },
      { label: "Rebaje máximo", value: "Plataformas ajustables" },
      { label: "Resortes", value: "16–24 kg/mm helicoidal/Eibach" },
      { label: "Materiales", value: "Titanio aeroespacial grado 5" },
      { label: "Garantía", value: "Asistencia en boxes" },
    ],
    description:
      "Tecnología directa del motorsport. Depósito externo de nitrógeno que mantiene el aceite a temperatura óptima en sesiones de carrera largas. Setup personalizado por nuestros ingenieros en banco dinamométrico.",
    benefit: {
      title: "¿Por qué le sirve a tu auto?",
      body: "El depósito remoto separa el gas del aceite con total eficiencia, eliminando el fade térmico incluso en 40 minutos de carrera ininterrumpida. Las plataformas ajustables permiten cambiar altura sin alterar precarga del resorte, lo que significa que puedes ajustar aerodinámica raza a raza manteniendo el setup de suspensión intacto.",
    },
    color: "#C0C0C0",
  },
};

// ─── SERVICES DATA ───────────────────────────────────────────
const SERVICES = [
  {
    icon: Wrench,
    title: "Puesta a Punto de Motor",
    desc: "Diagnóstico OBD2 avanzado, ajuste de válvulas, timing preciso y optimización completa del tren motriz para extraer cada caballo de tu motor.",
    detail: "Hasta +18% de torque recuperado",
    accent: "#FF0033",
  },
  {
    icon: Activity,
    title: "Reprogramación de ECU",
    desc: "Flash y calibración de mapas de inyección, ignición y boost. Corremos en banco dinamométrico antes y después para garantizar resultados reales.",
    detail: "Ganancias verificadas en banco",
    accent: "#FF0033",
  },
  {
    icon: Target,
    title: "Suspensión High Performance",
    desc: "Instalación y alineación de coilovers ajustables, barras estabilizadoras de competencia y geometría de rueda optimizada para tu manejo.",
    detail: "Geometría 4 ruedas incluida",
    accent: "#FF0033",
  },
  {
    icon: Shield,
    title: "Frenos de Competencia",
    desc: "Kits Brembo y AP Racing, pastillas de carbono-cerámica y bedding profesional. Tu auto para antes de donde lo necesitas, siempre.",
    detail: "Distancia de frenada –22%",
    accent: "#FF0033",
  },
];

// ─── STATS ───────────────────────────────────────────────────
const STATS = [
  { value: "1.200+", label: "Autos preparados" },
  { value: "97%", label: "Clientes satisfechos" },
  { value: "4.9★", label: "Rating Google" },
  { value: "12 años", label: "En el circuito" },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────
export default function SportBullet() {
  const [activeCoilover, setActiveCoilover] = useState("street");
  const [scrolled, setScrolled] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabChange = (key) => {
    setActiveCoilover(key);
    setAnimKey((k) => k + 1);
  };

  const coil = COILOVERS[activeCoilover];

  return (
    <div
      style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", background: "#05050A", color: "#E8E8F0", overflowX: "hidden" }}
    >
      {/* ── INLINE STYLES ─────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .nav-glass {
          background: rgba(5,5,10,0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,0,51,0.15);
        }

        .slash-accent::before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 1.15em;
          background: #FF0033;
          margin-right: 14px;
          vertical-align: middle;
          transform: skewX(-12deg);
          flex-shrink: 0;
        }

        .stripe-bg {
          background: repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 18px,
            rgba(255,0,51,0.03) 18px,
            rgba(255,0,51,0.03) 19px
          );
        }

        .card-service {
          background: rgba(20,20,30,0.8);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 2px;
          padding: 32px 28px;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .card-service::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: #FF0033;
          transition: width 0.35s ease;
        }
        .card-service:hover {
          transform: translateY(-6px);
          border-color: rgba(255,0,51,0.3);
          box-shadow: 0 20px 60px rgba(255,0,51,0.08);
        }
        .card-service:hover::after { width: 100%; }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FF0033;
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 16px 36px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%);
        }
        .cta-btn:hover {
          transform: scale(1.04);
          background: #e6002e;
          box-shadow: 0 0 40px rgba(255,0,51,0.45);
        }

        .cta-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #E8E8F0;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 15px 32px;
          border: 1px solid rgba(232,232,240,0.3);
          cursor: pointer;
          transition: all 0.2s ease;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%);
        }
        .cta-btn-ghost:hover {
          border-color: #FF0033;
          color: #FF0033;
        }

        .tab-btn {
          padding: 10px 24px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          cursor: pointer;
          border: none;
          background: transparent;
          transition: all 0.2s ease;
          position: relative;
        }

        .tab-btn.active {
          color: #05050A;
        }
        .tab-btn:not(.active) {
          color: rgba(232,232,240,0.5);
        }
        .tab-btn:not(.active):hover {
          color: rgba(232,232,240,0.9);
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .fade-in {
          animation: fadeUp 0.4s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .float-wa {
          position: fixed;
          bottom: 28px; right: 28px;
          width: 60px; height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 30px rgba(37,211,102,0.45);
          cursor: pointer;
          z-index: 999;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .float-wa:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 40px rgba(37,211,102,0.6);
        }

        .hero-gradient {
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,0,51,0.12) 0%, transparent 65%),
                      radial-gradient(ellipse 50% 40% at 80% 80%, rgba(245,197,24,0.05) 0%, transparent 60%),
                      #05050A;
        }

        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #FF0033;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .section-label::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: #FF0033;
        }

        .stat-card {
          text-align: center;
          padding: 28px 16px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(20,20,30,0.6);
        }

        .benefit-block {
          background: rgba(255,0,51,0.07);
          border-left: 3px solid #FF0033;
          border-radius: 0 2px 2px 0;
          padding: 20px 24px;
        }

        .social-link {
          width: 40px; height: 40px;
          border: 1px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: rgba(232,232,240,0.5);
        }
        .social-link:hover {
          border-color: #FF0033;
          color: #FF0033;
          background: rgba(255,0,51,0.08);
        }

        .nav-link {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(232,232,240,0.6);
          cursor: pointer;
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .nav-link:hover { color: #FF0033; }

        .badge-pill {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
          padding: 4px 10px;
          border-radius: 0;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: clamp(52px, 14vw, 96px) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .coil-layout { flex-direction: column !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .tab-area { flex-direction: column !important; }
          .hero-actions { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>

      {/* ── FLOATING WHATSAPP ─────────────────────────────── */}
      <div
        className="float-wa"
        title="Agenda tu cita por WhatsApp"
        onClick={() => window.open("https://wa.me/573215550198?text=Hola%20Sport%20Bullet%2C%20quiero%20agendar%20una%20cita", "_blank")}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </div>

      {/* ── NAVBAR ────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          transition: "all 0.3s ease",
        }}
        className={scrolled ? "nav-glass" : ""}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, background: "#FF0033", clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Zap size={16} color="white" fill="white" />
            </div>
            <span style={{ fontWeight: 900, fontSize: 18, letterSpacing: "0.08em", color: "#E8E8F0", textTransform: "uppercase" }}>
              Sport<span style={{ color: "#FF0033" }}>Bullet</span>
            </span>
          </div>
          {/* Links */}
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <a className="nav-link" href="#servicios">Servicios</a>
            <a className="nav-link" href="#catalogo">Coilovers</a>
            <a className="nav-link" href="#contacto">Contacto</a>
            <button
              className="cta-btn"
              style={{ padding: "10px 22px", fontSize: 12 }}
              onClick={() => window.open("https://wa.me/573215550198?text=Quiero%20agendar%20una%20cita", "_blank")}
            >
              Agendar cita
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── HERO ─────────────────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="hero-gradient stripe-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 68 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
          {/* Eyebrow */}
          <div className="section-label">Taller de alto rendimiento — Medellín, Colombia</div>

          {/* Title */}
          <h1
            className="hero-title"
            style={{
              fontSize: "clamp(72px, 12vw, 130px)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              marginBottom: 32,
            }}
          >
            <span style={{ display: "block", color: "#E8E8F0" }}>SPORT</span>
            <span style={{ display: "block", color: "#FF0033", WebkitTextStroke: "2px #FF0033" }}>BULLET</span>
          </h1>

          {/* Value prop */}
          <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(232,232,240,0.65)", maxWidth: 560, marginBottom: 48, fontWeight: 400 }}>
            Tu auto tiene más potencia de la que te entregaron. Nosotros la despertamos.
            <br />
            <span style={{ color: "#E8E8F0", fontWeight: 600 }}>Diagnóstico, preparación y puesta a punto de competencia</span> para autos que no se conforman con el promedio.
          </p>

          {/* CTAs */}
          <div className="hero-actions" style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <button
              className="cta-btn"
              onClick={() => window.open("https://wa.me/573215550198?text=Hola%2C%20quiero%20agendar%20una%20cita%20en%20Sport%20Bullet", "_blank")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar por WhatsApp
            </button>
            <button
              className="cta-btn-ghost"
              onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver servicios <ChevronRight size={16} />
            </button>
          </div>

          {/* Trust badges */}
          <div style={{ marginTop: 72, display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              { icon: CheckCircle, text: "Diagnóstico OBD2 incluido" },
              { icon: Award, text: "Técnicos certificados" },
              { icon: Gauge, text: "Verificación en banco" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(232,232,240,0.5)", fontSize: 13, fontWeight: 500 }}>
                <Icon size={15} color="#FF0033" />
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Decorative right element */}
        <div style={{
          position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)",
          width: "42%", height: "70%", maxWidth: 500, pointerEvents: "none",
          background: "linear-gradient(135deg, rgba(255,0,51,0.06) 0%, transparent 60%)",
          borderLeft: "1px solid rgba(255,0,51,0.1)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{ textAlign: "center", opacity: 0.08 }}>
            <Zap size={200} color="#FF0033" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── STATS BAR ─────────────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════ */}
      <section style={{ background: "rgba(255,0,51,0.06)", borderTop: "1px solid rgba(255,0,51,0.15)", borderBottom: "1px solid rgba(255,0,51,0.15)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {STATS.map((s, i) => (
              <div
                key={i}
                className="stat-card"
                style={{ borderLeft: i > 0 ? "1px solid rgba(255,0,51,0.1)" : "none", borderRight: "none", borderTop: "none", borderBottom: "none" }}
              >
                <div style={{ fontSize: 36, fontWeight: 900, color: "#FF0033", letterSpacing: "-0.02em", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 12, color: "rgba(232,232,240,0.5)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 6 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── SERVICIOS ────────────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════ */}
      <section id="servicios" style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="section-label">Nuestros servicios</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <h2
            style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", textTransform: "uppercase" }}
            className="slash-accent"
          >
            Lo que hacemos<br />mejor que nadie
          </h2>
          <p style={{ maxWidth: 320, color: "rgba(232,232,240,0.5)", fontSize: 15, lineHeight: 1.7 }}>
            Cada servicio está respaldado por técnicos con experiencia en motorsport real y equipos de diagnóstico de última generación.
          </p>
        </div>

        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="card-service">
                {/* Icon + number */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                  <div style={{ width: 52, height: 52, background: "rgba(255,0,51,0.1)", display: "flex", alignItems: "center", justifyContent: "center", clipPath: "polygon(0 0, 80% 0, 100% 100%, 20% 100%)" }}>
                    <Icon size={22} color="#FF0033" />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "rgba(232,232,240,0.2)", textTransform: "uppercase" }}>
                    0{i + 1}
                  </span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#E8E8F0" }}>
                  {s.title}
                </h3>
                <p style={{ color: "rgba(232,232,240,0.55)", fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>
                  {s.desc}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#FF0033", fontSize: 12, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" }}>
                  <CheckCircle size={14} />
                  {s.detail}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── COILOVERS GADGET ─────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════ */}
      <section id="catalogo" style={{ background: "#0C0C14", padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-label">Catálogo de suspensión</div>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 54px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", textTransform: "uppercase", marginBottom: 12 }}
            className="slash-accent">
            Coilovers para cada<br />nivel de exigencia
          </h2>
          <p style={{ color: "rgba(232,232,240,0.45)", fontSize: 15, marginBottom: 52, maxWidth: 480, lineHeight: 1.7 }}>
            Selecciona el kit que más se ajusta a tu forma de manejar. Instalación con geometría incluida.
          </p>

          {/* TABS */}
          <div
            className="tab-area"
            style={{
              display: "inline-flex",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: 4,
              marginBottom: 48,
              gap: 4,
            }}
          >
            {Object.entries(COILOVERS).map(([key, val]) => (
              <button
                key={key}
                className={`tab-btn ${activeCoilover === key ? "active" : ""}`}
                style={
                  activeCoilover === key
                    ? { background: val.color, color: key === "comp" ? "#05050A" : "#05050A" }
                    : {}
                }
                onClick={() => handleTabChange(key)}
              >
                {val.tag}
              </button>
            ))}
          </div>

          {/* COILOVER CONTENT */}
          <div key={animKey} className="fade-in coil-layout" style={{ display: "flex", gap: 32 }}>
            {/* LEFT: Main info */}
            <div style={{ flex: "0 0 55%", display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Header */}
              <div style={{ borderLeft: `3px solid ${coil.color}`, paddingLeft: 20 }}>
                <div style={{ marginBottom: 8 }}>
                  <span
                    className="badge-pill"
                    style={{ background: coil.badgeColor, color: "#05050A", marginBottom: 12, display: "inline-block" }}
                  >
                    {coil.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: 30, fontWeight: 900, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#E8E8F0", marginBottom: 4 }}>
                  {coil.name}
                </h3>
                <p style={{ color: "rgba(232,232,240,0.5)", fontSize: 15, fontWeight: 400 }}>{coil.subtitle}</p>
              </div>

              {/* Description */}
              <p style={{ color: "rgba(232,232,240,0.65)", fontSize: 15, lineHeight: 1.8 }}>
                {coil.description}
              </p>

              {/* Benefit block */}
              <div className="benefit-block">
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF0033", marginBottom: 10 }}>
                  {coil.benefit.title}
                </div>
                <p style={{ color: "rgba(232,232,240,0.7)", fontSize: 14, lineHeight: 1.8 }}>
                  {coil.benefit.body}
                </p>
              </div>

              {/* CTA */}
              <div style={{ paddingTop: 8 }}>
                <button
                  className="cta-btn"
                  onClick={() => window.open(`https://wa.me/573215550198?text=Hola%2C%20me%20interesa%20el%20${encodeURIComponent(coil.name)}`, "_blank")}
                >
                  Consultar precio <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* RIGHT: Specs */}
            <div style={{ flex: 1, background: "rgba(20,20,30,0.8)", border: "1px solid rgba(255,255,255,0.06)", padding: "32px 28px" }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(232,232,240,0.35)", marginBottom: 24 }}>
                Especificaciones técnicas
              </div>
              <div>
                {coil.specs.map((spec, i) => (
                  <div key={i} className="spec-row" style={{ borderColor: i === coil.specs.length - 1 ? "transparent" : "rgba(255,255,255,0.06)" }}>
                    <span style={{ fontSize: 13, color: "rgba(232,232,240,0.45)", fontWeight: 500 }}>{spec.label}</span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: coil.color }}>{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Visual accent */}
              <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: 12, alignItems: "center" }}>
                <Settings size={20} color={coil.color} style={{ opacity: 0.8 }} />
                <span style={{ fontSize: 12, color: "rgba(232,232,240,0.4)", lineHeight: 1.5 }}>
                  Instalación profesional incluye alineación 4 ruedas y ajuste inicial de amortiguación.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── WHY US ───────────────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "120px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="section-label">¿Por qué elegirnos?</div>
        <h2 style={{ fontSize: "clamp(32px, 4.5vw, 50px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: 64 }}
          className="slash-accent">
          El equipo que trabaja<br />con pilotos de verdad
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1 }}>
          {[
            { icon: Gauge, title: "Banco dinamométrico propio", body: "Cada trabajo se verifica antes y después en nuestro banco Dynapack. No prometemos lo que no podemos medir." },
            { icon: Activity, title: "Ingeniería, no mecánica de calle", body: "Nuestros técnicos han preparado autos para competencias nacionales. Traen ese conocimiento a cada proyecto." },
            { icon: Star, title: "Garantía por escrito", body: "Cada servicio lleva garantía firmada. Si algo no queda como prometimos, lo corregimos sin costo adicional." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{ background: "rgba(15,15,20,0.9)", padding: "40px 32px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <Icon size={28} color="#FF0033" style={{ marginBottom: 20 }} />
                <h3 style={{ fontSize: 17, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 12, color: "#E8E8F0" }}>{item.title}</h3>
                <p style={{ color: "rgba(232,232,240,0.5)", fontSize: 14, lineHeight: 1.8 }}>{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── CTA STRIP ────────────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════ */}
      <section style={{ background: "#FF0033", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Zap size={36} color="rgba(255,255,255,0.3)" style={{ marginBottom: 20, margin: "0 auto 20px" }} />
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", color: "white", marginBottom: 16 }}>
            Tu auto está esperando<br />su versión más rápida
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, marginBottom: 40, lineHeight: 1.7 }}>
            Cupos limitados por semana. Agenda hoy y recibe diagnóstico inicial sin costo adicional.
          </p>
          <button
            className="cta-btn"
            style={{ background: "white", color: "#FF0033" }}
            onClick={() => window.open("https://wa.me/573215550198?text=Quiero%20mi%20diagnóstico%20inicial%20gratuito", "_blank")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF0033">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Diagnóstico gratuito
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── FOOTER ───────────────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════ */}
      <footer id="contacto" style={{ background: "#05050A", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 24px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 32, height: 32, background: "#FF0033", clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Zap size={16} color="white" fill="white" />
                </div>
                <span style={{ fontWeight: 900, fontSize: 18, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Sport<span style={{ color: "#FF0033" }}>Bullet</span>
                </span>
              </div>
              <p style={{ color: "rgba(232,232,240,0.4)", fontSize: 14, lineHeight: 1.8, maxWidth: 280, marginBottom: 24 }}>
                Taller especializado en autos deportivos. Nos tomamos tu rendimiento tan en serio como tú.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {[Instagram, Youtube].map((Icon, i) => (
                  <div key={i} className="social-link">
                    <Icon size={16} />
                  </div>
                ))}
                {/* TikTok */}
                <div className="social-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.26 8.26 0 004.83 1.56V6.82a4.85 4.85 0 01-1.07-.13z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", color: "rgba(232,232,240,0.3)", textTransform: "uppercase", marginBottom: 20 }}>Servicios</div>
              {["Puesta a punto", "Reprogramación ECU", "Suspensión", "Frenos", "Diagnóstico"].map((item) => (
                <div key={item} style={{ color: "rgba(232,232,240,0.5)", fontSize: 14, marginBottom: 10, cursor: "pointer", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.target.style.color = "#FF0033"}
                  onMouseLeave={(e) => e.target.style.color = "rgba(232,232,240,0.5)"}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Horarios */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", color: "rgba(232,232,240,0.3)", textTransform: "uppercase", marginBottom: 20 }}>Horarios</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", color: "rgba(232,232,240,0.5)", fontSize: 13 }}>
                  <Clock size={13} color="#FF0033" />
                  <span>Lun – Vie: 8:00 – 18:00</span>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", color: "rgba(232,232,240,0.5)", fontSize: 13 }}>
                  <Clock size={13} color="#FF0033" />
                  <span>Sáb: 9:00 – 14:00</span>
                </div>
                <div style={{ fontSize: 12, color: "rgba(232,232,240,0.3)", marginTop: 8, fontStyle: "italic" }}>
                  Domingos cerrado
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", color: "rgba(232,232,240,0.3)", textTransform: "uppercase", marginBottom: 20 }}>Contacto</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <Phone size={14} color="#FF0033" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ color: "rgba(232,232,240,0.7)", fontSize: 14, fontWeight: 600 }}>+57 321 555 0198</div>
                    <div style={{ color: "rgba(232,232,240,0.35)", fontSize: 12 }}>WhatsApp disponible</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <MapPin size={14} color="#FF0033" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ color: "rgba(232,232,240,0.7)", fontSize: 14 }}>Calle 72 # 45-12</div>
                    <div style={{ color: "rgba(232,232,240,0.35)", fontSize: 12 }}>Zona Industrial, Medellín</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ width: 14, height: 14, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 6, height: 6, background: "#FF0033", borderRadius: "50%" }} />
                  </div>
                  <div style={{ color: "rgba(232,232,240,0.5)", fontSize: 13 }}>pit@sportbullet.co</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ color: "rgba(232,232,240,0.25)", fontSize: 12 }}>
              © 2025 Sport Bullet. Todos los derechos reservados.
            </span>
            <span style={{ color: "rgba(232,232,240,0.2)", fontSize: 11, letterSpacing: "0.05em" }}>
              Velocidad. Precisión. Sin excusas.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
