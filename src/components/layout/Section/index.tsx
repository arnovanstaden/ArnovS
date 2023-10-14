import ClassNames from 'classnames';
import styles from './styles.module.scss';
import Container from '@components/system/layout/Container';

interface SectionProps {
  children: React.ReactNode;
  heading?: string;
  subheading?: string;
  className?: string;
  contentClassName?: string;
  /**
   * A custom id string to anchor to
   */
  id?: string;
  /**
   * Whether the background should be lighter than the default.
   */
  light?: boolean;
  /**
   * A custom HTML tag to render instead of the default <section /> tag.
   */
  component?: keyof JSX.IntrinsicElements
}

const Section = (props: SectionProps): JSX.Element => {
  const classes = ClassNames(
    styles.Section,
    props.light && styles.light,
  );

  const Tag = props.component || 'section';

  return (
    <Tag className={classes} id={props.id}>
      <Container>
        {props.heading
          ? (
            <div className={styles.heading}>
              <img src="/images/logos/logo-light.svg" alt="arnovs logo" width="32px" height="100%" />
              <h1>{props.heading}</h1>
              <p>{props.subheading}</p>
            </div>
          )
          : null}
        <div className={props.contentClassName}>
          {props.children}
        </div>
      </Container>
    </Tag>
  );
};

export default Section;