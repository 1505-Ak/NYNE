import { motion } from 'framer-motion';
import { Plus, Minus, ChevronDown, Check, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

// Image URLs
const IMAGES = {
  heroLifestyle: "https://customer-assets.emergentagent.com/job_energy-drink-shop-1/artifacts/xaup0xxt_WhatsApp%20Image%202026-04-01%20at%2001.17.11%289%29.jpeg",
  productRender: "https://customer-assets.emergentagent.com/job_energy-drink-shop-1/artifacts/i4uv9jj9_Nyne%20Can%20Render%281%29.png",
  supplementFacts: "https://customer-assets.emergentagent.com/job_ef45c674-3601-48b7-9922-7d1e6f395e60/artifacts/1npshgv4_WhatsApp%20Image%202026-04-08%20at%2020.19.22.jpeg",
};

const SHOPIFY_URL = "#";

// Brand Colors
const colors = {
  black: '#003342',
  ocean: '#4FACFE',
  sky: '#00F2FE',
  lemon: '#FFFE97',
};

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#003342]/10" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-1" data-testid="logo-link">
            <span className="text-2xl lg:text-3xl font-bold text-[#003342]">NYNE</span>
            <span className="text-lg lg:text-xl font-semibold text-[#4FACFE]">FOCUS</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#problem" className="text-[#003342]/70 hover:text-[#003342] font-semibold text-sm" data-testid="nav-problem">The Problem</a>
            <a href="#product" className="text-[#003342]/70 hover:text-[#003342] font-semibold text-sm" data-testid="nav-product">Product</a>
            <a href="#ingredients" className="text-[#003342]/70 hover:text-[#003342] font-semibold text-sm" data-testid="nav-ingredients">Ingredients</a>
            <a href="#faq" className="text-[#003342]/70 hover:text-[#003342] font-semibold text-sm" data-testid="nav-faq">FAQ</a>
            <a 
              href={SHOPIFY_URL}
              className="bg-[#003342] text-white px-6 py-2.5 font-bold text-sm hover:bg-[#4FACFE] transition-colors"
              data-testid="header-buy-btn"
            >
              Shop Now
            </a>
          </nav>

          <button 
            className="lg:hidden text-[#003342] p-2"
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
          <nav className="lg:hidden py-4 flex flex-col gap-4 border-t border-[#003342]/10" data-testid="mobile-menu">
            <a href="#problem" className="text-[#003342]/70 hover:text-[#003342] font-semibold py-2">The Problem</a>
            <a href="#product" className="text-[#003342]/70 hover:text-[#003342] font-semibold py-2">Product</a>
            <a href="#ingredients" className="text-[#003342]/70 hover:text-[#003342] font-semibold py-2">Ingredients</a>
            <a href="#faq" className="text-[#003342]/70 hover:text-[#003342] font-semibold py-2">FAQ</a>
            <a href={SHOPIFY_URL} className="bg-[#003342] text-white px-6 py-3 font-bold text-center">Shop Now</a>
          </nav>
        )}
      </div>
    </header>
  );
};

// Section 1: Hero
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" data-testid="hero-section">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#4FACFE]/5 to-[#00F2FE]/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block text-[#4FACFE] font-bold text-sm tracking-wider uppercase mb-4">
              Nootropic Energy Drink
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#003342] leading-tight mb-6">
              Take Back<br />
              <span className="bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] bg-clip-text text-transparent">Your Focus</span>
            </h1>
            <p className="text-lg lg:text-xl text-[#003342]/70 mb-8 max-w-lg mx-auto lg:mx-0">
              Your competitors are still on coffee. You don't have to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#product"
                className="bg-[#003342] text-white px-8 py-4 font-bold text-base hover:bg-[#4FACFE] transition-colors inline-flex items-center justify-center gap-2"
                data-testid="hero-cta-btn"
              >
                Shop Now <ArrowRight size={18} />
              </a>
              <a 
                href="#problem"
                className="border-2 border-[#003342]/20 text-[#003342] px-8 py-4 font-semibold text-base hover:border-[#003342] transition-colors"
                data-testid="hero-learn-btn"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-[#4FACFE]/20 to-[#00F2FE]/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-br from-[#FFFE97]/30 to-[#4FACFE]/20 rounded-full blur-3xl" />
              <img 
                src={IMAGES.heroLifestyle}
                alt="NYNE Focus - Take Back Your Focus"
                className="relative w-full max-w-lg rounded-2xl shadow-2xl"
                data-testid="hero-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Section 2: The Problem
const ProblemSection = () => {
  const problems = [
    { text: "Coffee crashes you at 2pm", icon: "☕" },
    { text: "Energy drinks spike your anxiety", icon: "⚡" },
    { text: "Other stimulants work until they don't", icon: "💊" },
    { text: "None of these were built for what you actually do", icon: "🎯" },
  ];

  return (
    <section id="problem" className="py-20 lg:py-32 bg-[#003342]" data-testid="problem-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            You work long hours. You've built a routine.
          </h2>
          <p className="text-xl lg:text-2xl text-[#4FACFE] font-semibold">
            But your fuel is the problem.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center"
              data-testid={`problem-card-${i}`}
            >
              <span className="text-4xl mb-4 block">{problem.icon}</span>
              <p className="text-white font-semibold">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/60 mt-12 text-lg"
        >
          High-performing professionals need a solution built for sustained cognitive output.
        </motion.p>
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
    <section id="product" className="py-20 lg:py-32 bg-white" data-testid="product-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4FACFE]/10 to-[#00F2FE]/10 rounded-3xl" />
            <img 
              src={IMAGES.supplementFacts}
              alt="NYNE Focus Product"
              className="relative w-full rounded-2xl"
              data-testid="product-image"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#4FACFE] font-bold text-sm tracking-wider uppercase">Introducing</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003342] mt-2 mb-2">NYNE FOCUS</h2>
            <p className="text-[#003342]/60 font-semibold mb-6">Lemon Ginger • 12 Pack</p>
            
            <p className="text-2xl font-bold text-[#003342] mb-6">$59.99</p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#003342] font-semibold">Quantity:</span>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-btn"
                  data-testid="qty-minus"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-bold text-[#003342]" data-testid="qty-value">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-btn"
                  data-testid="qty-plus"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <a 
              href={SHOPIFY_URL}
              className="w-full bg-[#003342] text-white py-4 font-bold text-lg hover:bg-[#4FACFE] transition-colors flex items-center justify-center gap-2 mb-8"
              data-testid="add-to-cart-btn"
            >
              Add to Cart
            </a>

            {/* Benefits */}
            <div>
              <h4 className="font-bold text-[#003342] mb-4">What you'll feel:</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#003342]/80">
                    <Check size={18} className="text-[#4FACFE] flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
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
    { name: "B12 (Methylcobalamin)", amount: "2.4mcg", benefit: "Energy and signal transmission speed" },
    { name: "B6 (Pyridoxine)", amount: "1.7mg", benefit: "Neurotransmitter synthesis and mood" },
  ];

  return (
    <section id="ingredients" className="py-20 lg:py-32 bg-gradient-to-b from-[#4FACFE]/5 to-white" data-testid="ingredients-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#4FACFE] font-bold text-sm tracking-wider uppercase mb-4 block">The Science</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003342] mb-4">
            Exactly What's In The Can
          </h2>
          <p className="text-lg text-[#003342]/60 max-w-2xl mx-auto">
            Every ingredient is clinically studied and purposefully dosed for optimal cognitive performance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ingredients.map((ing, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="ingredient-card bg-white p-6 border border-[#003342]/10 hover:border-[#4FACFE]/50 transition-all"
              data-testid={`ingredient-${i}`}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-[#003342]">{ing.name}</h4>
                <span className="text-[#4FACFE] font-bold text-sm bg-[#4FACFE]/10 px-2 py-1">{ing.amount}</span>
              </div>
              <p className="text-sm text-[#003342]/60">{ing.benefit}</p>
            </motion.div>
          ))}
        </div>
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
    { feature: "Clean Label", nyneGood: true, coffee: true, energy: false, preworkout: false },
    { feature: "Sustained Focus", nyneGood: true, coffee: false, energy: false, preworkout: false },
  ];

  const renderValue = (value, isNyne = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check size={20} className="text-green-500 mx-auto" />
      ) : (
        <X size={20} className="text-red-400 mx-auto" />
      );
    }
    return <span className={`font-semibold ${isNyne ? 'text-[#4FACFE]' : ''}`}>{value}</span>;
  };

  return (
    <section className="py-20 lg:py-32 bg-[#003342]" data-testid="comparison-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            NYNE vs The Rest
          </h2>
          <p className="text-lg text-white/60">
            See how NYNE FOCUS compares to what you're currently using.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px] comparison-table" data-testid="comparison-table">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left text-white/60 font-semibold py-4 px-4"></th>
                <th className="text-center text-[#4FACFE] font-bold py-4 px-4 bg-white/5">NYNE FOCUS</th>
                <th className="text-center text-white/60 font-semibold py-4 px-4">Coffee</th>
                <th className="text-center text-white/60 font-semibold py-4 px-4">Energy Drinks</th>
                <th className="text-center text-white/60 font-semibold py-4 px-4">Pre-Workout</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={i} className="border-b border-white/10">
                  <td className="text-white font-semibold py-4 px-4">{row.feature}</td>
                  <td className="text-center text-white py-4 px-4 bg-white/5">
                    {row.nyneGood !== undefined ? renderValue(row.nyneGood, true) : renderValue(row.nyne, true)}
                  </td>
                  <td className="text-center text-white/60 py-4 px-4">{renderValue(row.coffee)}</td>
                  <td className="text-center text-white/60 py-4 px-4">{renderValue(row.energy)}</td>
                  <td className="text-center text-white/60 py-4 px-4">{renderValue(row.preworkout)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};
};

// Section 6: FAQ
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How is NYNE FOCUS different than energy drinks or coffee?",
      answer: "NYNE FOCUS uses paraxanthine instead of caffeine, providing clean energy without the crash or jitters. We combine 8 clinically studied nootropics that have been found to improve alertness, focus, and memory. It's designed for sustained cognitive output—not a quick spike and crash."
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
    <section id="faq" className="py-20 lg:py-32 bg-white" data-testid="faq-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003342] mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="faq-item"
              data-testid={`faq-${i}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left"
                data-testid={`faq-toggle-${i}`}
              >
                <span className="font-bold text-[#003342] pr-4">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-[#4FACFE] flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="pb-6"
                >
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
    // Placeholder for Klaviyo integration
    setSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#4FACFE] to-[#00F2FE]" data-testid="cta-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003342] mb-6">
            You Know What To Do
          </h2>
          <p className="text-lg text-[#003342]/80 mb-10 max-w-xl mx-auto">
            Join thousands of high-performing professionals who've upgraded their fuel.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="email-input flex-1 px-5 py-4 text-[#003342] placeholder-[#003342]/40 font-medium"
                  data-testid="email-input"
                />
                <button
                  type="submit"
                  className="bg-[#003342] text-white px-8 py-4 font-bold hover:bg-[#003342]/90 transition-colors whitespace-nowrap"
                  data-testid="cta-submit-btn"
                >
                  Get 15% Off
                </button>
              </div>
              <p className="text-sm text-[#003342]/60 mt-4">
                Sign up to receive 15% off your first order.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/20 backdrop-blur-sm p-8 max-w-md mx-auto"
              data-testid="cta-success"
            >
              <Check size={48} className="text-[#003342] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#003342] mb-2">You're In!</h3>
              <p className="text-[#003342]/80">Check your email for your 15% discount code.</p>
            </motion.div>
          )}

          <div className="mt-12">
            <a 
              href={SHOPIFY_URL}
              className="inline-flex items-center gap-2 bg-[#003342] text-white px-10 py-5 font-bold text-lg hover:bg-[#003342]/90 transition-colors"
              data-testid="cta-shop-btn"
            >
              Shop NYNE FOCUS <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-[#003342] py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-white">NYNE</span>
            <span className="text-xl font-semibold text-[#4FACFE]">FOCUS</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#problem" className="text-white/60 hover:text-white font-semibold">The Problem</a>
            <a href="#product" className="text-white/60 hover:text-white font-semibold">Product</a>
            <a href="#ingredients" className="text-white/60 hover:text-white font-semibold">Ingredients</a>
            <a href="#faq" className="text-white/60 hover:text-white font-semibold">FAQ</a>
            <a href="mailto:hello@nynefocus.com" className="text-white/60 hover:text-white font-semibold">Contact</a>
          </nav>

          <p className="text-white/40 text-sm">
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
    <div className="min-h-screen bg-white" data-testid="landing-page">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ProductSection />
      <IngredientsSection />
      <ComparisonSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
