import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const trades = [
  {
    date: "20/02/2026",
    pair: "XAU/USD",
    type: "BUY",
    entry: "4995",
    exit: "5005",
    pips: "+150",
    result: "profit",
  },
  {
    date: "20/02/2026",
    pair: "XAU/USD",
    type: "SELL",
    entry: "5018",
    exit: "5008",
    pips: "+100",
    result: "profit",
  },
  {
    date: "20/02/2026",
    pair: "XAU/USD",
    type: "BUY",
    entry: "4995",
    exit: "5005",
    pips: "+150",
    result: "profit",
  },
  {
    date: "19/02/2026",
    pair: "XAU/USD",
    type: "BUY",
    entry: "5002",
    exit: "5015",
    pips: "+130",
    result: "profit",
  },
  {
    date: "19/02/2026",
    pair: "XAU/USD",
    type: "BUY",
    entry: "4984",
    exit: "4997",
    pips: "+130",
    result: "profit",
  },
  {
    date: "19/02/2026",
    pair: "XAU/USD",
    type: "BUY",
    entry: "4981",
    exit: "4991",
    pips: "+100",
    result: "profit",
  },
  {
    date: "18/02/2026",
    pair: "XAU/USD",
    type: "SELL",
    entry: "4917",
    exit: "4907",
    pips: "+100",
    result: "profit",
  },
  {
    date: "17/02/2026",
    pair: "XAU/USD",
    type: "BUY",
    entry: "4920",
    exit: "4930",
    pips: "+100",
    result: "profit",
  },
  {
    date: "16/02/2026",
    pair: "XAU/USD",
    type: "BUY",
    entry: "4975",
    exit: "4990",
    pips: "+150",
    result: "profit",
  },
];

const TradeHistory = () => {
  return (
    <section id="trade-history" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            Recent <span className="text-gradient">Trade Results</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            Transparent track record. Every signal. Every result. No hiding.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto rounded-xl overflow-hidden card-glow bg-card border border-border/50"
        >
          {/* Header - Hidden on mobile */}
          <div className="hidden sm:grid grid-cols-6 gap-4 px-6 py-4 bg-secondary/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/50">
            <span className="col-span-1">Date</span>
            <span className="col-span-1">Pair</span>
            <span className="col-span-1">Type</span>
            <span className="col-span-1">Entry</span>
            <span className="col-span-1">Exit</span>
            <span className="col-span-1 text-right">Pips</span>
          </div>

          {/* Mobile Header - Visible only on mobile */}
          <div className="sm:hidden grid grid-cols-3 gap-2 px-4 py-3 bg-secondary/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/50">
            <span className="col-span-1">Date</span>
            <span className="col-span-1">Pair</span>
            <span className="col-span-1 text-right">Pips</span>
          </div>

          {/* Rows */}
          {trades.map((trade, i) => (
            <div
              key={i}
              className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4 px-4 sm:px-6 py-4 border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors items-center text-sm"
            >
              {/* Mobile Layout */}
              <div className="sm:hidden col-span-1 text-muted-foreground text-xs">
                {trade.date}
              </div>

              <div className="sm:hidden col-span-1">
                <div className="font-semibold text-foreground text-sm">
                  {trade.pair}
                </div>
                <div className="flex items-center mt-1">
                  <span
                    className={`inline-flex items-center text-xs font-bold px-1.5 py-0.5 rounded ${
                      trade.type === "BUY"
                        ? "text-profit bg-profit/10"
                        : "text-loss bg-loss/10"
                    }`}
                  >
                    {trade.type === "BUY" ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {trade.type}
                  </span>
                </div>
              </div>

              <div
                className={`sm:hidden col-span-1 text-right font-bold font-display text-base ${
                  trade.result === "profit" ? "text-profit" : "text-loss"
                }`}
              >
                {trade.pips}
              </div>

              {/* Desktop Layout */}
              <span className="hidden sm:block col-span-1 text-muted-foreground text-sm">
                {trade.date}
              </span>

              <span className="hidden sm:block col-span-1 font-semibold text-foreground">
                {trade.pair}
              </span>

              <span
                className={`hidden sm:inline-flex col-span-1 items-center gap-1.5 text-xs font-bold ${
                  trade.type === "BUY" ? "text-profit" : "text-loss"
                }`}
              >
                {trade.type === "BUY" ? (
                  <TrendingUp className="w-3.5 h-3.5" />
                ) : (
                  <TrendingDown className="w-3.5 h-3.5" />
                )}
                {trade.type}
              </span>

              <span className="hidden sm:block col-span-1 text-muted-foreground text-sm font-mono">
                {trade.entry}
              </span>

              <span className="hidden sm:block col-span-1 text-muted-foreground text-sm font-mono">
                {trade.exit}
              </span>

              <span
                className={`hidden sm:block col-span-1 text-right font-bold font-display text-base ${
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
