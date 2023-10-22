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
    year: 'Jul 2023 - Present',
    title: 'Senior Frontend Engineer',
    location: 'Berlin, Germany',
    icon: <CodeIcon />,
    company: 'Tandem Language Exchange',
    description: <p>Upon my promotion to Senior Frontend Engineer  I embraced an expanded set of responsibilities. My influence grew substantially in the realm of technology selection, work prioritization, and backlog management. Not only did I oversee the regular maintenance and improvements of our web projects, but I also adopted a pivotal role often mirroring that of a product owner or manager for all web-based initiatives. This evolution allowed me to play a more strategic part in shaping Tandem's web presence and ensuring the seamless functionality and user experience of our platform.</p>,
  },
  {
    year: 'Jul 2021 - Jul 2023',
    title: 'Frontend Engineer',
    location: 'Berlin, Germany',
    icon: <CodeIcon />,
    company: 'Tandem Language Exchange',
    description: (
      <>

        <Chip outlined className={styles.subheadingChip}>Achievements</Chip>
        <ul>
          <li>
            <span>Website Refactor</span>
            <p>Successfully refactored the entire company website, comprising thousands of pages, utilizing the latest in web technologies.</p>
          </li>
          <li>
            <span>Web App Rebirth</span>
            <p>Spearheaded the complete overhaul of the web application, supporting thousands of daily active users.</p>
          </li>
          <li>
            <span>Rapid Prototyping</span>
            <p>Championed the quick-turnaround experimentation of MVPs on the web platform.</p>
          </li>
          <li>
            <span>Admin Mastery</span>
            <p>Crafted an intuitive and comprehensive admin dashboard for member management, effectively enhancing administrative operations.</p>
          </li>
        </ul>

        <Chip outlined className={styles.subheadingChip}>Responsibilities</Chip>
        <ul>
          <li>
            <span>Cross-team Collaboration</span>
            <p>Collaborated closely with product, design, and marketing teams, translating ideas and designs into technical realities.</p>
          </li>
          <li>
            <span>Technical Proficiency</span>
            <p>Employed a diverse tech stack, incorporating tools like TypeScript, React, Next.js, Material UI and more, to deliver optimal solutions.</p>
          </li>
          <li>
            <span>Stakeholder Consultation</span>
            <p>Engaged in active consultations with internal stakeholders, ensuring web initiatives align with overall company goals.</p>
          </li>
          <li>
            <span>Web Optimization & Analytics</span>
            <p>Implemented advanced web analytics for precise tracking and insights, optimized page performance for enhanced user experience and retention, and integrated SEO best practices to elevate organic search visibility and rankings.</p>
          </li>
        </ul>
      </>
    ),
  },
  {
    year: 'Apr 2018 - Jul 2021',
    title: 'Fullstack Engineer',
    location: 'Cape Town, South Africa',
    description: (
      <>
        <p>
          As a dedicated Full-Stack Engineer, I've spent years honing a multifaceted skill set, specialising in creating tailored web solutions as a freelancer. My journey has been characterized by deep involvement in every phase of project development, from design conceptualization to deployment.
        </p>
        <Chip outlined className={styles.subheadingChip}>Achievements</Chip>
        <ul>
          <li>
            <span>Extensive Portfolio</span>
            <p>Crafted 45+ websites & applications using Next.js, React, TypeScript, and CSS modules across varied sectors.</p>
          </li>
          <li>
            <span>Client Trust</span>
            <p>Nurtured relationships with 40+ repeat clients through referrals, highlighting consistent quality and trust.</p>
          </li>
          <li>
            <span>Performance Excellence</span>
            <p>Achieved a Lighthouse score of {'>'} 90 for the majority of projects, ensuring premium web performance.</p>
          </li>
        </ul>

        <Chip outlined className={styles.subheadingChip}>Responsibilities</Chip>
        <ul>
          <li>
            <span>End-to-End Development</span>
            <p>Managed the full development cycle, ensuring responsive, cross-browser compatibility and pairing frontend designs with robust backends using Node.js, Express, and a variety of databases.</p>
          </li>
          <li>
            <span>Client-Centric Design</span>
            <p>Liaised with clients to tailor projects to their branding and functional needs, transforming designs into fully operational apps and websites.</p>
          </li>
          <li>
            <span>Continuous Enhancement</span>
            <p>Regularly optimized, debugged, and expanded applications, while also offering technical consultation on business logic and feasibility.</p>
          </li>
        </ul>
      </>
    ),
    icon: <CodeIcon />,
    company: 'Freelance',
  },
  {
    year: 'Jul 2017 - Apr 2018',
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
