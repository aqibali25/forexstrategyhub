import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Is the Telegram channel free to join?",
    a: "Yes! Our free signals channel is completely free. We also offer a VIP group with premium signals, detailed analysis, and personal mentoring for serious traders.",
  },
  {
    q: "What currency pairs do you trade?",
    a: "We cover pair gold (XAU/USD). Our analysts monitor 20+ instruments daily.",
  },
  {
    q: "How many signals do you send per day?",
    a: "We send 3-5 high-quality signals daily. We focus on quality over quantity — every signal is backed by technical and fundamental analysis.",
  },
  {
    q: "Do I need trading experience to join?",
    a: "Not at all! Our signals come with clear entry, stop-loss, and take-profit levels. Plus, our education channel has free courses for beginners.",
  },
  {
    q: "What is your win rate?",
    a: "Our verified win rate is 93% across all signals. You can check our full transparent trade history right on this page.",
  },
  {
    q: "How do I get started?",
    a: "Simply click any 'Join' button on this page to open our Telegram channel. Follow the pinned message for setup instructions — you'll be trading within minutes.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

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
            Frequently <span className="text-gradient">Asked Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to know before joining our community.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 p-5 rounded-xl bg-card card-glow text-left group transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    {faq.q}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 pt-2 text-sm text-muted-foreground leading-relaxed ml-8">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
