import classNames from 'classnames';
import '@styles/global.scss';
import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Source_Code_Pro, Source_Sans_3 } from 'next/font/google';
import Footer from '@components/layout/Footer/Footer';
import Header from '@components/layout/Header/Header';
import ToolTip from '@components/system/display/ToolTip';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  preload: true,
  variable: '--font-family-sourceCodePro',
});

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  preload: true,
  variable: '--font-family-sourceSansPro',
});

export const metadata: Metadata = {
  title: 'Arno van Staden | Frontend Engineer',
  description: 'Senior Frontend Engineer specialising in React with Typescript',
};

const fontClasses = classNames(
  sourceCodePro.className,
  sourceSansPro.className,
);

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <html lang="en">
    <body className={fontClasses}>
      <Header />
      {children}
      <Footer />
      <ToolTip />
    </body>
  </html>
);

export default RootLayout;
