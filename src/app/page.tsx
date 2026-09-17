import { CinematicVideo } from '@/components/CinematicVideo'
import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { Certifications } from '@/components/sections/Certifications'

const originalProfileImage = 'https://raw.githubusercontent.com/Manishchavan55/Portfolio-Saurabh/main/Images/saurabh_profile_photo.png'

const buildItems = [
  ['01', 'Java Applications', 'Object-oriented applications with clean structure, collections, JDBC and practical business logic.'],
  ['02', 'Spring Boot APIs', 'RESTful backend services using Spring Boot, Hibernate, JPA and relational databases.'],
  ['03', 'Web Applications', 'Responsive interfaces using React, JavaScript, HTML and CSS connected to backend systems.'],
  ['04', 'Database Systems', 'Structured data models and CRUD workflows backed by MySQL and relational database concepts.'],
  ['05', 'AI Experiments', 'Exploring useful AI features that can live inside real applications instead of existing only as demos.'],
  ['06', 'Developer Tools', 'Utilities and workflow ideas designed to make software development and everyday engineering simpler.'],
] as const

const projects = [
  {
    n: '01', title: 'Bank Management System', kicker: 'JAVA + OOP + DATABASE',
    text: 'A Java banking application covering user registration, account creation, deposits, withdrawals, balance checks, authentication and transaction processing.',
    tags: ['Java', 'OOP', 'JDBC', 'Database'],
  },
  {
    n: '02', title: 'Employee Management System', kicker: 'JAVA + CRUD + DATABASE',
    text: 'A Java-based employee management system with login, employee records and database table operations for practical CRUD workflows.',
    tags: ['Java', 'CRUD', 'MySQL'],
  },
  {
    n: '03', title: 'Personal Portfolio', kicker: 'HTML + CSS + JAVASCRIPT',
    text: 'The original portfolio experience: structured navigation, personal information, skills, projects, resume and contact functionality.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]

const skills = [
  'Java', 'OOP', 'Java 8', 'Collections', 'JDBC', 'Spring Boot', 'Hibernate', 'JPA', 'REST APIs',
  'ReactJS', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'Maven', 'Git', 'GitHub', 'IntelliJ IDEA', 'VS Code'
]

const resumeSkills = [
  'Java', 'Spring Boot', 'Spring', 'REST APIs', 'SQL', 'MySQL', 'PostgreSQL', 'JPA', 'Hibernate', 'JDBC',
  'React', 'ReactJS', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Git', 'GitHub', 'Maven', 'Docker',
  'AWS', 'Kubernetes', 'Microservices', 'Kafka', 'Redis', 'Python', 'JUnit', 'Agile', 'Scrum', 'OOP', 'Collections'
]

export default function Home() {
  return <>
    <CinematicVideo />
    <header className="site-nav">
      <nav className="nav-inner">
        <a className="brand" href="#home">SAURABH<span>.</span></a>
        <div className="nav-links">
          <a href="#work">WORK</a><a href="#build">BUILD</a><a href="#ai">AI</a><a href="#skills">SKILLS</a><a href="#about">ABOUT</a><a href="#experience">EXPERIENCE</a><a href="#contact">CONTACT</a>
        </div>
        <a className="nav-button" href="#contact">LET&apos;S TALK</a>
      </nav>
    </header>

    <main id="home">
      <Hero />

      <section id="build" className="section">
        <div className="wrap">
          <p className="kicker">01 / WHAT I BUILD</p>
          <h2 className="section-title">Software that solves a <em>real problem.</em></h2>
          <p className="section-copy">My core is full-stack Java development — from business logic and REST APIs to database-backed interfaces. AI exploration sits alongside that foundation.</p>
          <div className="build-grid">{buildItems.map(([n, title, text]) => <article className="build-card" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="wrap">
          <p className="kicker">02 / SELECTED WORK</p>
          <h2 className="section-title">Projects that show how I <em>think.</em></h2>
          <p className="section-copy">Public projects from my development journey. Professional TCS work is not presented here because enterprise work may be confidential.</p>
          <div className="project-grid original-projects">
            {projects.map((p) => <article className="project-card" key={p.n}>
              <div className="project-visual"><div className="project-wireframe"><span>{p.n}</span><i></i><i></i><i></i><i></i></div></div>
              <div className="project-body">
                <span className="project-number">{p.n} / {p.kicker}</span>
                <h3>{p.title}</h3><p>{p.text}</p>
                <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                <div className="project-links"><a href="#contact">DISCUSS A SIMILAR BUILD ↗</a></div>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="ai" className="section">
        <div className="wrap">
          <p className="kicker">03 / AI × JAVA</p>
          <h2 className="section-title">AI should be a <em>feature,</em> not a buzzword.</h2>
          <p className="section-copy">The portfolio&apos;s AI direction focuses on practical application features while keeping the underlying architecture understandable and testable.</p>
          <div className="arch-card">
            <span className="kicker">EXAMPLE ARCHITECTURE</span>
            <div className="flow"><div>USER REQUEST<small>input</small></div><b>→</b><div>SPRING BOOT<small>business logic</small></div><b>→</b><div>AI FEATURE<small>assist / classify</small></div></div>
            <div className="flow secondary"><div>DATABASE<small>MySQL</small></div><b>↕</b><div>WEB UI<small>React</small></div></div>
          </div>
        </div>
      </section>

      <section id="resume-ai" className="section">
        <div className="wrap">
          <p className="kicker">04 / RESUME AI ANALYZER</p>
          <h2 className="section-title">Match skills to the <em>job.</em></h2>
          <p className="section-copy">The original portfolio includes a browser-only resume analyzer concept that compares resume content with a job description, identifies matched skills and highlights gaps without sending the text to a server.</p>
          <div className="resume-card">
            <div><span className="resume-badge">LOCAL ANALYSIS</span><h3>Resume × Job Description</h3><p>Paste a resume and job description to identify relevant skills and areas worth strengthening.</p></div>
            <div className="resume-skills">{resumeSkills.slice(0, 18).map(skill => <span key={skill}>{skill}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="wrap">
          <p className="kicker">05 / TOOLKIT</p>
          <h2 className="section-title">The stack behind the <em>work.</em></h2>
          <div className="stack-grid">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="wrap">
          <p className="kicker">06 / ABOUT</p>
          <h2 className="section-title">Backend-first. <em>Product-minded.</em></h2>
          <div className="about-grid">
            <div className="about-copy">
              <p>I&apos;m <strong>Saurabh Chavan</strong>, a software engineer at <strong>Tata Consultancy Services</strong>, with a Java-focused development profile and a foundation in full-stack web development.</p>
              <p>My technical foundation includes Core Java, OOP, Java 8, collections, JDBC, Spring Boot, Hibernate/JPA, REST APIs, SQL/MySQL, React, JavaScript, HTML and CSS. I use personal projects to turn those fundamentals into working software.</p>
              <p>I also explore AI as a practical extension of software engineering — looking for places where it can improve an actual workflow or product capability.</p>
            </div>
            <div className="profile-card">
              <div className="profile-photo"><img src={originalProfileImage} alt="Saurabh Chavan" loading="lazy" /></div>
              <div className="profile-row"><span>ROLE</span><b>Software Engineer</b></div>
              <div className="profile-row"><span>COMPANY</span><b>TCS</b></div>
              <div className="profile-row"><span>FOCUS</span><b>Java / Backend</b></div>
              <div className="profile-row"><span>FOUNDATION</span><b>Full-stack Web</b></div>
            </div>
          </div>
        </div>
      </section>

      <Experience />
      <Certifications />

      <section id="contact" className="section">
        <div className="wrap">
          <p className="kicker">08 / OPEN CHANNEL</p>
          <h2 className="section-title">Let&apos;s build the <em>next thing.</em></h2>
          <div className="contact-grid">
            <div className="contact-panel">
              <span className="kicker">DIRECT</span><h3>Connect with me.</h3>
              <div className="contact-row"><span>GITHUB</span><a href="https://github.com/Manishchavan55" target="_blank" rel="noreferrer">github.com/Manishchavan55 ↗</a></div>
              <div className="contact-row"><span>PORTFOLIO</span><a href="https://manishchavan55.github.io/Portfolio-Saurabh/" target="_blank" rel="noreferrer">Original portfolio ↗</a></div>
            </div>
            <div className="contact-panel"><span className="kicker">HIRE / COLLABORATE</span><h3>Bring a problem.</h3><p className="contact-note">For hiring or collaboration conversations, use the contact details available on the original portfolio. This cinematic version keeps the public GitHub and portfolio links without inventing contact information.</p></div>
          </div>
        </div>
      </section>
    </main>

    <footer className="wrap"><span>© {new Date().getFullYear()} SAURABH CHAVAN</span><span>JAVA / BACKEND / WEB / AI</span></footer>
  </>
}
