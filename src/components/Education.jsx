import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-14 sm:py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0A0F1D] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-blue-100 dark:border-blue-800/60">
            Academic Background
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education &amp; Training
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Formal engineering education paired with targeted industry-grade full-stack development training.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-2.5 sm:ml-6 space-y-8 sm:space-y-10 pl-5 sm:pl-8">
          {education.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Bullet */}
              <div className="absolute -left-[29px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-600 dark:border-blue-400 shadow-xs group-hover:scale-110 transition-transform"></div>

              <div className="bg-slate-50/70 dark:bg-slate-900/70 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-7 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs transition-all">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    {item.period}
                  </span>
                </div>

                {/* Subtitle / Institution */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{item.institution}</span>
                  <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">•</span>
                  <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                  {item.cgpa && (
                    <>
                      <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">•</span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 text-xs font-mono font-bold">
                        CGPA: {item.cgpa}
                      </span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
