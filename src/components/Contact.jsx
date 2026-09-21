import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Download, 
  Github, 
  Linkedin, 
  MapPin, 
  Send 
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

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setToastMessage(`✓ Email copied: ${text}`);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setToastMessage(`✓ Phone copied: ${text}`);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0A0F1D] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50/70 dark:bg-slate-900/70 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 p-5 sm:p-10 lg:p-16 shadow-xs">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            
            {/* Header Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-blue-100 dark:border-blue-800/60">
              Get in Touch
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4">
              Let’s Build Something.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-8 sm:mb-10 font-normal">
              I’m open to software development opportunities, freelance projects, and conversations around building useful products.
            </p>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 sm:mb-10 text-left">
              
              {/* Email Card */}
              <div className="bg-white dark:bg-slate-800/90 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-blue-300 dark:hover:border-blue-500 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                      Email Address
                    </span>
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <a 
                    href={`mailto:${personal.email}`}
                    className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                  >
                    {personal.email}
                  </a>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between">
                  <a 
                    href={`mailto:${personal.email}`}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1"
                  >
                    <span>Send email</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => copyToClipboard(personal.email, 'email')}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-700 dark:text-emerald-300 font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white dark:bg-slate-800/90 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-blue-300 dark:hover:border-blue-500 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                      Direct Phone
                    </span>
                    <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <a 
                    href={`tel:${personal.phoneClean}`}
                    className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between">
                  <a 
                    href={`tel:${personal.phoneClean}`}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1"
                  >
                    <span>Call directly</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => copyToClipboard(personal.phone, 'phone')}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition-colors"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-700 dark:text-emerald-300 font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* Resume Download CTA */}
            <div className="w-full pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={personal.resumeUrl}
                download="Sadik_Khan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-[0.98] w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                <span>Download Actual Resume (PDF)</span>
              </a>

              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl border border-slate-300 dark:border-slate-700 transition-all shadow-2xs w-full sm:w-auto"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 w-full flex flex-wrap items-center justify-center gap-6">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personal.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                <LeetCodeIcon className="w-4 h-4" />
                <span>LeetCode</span>
              </a>

              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 dark:text-slate-500">
                <MapPin className="w-3.5 h-3.5" />
                <span>{personal.location}</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Interactive Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-xs font-mono shadow-2xl border border-slate-700 dark:border-slate-600">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </section>
  );
}
