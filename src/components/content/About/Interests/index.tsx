'use client';

import styles from './styles.module.scss';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CodeIcon from '@mui/icons-material/Code';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const Interests = (): JSX.Element | null => (
  <div className={styles.Interests}>
    <FitnessCenterIcon data-tooltip-id="tooltip" data-tooltip-content="Fitness" />
    <AutoStoriesIcon data-tooltip-id="tooltip" data-tooltip-content="Reading" />
    <CodeIcon data-tooltip-id="tooltip" data-tooltip-content="Coding" />
    <LocalAirportIcon data-tooltip-id="tooltip" data-tooltip-content="Travel" />
    <SportsEsportsIcon data-tooltip-id="tooltip" data-tooltip-content="Gaming" />
    <MusicNoteIcon data-tooltip-id="tooltip" data-tooltip-content="Music" />
    <RestaurantMenuIcon data-tooltip-id="tooltip" data-tooltip-content="Cooking" />
  </div>
);

export default Interests;
