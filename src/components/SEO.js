import React, { StrictMode } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SEO = ({
  lang,
  title,
  description,
  image,
  meta,
  ogDescription,
  siteName = true,
}) => {
  const { pathname } = useLocation();

  const site = {
    name: siteName,
    url: window.location.href,
    description: '',
    keywords: siteName ? '' : keywords,
    image: '/assets/images/hero-video.png',
    logo: '/assets/images/logo.png',
    siteMetadata: {
      title: siteName,
      description: 'Smart hub page demo',
      siteName: 'Smart Hub',
      siteUrl: window.location.host,
    },
  };

  const metaDescription = description || site.siteMetadata.description;

  const titleTemplate = siteName ? `%s | ${site.siteMetadata.siteName}` : '%s';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${titleTemplate}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `${pathname}`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.siteName,
        },
        {
          property: `og:image`,
          content:
            image && image.startsWith('https')
              ? image
              : `${site.siteMetadata.siteUrl}${site.image}`,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `630`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:property`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: `${title} | ${site.siteMetadata.siteName}`,
        },
        {
          name: `twitter:description`,
          content: ogDescription || metaDescription,
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}${site.image}`,
        },
      ].concat(meta)}
      link={[
        {
          rel: 'canonical',
          href: `${site.siteMetadata.siteUrl}${
            pathname.indexOf('/leadership') === 0 ? '/leadership' : pathname
          }`,
        },
      ]}
    >
      <script type='application/ld+json'>
        {`
                    {
                        "@context":"http://schema.org",
                        "@type":"Corporation",
                        "name":"Payall – Cross Border Processing for Banks",
                        "telephone":"1-888-729-2551",
                        "url":"https://www.payall.com",
                        "logo":"${site.siteMetadata.siteUrl}${site.logo}",

                        "address":{
                            "@type":"PostalAddress",
                            "streetAddress":"820 W. 41st Street, Suite 216",
                            "addressLocality":"Miami Beach",
                            "addressRegion":"FL",
                            "postalCode":"33140",
                            "sameAs":[
                            "https://www.facebook.com/payall/",
                            "https://twitter.com/payall",
                            "https://www.linkedin.com/company/payall-payment-systems/"
                            ]
                        }
                    }
                `}
      </script>
    </Helmet>
  );
};
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string,
  ogDescription: PropTypes.string,
  siteName: PropTypes.string,
};

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
  description: ``,
  title: ``,
  image: null,
};

export default SEO;
