import React from 'react';
import profilePic from '../backimage.png';

const PORTFOLIO_DATA = {
  name: "Cheran Muhone",
  tagline: "Software & IT-Focused Student | Tech Startup Enthusiast",
  summary: "Software Engineering student with 2.5+ years of hands-on experience building web and mobile applications. Blending software development, database design, and AI-assisted workflows with practical business operations experience.",
  skills: [
    { name: "JavaScript / Node.js", type: "Core Dev" },
    { name: "React / React Native", type: "Frontend & Mobile" },
    { name: "PHP & MySQL", type: "Backend & DB" },
    { name: "Supabase & APIs", type: "Modern Stack" },
    { name: "Expo & PWA", type: "App Ecosystem" },
    { name: "AI-Assisted Dev", type: "Workflow" },
    { name: "Networking (LAN/WAN)", type: "IT Infrastructure" }
  ],
  projects: [
    {
      name: "RestroApp",
      tag: "Full-Stack Web App",
      desc: "Restaurant management system featuring targeted receiver-specific messaging, broadcast notifications, inventory out-of-stock tracking, and JWT authentication.",
      tech: ["React", "Node.js", "MySQL", "JWT", "JavaScript"]
    },
    {
      name: "YASO",
      tag: "Mobile Dashboard",
      desc: "Soccer statistics and dashboard concept built with React Native and Expo, designed to consume sports data APIs in a high-contrast dark interface.",
      tech: ["React Native", "Expo", "JavaScript", "REST APIs"]
    },
    {
      name: "Emerge PWA Project",
      tag: "Progressive Web App",
      desc: "Exploration of modern PWA workflows using GitHub Codespaces and mobile-first development environments.",
      tech: ["PWA", "GitHub Codespaces", "Mobile Dev"]
    }
  ],
  education: [
    {
      school: "Information and Communications University",
      degree: "Software Engineering",
      status: "Student",
      modules: ["Interactive Web Dev", "Business Communications", "Advanced Math", "Operating Systems", "Networking"]
    }
  ],
  experience: [
    {
      company: "Henred Fruehauf",
      role: "Workshop Administration Intern",
      type: "Operations & Systems",
      highlights: "Managed inventory stock counts, invoice matching, purchase orders, IGOBs, and trailer parts workflows."
    },
    {
      company: "RocoMamas Zambia / Simbisa Brands",
      role: "Waiter / Customer Operations",
      type: "Frontline Operations",
      highlights: "Delivered high-volume customer service, team coordination, and fast-paced operational communication."
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 glass-card border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            CM.
          </span>
          <a 
            href="#contact" 
            className="text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 px-3.5 py-1.5 rounded-full transition-all"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-20">
        
        {/* HERO SECTION */}
        {/* HERO SECTION */}
<section className="space-y-6 pt-4">
  
  {/* Add your profile picture right here */}
  <div className="relative w-28 h-28 sm:w-32 sm:h-32">
    <img 
      src={profilePic.src}  
      alt="Cheran Muhone" 
      className="w-full h-full rounded-full object-cover border-2 border-indigo-500/50 shadow-xl shadow-indigo-500/10"
    />
  </div>

  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
    Available for Software & IT Opportunities
  </div>
// stopped here
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">{PORTFOLIO_DATA.name}</span>
            </h1>
            <p className="text-xl font-medium text-slate-300 max-w-2xl">
              {PORTFOLIO_DATA.tagline}
            </p>
          </div>

          <p className="text-slate-400 leading-relaxed max-w-2xl text-base">
            {PORTFOLIO_DATA.summary}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a 
              href="#projects" 
              className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/20"
            >
              View Projects
            </a>
            <a 
              href="#skills" 
              className="px-5 py-2.5 rounded-lg glass-card text-slate-300 hover:text-white font-medium text-sm transition-all"
            >
              Technical Stack
            </a>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
              <p className="text-sm text-slate-400">Applications and technical explorations</p>
            </div>
            <span className="text-xs font-mono text-indigo-400 bg-indigo-950/50 px-2.5 py-1 rounded-md border border-indigo-800/50">
              03 Projects
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4 group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase">
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-slate-800/80 border border-slate-700/50 text-slate-300 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS & STACK SECTION */}
        <section id="skills" className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white">Technical Ecosystem</h2>
            <p className="text-sm text-slate-400">Languages, frameworks, and tools I use</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.skills.map((skill, idx) => (
              <div key={idx} className="glass-card p-4 rounded-xl space-y-1">
                <div className="text-xs text-indigo-400 font-medium">{skill.type}</div>
                <div className="font-semibold text-slate-200 text-sm">{skill.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & EXPERIENCE */}
        <section className="grid gap-8 sm:grid-cols-2">
          {/* Education */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">
              Education
            </h2>
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div key={idx} className="glass-card p-5 rounded-xl space-y-3">
                <div>
                  <span className="text-xs text-indigo-400 font-semibold">{edu.status}</span>
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="text-sm text-slate-400">{edu.school}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {edu.modules.map((m, i) => (
                    <span key={i} className="text-[11px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Operational Experience */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">
              Operational Experience
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <div key={idx} className="glass-card p-5 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-100">{exp.role}</h3>
                  </div>
                  <p className="text-xs text-indigo-400">{exp.company}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{exp.highlights}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <footer id="contact" className="glass-card rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Let's Connect</h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Open to software engineering internships, IT roles, technology startup collaborations, and business operations opportunities.
          </p>
          <div className="pt-2">
            <span className="inline-block text-xs font-mono bg-slate-800 text-slate-300 px-4 py-2 rounded-lg border border-slate-700">
              Location: Zambia
            </span>
          </div>
        </footer>

      </main>
    </div>
  );
}
