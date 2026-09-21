import React from 'react';
import { 
  GraduationCap, 
  Code, 
  Database, 
  Cloud, 
  CheckCircle2, 
  Sparkles,
  Server
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0A0F1D] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-blue-100 dark:border-blue-800/60">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Background &amp; Engineering Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative (Left) */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            {about.paragraphs.map((p, idx) => (
              <p key={idx} className="font-normal">
                {p}
              </p>
            ))}

            {/* Core Focus Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                <Server className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Backend Systems</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">REST APIs, JWT Auth, Spring Boot microservices, and database transaction locking.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                <Cloud className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Cloud Deployment</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">AWS EC2, S3 pre-signed storage, managed RDS (MySQL), and Docker containerization.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic & Professional Highlights Card (Right) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 shadow-xs">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Academic &amp; Profile Summary
              </h3>

              <div className="space-y-4">
                {about.highlights.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200/70 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between"
                  >
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-medium">
                      {item.label}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Verified credentials backed by official resume</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
