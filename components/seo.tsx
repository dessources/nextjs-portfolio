import Head from 'next/head';
import { SITE_CONFIG } from '@/lib/constants';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.ogImage,
  url = SITE_CONFIG.url,
  type = 'website'
}) => {
  const pageTitle = title 
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional */}
      <meta name="author" content={SITE_CONFIG.author.name} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: SITE_CONFIG.author.name,
            jobTitle: SITE_CONFIG.title,
            email: SITE_CONFIG.author.email,
            url: SITE_CONFIG.url,
            sameAs: [
              SITE_CONFIG.social.github,
              SITE_CONFIG.social.linkedin
            ]
          })
        }}
      />
    </Head>
  );
};