import React from 'react';
import { 
  ArrowDown, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Award, 
  GraduationCap, 
  Terminal,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Custom LeetCode Icon
function LeetCodeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.144-.012 0-.024-.002-.037-.002zm3.871 12.19H7.957c-.76 0-1.376.616-1.376 1.376 0 .76.616 1.376 1.376 1.376h9.397c.76 0 1.376-.616 1.376-1.376 0-.76-.616-1.376-1.376-1.376z" />
    </svg>
  );
}

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAFAFA] dark:bg-[#090D16] bg-radial-gradient transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Text Content (Left) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center gap-2 mb-5 sm:mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] sm:text-xs font-mono font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>B.Tech Computer Science &amp; Eng.</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] sm:text-xs font-mono font-medium rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60">
                <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>AWS Cloud Practitioner (Score: 914)</span>
              </span>
            </div>

            {/* Greeting & Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] sm:leading-[1.1] mb-3 sm:mb-4">
              Hi, I’m <span className="text-blue-600 dark:text-blue-400 inline-block">{personal.name}</span>
            </h1>

            <p className="text-base sm:text-xl font-medium text-slate-700 dark:text-slate-300 mb-3 sm:mb-4">
              Computer Science &amp; Engineering Graduate • Full Stack Software Developer
            </p>

            {/* Concise Mission Statement */}
            <p className="font-body text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-[1.8] sm:leading-[1.85] tracking-[0.015em] [word-spacing:0.06em] mb-8 max-w-2xl font-normal">
              Engineering end-to-end full-stack applications and software solutions with Java, Spring Boot, and Angular. Experienced in building responsive web frontends, RESTful APIs, database architectures, and cloud deployments on AWS.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-[0.98] w-full sm:w-auto text-center"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Sadik_Khan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white rounded-xl border border-slate-300 dark:border-slate-700 transition-all shadow-2xs hover:shadow-xs active:scale-[0.98] w-full sm:w-auto text-center group"
              >
                <Download className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social & Developer Profile Badges */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 w-full flex flex-wrap items-center gap-4 sm:gap-6">
              <span className="text-xs font-mono font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Profiles:
              </span>
              
              <div className="flex items-center gap-3">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 transition-all shadow-2xs"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 transition-all shadow-2xs"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personal.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-300 transition-all shadow-2xs"
                  aria-label="LeetCode Profile"
                  title="LeetCode Profile"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 transition-all shadow-2xs"
                  aria-label="Send Email"
                  title="Email Sadik"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Photograph / Seamlessly Blended Developer Portrait (Right) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
              
              {/* Subtle ambient glow matching the image's blue developer atmosphere */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-transparent rounded-[2.5rem] blur-2xl opacity-60 dark:opacity-80 transition-opacity duration-700 pointer-events-none"></div>

              {/* Clean frameless-style card that blends seamlessly in light & dark mode */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-1.5 sm:p-2 bg-gradient-to-b from-slate-200/90 via-white to-slate-200/70 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 border border-slate-200/90 dark:border-slate-800 shadow-xl dark:shadow-2xl dark:shadow-blue-950/40">
                <div className="relative aspect-[1145/1374] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center rounded-xl sm:rounded-2xl transition-transform duration-500 hover:scale-[1.01]"
                    loading="eager"
                  />
                  {/* Subtle inner edge ring */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-black/10 dark:ring-white/10 pointer-events-none"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
