import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const trades = [
  { date: "Feb 20, 2026", pair: "EUR/USD", type: "BUY", entry: "1.0845", exit: "1.0912", pips: "+67", result: "profit" },
  { date: "Feb 19, 2026", pair: "GBP/JPY", type: "SELL", entry: "189.450", exit: "188.870", pips: "+58", result: "profit" },
  { date: "Feb 18, 2026", pair: "USD/CAD", type: "SELL", entry: "1.3520", exit: "1.3478", pips: "+42", result: "profit" },
  { date: "Feb 17, 2026", pair: "XAU/USD", type: "BUY", entry: "2024.50", exit: "2041.80", pips: "+173", result: "profit" },
  { date: "Feb 14, 2026", pair: "AUD/USD", type: "BUY", entry: "0.6542", exit: "0.6518", pips: "-24", result: "loss" },
  { date: "Feb 13, 2026", pair: "EUR/GBP", type: "SELL", entry: "0.8645", exit: "0.8598", pips: "+47", result: "profit" },
  { date: "Feb 12, 2026", pair: "USD/JPY", type: "BUY", entry: "150.250", exit: "150.890", pips: "+64", result: "profit" },
  { date: "Feb 11, 2026", pair: "NZD/USD", type: "BUY", entry: "0.6125", exit: "0.6168", pips: "+43", result: "profit" },
];

const TradeHistory = () => {
  return (
    <section id="trade-history" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
            Recent <span className="text-gradient">Trade Results</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Transparent track record. Every signal. Every result. No hiding.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden card-glow bg-card"
        >
          {/* Header */}
          <div className="hidden sm:grid grid-cols-6 gap-4 px-6 py-4 bg-secondary/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span>Date</span>
            <span>Pair</span>
            <span>Type</span>
            <span>Entry</span>
            <span>Exit</span>
            <span className="text-right">Pips</span>
          </div>

          {/* Rows */}
          {trades.map((trade, i) => (
            <div
              key={i}
              className="grid grid-cols-2 sm:grid-cols-6 gap-2 sm:gap-4 px-6 py-4 border-t border-border/50 hover:bg-secondary/30 transition-colors items-center text-sm"
            >
              <span className="text-muted-foreground">{trade.date}</span>
              <span className="font-semibold text-foreground">{trade.pair}</span>
              <span
                className={`hidden sm:inline-flex items-center gap-1 text-xs font-bold ${
                  trade.type === "BUY" ? "text-profit" : "text-loss"
                }`}
              >
                {trade.type === "BUY" ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {trade.type}
              </span>
              <span className="hidden sm:block text-muted-foreground">{trade.entry}</span>
              <span className="hidden sm:block text-muted-foreground">{trade.exit}</span>
              <span
                className={`text-right font-bold font-display ${
                  trade.result === "profit" ? "text-profit" : "text-loss"
                }`}
              >
                {trade.pips}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TradeHistory;
