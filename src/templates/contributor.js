import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
      <Layout>
          <SEO title={`${frontmatter.name} is a contributor` } />
        <div className="w-screen h-screen bg-blue-100 pt-32">
            <div className="w-1/4 mx-auto my-auto text-left p-10 bg-white">
                <div className="blog-post font-gt">
                    <small class="font-bold text-gray-600">I'm</small>
                    <h3 className="font-medium">{frontmatter.name}</h3>

                    <small class="font-bold text-gray-600">My Github Profile is</small>
                    <h3 className="font-medium">{frontmatter.username}</h3>

                    <small class="font-bold text-gray-600">and</small>
                    <h3 className="font-medium">{frontmatter.bio}</h3>
                </div>
            </div>
        </div>
      </Layout>
    
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