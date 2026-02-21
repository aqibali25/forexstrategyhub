import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => {
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
            See Us <span className="text-gradient">In Action</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Watch how we analyze the market and deliver winning trades daily.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden card-glow bg-card">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Forex Trading Channel Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">
            <Play className="w-4 h-4 inline mr-1" />
            Replace this with your actual channel video
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
