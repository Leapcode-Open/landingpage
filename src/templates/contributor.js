import React from "react"
import { graphql } from "gatsby"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.name}</h1>
        <h2>{frontmatter.username}</h2>
        <p>{frontmatter.bio}</p>
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($username: String!) {
    markdownRemark(frontmatter: { username: { eq: $username } }) {
      html
      frontmatter {
        username
        name
        bio
      }
    }
  }
`