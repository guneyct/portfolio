import { User, Briefcase, GraduationCap, MapPin } from 'lucide-react';

export default function About() {
  const technologies = [
    'C# (.NET Core, ASP.NET MVC)',
    'TypeScript',
    'SQL',
    'REST APIs',
    'Git & GitHub',
    'React.js',
    'Next.js',
    'Express.js',
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4 font-mono">
            <span className="text-sky-400">01.</span> About Me
          </h2>
          <div className="w-full max-w-md h-px bg-gradient-to-r from-slate-700 to-transparent" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-6">
            <p className="text-slate-400 leading-relaxed">
              Hi, I&apos;m Güney. I&apos;m a software engineering student who likes building
              practical apps for the web and desktop. I learn by doing and keep my solutions
              simple and clear.
            </p>

            <p className="text-slate-400 leading-relaxed">
              I completed internships at Sonel Yazılım (2024), Modül Yazılım (2022), and BYDY
              Bilişim (2017). I worked with C#, ASP.NET MVC/Core, desktop forms, APIs, and basic
              front-end tasks using HTML, CSS, and JavaScript.
            </p>

            <p className="text-slate-400 leading-relaxed">
              A recent project is a <em>Club Management & Interaction Platform</em> for university
              clubs. It includes event management with QR attendance, an admin panel for members and
              announcements, a simple blog, and sponsor support.
            </p>

            <div>
              <p className="text-slate-300 mb-4">
                Here are a few technologies I&apos;ve been using recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                {technologies.map((tech, index) => (
                  <li key={index} className="flex items-center gap-2 text-slate-400">
                    <span className="text-sky-400">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative border-2 border-sky-500/30 rounded-lg overflow-hidden bg-slate-900/50 backdrop-blur">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Profile"
                  className="w-full h-full object-cover mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-500"
                />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Istanbul, Türkiye</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>BSc in Software Engineering — Karadeniz Technical University</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}