import Chip from '@components/system/display/Chip';
import styles from './styles.module.scss';
import CodeIcon from '@mui/icons-material/Code';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import TranslateIcon from '@mui/icons-material/Translate';
import SchoolIcon from '@mui/icons-material/School';

interface IExperienceItem {
  year: string,
  title: string,
  description?: React.ReactNode,
  location: string,
  company: string,
  icon: JSX.Element,
}

export const data: IExperienceItem[] = [
  {
    year: 'Jul 2023',
    title: 'Senior Frontend Engineer',
    location: 'Berlin, Germany',
    icon: <CodeIcon />,
    company: 'Tandem Language Exchange',
    description: <p>Upon my promotion to Senior Frontend Engineer  I embraced an expanded set of responsibilities. My influence grew substantially in the realm of technology selection, work prioritization, and backlog management. Not only did I oversee the regular maintenance and improvements of our web projects, but I also adopted a pivotal role often mirroring that of a product owner or manager for all web-based initiatives. This evolution allowed me to play a more strategic part in shaping Tandem's web presence and ensuring the seamless functionality and user experience of our platform.</p>,
  },
  {
    year: 'Jul 2021',
    title: 'Frontend Engineer',
    location: 'Berlin, Germany',
    icon: <CodeIcon />,
    company: 'Tandem Language Exchange',
    description: (
      <>
        <h4>Achievements:</h4>
        <ul>
          <li>
            <span>Website Refactor:</span>
            Successfully refactored the entire company website, comprising thousands of pages, utilizing the latest in web technologies.
          </li>
          <li>
            <span>Web App Rebirth:</span>
            Spearheaded the complete overhaul of the web application, supporting thousands of daily active users.
          </li>
          <li>
            <span>Rapid Prototyping:</span>
            Championed the quick-turnaround experimentation of MVPs on the web platform.
          </li>
          <li>
            <span>Admin Mastery:</span>
            Crafted an intuitive and comprehensive admin dashboard for member management, effectively enhancing administrative operations.
          </li>
        </ul>

        <h4>Responsibilities:</h4>
        <ul>
          <li>
            <span>Cross-team Collaboration:</span>
            Collaborated closely with product, design, and marketing teams, translating ideas and designs into technical realities.
          </li>
          <li>
            <span>Technical Proficiency:</span>
            Employed a diverse tech stack, incorporating tools like TypeScript, React, Next.js, Material UI and more, to deliver optimal solutions.
          </li>
          <li>
            <span>Stakeholder Consultation:</span>
            Engaged in active consultations with internal stakeholders, ensuring web initiatives align with overall company goals.
          </li>
          <li>
            <span>Web Optimization & Analytics:</span>
            Implemented advanced web analytics for precise tracking and insights, optimized page performance for enhanced user experience and retention, and integrated SEO best practices to elevate organic search visibility and rankings.
          </li>
        </ul>
      </>
    ),
  },
  {
    year: 'Apr 2018',
    title: 'Fullstack Engineer',
    location: 'Cape Town, South Africa',
    description: (
      <>
        <p>
          As a dedicated Full-Stack Engineer, I've spent years honing a multifaceted skill set, specialising in creating tailored web solutions as a freelancer. My journey has been characterized by deep involvement in every phase of project development, from design conceptualization to deployment.
        </p>
        <h4>Achievements:</h4>
        <ul>
          <li>
            <span>Extensive Portfolio:</span>
            Crafted 45+ websites & applications using Next.js, React, TypeScript, and CSS modules across varied sectors.
          </li>
          <li>
            <span>Client Trust:</span>
            Nurtured relationships with 40+ repeat clients through referrals, highlighting consistent quality and trust.
          </li>
          <li>
            <span>Performance Excellence:</span>
            Achieved a Lighthouse score of {'>'} 90 for the majority of projects, ensuring premium web performance.
          </li>
        </ul>
        <h4>Responsibilities:</h4>
        <ul>
          <li>
            <span>End-to-End Development:</span>
            Managed the full development cycle, ensuring responsive, cross-browser compatibility and pairing frontend designs with robust backends using Node.js, Express, and a variety of databases.
          </li>
          <li>
            <span>Client-Centric Design:</span>
            Liaised with clients to tailor projects to their branding and functional needs, transforming designs into fully operational apps and websites.
          </li>
          <li>
            <span>Continuous Enhancement:</span>
            Regularly optimized, debugged, and expanded applications, while also offering technical consultation on business logic and feasibility.
          </li>
        </ul>
      </>
    ),
    icon: <CodeIcon />,
    company: 'Freelance',
  },
  {
    year: 'Jul 2017',
    title: 'English Teacher',
    location: 'Hanoi, Vietnam',
    icon: <TranslateIcon />,
    company: 'Apax English',
    description: <p>I traveled throughout South-East Asia, obtaining my TEFL certificate, and teaching English as a second language to Vietnamese students.</p>,
  },
  {
    year: '2015 - 2017',
    title: 'Bachelor of Informatics',
    location: 'Stellenbosch, South Africa',
    icon: <SchoolIcon />,
    company: 'University of Stellenbosch',
  },
  {
    year: '2013 - 2015',
    title: 'Bachelor of Accounting',
    location: 'Stellenbosch, South Africa',
    icon: <SchoolIcon />,
    company: 'University of Stellenbosch',
  },
];

const Experience = (): JSX.Element => (
  <div className={styles.Experience}>
    {data.map((item, idx) => (
      <div key={idx} className={styles.item}>
        <div className={styles.icon}>
          {item.icon}
        </div>
        <div className={styles.content}>
          <div className={styles.meta}>
            <Chip>{item.year}</Chip>
            <div className={styles.company}>
              <WorkIcon />
              <span>{item.company}</span>
            </div>
            <small className={styles.location}>
              <LocationOnIcon />
              {item.location}
            </small>
          </div>
          <h3 className={styles.title}>{item.title}</h3>
          {item.description}
        </div>
      </div>
    ))}
  </div>
);

export default Experience;
