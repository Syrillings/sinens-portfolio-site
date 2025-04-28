
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
    <div className="container mx-auto max-w-5xl px-6 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4 md:space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xs sm:text-sm md:text-base font-mono text-neon-teal"
          >
            <span className="inline-block">Hi there, I'm</span>
          </motion.div>
  
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-teal bg-clip-text text-transparent animate-gradient-x"
          >
            Sinen
          </motion.h1>
  
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-4xl font-semibold text-foreground/80"
          >
            Software (Frontend) Developer
          </motion.h2>
  
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm sm:text-base text-muted-foreground max-w-lg"
          >
            I build innovative web applications and tools using modern technologies.
            Currently working on Codora, an AI-powered quiz platform for developers
            that enables competitive learning and skill assessment.
          </motion.p>
  
          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
  
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
  
          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex space-x-4 pt-4"
          >
            <a href="https://github.com/Syrillings" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-neon-blue transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-neon-blue transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
           
          </motion.div>
  
          {/* MOBILE AVATAR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="block lg:hidden mt-10 flex justify-center"
          >
            <Avatar className="w-32 h-32">
              <AvatarImage 
                src="/lovable-uploads/afb6628c-5343-4162-bc28-1ae8dab76ca5.png" 
                alt="Syrillings" 
                className="object-cover"
              />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
          </motion.div>
        </motion.div>
  
        {/* RIGHT IMAGE (DESKTOP ONLY) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative w-full h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl opacity-30 animate-float"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <Avatar className="w-64 h-64">
                <AvatarImage 
                  src="/lovable-uploads/afb6628c-5343-4162-bc28-1ae8dab76ca5.png" 
                  alt="Syrillings" 
                  className="object-cover"
                />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </motion.div>
  
      </div>
    </div>
  
    {/* SCROLL DOWN */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
    >
      <a
        href="#projects"
        className="flex flex-col items-center justify-center text-foreground/50 hover:text-foreground transition-colors"
      >
        <span className="text-xs sm:text-sm mb-2">Scroll down</span>
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-1 bg-foreground/50 rounded-full"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      </a>
    </motion.div>
  
  </section>
  
  );
};

export default Hero;
