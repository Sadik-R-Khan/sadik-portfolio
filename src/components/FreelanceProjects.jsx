import React, { useState } from 'react';
import { 
  Briefcase, 
  CheckCircle, 
  ZoomIn, 
  ArrowUpRight, 
  Sparkles,
  Layers,
  Palette
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ImageModal from './ImageModal';

export default function FreelanceProjects() {
  const { freelanceProjects } = portfolioData;
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (imgSrc, title) => {
    setModalImage(imgSrc);
    setModalTitle(title);
  };

  return (
    <section id="freelance" className="py-14 sm:py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-[#070B14] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-emerald-200/80 dark:border-emerald-800/60">
            <Briefcase className="w-3.5 h-3.5" />
            Client Work
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Freelance Web Development
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Translating practical business requirements into clean, high-performance web experiences for independent brands and local enterprises.
          </p>
        </div>

        {/* Freelance Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {freelanceProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Screenshot with Click to Zoom */}
                <div 
                  onClick={() => openModal(project.image, `${project.title} — ${project.tagline}`)}
                  className="group relative bg-slate-100 dark:bg-slate-950 overflow-hidden cursor-pointer aspect-[16/10] border-b border-slate-200/70 dark:border-slate-800"
                >
                  <img 
                    src={project.image} 
                    alt={`${project.title} Showcase`} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-sm backdrop-blur-2xs">
                    <ZoomIn className="w-5 h-5" />
                    <span>Enlarge Design</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-7">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {project.type}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-mono font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider block">
                      Deliverables &amp; Focus
                    </span>
                    <ul className="space-y-2">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technologies Tag Footer */}
              <div className="px-5 pb-5 pt-3 sm:px-6 sm:pb-6 sm:pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5 bg-slate-50/50 dark:bg-slate-950/40">
                {project.technologies.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono text-[11px]"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
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
