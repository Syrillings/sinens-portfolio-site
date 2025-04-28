
import { useState, useEffect } from 'react';

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

export const useGitHubRepositories = (username: string) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch repositories: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Sort repositories by stars and filter out forks
        const sortedRepos = data
          .filter((repo: any) => !repo.fork)
          .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
        
        setRepositories(sortedRepos);
      } catch (err: any) {
        setError(err);
        console.error("Error fetching GitHub repositories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [username]);

  return { repositories, loading, error };
};
