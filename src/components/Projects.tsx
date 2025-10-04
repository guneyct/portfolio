import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const featuredProjects = [
    {
      title: 'Digital Brain Technologies Website',
      description:
        'Renewal project of the corporate website for Digital Brain Technologies. ' +
        'Built with React (Vite) and Express.js, using MySQL for data storage. ' +
        'Includes Dockerized deployment on VPS and domain configuration for production release.',
      image: '/images/projects/dbrain.png',
      technologies: ['React (Vite)', 'Express.js', 'MySQL', 'Node.js', 'Docker'],
      github: null,
      demo: 'http://212.58.12.163/',
      align: 'right'
    },
    {
      title: 'KTU EHK Club Website',
      description:
        'Official website for the Electrical and Electronics Club at Karadeniz Technical University. ' +
        'Built with ASP.NET MVC to manage announcements, events, sponsors, and team information. ' + 
        'Designed to be responsive and easy to update by the club staff.',
      image: '/images/projects/ktuehk.png',
      technologies: ['ASP.NET MVC', 'C#', 'JavaScript', 'HTML', 'CSS', 'SQL Server'],
      github: 'https://github.com/guneyct/EHKWebsite',
      demo: 'https://ktuehk.com/',
      align: 'left'
    },
  ];

  const otherProjects = [
    {
      title: 'School Management System',
      description: 'Comprehensive platform for managing school operations, including student records, attendance, grades.',
      technologies: ['C#', '.NET Core', 'ASP.NET MVC', 'SQL', 'Entity Framework'],
      github: 'https://github.com/guneyct/GCT-Okul',
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4 font-mono">
            <span className="text-sky-400">03.</span> Things I've Built
          </h2>
          <div className="w-full max-w-md h-px bg-gradient-to-r from-slate-700 to-transparent" />
        </div>

        <div className="space-y-32 mb-32">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                project.align === 'right' ? 'md:text-right' : ''
              }`}
            >
              <div
                className={`md:col-span-7 relative group ${
                  project.align === 'right' ? 'md:col-start-1' : 'md:col-start-6'
                }`}
              >
                <div className="relative overflow-hidden rounded border border-slate-800 bg-slate-900/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-sky-500/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-500" />
                </div>
              </div>

              <div
                className={`md:col-span-6 z-10 ${
                  project.align === 'right'
                    ? 'md:col-start-7 md:row-start-1'
                    : 'md:col-start-1 md:row-start-1'
                }`}
              >
                <p className="font-mono text-sky-400 text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-200 mb-4">{project.title}</h3>
                <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded p-6 mb-4">
                  <p className="text-slate-400 leading-relaxed text-justify">{project.description}</p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 font-mono text-sm text-slate-400 mb-4 ${
                    project.align === 'right' ? 'md:justify-end' : ''
                  }`}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${project.align === 'right' ? 'md:justify-end' : ''}`}
                >
                  {project.github != null ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-sky-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  ) : ""}
                  {project.demo != null ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  ) : ""}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-8">Other Noteworthy Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-900/50 border border-slate-800 rounded p-6 hover:border-sky-500/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <FolderGit2 className="w-10 h-10 text-sky-400" />
                  <div className="flex gap-4">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-sky-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    ) : ""}
                    {project.demo != null ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-sky-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    ) : ""}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate-500">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
