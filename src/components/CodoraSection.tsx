
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CodoraSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <Card className="overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90 border-2">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center md:items-start gap-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                  Introducing Codora
                </h2>
                <p className="text-lg text-muted-foreground text-center md:text-left">
                  An AI-powered quiz platform designed specifically for developers. Test your skills,
                  compete with peers, and enhance your coding knowledge through interactive challenges.
                </p>
                <Button size="lg" className="group">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="flex justify-center items-center"
              >
                <img
                  src="/lovable-uploads/c81b80f3-b498-4517-85d4-a5df96fa6e22.png"
                  alt="Codora Logo"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain"
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
