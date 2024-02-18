import { Metadata } from 'next';

/**
 * Generates Custom Meta Data for Pages
 * @param appRoute predefined app route key
 * @param customPrefix custom string to prefix title
 * @returns Metadata
 */

interface IProps {
  title: string;
  description: string;
  image?: string;
}

export const generateCustomMetaData = ({ title, description, image }: IProps): Metadata => {
  const url = 'https://arnovs.dev';

  const images = image
    ? [{
      url: image,
      width: 500,
      height: 500,
    }]
    : [{
      url: '/images/logos/og_image.png',
      width: 500,
      height: 500,
    }];

  const metadata: Metadata = {
    title,
    icons: ['/images/logos/favicon.svg'],
    description,
    metadataBase: new URL(url),
    openGraph: {
      description,
      url,
      siteName: 'Arno van Staden | Frontend Engineer',
      images,
    },
  };
  return metadata;
};
