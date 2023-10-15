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
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit soluta veniam corrupti perferendis, dolorum cum natus rerum amet consequuntur voluptas! Itaque vel repudiandae sapiente, ex saepe optio ab recusandae inventore, ducimus doloremque officia, tenetur voluptatem. Numquam eum libero corrupti vel, laborum deleniti, dolor exercitationem, et iste eius quaerat animi optio?',
    icon: <CodeIcon />,
    company: 'Tandem Language Exchange',
  },
  {
    year: 'Jul 2021',
    title: 'Frontend Engineer',
    location: 'Berlin, Germany',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit soluta veniam corrupti perferendis, dolorum cum natus rerum amet consequuntur voluptas! Itaque vel repudiandae sapiente, ex saepe optio ab recusandae inventore, ducimus doloremque officia, tenetur voluptatem. Numquam eum libero corrupti vel, laborum deleniti, dolor exercitationem, et iste eius quaerat animi optio?',
    icon: <CodeIcon />,
    company: 'Tandem Language Exchange',
  },
  {
    year: 'Apr 2018',
    title: 'Fullstack Engineer',
    location: 'Cape Town, South Africa',
    description: (
      <>
        <p>
          As a dedicated Full-Stack Engineer, I've spent years honing a multifaceted skill set, specializing in creating tailored web solutions as a freelancer. My journey has been characterized by deep involvement in every phase of project development, from design conceptualization to deployment.
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
            <span>Project Management:</span>
            Oversaw the entire development lifecycle, from conception to deployment, for responsive and cross-browser projects.
          </li>
          <li>
            <span>Client Collaboration:</span>
            Collaborated to align projects with client branding and functional needs.
          </li>
          <li>
            <span>Design Mastery:</span>
            Designed and transformed mockups into functional apps & websites.
          </li>
          <li>
            <span>Backend Expertise:</span>
            Built robust backends using Node.js, Express, and various databases, complementing app features.
          </li>
          <li>
            <span>Continuous Development:</span>
            Regularly enhanced, debugged, and improved applications to meet evolving requirements.
          </li>
          <li>
            <span>Technical Consultation:</span>
            Advised on and evaluated business logic features for tech feasibility.
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
