import Chip from '@components/system/display/Chip';
import styles from './styles.module.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import data from './data';

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
          <h2 className={styles.title}>{item.title}</h2>
          {item.description}
        </div>
      </div>
    ))}
  </div>
);

export default Experience;
