import { CinematicVideo } from '@/components/CinematicVideo'
import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { Certifications } from '@/components/sections/Certifications'

const buildItems = [
  ['01', 'Java Applications', 'Object-oriented applications with clean structure, collections, JDBC and practical business logic.'],
  ['02', 'Spring Boot APIs', 'RESTful backend services using Spring Boot, Hibernate, JPA and relational databases.'],
  ['03', 'Web Applications', 'Responsive interfaces using React, JavaScript, HTML and CSS connected to backend systems.'],
  ['04', 'Database Systems', 'Structured data models and CRUD workflows backed by MySQL and relational database concepts.'],
  ['05', 'AI Experiments', 'Exploring how AI can become a useful feature inside real applications rather than a decorative chatbot.'],
  ['06', 'Developer Tools', 'Small utilities, portfolio systems and workflow ideas designed to make software work simpler.'],
] as const

const projects = [
  {
    n: '01', title: 'Bank Management System', kicker: 'JAVA + DATABASE',
    text: 'Banking workflow with user registration, account creation, deposits, withdrawals and balance checks, focused on secure authentication and transaction processing.',
    tags: ['Java', 'OOP', 'Database'],
  },
  {
    n: '02', title: 'Employee Management System', kicker: 'JAVA + CRUD',
    text: 'Java-based employee data management with secure login, record handling and table operations for efficient administration.',
    tags: ['Java', 'CRUD', 'Database'],
  },
  {
    n: '03', title: 'Personal Portfolio', kicker: 'WEB',
    text: 'A portfolio website showcasing web development skills with HTML, CSS and JavaScript, with navigation, personal content and a resume/contact experience.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]

const skills = ['Java','OOP','Java 8','Collections','JDBC','Spring Boot','Hibernate','JPA','REST APIs','ReactJS','JavaScript','HTML','CSS','MySQL','Maven','Git','GitHub','IntelliJ IDEA','VS Code']

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
          <p className="section-copy">My core is full-stack Java development — from business logic and REST APIs to database-backed interfaces. AI experiments sit alongside that foundation.</p>
          <div className="build-grid">{buildItems.map(([n, title, text]) => <article className="build-card" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="wrap">
          <p className="kicker">02 / SELECTED WORK</p>
          <h2 className="section-title">Projects that show how I <em>think.</em></h2>
          <p className="section-copy">A selection of projects from my development journey. Professional work at TCS is kept confidential; these projects represent my public portfolio work.</p>
          <div className="project-grid original-projects">
            {projects.map((p) => <article className="project-card" key={p.n}>
              <div className="project-visual">
                <div className="project-wireframe"><span>{p.n}</span><i></i><i></i><i></i><i></i></div>
              </div>
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
          <p className="section-copy">A practical direction for future projects: connect AI to useful software workflows while keeping the application architecture understandable and testable.</p>
          <div className="arch-card">
            <span className="kicker">EXAMPLE ARCHITECTURE</span>
            <div className="flow"><div>USER REQUEST<small>input</small></div><b>→</b><div>SPRING BOOT<small>business logic</small></div><b>→</b><div>AI FEATURE<small>assist / classify</small></div></div>
            <div className="flow secondary"><div>DATABASE<small>MySQL</small></div><b>↕</b><div>WEB UI<small>React</small></div></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="wrap">
          <p className="kicker">04 / TOOLKIT</p>
          <h2 className="section-title">The stack behind the <em>work.</em></h2>
          <div className="stack-grid">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="wrap">
          <p className="kicker">05 / ABOUT</p>
          <h2 className="section-title">Backend-first. <em>Product-minded.</em></h2>
          <div className="about-grid">
            <div className="about-copy">
              <p>I&apos;m <strong>Saurabh Chavan</strong>, a software engineer at <strong>Tata Consultancy Services</strong>, with a Java-focused development profile and a foundation in full-stack web development.</p>
              <p>My technical foundation includes Core Java, OOP, Java 8, collections, JDBC, Spring Boot, Hibernate/JPA, REST APIs, SQL/MySQL, React, JavaScript, HTML and CSS. I enjoy turning requirements into structured, maintainable software.</p>
              <p>Outside my professional work, I use personal projects to keep building, experiment with new ideas, and explore where AI can add useful capabilities to software products.</p>
            </div>
            <div className="profile-card">
              <div className="profile-photo"><img src="/images/saurabh_profile_photo.png" alt="Saurabh Chavan" /></div>
              <div className="profile-row"><span>ROLE</span><b>Software Engineer</b></div>
              <div className="profile-row"><span>COMPANY</span><b>TCS</b></div>
              <div className="profile-row"><span>FOCUS</span><b>Java / Backend</b></div>
              <div className="profile-row"><span>MODE</span><b>Build · Learn · Ship</b></div>
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
              <span className="kicker">DIRECT</span><h3>Talk to me.</h3>
              <div className="contact-row"><span>EMAIL</span><a href="mailto:saurabhchavan@example.com">saurabhchavan@example.com ↗</a></div>
              <div className="contact-row"><span>GITHUB</span><a href="https://github.com/Manishchavan55" target="_blank" rel="noreferrer">github.com/Manishchavan55 ↗</a></div>
              <div className="contact-row"><span>LINKEDIN</span><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
            </div>
            <div className="contact-panel"><span className="kicker">STATUS</span><h3>Build mode.</h3><p className="contact-note">Open to conversations around software engineering, backend systems, product development and technically interesting collaborations.</p></div>
          </div>
        </div>
      </section>
    </main>

    <footer className="wrap"><span>© {new Date().getFullYear()} SAURABH CHAVAN</span><span>JAVA / BACKEND / WEB / AI</span></footer>
  </>
}