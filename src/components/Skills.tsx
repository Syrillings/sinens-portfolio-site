
import { motion } from 'framer-motion';
import { Separator } from "@/components/ui/separator";
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  color: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', level: 90, category: 'frontend', color: 'from-orange-500 to-red-500' },
  { name: 'JavaScript', level: 85, category: 'frontend', color: 'from-yellow-400 to-amber-500' },
  { name: 'React', level: 80, category: 'frontend', color: 'from-cyan-400 to-blue-500' },
  { name: 'Vue', level: 80, category: 'frontend', color: 'from-green-500 to-emerald-600' },
  { name: 'Ionic-Capacitor', level: 90, category: 'frontend', color: 'from-green-500 to-emerald-600' },
  { name: 'TypeScript', level: 75, category: 'frontend', color: 'from-blue-500 to-indigo-600' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend', color: 'from-cyan-500 to-blue-600' },
  
  // Backend
  { name: 'Node.js', level: 50, category: 'backend', color: 'from-green-500 to-emerald-600' },
  { name: 'Express', level: 55, category: 'backend', color: 'from-gray-600 to-gray-800' },
  
  
  // Tools
  { name: 'Git', level: 85, category: 'tools', color: 'from-orange-600 to-red-700' },
   { name: 'CI/CD', level: 70, category: 'tools', color: 'from-purple-500 to-purple-800' },
    { name: 'Testing', level: 75, category: 'tools', color: 'from-green-500 to-green-700' },
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const frontendSkills = skills.filter((skill) => skill.category === 'frontend');
  const backendSkills = skills.filter((skill) => skill.category === 'backend');
  const toolSkills = skills.filter((skill) => skill.category === 'tools');
  
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            The technologies and tools I work with to bring ideas to life.
          </p>
          <Separator className="max-w-md mx-auto mt-8" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="inline-block w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-2"></span>
              Frontend
            </h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="inline-block w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-2"></span>
              Backend
            </h3>
            {backendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 md:col-span-2"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="inline-block w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-800 rounded-full mr-2"></span>
              Tools & Others
            </h3>
            {toolSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
