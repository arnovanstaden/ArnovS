'use client';

import { Tooltip } from 'react-tooltip';
import styles from './styles.module.scss';

const ToolTip = (): JSX.Element | null => <Tooltip id="tooltip" place="bottom" className={styles.Tooltip} classNameArrow={styles.arrow} />;

export default ToolTip;
