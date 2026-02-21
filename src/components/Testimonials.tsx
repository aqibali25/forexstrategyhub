import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James K.",
    role: "Day Trader",
    text: "This channel completely changed my trading game. Went from losing money every month to consistent profits. The signals are accurate and well-timed.",
    stars: 5,
  },
  {
    name: "Sarah M.",
    role: "Swing Trader",
    text: "Best forex signal group I've ever joined. The analysis is detailed and the community is incredibly supportive. Already made back my investment 10x.",
    stars: 5,
  },
  {
    name: "David R.",
    role: "Beginner Trader",
    text: "As a complete beginner, this channel taught me more than any course. The education content plus live signals is an unbeatable combo.",
    stars: 5,
  },
  {
    name: "Aisha L.",
    role: "Part-time Trader",
    text: "I trade part-time and these signals fit perfectly into my schedule. Clear entry and exit points. No guesswork. Just profits.",
    stars: 5,
  },
];

const Testimonials = () => {
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
            What Our <span className="text-gradient">Members Say</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real feedback from real traders in our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card card-glow relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-secondary-foreground mb-5 leading-relaxed text-sm">
                "{t.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
