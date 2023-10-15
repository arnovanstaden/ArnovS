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
  description: string,
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
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit soluta veniam corrupti perferendis, dolorum cum natus rerum amet consequuntur voluptas! Itaque vel repudiandae sapiente, ex saepe optio ab recusandae inventore, ducimus doloremque officia, tenetur voluptatem. Numquam eum libero corrupti vel, laborum deleniti, dolor exercitationem, et iste eius quaerat animi optio?',
    icon: <CodeIcon />,
    company: 'Freelance',
  },
  {
    year: 'Jul 2017',
    title: 'English Teacher',
    location: 'Hanoi, Vietnam',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit soluta veniam corrupti perferendis, dolorum cum natus rerum amet consequuntur voluptas! Itaque vel repudiandae sapiente, ex saepe optio ab recusandae inventore, ducimus doloremque officia, tenetur voluptatem. Numquam eum libero corrupti vel, laborum deleniti, dolor exercitationem, et iste eius quaerat animi optio?',
    icon: <TranslateIcon />,
    company: 'Apax English',
  },
  {
    year: '2015 - 2017',
    title: 'Bachelor of Informatics',
    location: 'Stellenbosch, South Africa',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit soluta veniam corrupti perferendis, dolorum cum natus rerum amet consequuntur voluptas! Itaque vel repudiandae sapiente, ex saepe optio ab recusandae inventore, ducimus doloremque officia, tenetur voluptatem. Numquam eum libero corrupti vel, laborum deleniti, dolor exercitationem, et iste eius quaerat animi optio?',
    icon: <SchoolIcon />,
    company: 'University of Stellenbosch',
  },
  {
    year: '2013 - 2015',
    title: 'Bachelor of Accounting',
    location: 'Stellenbosch, South Africa',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit soluta veniam corrupti perferendis, dolorum cum natus rerum amet consequuntur voluptas! Itaque vel repudiandae sapiente, ex saepe optio ab recusandae inventore, ducimus doloremque officia, tenetur voluptatem. Numquam eum libero corrupti vel, laborum deleniti, dolor exercitationem, et iste eius quaerat animi optio?',
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
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Experience;
