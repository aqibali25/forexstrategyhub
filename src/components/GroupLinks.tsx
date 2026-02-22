import { motion } from "framer-motion";
import { Send, MessageCircle, Crown, BookOpen } from "lucide-react";

const links = [
  {
    icon: Send,
    title: "Free Signals Channel",
    description: "Get daily free forex signals and market updates.",
    url: "https://t.me/+VnNrj2oJ1PVlZGJk",
    badge: "Free",
  },
  {
    icon: Crown,
    title: "Born to Trade Group",
    description:
      "High-probability signals backed by professional market analysis.",
    url: "https://t.me/+ZuAkvZVRzz5jMzU0",
    badge: "Public",
  },
  // {
  //   icon: MessageCircle,
  //   title: "Signals Channel",
  //   description: "Connect with 5,000+ traders. Share ideas and learn together.",
  //   url: "https://t.me/yourcommunity",
  //   badge: "Free",
  // },
  // {
  //   icon: BookOpen,
  //   title: "Account Management",
  //   description: "Free trading courses, eBooks, and market analysis tutorials.",
  //   url: "https://t.me/youreducation",
  //   badge: "New",
  // },
];

const GroupLinks = () => {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
            Join Our <span className="text-gradient">Telegram Groups</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Pick the group that fits your trading level and start profiting
            today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card card-glow hover:border-primary/40 transition-all duration-300 block"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <link.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">
                      {link.title}
                    </h3>
                    {link.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-primary/10 text-primary">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupLinks;
