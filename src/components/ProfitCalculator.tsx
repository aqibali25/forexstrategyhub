import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Calculator } from "lucide-react";

const ProfitCalculator = () => {
  const [capital, setCapital] = useState(1000);
  const [months, setMonths] = useState(3);

  const monthlyReturn = 0.15; // 15% avg monthly return
  const withChannel = capital * Math.pow(1 + monthlyReturn, months);
  const withoutChannel = capital * Math.pow(1 + 0.02, months); // 2% without

  const profit = withChannel - capital;
  const profitWithout = withoutChannel - capital;

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
            Profit <span className="text-gradient">Calculator</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            See your potential earnings with our signals vs trading alone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-xl bg-card card-glow">
              <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4">
                <DollarSign className="w-4 h-4 text-primary" />
                Starting Capital
              </label>
              <input
                type="range"
                min={100}
                max={50000}
                step={100}
                value={capital}
                onChange={(e) => setCapital(Number(e.target.value))}
                className="w-full accent-primary h-2 rounded-full appearance-none bg-secondary cursor-pointer"
              />
              <div className="mt-3 text-2xl font-bold font-display text-foreground">
                ${capital.toLocaleString()}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card card-glow">
              <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4">
                <Calculator className="w-4 h-4 text-primary" />
                Time Period (Months)
              </label>
              <input
                type="range"
                min={1}
                max={12}
                step={1}
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full accent-primary h-2 rounded-full appearance-none bg-secondary cursor-pointer"
              />
              <div className="mt-3 text-2xl font-bold font-display text-foreground">
                {months} {months === 1 ? "Month" : "Months"}
              </div>
            </div>
          </div>

          {/* Results comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Without */}
            <div className="p-6 rounded-xl bg-card border border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-loss/50" />
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                Trading Alone
              </p>
              <p className="text-sm text-muted-foreground mb-4">~2% monthly avg</p>
              <div className="text-3xl font-bold font-display text-foreground mb-1">
                ${withoutChannel.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
              <p className="text-sm text-muted-foreground">
                Profit:{" "}
                <span className="text-muted-foreground font-semibold">
                  +${profitWithout.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </p>
            </div>

            {/* With channel */}
            <div className="p-6 rounded-xl bg-card card-glow relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              <div className="flex items-center gap-2 mb-1">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                  With FX Elite
                </p>
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">~15% monthly avg</p>
              <div className="text-3xl font-bold font-display text-primary glow-green-text mb-1">
                ${withChannel.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
              <p className="text-sm text-muted-foreground">
                Profit:{" "}
                <span className="text-profit font-semibold">
                  +${profit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            * Based on average historical performance. Past results do not guarantee future returns.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfitCalculator;
