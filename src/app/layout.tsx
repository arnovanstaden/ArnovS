import classNames from 'classnames';
import '@styles/global.scss';
import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Source_Code_Pro, Source_Sans_3 } from 'next/font/google';
import Footer from '@components/layout/Footer/Footer';
import Header from '@components/layout/Header/Header';
import ToolTip from '@components/system/display/ToolTip';
import { ThemeProvider } from '@context/theme';
import { generateCustomMetaData } from '@utils/metadata';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  preload: true,
  variable: '--font-family-sourceCodePro',
  weight: 'variable',
  display: 'swap',
});

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  preload: true,
  variable: '--font-family-sourceSansPro',
  weight: 'variable',
  display: 'swap',
});

export const metadata: Metadata = generateCustomMetaData({
  title: 'Arno van Staden | Frontend Engineer',
  description: 'Discover Arno van Staden, a Senior Frontend Engineer, skilled in React and TypeScript. Delve into his professional achievements and innovative approach to web development.',
});

const fontClasses = classNames(
  sourceCodePro.variable,
  sourceSansPro.variable,
);

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <html lang="en" className={fontClasses}>
    <body>
      <ThemeProvider>
        <Header />
        {children}
        <Footer />
        <ToolTip />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
