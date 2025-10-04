import { useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Digital Brain Technologies',
      position: 'Software Engineering Intern',
      period: 'Sep 2025 – Present',
      location: 'Istanbul, Türkiye (Hybrid)',
      description: [
        'Help build and deploy the company website with React and Tailwind.',
        'Work on Docker-based setup and VPS hosting tasks for going live.',
        'Assist with feature fixes, UI updates from Figma, and basic API integration.',
        'Support documentation and simple tests before production release.',
      ],
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Docker', 'Nginx', 'Git'],
    },
    {
      company: 'Sonel Yazılım',
      position: 'Software Developer Intern',
      period: '2024',
      location: 'Türkiye',
      description: [
        'Worked on backend tasks using C# and ASP.NET.',
        'Implemented basic CRUD endpoints and data validation.',
        'Wrote SQL queries and updated database schemas under guidance.',
        'Joined code reviews and fixed small bugs.',
      ],
      technologies: ['C#', 'ASP.NET (MVC/Core)', 'SQL Server', 'REST APIs', 'Git'],
    },
    {
      company: 'Modül Yazılım',
      position: 'Software Developer Intern',
      period: '2022',
      location: 'Türkiye',
      description: [
        'Built small desktop forms and simple web pages.',
        'Connected UI forms to database operations.',
        'Tested features and reported issues to the team.',
        'Learned basic project structure and version control.',
      ],
      technologies: ['C#', 'WinForms/WPF', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    },
    {
      company: 'BYDY Bilişim',
      position: 'Intern',
      period: '2017',
      location: 'Türkiye',
      description: [
        'Assisted with routine software and IT tasks.',
        'Documented simple procedures and checked basic issues.',
        'Observed development workflows and tool usage.',
        'Gained first hands-on experience in a professional setting.',
      ],
      technologies: ['Windows', 'Office Tools', 'Basic Networking', 'Documentation'],
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4 font-mono">
            <span className="text-sky-400">02.</span> Where I've Worked
          </h2>
          <div className="w-full max-w-md h-px bg-gradient-to-r from-slate-700 to-transparent" />
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1 flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap md:whitespace-normal transition-all border-l-2 ${
                  activeTab === index
                    ? 'border-sky-400 bg-sky-500/10 text-sky-400'
                    : 'border-slate-700 text-slate-500 hover:bg-slate-800/50 hover:text-slate-300'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="md:col-span-3">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-200 mb-2">
                  {experiences[activeTab].position}{' '}
                  <span className="text-sky-400">@ {experiences[activeTab].company}</span>
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {experiences[activeTab].period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {experiences[activeTab].location}
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                {experiences[activeTab].description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 leading-relaxed">
                    <span className="text-sky-400 translate-y-[2px] flex-shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <p className="text-sm text-slate-500 mb-3 font-mono">Technologies used:</p>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeTab].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-sky-500/10 border border-sky-500/30 rounded text-xs font-mono text-sky-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
