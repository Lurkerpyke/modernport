import { Code, Palette, Server, Database } from "lucide-react";

export const SKILLS = [
    {
        title: 'Frontend Engineering',
        icon: <Code />,
        tooltip: 'React Ecosystem Expert | Next.js Certified',
        description: 'Building performant and accessible user interfaces',
        tech: ['Next.js 14', 'TypeScript', 'React Server Components', 'TanStack Query'],
    },
    {
        title: 'UI/UX Design',
        icon: <Palette />,
        tooltip: 'Design System Architect | Framer Motion Specialist',
        description: 'Creating intuitive and visually stunning experiences',
        tech: ['Figma', 'Storybook', 'Framer Motion', 'Tailwind CSS'],
    },
    {
        title: 'Backend Development',
        icon: <Server />,
        tooltip: 'Cloud-Native Solutions | REST/GraphQL APIs',
        description: 'Scalable backend services and API development',
        tech: ['Node.js', 'GraphQL', 'PostgreSQL', 'Redis'],
    },
    {
        title: 'DevOps & Cloud',
        icon: <Database />,
        tooltip: 'AWS Certified | Kubernetes Specialist',
        description: 'CI/CD pipelines and cloud infrastructure management',
        tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    },
]