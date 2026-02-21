import { Send } from "lucide-react";

const FooterCTA = () => {
  return (
    <footer className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
            Ready to Start <span className="text-gradient">Winning?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Stop guessing. Start trading with confidence. Join thousands of
            profitable traders today.
          </p>
          <a
            href="https://t.me/yourchannellink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg glow-green hover:brightness-110 transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            Join Now — It's Free
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Forex Signals. All rights reserved.
          </p>
          <p className="mt-2 text-xs">
            Trading forex involves risk. Past performance does not guarantee
            future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
