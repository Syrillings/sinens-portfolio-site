
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const About = () => {
  const experiences = [
    {
      period: "2020 - Present",
      title: "Senior Software Developer",
      company: "Tech Company",
      description: "Leading development of web applications using React, TypeScript, and Node.js. Implementing CI/CD pipelines and mentoring junior developers."
    },
    {
      period: "2018 - 2020",
      title: "Full Stack Developer",
      company: "Digital Agency",
      description: "Built responsive web applications and RESTful APIs. Worked with React, Express, and MongoDB."
    },
    {
      period: "2016 - 2018",
      title: "Frontend Developer",
      company: "Startup Inc",
      description: "Developed user interfaces using modern JavaScript frameworks and CSS preprocessors."
    }
  ];

  const education = [
    {
      period: "2012 - 2016",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      description: "Focused on software engineering and web development. Graduated with honors."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            My background, experience, and what drives me as a developer.
          </p>
          <Separator className="max-w-md mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate software developer with a strong focus on creating intuitive and performant web applications. 
                My journey in tech began when I first discovered the power of code to solve real-world problems and transform ideas into reality.
              </p>
              <p>
                Over the years, I've developed a deep expertise in frontend and backend technologies, 
                with a particular love for React, TypeScript, and Node.js. I believe in writing clean, maintainable code 
                that stands the test of time and can be easily understood by other developers.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, mentoring aspiring developers, 
                or exploring new technologies that could enhance my toolkit. I'm always looking to learn, grow, and push the boundaries of what's possible.
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6">Experience</h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    className="relative pl-6 border-l border-border"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"></div>
                    <div className="text-sm text-muted-foreground mb-1">{exp.period}</div>
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <div className="text-base text-primary mb-2">{exp.company}</div>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    className="relative pl-6 border-l border-border"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"></div>
                    <div className="text-sm text-muted-foreground mb-1">{edu.period}</div>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <div className="text-base text-primary mb-2">{edu.institution}</div>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
