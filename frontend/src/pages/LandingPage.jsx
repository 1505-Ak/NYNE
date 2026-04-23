import { motion } from 'framer-motion';
import { Plus, Minus, ChevronDown, Check, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Image URLs
const IMAGES = {
  logo: "https://customer-assets.emergentagent.com/job_energy-drink-shop-1/artifacts/8y6dbdc8_WhatsApp%20Image%202026-04-13%20at%2020.44.10%282%29.jpeg",
  heroLifestyle: "https://customer-assets.emergentagent.com/job_energy-drink-shop-1/artifacts/ykj8544m_Gemini_Generated_Image_b9gqxlb9gqxlb9gq.png",
  canTennis: "https://customer-assets.emergentagent.com/job_energy-drink-shop-1/artifacts/i0c8zod5_WhatsApp%20Image%202026-04-01%20at%2001.57.03%287%29.jpeg",
  pouringCans: "https://customer-assets.emergentagent.com/job_energy-drink-shop-1/artifacts/gfnwlih2_WhatsApp%20Image%202026-04-21%20at%2023.12.25.jpeg",
  noMoreCrash: "https://customer-assets.emergentagent.com/job_energy-drink-shop-1/artifacts/xeahfqpg_WhatsApp%20Image%202026-04-08%20at%2018.06.59%281%29.jpeg",
  handsWithCans: "https://customer-assets.emergentagent.com/job_energy-drink-shop-1/artifacts/aqtm2iy9_WhatsApp%20Image%202026-04-01%20at%2001.57.03%286%29.jpeg",
  supplementFacts: "https://customer-assets.emergentagent.com/job_ef45c674-3601-48b7-9922-7d1e6f395e60/artifacts/1npshgv4_WhatsApp%20Image%202026-04-08%20at%2020.19.22.jpeg",
};

const SHOPIFY_URL = "#";

// Logo Component
const Logo = () => (
  <img 
    src={IMAGES.logo} 
    alt="NYNE Focus" 
    className="h-10 lg:h-12 w-auto object-contain"
  />
);

// Top Banner with Logo and Wave
const TopBanner = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative bg-white" data-testid="top-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-5">
          <a href="/" className="flex items-center" data-testid="logo-link">
            <Logo />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#problem" className="text-[#003342]/70 hover:text-[#003342] font-semibold text-sm transition-colors">The Problem</a>
            <a href="#product" className="text-[#003342]/70 hover:text-[#003342] font-semibold text-sm transition-colors">Product</a>
            <a href="#ingredients" className="text-[#003342]/70 hover:text-[#003342] font-semibold text-sm transition-colors">Ingredients</a>
            <a href="#faq" className="text-[#003342]/70 hover:text-[#003342] font-semibold text-sm transition-colors">FAQ</a>
            <a 
              href={SHOPIFY_URL}
              className="bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] text-white px-6 py-2.5 font-bold text-sm hover:shadow-lg transition-all rounded-full"
              data-testid="header-buy-btn"
            >
              Shop Now
            </a>
          </nav>

          <button 
            className="lg:hidden p-2 text-[#003342]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden pb-4 flex flex-col gap-2" 
            data-testid="mobile-menu"
          >
            <a href="#problem" className="text-[#003342]/70 hover:text-[#003342] font-semibold py-3 px-4 rounded-xl">The Problem</a>
            <a href="#product" className="text-[#003342]/70 hover:text-[#003342] font-semibold py-3 px-4 rounded-xl">Product</a>
            <a href="#ingredients" className="text-[#003342]/70 hover:text-[#003342] font-semibold py-3 px-4 rounded-xl">Ingredients</a>
            <a href="#faq" className="text-[#003342]/70 hover:text-[#003342] font-semibold py-3 px-4 rounded-xl">FAQ</a>
            <a href={SHOPIFY_URL} className="bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] text-white px-6 py-4 font-bold text-center rounded-full mt-2">Shop Now</a>
          </motion.nav>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 translate-y-[99%] z-10">
        <svg viewBox="0 0 1440 60" className="w-full h-10 sm:h-12" preserveAspectRatio="none">
          <path fill="white" d="M0,30L60,25C120,20,240,10,360,10C480,10,600,20,720,25C840,30,960,30,1080,27.5C1200,25,1320,20,1380,17.5L1440,15L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"/>
        </svg>
      </div>
    </div>
  );
};

// Sticky Header
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!scrolled) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg py-3" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center"><Logo /></a>
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#problem" className="text-[#003342]/70 hover:text-[#003342] font-semibold text-sm">The Problem</a>
            <a href="#product" className="text-[#003342]/70 hover:text-[#003342] font-semibold text-sm">Product</a>
            <a href="#ingredients" className="text-[#003342]/70 hover:text-[#003342] font-semibold text-sm">Ingredients</a>
            <a href="#faq" className="text-[#003342]/70 hover:text-[#003342] font-semibold text-sm">FAQ</a>
            <a href={SHOPIFY_URL} className="bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] text-white px-6 py-2.5 font-bold text-sm rounded-full">Shop Now</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Section 1: Hero
const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden grain" data-testid="hero-section">
      <div className="absolute inset-0">
        <img src={IMAGES.heroLifestyle} alt="NYNE Focus" className="w-full h-full object-cover object-right" data-testid="hero-background-image"/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#003342]/85 via-[#003342]/45 to-[#003342]/10" />
      </div>

      {/* Decorative floating blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-20 -left-16 w-80 h-80 rounded-full bg-[#4FACFE]/30 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-24 right-10 w-96 h-96 rounded-full bg-[#00F2FE]/25 blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 h-full min-h-[92vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, x: -20, rotate: -6 }}
              animate={{ opacity: 1, x: 0, rotate: -3 }}
              transition={{ delay: 0.3 }}
              className="inline-block bg-[#FFFE97] text-[#003342] font-bold text-xs sm:text-sm tracking-widest uppercase px-5 py-2 rounded-full mb-6 sticker"
            >
              · Nootropic Energy Drink ·
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.95] mb-6">
              Take Back<br />
              <span className="shimmer-text">Your Focus.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-md font-medium">
              Your competitors are still on coffee. You don't have to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a href="#product" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} className="bg-[#FFFE97] text-[#003342] px-8 py-4 font-bold text-base hover:bg-white transition-colors inline-flex items-center justify-center gap-2 rounded-full shadow-xl sticker" data-testid="hero-cta-btn">
                Shop Now <ArrowRight size={18} />
              </motion.a>
              <motion.a href="#problem" whileHover={{ scale: 1.05 }} className="border-2 border-white/50 text-white px-8 py-4 font-semibold text-base hover:bg-white/10 transition-colors text-center rounded-full backdrop-blur-sm" data-testid="hero-learn-btn">
                Learn More
              </motion.a>
            </div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex items-center gap-5 text-white/85 text-sm font-semibold"
            >
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-[#4FACFE] to-[#00F2FE]" />
                ))}
              </div>
              <span>Trusted by 2,000+ high performers</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/70 text-xs uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[2px] h-10 bg-gradient-to-b from-white/70 to-transparent" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-14 sm:h-16 lg:h-20" preserveAspectRatio="none">
          <path fill="#FFFE97" d="M0,40L48,42C96,44,192,48,288,52C384,56,480,60,576,56C672,52,768,40,864,36C960,32,1056,36,1152,42C1248,48,1344,56,1392,60L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"/>
        </svg>
      </div>
    </section>
  );
};

// Section 2: The Problem - Funky yet sensible asymmetric layout
const ProblemSection = () => {
  const problems = [
    { text: "Coffee crashes you at 2pm", tag: "The Afternoon Slump", color: "bg-white" },
    { text: "Energy drinks spike your anxiety", tag: "Too Much, Too Fast", color: "bg-white" },
    { text: "Other stimulants work until they don't", tag: "The Fizzle Out", color: "bg-white" },
    { text: "None of these were built for what you actually do", tag: "Wrong Fuel", color: "bg-white" },
  ];

  return (
    <section id="problem" className="relative bg-[#FFFE97] py-24 lg:py-32 overflow-hidden grain-light" data-testid="problem-section">
      {/* Decorative circles */}
      <div aria-hidden className="absolute top-10 right-8 w-32 h-32 rounded-full border-4 border-[#003342]/10 spin-slow" />
      <div aria-hidden className="absolute bottom-40 left-8 w-24 h-24 rounded-full border-4 border-dashed border-[#003342]/15 spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-[#003342] text-[#FFFE97] font-bold text-xs tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-5">The Problem</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003342] mb-4 leading-tight">
            You work long hours. You've built a routine.
            <br />
            <span className="italic text-[#003342]/70">But your fuel is the problem.</span>
          </h2>
        </motion.div>

        {/* Asymmetric grid: Cards left, tilted image right */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Problem Cards - left */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
                whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
                className={`relative ${p.color} p-6 pt-7 rounded-2xl sticker border border-[#003342]/10`}
                data-testid={`problem-card-${i}`}
              >
                <div className="absolute -top-3 left-5 bg-[#003342] text-[#FFFE97] text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full">
                  0{i + 1} · {p.tag}
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#4FACFE] to-[#00F2FE] flex items-center justify-center text-white">
                    <X size={16} strokeWidth={3} />
                  </div>
                  <p className="text-[#003342] font-bold leading-snug text-[15px]">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tilted pouring image - right */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 6 }}
            whileInView={{ opacity: 1, x: 0, rotate: 4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Glow ring */}
              <div aria-hidden className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#4FACFE]/40 to-[#00F2FE]/30 blur-2xl" />
              {/* Image with tilt + float */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative float-slow"
              >
                <img
                  src={IMAGES.pouringCans}
                  alt="NYNE Focus being poured"
                  className="w-full max-w-md mx-auto rounded-[32px] shadow-2xl border-4 border-white"
                  data-testid="pouring-image"
                />
                {/* Polaroid sticker */}
                <div className="absolute -bottom-4 -right-2 rotate-6 bg-white px-4 py-2 rounded-xl sticker">
                  <p className="text-[#003342] text-xs font-bold tracking-wide">Pour. Focus. Ship it.</p>
                </div>
                {/* Star badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: -10 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: 'spring' }}
                  className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-[#003342] text-[#FFFE97] flex flex-col items-center justify-center text-center font-bold sticker"
                >
                  <span className="text-[10px] tracking-widest">BUILT FOR</span>
                  <span className="text-sm leading-tight">HIGH<br/>PERFORMERS</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
        <svg viewBox="0 0 1440 120" className="w-full h-20 sm:h-28" preserveAspectRatio="none">
          <path fill="#003342" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"/>
        </svg>
      </div>
    </section>
  );
};

// Section 3: Product
const ProductSection = () => {
  const [quantity, setQuantity] = useState(1);
  
  const benefits = [
    "Calm alertness after 30 minutes",
    "Reduced mental fatigue",
    "Accuracy under pressure",
    "Sustained deep focus",
    "Clean lemon ginger taste",
  ];

  return (
    <section id="product" className="relative py-24 lg:py-32 bg-[#003342] overflow-hidden noise-dark" data-testid="product-section">
      {/* Animated blobs */}
      <motion.div
        aria-hidden
        className="absolute top-20 right-10 w-72 h-72 bg-[#4FACFE]/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#00F2FE]/15 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Image */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            {/* Rotating conic ring behind */}
            <div aria-hidden className="absolute inset-0 flex items-center justify-center">
              <div className="w-[110%] h-[110%] rounded-full opacity-40 blur-2xl spin-slow" style={{ background: 'conic-gradient(from 0deg, #4FACFE, #00F2FE, #FFFE97, #4FACFE)' }} />
            </div>
            {/* Floating can */}
            <motion.div
              className="relative float-slow"
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ type: 'spring', stiffness: 150 }}
            >
              <img src={IMAGES.canTennis} alt="NYNE Focus Can" className="relative w-full rounded-3xl shadow-2xl" data-testid="product-image"/>
              {/* Floating sticker label */}
              <motion.div
                initial={{ scale: 0, rotate: 15 }}
                whileInView={{ scale: 1, rotate: 8 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="absolute -top-4 -right-4 bg-[#FFFE97] text-[#003342] px-4 py-3 rounded-2xl sticker font-bold text-sm leading-tight"
              >
                <div className="text-[10px] tracking-[0.2em] opacity-70">NEW</div>
                <div>Lemon Ginger</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Product Details */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-block bg-[#4FACFE]/20 text-[#4FACFE] font-bold text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-4">Introducing</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-2">NYNE <span className="shimmer-text">FOCUS</span></h2>
            <p className="text-white/60 font-semibold mb-1 text-lg">Flavor: Lemon Ginger</p>
            <p className="text-white/60 font-semibold mb-6 text-lg">Pack Size: 12 Pack</p>
            
            <div className="flex items-baseline gap-3 mb-8">
              <p className="text-5xl font-bold text-[#FFFE97]">$59.99</p>
              <p className="text-white/50 line-through">$69.99</p>
              <span className="bg-[#FFFE97] text-[#003342] text-xs font-bold px-2 py-1 rounded-full">Save 14%</span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-white font-semibold">Quantity:</span>
              <div className="flex items-center bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/20 transition-colors" data-testid="qty-minus"><Minus size={18} /></button>
                <span className="w-12 text-center font-bold text-white text-lg" data-testid="qty-value">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/20 transition-colors" data-testid="qty-plus"><Plus size={18} /></button>
              </div>
            </div>

            <motion.a href={SHOPIFY_URL} whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="w-full bg-[#FFFE97] text-[#003342] py-4 font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 mb-8 rounded-full shadow-xl sticker" data-testid="add-to-cart-btn">
              Add to Cart <ArrowRight size={18} />
            </motion.a>

            {/* Benefits */}
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-white mb-4 text-lg flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
                What you'll feel
              </h4>
              <ul className="space-y-3">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 text-white/85"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4FACFE] to-[#00F2FE] flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
        <svg viewBox="0 0 1440 120" className="w-full h-20 sm:h-28" preserveAspectRatio="none">
          <defs><linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#4FACFE" /><stop offset="100%" stopColor="#00F2FE" /></linearGradient></defs>
          <path fill="url(#oceanGradient)" d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"/>
        </svg>
      </div>
    </section>
  );
};

// Section 3.5: Motto Marquee - tape-like ticker
const MarqueeSection = () => {
  const phrases = [
    "NO CRASH",
    "NO JITTERS",
    "NO SUGAR",
    "8 NOOTROPICS",
    "CLEAN ENERGY",
    "FOR HIGH PERFORMERS",
    "BUILT TO SHIP",
    "LEMON GINGER",
  ];

  const row = [...phrases, ...phrases, ...phrases];

  return (
    <section className="relative bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] overflow-hidden py-10" data-testid="marquee-section">
      <div className="marquee-wrap relative py-5 -rotate-2 origin-center bg-[#003342] border-y-4 border-[#FFFE97]">
        <div className="marquee-track">
          {row.map((phrase, i) => (
            <div key={i} className="flex items-center gap-8 px-8">
              <span className="text-[#FFFE97] font-bold text-2xl lg:text-3xl tracking-wider whitespace-nowrap">{phrase}</span>
              <span className="text-[#00F2FE] text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>
      <div className="marquee-wrap relative py-4 rotate-2 origin-center bg-[#FFFE97] -mt-1 border-y-4 border-[#003342]">
        <div className="marquee-track fast" style={{ animationDirection: 'reverse' }}>
          {row.map((phrase, i) => (
            <div key={i} className="flex items-center gap-8 px-8">
              <span className="text-[#003342] font-bold text-xl lg:text-2xl tracking-wider whitespace-nowrap">{phrase}</span>
              <span className="text-[#4FACFE] text-2xl">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 4: Ingredients
const IngredientsSection = () => {
  const ingredients = [
    { name: "Zynamite® S", amount: "150mg", benefit: "Cognitive speed and reaction time" },
    { name: "Enfinity® Paraxanthine", amount: "150mg", benefit: "Caffeine alternative without the negative effects" },
    { name: "CognatiQ®", amount: "100mg", benefit: "BDNF support for brain health" },
    { name: "Cognizin®", amount: "250mg", benefit: "Focus and mental energy" },
    { name: "Real Lion's Mane 8:1", amount: "50mg", benefit: "Long-term neurological health" },
    { name: "N-Acetyl-L-Tyrosine", amount: "500mg", benefit: "Dopamine precursor for sustained motivation" },
    { name: "L-Theanine", amount: "200mg", benefit: "Smooth focus without the edge" },
    { name: "Phosphatidylserine", amount: "200mg", benefit: "Cognitive function, memory, and cortisol reduction" },
    { name: "B12 (Methylcobalamin)", amount: "2.4mcg", benefit: "Bioactive B12 for energy and signal transmission speed" },
    { name: "B6 (Pyridoxine)", amount: "1.7mg", benefit: "Neurotransmitter synthesis, cognitive performance, and mood" },
  ];

  return (
    <section id="ingredients" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#4FACFE] to-[#00F2FE] overflow-hidden" data-testid="ingredients-section">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block bg-white/20 text-[#003342] font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full mb-4">The Science</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003342] mb-4">Exactly What's In The Can</h2>
          <p className="text-lg text-[#003342]/80 max-w-2xl mx-auto">And why it's in there. Every ingredient clinically studied and purposefully dosed.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ingredients.map((ing, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
              className="bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-white/50 relative overflow-hidden group"
              data-testid={`ingredient-${i}`}
            >
              {/* Gradient bar on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4FACFE] via-[#00F2FE] to-[#FFFE97] opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-[#003342]">{ing.name}</h4>
                <span className="text-[#003342] font-bold text-sm bg-[#FFFE97] px-3 py-1 rounded-full shrink-0 ml-2">{ing.amount}</span>
              </div>
              <p className="text-sm text-[#003342]/70">{ing.benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
        <svg viewBox="0 0 1440 120" className="w-full h-20 sm:h-28" preserveAspectRatio="none">
          <path fill="#FFFE97" d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,101.3C672,107,768,85,864,74.7C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"/>
        </svg>
      </div>
    </section>
  );
};

// Section 5: Comparison
const ComparisonSection = () => {
  const comparisons = [
    { feature: "Sugar", nyne: "0g", coffee: "0g", energy: "27g", preworkout: "3g" },
    { feature: "Nootropics", nyne: "8 clinically studied", coffee: "0", energy: "0", preworkout: "1-2" },
    { feature: "No Crash", nyneGood: true, coffee: false, energy: false, preworkout: false },
    { feature: "No Jitters", nyneGood: true, coffee: false, energy: false, preworkout: false },
    { feature: "Natural Ingredients", nyneGood: true, coffee: true, energy: false, preworkout: false },
    { feature: "Sustained Focus", nyneGood: true, coffee: false, energy: false, preworkout: false },
    { feature: "Calories", nyne: "20", coffee: "5", energy: "110", preworkout: "15" },
  ];

  const renderValue = (value, isNyne = false) => {
    if (typeof value === 'boolean') {
      return value ? <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mx-auto"><Check size={18} className="text-green-600" /></div> : <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mx-auto"><X size={18} className="text-red-500" /></div>;
    }
    return <span className={`font-semibold ${isNyne ? 'text-[#003342]' : ''}`}>{value}</span>;
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[#FFFE97] overflow-hidden" data-testid="comparison-section">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003342] mb-4">NYNE vs The Rest</h2>
          <p className="text-lg text-[#003342]/70">See how NYNE FOCUS compares to what you're currently using.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-x-auto">
          <table className="w-full min-w-[600px] bg-white rounded-3xl overflow-hidden shadow-2xl relative" data-testid="comparison-table">
            <thead>
              <tr className="border-b-2 border-[#4FACFE]/20">
                <th className="text-left text-[#003342]/60 font-semibold py-5 px-6"></th>
                <th className="text-center text-[#003342] font-bold py-5 px-6 bg-gradient-to-b from-[#4FACFE]/25 to-[#00F2FE]/10 relative">
                  <div className="flex items-center justify-center gap-2">
                    NYNE FOCUS
                    <span className="inline-block bg-[#FFFE97] text-[#003342] text-[10px] tracking-widest px-2 py-0.5 rounded-full font-bold">WINNER</span>
                  </div>
                </th>
                <th className="text-center text-[#003342]/60 font-semibold py-5 px-6">Coffee</th>
                <th className="text-center text-[#003342]/60 font-semibold py-5 px-6">Energy Drinks</th>
                <th className="text-center text-[#003342]/60 font-semibold py-5 px-6">Pre-Workout</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={i} className="border-b border-[#003342]/5 last:border-b-0 hover:bg-[#4FACFE]/5 transition-colors">
                  <td className="text-[#003342] font-semibold py-4 px-6">{row.feature}</td>
                  <td className="text-center text-[#003342] py-4 px-6 bg-gradient-to-b from-[#4FACFE]/10 to-[#00F2FE]/5 font-bold">{row.nyneGood !== undefined ? renderValue(row.nyneGood, true) : renderValue(row.nyne, true)}</td>
                  <td className="text-center text-[#003342]/60 py-4 px-6">{renderValue(row.coffee)}</td>
                  <td className="text-center text-[#003342]/60 py-4 px-6">{renderValue(row.energy)}</td>
                  <td className="text-center text-[#003342]/60 py-4 px-6">{renderValue(row.preworkout)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
        <svg viewBox="0 0 1440 120" className="w-full h-20 sm:h-28" preserveAspectRatio="none">
          <path fill="white" d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"/>
        </svg>
      </div>
    </section>
  );
};

// Section 6: FAQ
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How is NYNE FOCUS different than energy drinks or coffee?",
      answer: "NYNE FOCUS uses paraxanthine instead of caffeine, providing clean energy without the crash. We combine 8 clinically studied nootropics that have been found to improve alertness, focus, and memory. It's designed for sustained cognitive output—not a quick spike and crash."
    },
    {
      question: "When should I drink NYNE FOCUS?",
      answer: "Before any block of focus work. Most users drink it 20-30 minutes before a deep work session, before meetings, or even after training sessions when they need to transition into mental performance."
    },
    {
      question: "Will it keep me up at night?",
      answer: "NYNE FOCUS contains paraxanthine, not caffeine. Paraxanthine has a shorter half-life and does not disrupt sleep architecture the way caffeine does. That said, we recommend consuming it at least 4-5 hours before your intended bedtime."
    },
    {
      question: "Is NYNE FOCUS safe to drink every day?",
      answer: "Yes! With a fully transparent label, no artificial sweeteners, high-quality nootropic ingredients, and no adulterated compounds, NYNE FOCUS can be taken every day as part of your performance routine."
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white" data-testid="faq-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003342] mb-4">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-[#4FACFE]/10 to-[#00F2FE]/10 rounded-2xl overflow-hidden border border-[#4FACFE]/20" data-testid={`faq-${i}`}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-[#4FACFE]/5 transition-colors" data-testid={`faq-toggle-${i}`}>
                <span className="font-bold text-[#003342] pr-4">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full bg-[#4FACFE]/20 flex items-center justify-center flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}>
                  <ChevronDown size={18} className="text-[#4FACFE]" />
                </div>
              </button>
              {openIndex === i && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="px-6 pb-5">
                  <p className="text-[#003342]/70 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 7: CTA
const CTASection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden noise-dark" data-testid="cta-section">
      <div className="absolute inset-0">
        <img src={IMAGES.handsWithCans} alt="NYNE Focus Community" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-br from-[#003342]/90 via-[#003342]/80 to-[#003342]/85" />
      </div>

      {/* Floating blobs */}
      <motion.div
        aria-hidden
        className="absolute top-10 right-10 w-80 h-80 rounded-full bg-[#4FACFE]/25 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#FFFE97]/15 blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Floating sparkles */}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute w-2 h-2 rounded-full bg-[#FFFE97]"
          style={{
            top: `${15 + (i * 13) % 70}%`,
            left: `${10 + (i * 17) % 80}%`,
          }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <motion.span
            initial={{ opacity: 0, rotate: -4 }}
            whileInView={{ opacity: 1, rotate: -3 }}
            viewport={{ once: true }}
            className="inline-block bg-[#FFFE97] text-[#003342] font-bold text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6 sticker"
          >
            · 15% Off Your First Order ·
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            You Know <span className="shimmer-text">What To Do.</span>
          </h2>
          <p className="text-xl text-white/75 mb-10 max-w-xl mx-auto">Join thousands of high-performing professionals who've upgraded their fuel.</p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="flex-1 px-6 py-4 bg-white text-[#003342] placeholder-[#003342]/40 font-medium rounded-full focus:outline-none focus:ring-4 focus:ring-[#4FACFE]/50 shadow-lg" data-testid="email-input"/>
                <motion.button type="submit" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} className="bg-[#FFFE97] text-[#003342] px-8 py-4 font-bold hover:bg-white transition-colors rounded-full whitespace-nowrap shadow-lg sticker" data-testid="cta-submit-btn">Get 15% Off</motion.button>
              </div>
              <p className="text-sm text-white/50 mt-4">Sign up to receive 15% off your first order.</p>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/10 backdrop-blur-sm p-8 max-w-md mx-auto rounded-3xl border border-white/20" data-testid="cta-success">
              <div className="w-16 h-16 rounded-full bg-[#FFFE97] flex items-center justify-center mx-auto mb-4"><Check size={32} className="text-[#003342]" /></div>
              <h3 className="text-xl font-bold text-white mb-2">You're In!</h3>
              <p className="text-white/70">Check your email for your 15% discount code.</p>
            </motion.div>
          )}

          <div className="mt-12">
            <motion.a href={SHOPIFY_URL} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 bg-[#FFFE97] text-[#003342] px-12 py-5 font-bold text-lg hover:bg-white transition-colors rounded-full shadow-xl sticker" data-testid="cta-shop-btn">
              Try NYNE FOCUS - 15% Off <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Text Logo Component for footer
const TextLogo = () => (
  <div className="flex items-center gap-1">
    <span className="text-2xl font-bold text-white">NYNE</span>
    <span className="text-xl font-semibold text-[#4FACFE]">FOCUS</span>
  </div>
);

// Footer with wavy top and text logo
const Footer = () => {
  return (
    <footer className="relative bg-[#003342] pt-16 pb-12" data-testid="footer">
      {/* Wavy top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 80" className="w-full h-16 sm:h-20" preserveAspectRatio="none">
          <path fill="#003342" d="M0,40L60,45C120,50,240,60,360,60C480,60,600,50,720,42C840,34,960,28,1080,30C1200,32,1320,42,1380,47L1440,52L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <TextLogo />
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#problem" className="text-white/60 hover:text-white font-semibold transition-colors">The Problem</a>
            <a href="#product" className="text-white/60 hover:text-white font-semibold transition-colors">Product</a>
            <a href="#ingredients" className="text-white/60 hover:text-white font-semibold transition-colors">Ingredients</a>
            <a href="#faq" className="text-white/60 hover:text-white font-semibold transition-colors">FAQ</a>
            <a href="mailto:hello@nynefocus.com" className="text-white/60 hover:text-white font-semibold transition-colors">Contact</a>
          </nav>
          <p className="text-white/40 text-sm">© 2026 NYNE Focus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden" data-testid="landing-page">
      <TopBanner />
      <Header />
      <HeroSection />
      <ProblemSection />
      <ProductSection />
      <MarqueeSection />
      <IngredientsSection />
      <ComparisonSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
