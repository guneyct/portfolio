import { ChevronRight, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full-Stack Developer';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 px-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />

      <div className="relative z-10 max-w-4xl w-full">
        <div className="mb-8 font-mono text-sky-400 text-sm flex items-center gap-2">
          <Terminal className="w-4 h-4" />
          <span className="text-slate-500">guneyct@portfolio:~$</span>
          <span className="text-sky-400">introduce</span>
        </div>

        <div className="mb-6">
          <p className="font-mono text-sm text-slate-500 mb-2">Hi, my name is</p>
          <h1 className="text-6xl md:text-8xl font-bold text-slate-200 mb-4 tracking-tight">
            Güney Türkyılmaz
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 tracking-tight">
            <span className="inline-block min-w-[400px]">
              {displayText}
              <span className={`inline-block w-1 h-12 bg-sky-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            </span>
          </h2>
        </div>

        <div className="max-w-2xl mb-12">
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            I am a software engineering student with experience in web development. 
            I work with ASP.NET, React, and Node.js to build practical applications. 
            Currently, I am focusing on full-stack projects and improving my skills in modern development tools.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-2 px-6 py-3 border border-sky-500 text-sky-400 rounded font-mono text-sm hover:bg-sky-500/10 transition-all"
          >
            View my work
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="mailto:guneycandeniz@gmail.com"
            className="px-6 py-3 bg-sky-500/10 text-sky-400 rounded font-mono text-sm hover:bg-sky-500/20 transition-all border border-transparent hover:border-sky-500/30"
          >
            Get in touch
          </a>
        </div>

        <div className="absolute bottom-8 left-0 w-px h-24 bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
        <div className="absolute bottom-8 left-0 w-6 border-b border-slate-700" />
      </div>
    </section>
  );
}
