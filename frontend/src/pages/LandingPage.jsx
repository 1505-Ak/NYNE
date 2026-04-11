import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Menu, X, Zap, Brain, Shield, Clock } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// Image URLs
const IMAGES = {
  heroLifestyle: "https://customer-assets.emergentagent.com/job_energy-drink-shop-1/artifacts/xaup0xxt_WhatsApp%20Image%202026-04-01%20at%2001.17.11%289%29.jpeg",
  productRender: "https://customer-assets.emergentagent.com/job_energy-drink-shop-1/artifacts/i4uv9jj9_Nyne%20Can%20Render%281%29.png",
  productCanFront: "https://customer-assets.emergentagent.com/job_ef45c674-3601-48b7-9922-7d1e6f395e60/artifacts/znumwecj_WhatsApp%20Image%202026-04-01%20at%2001.57.02.jpeg",
  productCanAngle: "https://customer-assets.emergentagent.com/job_ef45c674-3601-48b7-9922-7d1e6f395e60/artifacts/0dbvw3yv_WhatsApp%20Image%202026-04-01%20at%2001.57.03%284%29.jpeg",
  graphic2pmCrash: "https://customer-assets.emergentagent.com/job_ef45c674-3601-48b7-9922-7d1e6f395e60/artifacts/7uos65ah_WhatsApp%20Image%202026-04-08%20at%2018.06.59.jpeg",
  supplementFacts: "https://customer-assets.emergentagent.com/job_ef45c674-3601-48b7-9922-7d1e6f395e60/artifacts/1npshgv4_WhatsApp%20Image%202026-04-08%20at%2020.19.22.jpeg",
  lifestyleGroupHands: "https://customer-assets.emergentagent.com/job_ef45c674-3601-48b7-9922-7d1e6f395e60/artifacts/s3oxo0je_WhatsApp%20Image%202026-04-01%20at%2001.57.03%283%29.jpeg"
};

const SHOPIFY_URL = "#";

// Custom cursor component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-[#FFEA00] rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      animate={{
        x: position.x - 8,
        y: position.y - 8,
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

// Header
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl py-3' : 'bg-transparent py-6'
      }`}
      data-testid="header"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <a href="/" className="group" data-testid="logo-link">
            <span className="font-heading text-3xl lg:text-4xl tracking-tight text-white group-hover:text-[#00A8E8] transition-colors">
              NYNE
            </span>
            <span className="font-heading text-xl lg:text-2xl text-[#00A8E8] ml-2">FOCUS</span>
          </a>

          <nav className="hidden lg:flex items-center gap-12">
            <a href="#why" className="text-white/70 hover:text-white transition-colors text-sm tracking-widest uppercase" data-testid="nav-why">Why NYNE</a>
            <a href="#ingredients" className="text-white/70 hover:text-white transition-colors text-sm tracking-widest uppercase" data-testid="nav-ingredients">Science</a>
            <a 
              href={SHOPIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFEA00] text-black px-8 py-3 text-sm font-bold tracking-wider uppercase hover:bg-white transition-all"
              data-testid="header-buy-btn"
            >
              Shop Now
            </a>
          </nav>

          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden pt-8 pb-4 flex flex-col gap-6"
            data-testid="mobile-menu"
          >
            <a href="#why" className="text-white/70 hover:text-white transition-colors text-lg tracking-widest uppercase">Why NYNE</a>
            <a href="#ingredients" className="text-white/70 hover:text-white transition-colors text-lg tracking-widest uppercase">Science</a>
            <a 
              href={SHOPIFY_URL}
              className="bg-[#FFEA00] text-black px-8 py-4 text-sm font-bold tracking-wider uppercase text-center"
            >
              Shop Now
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

// Hero Section - Full Screen Lifestyle Image
const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen overflow-hidden"
      data-testid="hero-section"
    >
      {/* Full Screen Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <img 
          src={IMAGES.heroLifestyle}
          alt="NYNE Focus Lifestyle"
          className="w-full h-full object-cover"
          data-testid="hero-background-image"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-20 sm:pb-32"
      >
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="inline-block text-[#00A8E8] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6">
              Powered by Paraxanthine
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-heading text-[3rem] sm:text-[5rem] lg:text-[7rem] xl:text-[9rem] leading-[0.9] tracking-tight text-white mb-6 sm:mb-8"
          >
            NO MORE<br />
            <span className="text-[#FFEA00]">2PM</span> CRASH
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href={SHOPIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FFEA00] text-black px-10 py-5 text-sm font-bold tracking-wider uppercase inline-flex items-center justify-center gap-3 hover:bg-white transition-all"
              data-testid="hero-buy-btn"
            >
              Shop Now 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#why"
              className="border-2 border-white/30 text-white px-10 py-5 text-sm font-bold tracking-wider uppercase inline-flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
              data-testid="hero-learn-btn"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

// Marquee Section
const MarqueeSection = () => {
  return (
    <div className="bg-[#FFEA00] py-5 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-12 font-heading text-xl sm:text-2xl text-black tracking-wide">
            NO MORE 2PM CRASH • 9/10 ALL-DAY FOCUS • PARAXANTHINE POWERED • ZERO SUGAR •
          </span>
        ))}
      </div>
    </div>
  );
};

// Why NYNE Section
const WhySection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Clean Energy",
      desc: "Paraxanthine provides smoother energy than caffeine—no jitters, no crash."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Laser Focus",
      desc: "Citicoline and L-Theanine sharpen your mental clarity for hours."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "All-Day Power",
      desc: "Sustained release formula keeps you in the zone from morning to night."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Science-Backed",
      desc: "Every ingredient clinically studied and optimally dosed."
    }
  ];

  return (
    <section id="why" className="py-24 lg:py-40 bg-[#050A14]" data-testid="why-section">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#00A8E8] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
            Why Choose NYNE
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-white tracking-tight">
            THE NEW WAY TO <span className="text-[#FFEA00]">ENERGISE</span>
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.05] hover:border-[#00A8E8]/50 transition-all duration-500"
              data-testid={`feature-card-${i}`}
            >
              <div className="w-16 h-16 flex items-center justify-center text-[#00A8E8] mb-6 border border-[#00A8E8]/30 group-hover:bg-[#00A8E8]/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl text-white mb-3 tracking-wide uppercase">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Big Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
              <img 
                src={IMAGES.graphic2pmCrash} 
                alt="No More 2PM Crash"
                className="w-full h-full object-cover"
                data-testid="feature-2pm-image"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 lg:p-12">
                <h3 className="font-heading text-3xl lg:text-5xl text-white mb-4">9/10 ALL-DAY FOCUS</h3>
                <p className="text-white/70 max-w-md">Outperforms traditional energy drinks in sustained attention tests.</p>
              </div>
            </div>
            <div className="bg-[#0A1428] flex items-center justify-center p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A8E8]/10 to-transparent" />
              <div className="text-center relative z-10">
                <motion.div 
                  className="w-48 lg:w-64 h-48 lg:h-64 mx-auto mb-8 rounded-2xl overflow-hidden"
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <img 
                    src={IMAGES.productCanFront}
                    alt="NYNE Focus Can"
                    className="w-full h-full object-cover shadow-[0_0_30px_rgba(0,168,232,0.4)]"
                    data-testid="feature-product-image"
                  />
                </motion.div>
                <p className="text-white/60 text-lg mb-6">Clean. Focused. Unstoppable.</p>
                <a 
                  href={SHOPIFY_URL}
                  className="inline-flex items-center gap-2 text-[#FFEA00] font-bold tracking-wider uppercase hover:text-white transition-colors"
                >
                  Shop Now <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Ingredients Section
const IngredientsSection = () => {
  const ingredients = [
    { name: "Paraxanthine", amount: "150mg", tagline: "enfinity®", benefit: "Clean energy without jitters" },
    { name: "Citicoline", amount: "250mg", tagline: "Cognizin®", benefit: "Enhanced mental clarity" },
    { name: "N-Acetyl-L-Tyrosine", amount: "500mg", tagline: "", benefit: "Cognitive performance" },
    { name: "L-Theanine", amount: "200mg", tagline: "", benefit: "Calm focus" },
    { name: "Phosphatidylserine", amount: "200mg", tagline: "", benefit: "Brain cell support" },
    { name: "Zynamite®", amount: "150mg", tagline: "Mango Leaf", benefit: "Natural alertness" }
  ];

  return (
    <section id="ingredients" className="py-24 lg:py-40 bg-black" data-testid="ingredients-section">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Supplement Facts Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#00A8E8]/10 blur-3xl" />
            <img 
              src={IMAGES.supplementFacts} 
              alt="NYNE Focus Supplement Facts"
              className="relative w-full rounded-lg"
              data-testid="supplement-facts-image"
            />
          </motion.div>

          {/* Ingredients List */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-[#00A8E8] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
                The Science
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6">
                PREMIUM <span className="text-[#FFEA00]">INGREDIENTS</span>
              </h2>
              <p className="text-white/50 text-lg max-w-lg">
                Every ingredient is clinically studied and optimally dosed for maximum cognitive performance.
              </p>
            </motion.div>

            <div className="space-y-4">
              {ingredients.map((ing, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center justify-between p-5 bg-white/[0.02] border border-white/10 hover:border-[#00A8E8]/50 hover:bg-white/[0.05] transition-all"
                  data-testid={`ingredient-${i}`}
                >
                  <div>
                    <h4 className="text-white font-semibold flex items-center gap-2">
                      {ing.name}
                      {ing.tagline && <span className="text-[#00A8E8] text-xs">({ing.tagline})</span>}
                    </h4>
                    <p className="text-white/40 text-sm">{ing.benefit}</p>
                  </div>
                  <span className="text-[#FFEA00] font-bold text-lg">{ing.amount}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-white/40 text-sm"
            >
              Only 20 calories • Zero sugar • Lemon Ginger flavor
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden" data-testid="cta-section">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${IMAGES.lifestyleGroupHands})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#00A8E8] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-6 block">
            Join The Movement
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-white tracking-tight mb-8">
            READY TO <span className="text-[#FFEA00]">FOCUS</span>?
          </h2>
          <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto mb-12">
            Experience clean, sustained energy that keeps you productive all day. 
            No jitters. No crash. Just pure performance.
          </p>
          
          <a 
            href={SHOPIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#FFEA00] text-black px-14 py-6 text-base font-bold tracking-wider uppercase inline-flex items-center gap-4 hover:bg-white transition-all"
            data-testid="cta-buy-btn"
          >
            Shop NYNE Focus
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16" data-testid="footer">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="font-heading text-3xl tracking-tight text-white">NYNE</span>
            <span className="font-heading text-xl text-[#00A8E8]">FOCUS</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <a href="#why" className="text-white/50 hover:text-white transition-colors tracking-widest uppercase" data-testid="footer-why">Why NYNE</a>
            <a href="#ingredients" className="text-white/50 hover:text-white transition-colors tracking-widest uppercase" data-testid="footer-ingredients">Science</a>
            <a href={SHOPIFY_URL} className="text-white/50 hover:text-white transition-colors tracking-widest uppercase" data-testid="footer-shop">Shop</a>
            <a href="mailto:contact@nynefocus.com" className="text-white/50 hover:text-white transition-colors tracking-widest uppercase" data-testid="footer-contact">Contact</a>
          </nav>

          <p className="text-white/30 text-sm">
            © 2026 NYNE Focus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black" data-testid="landing-page">
      <CustomCursor />
      <Header />
      <HeroSection />
      <MarqueeSection />
      <WhySection />
      <IngredientsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
