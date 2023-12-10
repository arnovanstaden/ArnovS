import ClassNames from 'classnames';
import styles from './styles.module.scss';
import Container from '@components/system/layout/Container';
import TypingAnimation from '@components/content/Landing/TypingAnimation';
import Logo from '@components/system/display/Logo';

interface SectionProps {
  children: React.ReactNode;
  heading?: string;
  subheading?: string;
  typingAnimationStrings?: string[],
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
              <Logo />
              {props.heading && <h1>{props.heading}</h1>}
              {props.subheading && <p>{props.subheading}</p>}
              {props.typingAnimationStrings && <TypingAnimation strings={props.typingAnimationStrings} />}
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
