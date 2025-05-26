import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CodoraSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <Card className="overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90 border border-muted shadow-md">
          <CardContent className="p-6 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 text-center md:text-left"
              >
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gradient mb-6">
                  Introducing Codora
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  An AI-powered quiz platform designed specifically for developers. Test your skills,
                  compete with peers, and enhance your coding knowledge through interactive challenges.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button size="lg" className="group">
                    Coming Soon
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 flex justify-center"
              >
                <img
                  src="/lovable-uploads/c81b80f3-b498-4517-85d4-a5df96fa6e22.png"
                  alt="Codora Logo"
                  className="w-40 h-40 md:w-64 md:h-64 object-contain"
                />
              </motion.div>

            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CodoraSection;
