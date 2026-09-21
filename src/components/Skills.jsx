import React, { useState, useMemo } from 'react';
import { 
  Server, 
  Layout, 
  Database, 
  Cloud, 
  Cpu, 
  Search, 
  X, 
  Sparkles, 
  Layers 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 'backend',
      title: 'Backend & Frameworks',
      icon: Server,
      iconColor: 'text-blue-600 dark:text-blue-400',
      badgeBg: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800/60',
      items: skills.backend,
      summary: 'Building secure, transactional, and high-throughput RESTful services.'
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: Cloud,
      iconColor: 'text-amber-600 dark:text-amber-400',
      badgeBg: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-800/60',
      items: skills.cloudDevOps,
      summary: 'AWS architecture, containerization with Docker, and CI/CD version control.'
    },
    {
      id: 'database',
      title: 'Databases & In-Memory',
      icon: Database,
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      badgeBg: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800/60',
      items: skills.database,
      summary: 'Relational schema design, transactional integrity (ACID), and Redis caching.'
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Layout,
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      badgeBg: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800/60',
      items: skills.frontend,
      summary: 'Single-page applications with Angular, responsive styling, and typed scripts.'
    },
    {
      id: 'core',
      title: 'Core Competencies',
      icon: Cpu,
      iconColor: 'text-slate-700 dark:text-slate-300',
      badgeBg: 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700',
      items: skills.core,
      summary: 'Data structures, algorithm optimization, OOP principles, and system security.'
    }
  ];

  // Filtered categories based on activeCategory tab and searchQuery
  const filteredCategories = useMemo(() => {
    return categories
      .filter((cat) => activeCategory === 'all' || cat.id === activeCategory)
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const q = searchQuery.toLowerCase();
        const filteredItems = cat.items.filter(
          (item) => item.name.toLowerCase().includes(q) || item.level.toLowerCase().includes(q)
        );
        return { ...cat, items: filteredItems };
      })
      .filter((cat) => cat.items.length > 0);
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-[#070B14] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-blue-100 dark:border-blue-800/60">
              Technical Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Skills &amp; Technologies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Directly derived from practical projects, B.Tech coursework, AWS certification, and Symbiosis Java Full Stack training.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Java, Docker)..."
              className="w-full pl-9 pr-9 py-2 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-full"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono whitespace-nowrap transition-all ${
              activeCategory === 'all'
                ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span>{cat.title}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeCategory === cat.id 
                  ? 'bg-blue-700 text-white' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              }`}>
                {cat.items.length}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div 
                  key={cat.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-2xs hover:shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2.5 rounded-xl ${cat.badgeBg} border`}>
                        <Icon className={`w-5 h-5 ${cat.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {cat.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                          {cat.items.length} {cat.items.length === 1 ? 'skill' : 'skills'}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                      {cat.summary}
                    </p>

                    {/* Skills Badges */}
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((skill, sIdx) => (
                        <div 
                          key={sIdx}
                          className="group/item inline-flex flex-col px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-blue-50/70 dark:hover:bg-blue-950/40 border border-slate-200/80 dark:border-slate-700/70 hover:border-blue-200 dark:hover:border-blue-800 text-xs text-slate-800 dark:text-slate-200 transition-all cursor-default"
                          title={`${skill.name} — ${skill.level}`}
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 group-hover/item:scale-125 transition-transform"></span>
                            <span className="font-medium text-slate-900 dark:text-white group-hover/item:text-blue-700 dark:group-hover/item:text-blue-300">{skill.name}</span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-400 group-hover/item:text-blue-500 dark:group-hover/item:text-blue-400 pl-3">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verification footer label */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    <span>Verified Competency</span>
                    <span className="text-emerald-500 font-medium">● Confirmed</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
              No skills found matching "{searchQuery}".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
