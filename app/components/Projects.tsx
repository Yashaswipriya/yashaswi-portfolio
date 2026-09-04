import Link from 'next/link';
import { ExternalLink, Github, Folder } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'COLLABX',
      description:
        'Google Docs style collaborative editor with real-time syncing, Redis pub/sub, and optimistic concurrency control.',
      tags: ['WEBSOCKETS', 'REDIS', 'POSTGRES'],
      githubUrl: 'https://github.com/Yashaswipriya/CollabX',
      liveUrl: 'https://collab-x-henna.vercel.app/',
    },
    {
      title: 'WEBHOOK ENGINE',
      description:
        'Fault-tolerant webhook delivery system with BullMQ retries, exponential backoff, and dead-letter queues.',
      tags: ['POSTGRES', 'BULLMQ', 'DOCKER'],
      githubUrl: 'https://github.com/Yashaswipriya/Webhook-Service',
      liveUrl: 'https://github.com/Yashaswipriya/Webhook-Service',
    },
    {
      title: 'TESTPILOT AI',
      description:
        'AI-powered developer tool that turns GitHub source code into framework-aware tests, commits them back to the repository, and keeps a persistent generation history.',
      tags: ['GITHUB OAUTH', 'AWS EC2', 'MONGODB'],
      githubUrl: 'https://github.com/Yashaswipriya/TestPilot-AI',
      liveUrl: 'https://testpilot-ai.me/',
    },
    {
      title: 'LEGALLENS AI',
      description:
        'AI legal document analyzer that detects risks, suggests actions, extracts structured insights, and generates PDF reports.',
      tags: ['GEMINI', 'MONGODB', 'JWT'],
      githubUrl: 'https://github.com/yashaswipriya/legallens-ai',
      liveUrl: 'https://legal-lens-ai-tan.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-16 space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <p className="font-pixel text-xs font-bold text-[#DCA832] tracking-widest uppercase">
          PROJECTS
        </p>
        <h2 className="font-pixel text-3xl sm:text-5xl font-bold text-[#1E2B24] tracking-tight">
          FEATURED WORK
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white border-4 border-[#1E2B24] p-6 flex flex-col justify-between space-y-6 transition-transform hover:-translate-y-1"
            style={{ boxShadow: '6px 6px 0px #1E2B24' }}
          >
            {/* Card Top: Icon & Links */}
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 bg-[#DCA832] border-2 border-[#1E2B24] flex items-center justify-center text-[#1E2B24]">
                <Folder className="w-5 h-5 stroke-[2.5]" />
              </div>

              {/* Links: GitHub & Live App */}
              <div className="flex items-center gap-3">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 border-2 border-[#1E2B24] bg-[#FAF8ED] hover:bg-[#DCA832] transition-colors"
                  title="View Source Code"
                >
                  <Github className="w-4 h-4 text-[#1E2B24] stroke-[2.5]" />
                </Link>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 border-2 border-[#1E2B24] bg-[#FAF8ED] hover:bg-[#DCA832] transition-colors"
                  title="Visit Live Application"
                >
                  <ExternalLink className="w-4 h-4 text-[#1E2B24] stroke-[2.5]" />
                </Link>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-3">
              <h3 className="font-pixel text-xl font-bold text-[#1E2B24]">
                {project.title}
              </h3>
              <p className="text-[#1E2B24] font-sans text-sm leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="font-pixel text-[10px] font-bold px-2.5 py-1 bg-[#FAF8ED] border-2 border-[#1E2B24] text-[#1E2B24]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}