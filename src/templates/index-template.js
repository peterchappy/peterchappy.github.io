import { graphql, Link } from "gatsby";
import React from "react";
import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { edges } = data.allMarkdownRemark;

  if (edges.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title={siteTitle} />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }



  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <ol className="blog-list">
        {edges.map(edge => {
          const title = edge.node.frontmatter.title || edge.node.fields.slug

          return (
            <li key={edge.node.fields.slug} className="blog-list-item">
              <Link to={edge.node.fields.slug} itemProp="url" className="title">
                <span itemProp="headline">{title}</span>
              </Link>
              <small className="date">{edge.node.frontmatter.date}</small>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: $postsLimit,
      skip: $postsOffset,
      filter: { frontmatter: { template: { eq: "post" } } },
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
