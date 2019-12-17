/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  lang,
  meta,
  title,
  ogImage,
  ogUrl,
  twitter_creator,
  keywords }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            og_image
            og_url
            twitter_creator
            keywords
          }
        }
      }
    `
  )

  const standardMeta = [
    {
      name: `description`,
      content: description || site.siteMetadata.description,
    },
    {
      name: `keywords`,
      content: keywords || site.siteMetadata.keywords,
    },
  ]

  const ogMeta = [
    {
      property: `og:title`,
      content: title || site.siteMetadata.title, // convert to an OG prop?
    },
    {
      property: `og:description`,
      content: description || site.siteMetadata.description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: ogImage || site.siteMetadata.og_image,
    },
    {
      property: `og:url`,
      content: ogUrl || site.siteMetadata.og_url,
    },
  ]

  const combinedMeta = [...standardMeta, ...ogMeta, ...meta].filter(item => item.content)

  return (
    <Helmet
      defaultTitle={site.siteMetadata.title}
      htmlAttributes={{
        lang,
      }}
      meta={combinedMeta}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
