import { motion } from "framer-motion";
import { Send, TrendingUp, Users, BarChart3 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: TrendingUp, value: "92%", label: "Win Rate" },
  { icon: BarChart3, value: "2,400+", label: "Pips Earned" },
  { icon: Users, value: "5,000+", label: "Members" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Trading charts background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
            Premium Forex Signals
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
            Trade Smarter.{" "}
            <span className="text-gradient">Profit Bigger.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
            Join our elite Telegram channel for daily forex signals, market
            analysis, and a community of profitable traders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://t.me/yourchannellink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg glow-green hover:brightness-110 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              Join Telegram Channel
            </a>
            <a
              href="#trade-history"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-lg hover:bg-secondary transition-all duration-300"
            >
              View Trade History
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
                <stat.icon className="w-6 h-6 text-primary mb-1" />
                <span className="text-3xl font-bold font-display text-foreground glow-green-text">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
