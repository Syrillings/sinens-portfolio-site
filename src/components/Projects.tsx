
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useGitHubRepositories, type Repository } from '@/services/github-api';
import { Github, ExternalLink, Star } from 'lucide-react';
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-500",
  HTML: "bg-orange-500",
  CSS: "bg-purple-500",
  Python: "bg-green-500",
  Java: "bg-red-500",
  Ruby: "bg-red-700",
  PHP: "bg-blue-400",
  Go: "bg-blue-300",
  Swift: "bg-orange-600",
  Kotlin: "bg-purple-600",
  Rust: "bg-orange-700",
  C: "bg-gray-500",
  "C#": "bg-green-600",
  "C++": "bg-pink-600",
};

const ProjectCard = ({ project, index }: { project: Repository; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="h-full flex flex-col hover:border-primary/50 transition-all">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="text-lg md:text-xl">{project.name}</span>
            <div className="flex items-center space-x-1 text-yellow-400">
              <Star size={18} />
              <span className="text-sm text-muted-foreground">{project.stargazers_count}</span>
            </div>
          </CardTitle>
          <CardDescription className="line-clamp-2 h-10">
            {project.description || "No description provided"}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.topics.slice(0, 3).map((topic) => (
              <Badge key={topic} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
            {project.language && (
              <Badge variant="outline" className="flex items-center gap-1">
                <span className={`inline-block w-2 h-2 rounded-full ${
                  languageColors[project.language] || "bg-gray-400"
                }`}></span>
                {project.language}
              </Badge>
            )}
          </div>
          <div className="text-xs text-muted-foreground">
            Updated {format(new Date(project.updated_at), 'MMM d, yyyy')}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2 pt-2">
          <Button variant="outline" asChild size="sm" className="flex-1">
            <a href={project.html_url} target="_blank" rel="noreferrer">
              <Github size={16} className="mr-1" /> Code
            </a>
          </Button>
          {project.homepage && (
            <Button asChild size="sm" variant="default" className="flex-1">
              <a href={project.homepage} target="_blank" rel="noreferrer">
                <ExternalLink size={16} className="mr-1" /> Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const { repositories, loading, error } = useGitHubRepositories('Syrillings');

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A collection of my work from GitHub showcasing my skills and experience.
          </p>
          <Separator className="max-w-md mx-auto mt-8" />
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-pulse flex space-x-2">
              <div className="h-3 w-3 bg-primary rounded-full"></div>
              <div className="h-3 w-3 bg-primary rounded-full"></div>
              <div className="h-3 w-3 bg-primary rounded-full"></div>
            </div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>Error loading projects. Please try again later.</p>
          </div>
        ) : repositories.length === 0 ? (
          <div className="text-center text-muted-foreground">
            <p>No repositories found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories.slice(0, 6).map((repo, index) => (
              <ProjectCard key={repo.id} project={repo} index={index} />
            ))}
          </div>
        )}

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button asChild size="lg">
            <a href="https://github.com/Syrillings" target="_blank" rel="noreferrer">
              <Github className="mr-2" /> View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
