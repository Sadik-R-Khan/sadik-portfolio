import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Cloud, 
  CheckCircle2, 
  ZoomIn, 
  Server, 
  ShieldCheck, 
  Database,
  ArrowUpRight,
  Copy,
  Check,
  Code2,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ImageModal from './ImageModal';

export default function FeaturedProjects() {
  const { featuredProjects } = portfolioData;
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [projectFilter, setProjectFilter] = useState('all');
  const [activeTabs, setActiveTabs] = useState({
    driveshare: 'architecture',
    'ticket-engine': 'architecture',
    docwallet: 'architecture'
  });
  const [copiedId, setCopiedId] = useState(null);

  const openModal = (imgSrc, title) => {
    setModalImage(imgSrc);
    setModalTitle(title);
  };

  const handleTabChange = (projectId, tab) => {
    setActiveTabs(prev => ({ ...prev, [projectId]: tab }));
  };

  const copyGithubLink = (projectId, link) => {
    navigator.clipboard.writeText(link);
    setCopiedId(projectId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter projects based on selection
  const filteredProjects = featuredProjects.filter(project => {
    if (projectFilter === 'all') return true;
    if (projectFilter === 'cloud') return project.cloudDeployment.toLowerCase().includes('aws');
    if (projectFilter === 'backend') return project.technologies.some(t => ['Spring Boot', 'Redis', 'Spring Security'].includes(t));
    return true;
  });

  return (
    <section id="projects" className="py-14 sm:py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0A0F1D] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-blue-100 dark:border-blue-800/60">
              Portfolio Showcase
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Projects &amp; Systems
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Real software systems engineered with Spring Boot, MySQL, Angular, Redis, and containerized on AWS.
            </p>
          </div>

          {/* Interactive Project Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl self-start md:self-auto border border-slate-200 dark:border-slate-800 max-w-full overflow-x-auto scrollbar-none">
            <button
              onClick={() => setProjectFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap shrink-0 transition-all ${
                projectFilter === 'all'
                  ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All ({featuredProjects.length})
            </button>
            <button
              onClick={() => setProjectFilter('cloud')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap shrink-0 transition-all ${
                projectFilter === 'cloud'
                  ? 'bg-white dark:bg-blue-600 text-blue-700 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              AWS Cloud
            </button>
            <button
              onClick={() => setProjectFilter('backend')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap shrink-0 transition-all ${
                projectFilter === 'backend'
                  ? 'bg-white dark:bg-blue-600 text-blue-700 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Backend / Concurrency
            </button>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-10 sm:space-y-16">
          {filteredProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            const currentTab = activeTabs[project.id] || 'architecture';

            return (
              <div 
                key={project.id}
                className="bg-slate-50/70 dark:bg-slate-900/60 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 group/card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Visual / Screenshot / Diagram Column */}
                  <div className={`lg:col-span-6 flex flex-col justify-center bg-slate-100/70 dark:bg-slate-950/60 p-4 sm:p-6 lg:p-10 border-b lg:border-b-0 ${isReversed ? 'lg:order-last lg:border-l' : 'lg:border-r'} border-slate-200/70 dark:border-slate-800`}>
                    {project.hasImage ? (
                      <div 
                        onClick={() => openModal(project.image, `${project.title} — System Architecture & UI Preview`)}
                        className="group relative rounded-2xl overflow-hidden shadow-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 cursor-pointer"
                      >
                        <img 
                          src={project.image} 
                          alt={`${project.title} Interface Preview`} 
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-sm backdrop-blur-2xs">
                          <ZoomIn className="w-5 h-5 text-white" />
                          <span>Click to Inspect Preview</span>
                        </div>
                      </div>
                    ) : (
                      /* Fallback for projects with pure backend architecture */
                      <div className="w-full rounded-2xl p-6 sm:p-8 bg-slate-900 dark:bg-black text-slate-100 border border-slate-800 shadow-md font-mono flex flex-col justify-between">
                        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                          </div>
                          <span className="text-xs text-slate-400">Redis Lua Engine</span>
                        </div>

                        <div className="my-6 space-y-3 text-xs leading-relaxed text-slate-300">
                          <p className="text-blue-400 font-semibold">// Concurrency Safeguard Pipeline</p>
                          <p className="text-emerald-400 font-mono">1. Atomic Seat Lock via Redis Lua</p>
                          <p className="text-slate-300 pl-4">→ Eliminates race conditions &amp; overselling</p>
                          <p className="text-amber-400 font-mono">2. Redis TTL Expiration (10-min Cart Hold)</p>
                          <p className="text-slate-300 pl-4">→ Automatic keyspace event restitution</p>
                          <p className="text-cyan-400 font-mono">3. AWS RDS (MySQL) + S3 Persistence</p>
                          <p className="text-slate-300 pl-4">→ Transactional checkout &amp; PDF generation</p>
                        </div>

                        <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                          <span>Backend High-Throughput Service</span>
                          <span className="text-blue-400 font-bold">AWS EC2 Deployed</span>
                        </div>
                      </div>
                    )}

                    {/* Deployed on AWS Badge */}
                    <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-300 bg-white/90 dark:bg-slate-800/90 py-2.5 px-3.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                      <Cloud className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span className="font-semibold text-slate-800 dark:text-slate-200">Deployment:</span>
                      <span className="truncate">{project.cloudDeployment}</span>
                    </div>
                  </div>

                  {/* Project Details Column */}
                  <div className="lg:col-span-6 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* Badge & Title */}
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80">
                          {project.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 mt-1 mb-4">
                        {project.subtitle}
                      </p>

                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Interactive Section Switcher Tabs */}
                      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 mb-4 text-xs font-mono font-medium overflow-x-auto scrollbar-none">
                        <button
                          onClick={() => handleTabChange(project.id, 'architecture')}
                          className={`pb-1 px-1 whitespace-nowrap shrink-0 transition-all border-b-2 -mb-[9px] ${
                            currentTab === 'architecture'
                              ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-bold'
                              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                          }`}
                        >
                          Architecture &amp; Features
                        </button>
                        <button
                          onClick={() => handleTabChange(project.id, 'problem')}
                          className={`pb-1 px-1 whitespace-nowrap shrink-0 transition-all border-b-2 -mb-[9px] ${
                            currentTab === 'problem'
                              ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-bold'
                              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                          }`}
                        >
                          Problem Addressed
                        </button>
                      </div>

                      {/* Tab 1: Architecture Highlights */}
                      {currentTab === 'architecture' ? (
                        <div className="space-y-2 mb-6 animate-fade-in">
                          <ul className="space-y-2">
                            {project.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                                <span className="leading-snug">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        /* Tab 2: Problem Statement */
                        <div className="p-4 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200/90 dark:border-slate-700 mb-6 animate-fade-in">
                          <span className="text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider block mb-1">
                            Core Challenge &amp; Solution
                          </span>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                            {project.problemSolved}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Technologies & Links Footer */}
                    <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.map((tech, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-mono text-xs hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Interactive Action Buttons */}
                      <div className="flex items-center gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold font-mono rounded-lg bg-slate-900 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-2xs"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>View Code on GitHub</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>

                        <button
                          onClick={() => copyGithubLink(project.id, project.github)}
                          className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                          title="Copy GitHub Repository link"
                        >
                          {copiedId === project.id ? (
                            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageModal 
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
        imageSrc={modalImage}
        imageTitle={modalTitle}
      />
    </section>
  );
}
