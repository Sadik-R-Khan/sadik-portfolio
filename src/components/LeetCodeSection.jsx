import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Terminal, CheckCircle2, Code2, Play, CornerDownLeft, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Custom LeetCode Icon
function LeetCodeIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.144-.012 0-.024-.002-.037-.002zm3.871 12.19H7.957c-.76 0-1.376.616-1.376 1.376 0 .76.616 1.376 1.376 1.376h9.397c.76 0 1.376-.616 1.376-1.376 0-.76-.616-1.376-1.376-1.376z" />
    </svg>
  );
}

export default function LeetCodeSection() {
  const { leetcode, personal } = portfolioData;

  // Interactive Terminal State
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Sadik\'s Developer Shell v1.0. Type "help" or click below:' },
    { type: 'output', text: '⚡ Primary Stack: Java, Spring Boot, MySQL, Redis, AWS EC2/S3/RDS' }
  ]);
  const terminalBodyRef = useRef(null);

  const runCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'command', text: `$ ${cmd}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: 'Available commands: skills, projects, aws, education, contact, clear'
        });
        break;
      case 'skills':
        newHistory.push({
          type: 'output',
          text: 'Java • Spring Boot • Spring Security • MySQL • Redis • AWS • Angular • Docker'
        });
        break;
      case 'projects':
        newHistory.push({
          type: 'output',
          text: '1. DriveShare (Car Rental on AWS)\n2. High-Concurrency Ticket Engine (Redis Lua)\n3. DocWallet (Cloud Document Manager)'
        });
        break;
      case 'aws':
        newHistory.push({
          type: 'output',
          text: 'AWS Certified Cloud Practitioner — Score: 914/1000 (Issued Apr 2026)'
        });
        break;
      case 'education':
        newHistory.push({
          type: 'output',
          text: 'B.Tech in Computer Science & Eng. (CGPA: 8.32/10) | Symbiosis Java Full Stack'
        });
        break;
      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: ${personal.email}\nPhone: ${personal.phone}\nLocation: ${personal.location}`
        });
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${trimmed}". Type "help" for a list of commands.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(inputVal);
    }
  };

  // Only scroll the INTERNAL terminal box, NEVER scroll the browser window
  useEffect(() => {
    if (terminalBodyRef.current && history.length > 2) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const quickCommands = ['help', 'skills', 'projects', 'aws', 'contact', 'clear'];

  return (
    <section className="py-14 sm:py-16 md:py-20 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0A0F1D] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50 dark:bg-slate-900/90 rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-12 text-slate-900 dark:text-white relative overflow-hidden shadow-xs border border-slate-200/90 dark:border-slate-800">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left description */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-amber-200 dark:border-amber-500/20">
                <LeetCodeIcon className="w-3.5 h-3.5" />
                Continuous Problem Solving
              </div>

              <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
                Data Structures &amp; Algorithms Practice
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                {leetcode.description}
              </p>

              {/* Focus areas grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
                {leetcode.focusAreas.map((area, idx) => (
                  <div 
                    key={idx}
                    className="p-2 sm:p-2.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs font-mono text-slate-700 dark:text-slate-200 flex items-center gap-2 shadow-2xs hover:border-amber-400/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 shrink-0"></span>
                    <span className="truncate">{area}</span>
                  </div>
                ))}
              </div>

              {/* Direct Profile CTA */}
              <a
                href={leetcode.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-[0.98] w-full sm:w-auto text-center"
              >
                <LeetCodeIcon className="w-4 h-4" />
                <span>Visit LeetCode Profile (@{leetcode.username})</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right: Interactive Terminal */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-950 text-slate-100 border border-slate-800 p-4 sm:p-5 font-mono text-xs shadow-2xl flex flex-col h-[340px] sm:h-[360px] justify-between">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-slate-400 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                    </div>
                    <span className="ml-2 text-[11px] sm:text-xs text-slate-300 font-medium truncate max-w-[130px] xs:max-w-[200px] sm:max-w-none">sadik@developer-shell:~</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live Shell
                  </span>
                </div>

                {/* Output Feed with Scroll */}
                <div 
                  ref={terminalBodyRef}
                  className="my-3 flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-thin scrollbar-thumb-slate-800"
                >
                  {history.map((item, idx) => (
                    <div key={idx} className="leading-relaxed">
                      {item.type === 'system' && (
                        <p className="text-slate-400 italic">{item.text}</p>
                      )}
                      {item.type === 'command' && (
                        <p className="text-blue-400 font-semibold">{item.text}</p>
                      )}
                      {item.type === 'output' && (
                        <pre className="text-emerald-300 whitespace-pre-wrap font-mono text-[11px] bg-slate-900/60 p-2 rounded-lg border border-slate-800/60">
                          {item.text}
                        </pre>
                      )}
                      {item.type === 'error' && (
                        <p className="text-rose-400">{item.text}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Quick Execution Pills */}
                <div className="pt-2 pb-2 flex flex-wrap items-center gap-1.5 border-t border-slate-800/80 shrink-0">
                  <span className="text-[10px] text-slate-500 mr-1 font-mono">Quick:</span>
                  {quickCommands.map((q) => (
                    <button
                      key={q}
                      onClick={() => runCommand(q)}
                      className="px-2 py-0.5 rounded bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-300 text-[11px] font-mono transition-colors active:scale-95 cursor-pointer"
                    >
                      {q}
                    </button>
                  ))}
                </div>

                {/* Input Prompt */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80 shrink-0">
                  <span className="text-emerald-400 font-bold">$</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder='Type command (e.g. "skills")...'
                    className="flex-1 bg-transparent text-slate-200 placeholder:text-slate-600 focus:outline-none font-mono text-xs"
                  />
                  <button
                    onClick={() => runCommand(inputVal)}
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Execute"
                  >
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
