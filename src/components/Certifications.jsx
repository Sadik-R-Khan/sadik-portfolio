import React from 'react';
import { Award, CheckCircle, Calendar, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Custom AWS Logo / Icon
function AwsBadgeIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-sm shrink-0">
      AWS
    </div>
  );
}

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-14 sm:py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-[#070B14] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-amber-200/80 dark:border-amber-800/60">
            <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            Verified Credentials
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Industry Certifications
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Validated knowledge in cloud architecture, security, distributed services, and full-stack software development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-5 sm:p-7 transition-all flex flex-col justify-between ${
                cert.isPrimary 
                  ? 'bg-gradient-to-b from-white to-amber-50/30 dark:from-slate-900 dark:to-amber-950/20 border-2 border-amber-300 dark:border-amber-700/80 shadow-md relative overflow-hidden' 
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs'
              }`}
            >
              {cert.isPrimary && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-bl-xl uppercase">
                  Top Credential
                </div>
              )}

              <div>
                <div className="flex items-start gap-4 mb-4">
                  {cert.isPrimary ? (
                    <AwsBadgeIcon />
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Card Footer with Score & Date */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.date}</span>
                </div>

                {cert.score && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700 font-mono text-xs font-bold">
                    <span>Score: {cert.score}</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
