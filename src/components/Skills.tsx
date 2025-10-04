import { Code2, Database, Cloud, Server, Box, GitBranch, Blocks, Laptop, Layers, Sparkles } from 'lucide-react';

export default function Skills() {
  const skills = [
    // --- Frontend ---
    { name: 'React (Vite)', icon: Code2, category: 'Frontend' },
    { name: 'JavaScript (ES6+)', icon: Code2, category: 'Frontend' },
    { name: 'HTML & CSS', icon: Laptop, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: Sparkles, category: 'Frontend' },

    // --- Backend ---
    { name: 'C# / ASP.NET MVC & Core', icon: Server, category: 'Backend' },
    { name: 'Node.js (Express)', icon: Server, category: 'Backend' },
    { name: 'Python', icon: Server, category: 'Backend' },
    { name: 'Java', icon: Server, category: 'Backend' },
    { name: 'C++', icon: Server, category: 'Backend' },

    // --- Database ---
    { name: 'MSSQL', icon: Database, category: 'Database' },
    { name: 'MySQL', icon: Database, category: 'Database' },

    // --- DevOps ---
    { name: 'Docker', icon: Box, category: 'DevOps' },

    // --- Tools ---
    { name: 'Git & GitHub', icon: GitBranch, category: 'Tools' },
    { name: 'Visual Studio / VS Code', icon: Laptop, category: 'Tools' },
  ];

  // Kategori sırası
  const order = ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools'];

  // Gruplama
  const grouped = order.map(cat => ({
    category: cat,
    items: skills.filter(s => s.category === cat),
  })).filter(g => g.items.length > 0);

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4 font-mono">
            <span className="text-sky-400">04.</span> Skills & Expertise
          </h2>
          <div className="w-full max-w-md h-px bg-gradient-to-r from-slate-700 to-transparent" />
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-emerald-500/10 blur-3xl" />

          {/* Kategorilere göre gruplu görünüm – mevcut “pill” stili korunuyor */}
          <div className="relative space-y-10">
            {grouped.map((group, gi) => (
              <div key={gi} className="text-center">
                {/* Kategori başlığı - sade, arayüzü bozmaz */}
                <div className="inline-flex items-center gap-3 mb-5">
                  <span className="h-px w-8 bg-slate-700" />
                  <span className="text-xs tracking-wider uppercase text-slate-400 font-mono">
                    {group.category}
                  </span>
                  <span className="h-px w-8 bg-slate-700" />
                </div>

                {/* Aynı pill düzeni */}
                <div className="flex flex-wrap justify-center gap-3 items-center">
                  {group.items.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div key={index} className="group relative">
                        <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative flex items-center gap-2 px-5 py-3 bg-slate-900/80 backdrop-blur border border-slate-700 rounded-full hover:border-sky-500/50 transition-all duration-300">
                          <Icon className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors duration-300" />
                          <span className="text-sm text-slate-300 group-hover:text-slate-100 font-mono transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
