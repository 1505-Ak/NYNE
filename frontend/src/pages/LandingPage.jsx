import { motion } from 'framer-motion';
import { Zap, Brain, Clock, Shield, ChevronRight, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

// Image URLs from design guidelines
const IMAGES = {
  heroBackground: "https://static.prod-images.emergentagent.com/jobs/ef45c674-3601-48b7-9922-7d1e6f395e60/images/e387a2e63fe10f6992cfa781ee1f8eb16baada27a536684a5e43a4f32232d5e4.png",
  textureBackground: "https://static.prod-images.emergentagent.com/jobs/ef45c674-3601-48b7-9922-7d1e6f395e60/images/27918e2a962c4d6d49cc025e671fc351617ca0eee905414e36ab72dd31976d3d.png",
  productCanFront: "https://customer-assets.emergentagent.com/job_ef45c674-3601-48b7-9922-7d1e6f395e60/artifacts/znumwecj_WhatsApp%20Image%202026-04-01%20at%2001.57.02.jpeg",
  productCanAngle: "https://customer-assets.emergentagent.com/job_ef45c674-3601-48b7-9922-7d1e6f395e60/artifacts/0dbvw3yv_WhatsApp%20Image%202026-04-01%20at%2001.57.03%284%29.jpeg",
  graphic2pmCrash: "https://customer-assets.emergentagent.com/job_ef45c674-3601-48b7-9922-7d1e6f395e60/artifacts/7uos65ah_WhatsApp%20Image%202026-04-08%20at%2018.06.59.jpeg",
  supplementFacts: "https://customer-assets.emergentagent.com/job_ef45c674-3601-48b7-9922-7d1e6f395e60/artifacts/1npshgv4_WhatsApp%20Image%202026-04-08%20at%2020.19.22.jpeg",
  lifestyleGroupHands: "https://customer-assets.emergentagent.com/job_ef45c674-3601-48b7-9922-7d1e6f395e60/artifacts/s3oxo0je_WhatsApp%20Image%202026-04-01%20at%2001.57.03%283%29.jpeg"
};

// Placeholder Shopify URL
const SHOPIFY_URL = "#";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" data-testid="logo-link">
            <span className="font-heading text-2xl sm:text-3xl tracking-tight text-white">NYNE</span>
            <span className="font-heading text-lg sm:text-xl text-[#00A8E8]">FOCUS</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors text-sm font-medium" data-testid="nav-features">Features</a>
            <a href="#ingredients" className="text-slate-300 hover:text-white transition-colors text-sm font-medium" data-testid="nav-ingredients">Ingredients</a>
            <a 
              href={SHOPIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-2.5 rounded-full text-sm"
              data-testid="header-buy-btn"
            >
              Buy Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden pb-4"
            data-testid="mobile-menu"
          >
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors text-sm font-medium py-2">Features</a>
              <a href="#ingredients" className="text-slate-300 hover:text-white transition-colors text-sm font-medium py-2">Ingredients</a>
              <a 
                href={SHOPIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 rounded-full text-sm text-center"
              >
                Buy Now
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${IMAGES.heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      data-testid="hero-section"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#040914]/70" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center lg:text-left"
          >
            <motion.p 
              variants={fadeInUp}
              className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#00A8E8] mb-4"
            >
              Powered by Paraxanthine
            </motion.p>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-5xl sm:text-6xl lg:text-8xl tracking-tighter uppercase leading-[0.85] text-white mb-6"
            >
              NO MORE<br />
              <span className="text-gradient">2PM CRASH</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg leading-relaxed text-slate-300 max-w-xl mx-auto lg:mx-0 mb-8"
            >
              NYNE Focus delivers clean, sustained energy without the jitters or crash. 
              Experience all-day mental clarity with our scientifically-formulated blend.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href={SHOPIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 rounded-full text-base font-bold inline-flex items-center justify-center gap-2"
                data-testid="hero-buy-btn"
              >
                Shop Now <ArrowRight size={20} />
              </a>
              <a 
                href="#ingredients"
                className="btn-secondary px-8 py-4 rounded-full text-base font-medium inline-flex items-center justify-center gap-2"
                data-testid="hero-learn-btn"
              >
                Learn More <ChevronRight size={20} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#00A8E8]/20 blur-3xl rounded-full" />
              <img 
                src={IMAGES.productCanFront} 
                alt="NYNE Focus Energy Drink - Lemon Ginger" 
                className="relative w-64 sm:w-80 lg:w-96 product-image rounded-2xl"
                data-testid="hero-product-image"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#FFEA00] py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 font-heading text-lg sm:text-xl text-black tracking-wide">
              NO MORE 2PM CRASH • 9/10 ALL-DAY FOCUS • PARAXANTHINE POWERED •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Clean Energy",
      description: "Paraxanthine provides smoother energy than caffeine—no jitters, no crash."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Enhanced Focus",
      description: "Citicoline and L-Theanine work synergistically to sharpen mental clarity."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "All-Day Performance",
      description: "Sustained release formula keeps you focused from morning to evening."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Science-Backed",
      description: "Every ingredient is clinically studied and dosed for optimal results."
    }
  ];

  return (
    <section 
      id="features" 
      className="py-20 sm:py-32 relative"
      style={{
        backgroundColor: '#0A1128'
      }}
      data-testid="features-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#00A8E8] mb-4">
            Why NYNE Focus
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
            Engineered for <span className="text-[#FFEA00]">Performance</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Feature Card with Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 card-glass rounded-3xl overflow-hidden transition-all duration-300"
            data-testid="feature-card-main"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="font-heading text-2xl sm:text-3xl tracking-tight text-white mb-4 uppercase">
                  No More 2PM Crash
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Unlike traditional energy drinks that spike your energy and leave you crashing, 
                  NYNE Focus uses Paraxanthine—a naturally-occurring metabolite that delivers 
                  smooth, sustained energy throughout your day.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-[#003A70] rounded-full h-3">
                    <div className="focus-bar bg-[#00A8E8] h-3 rounded-full" />
                  </div>
                  <span className="text-[#FFEA00] font-bold whitespace-nowrap">9/10</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">All-Day Focus Rating</p>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src={IMAGES.graphic2pmCrash} 
                  alt="No More 2PM Crash"
                  className="w-full h-full object-cover"
                  data-testid="feature-2pm-image"
                />
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          {features.slice(0, 2).map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-glass rounded-3xl p-8 transition-all duration-300"
              data-testid={`feature-card-${index}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#00A8E8]/10 flex items-center justify-center text-[#00A8E8] mb-6">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl tracking-tight text-white mb-3 uppercase">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}

          {/* Product Image Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass rounded-3xl overflow-hidden transition-all duration-300"
            data-testid="feature-product-card"
          >
            <img 
              src={IMAGES.productCanAngle} 
              alt="NYNE Focus Can"
              className="w-full h-full object-cover min-h-[300px]"
              data-testid="feature-product-image"
            />
          </motion.div>

          {/* Remaining Feature Cards */}
          {features.slice(2).map((feature, index) => (
            <motion.div 
              key={index + 2}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 2) * 0.1 }}
              className="card-glass rounded-3xl p-8 transition-all duration-300"
              data-testid={`feature-card-${index + 2}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#00A8E8]/10 flex items-center justify-center text-[#00A8E8] mb-6">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl tracking-tight text-white mb-3 uppercase">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Ingredients Section
const IngredientsSection = () => {
  const ingredients = [
    { name: "Paraxanthine (enfinity®)", amount: "150 mg", benefit: "Clean energy without jitters" },
    { name: "Citicoline (Cognizin®)", amount: "250 mg", benefit: "Enhanced mental clarity" },
    { name: "N-Acetyl-L-Tyrosine", amount: "500 mg", benefit: "Cognitive performance" },
    { name: "L-Theanine", amount: "200 mg", benefit: "Calm focus" },
    { name: "Phosphatidylserine", amount: "200 mg", benefit: "Brain cell support" },
    { name: "Zynamite® (Mango Leaf)", amount: "150 mg", benefit: "Natural alertness" }
  ];

  return (
    <section 
      id="ingredients" 
      className="py-20 sm:py-32 relative"
      style={{
        backgroundImage: `url(${IMAGES.textureBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      data-testid="ingredients-section"
    >
      <div className="absolute inset-0 bg-[#040914]/80" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#00A8E8] mb-4">
            What's Inside
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
            Premium <span className="text-[#FFEA00]">Ingredients</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Supplement Facts Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#00A8E8]/10 blur-3xl rounded-3xl" />
            <img 
              src={IMAGES.supplementFacts} 
              alt="NYNE Focus Supplement Facts"
              className="relative rounded-3xl shadow-2xl w-full"
              data-testid="supplement-facts-image"
            />
          </motion.div>

          {/* Ingredients List */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="space-y-4">
              {ingredients.map((ingredient, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="card-glass rounded-2xl p-5 transition-all duration-300"
                  data-testid={`ingredient-${index}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{ingredient.name}</h4>
                    <span className="text-[#FFEA00] font-bold">{ingredient.amount}</span>
                  </div>
                  <p className="text-sm text-slate-400">{ingredient.benefit}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-8">
              <p className="text-slate-400 text-sm">
                <strong className="text-white">Only 20 calories</strong> • Zero sugar • Lemon Ginger flavor
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section 
      className="py-20 sm:py-32 relative overflow-hidden"
      data-testid="cta-section"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${IMAGES.lifestyleGroupHands})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-[#040914]/80" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#00A8E8] mb-4">
            Join the Focus Movement
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white mb-6">
            Ready to <span className="text-[#FFEA00]">Elevate</span><br />Your Day?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Experience clean, sustained energy that keeps you focused and productive. 
            No jitters. No crash. Just pure performance.
          </p>
          
          <a 
            href={SHOPIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-12 py-5 rounded-full text-lg font-bold inline-flex items-center gap-3 glow-yellow"
            data-testid="cta-buy-btn"
          >
            Shop NYNE Focus <ArrowRight size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-[#040914] border-t border-white/10 py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-heading text-2xl tracking-tight text-white">NYNE</span>
            <span className="font-heading text-lg text-[#00A8E8]">FOCUS</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#features" className="text-slate-400 hover:text-white transition-colors" data-testid="footer-features">Features</a>
            <a href="#ingredients" className="text-slate-400 hover:text-white transition-colors" data-testid="footer-ingredients">Ingredients</a>
            <a 
              href={SHOPIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              data-testid="footer-shop"
            >
              Shop
            </a>
            <a 
              href="mailto:contact@nynefocus.com" 
              className="text-slate-400 hover:text-white transition-colors"
              data-testid="footer-contact"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-slate-500 text-sm">
            © 2026 NYNE Focus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#040914]" data-testid="landing-page">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <IngredientsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
