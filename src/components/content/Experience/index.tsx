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
    description: (
      <ul>
        <li>
          <span>Elevated Leadership</span>
          <p>Stepped into a prominent role in technology selection, work prioritization, and backlog management, often resembling the responsibilities of a product owner or manager for web-based projects.</p>
        </li>
        <li>
          <span>Strategic Impact</span>
          <p>Played a crucial role in shaping Tandem's web presence, ensuring not only maintenance but also the enhancement of the platform's functionality and user experience.</p>
        </li>
      </ul>
    ),
  },
  {
    year: 'Jul 2021 - Jul 2023',
    title: 'Frontend Engineer',
    location: 'Berlin, Germany',
    icon: <CodeIcon />,
    company: 'Tandem Language Exchange',
    description: (
      <ul>
        <li>
          <span>Website & Web App Overhaul</span>
          <p>Led the refactoring of the company website and oversaw the complete redevelopment & redesign of the web application, supporting thousands of daily users with the latest web technologies.</p>
        </li>

        <li>
          <span>Admin Dashboard Refactoring</span>
          <p>Rebuilt a rudimentary admin interface into a user-centric full-stack application from the ground up, delivering a more intuitive, modern, and user-friendly experience.</p>
        </li>

        <li>
          <span>Cross-Functional Collaboration</span>
          <p>Worked hand-in-hand with product, design, and marketing teams, transforming creative concepts into technical solutions using a diverse tech stack like TypeScript, React, and Next.js.</p>
        </li>

        <li>
          <span>Rapid Prototyping</span>
          <p>Led the swift development of MVPs for experimentation and feasibility testing. In addition, implemented web-based solutions for special, niche projects and use cases, thereby maximising the potential of the web platform.</p>
        </li>
      </ul>
    ),
  },
  {
    year: 'Apr 2018 - Jul 2021',
    title: 'Fullstack Engineer',
    location: 'Cape Town, South Africa',
    description: (
      <ul>
        <li>
          <span>Comprehensive Development</span>
          <p>Managed the complete development lifecycle, ensuring websites and applications were responsive, cross-browser compatible, and seamlessly integrated with robust backend systems.</p>
        </li>

        <li>
          <span>Extensive Portfolio Development</span>
          <p>Delivered 45+ diverse websites and applications leveraging Next.js, React, TypeScript, and CSS modules.</p>
        </li>

        <li>
          <span>Building Client Trust</span>
          <p>Fostered enduring partnerships with 40+ clients, with repeat engagements underscoring consistent quality and trustworthiness.</p>
        </li>

        <li>
          <span>Client-Centric Solutions</span>
          <p>Worked closely with clients to align projects with their brand and objectives, translating designs into fully functional digital platforms.</p>
        </li>

        <li>
          <span>Ongoing Improvements</span>
          <p>Consistently optimized and expanded applications, and provided expert technical consultation on application design and feasibility.</p>
        </li>
      </ul>
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
