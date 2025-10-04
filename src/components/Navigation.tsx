import { Download, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'home' },
    { id: 'about', label: 'about' },
    { id: 'experience', label: 'experience' },
    { id: 'projects', label: 'projects' },
    { id: 'skills', label: 'skills' },
    { id: 'contact', label: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-slate-800/50 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
          >
            <Terminal className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors" />
            <span className="font-mono text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
              ~/guneyct
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1 font-mono text-sm">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-sky-500/20 text-sky-400'
                    : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <span className="text-sky-400/60">0{index + 1}.</span> {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/guneyct"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-sky-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/guneyct"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-sky-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:guneycandeniz@gmail.com"
              className="p-2 text-slate-500 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 border border-sky-500/30 text-sky-400 rounded-lg text-sm font-mono hover:bg-sky-500/10 transition-all"
            >
              <Download className="w-4 h-4" />
              resume.pdf
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
