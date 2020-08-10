import React, { Component } from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

class Contributor extends Component {
    render() {
        return (
            <Layout>
                <SEO title="Contributors on Leapcode" ></SEO>
                <div className="max-w-screen-lg mx-auto px-4 py-4">
                    <a href="/">
                        <img className="md:w-1/6 w-1/2 mb-24" src={require('../assets/images/leapcode-logo--new.svg')} />
                    </a>
                </div>


                <div className="max-w-screen-lg mx-auto px-4 py-4">
                    <h1 className="text-2xl font-gt">Contributor on Leapcode</h1>
                    <div className="mt-12">
                         { shuffleArray(this.props.data.allMarkdownRemark.edges).map(contrib => (
                             <a key={contrib.node.frontmatter.username} href={`/contributor/${contrib.node.frontmatter.username}`} className="p-3 border border-gray-300 rounded-lg mb-4 block bg-white shadow-sm hover:shadow-lg">
                                    <h3 className="font-gt text-base mb-1">{contrib.node.frontmatter.name}</h3>
                                    <small className="font-gt text-gray-600 text-xs mb-1 block">{contrib.node.frontmatter.username}</small>
                                    <p className="font-gt text-sm mb-0">{contrib.node.frontmatter.bio}</p>
                             </a>
                         ))}
                    </div>  
                </div>

            </Layout>
        )
    }
}


export const query = graphql`
  query ContributorPageQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              username
              name
              bio
            }
          }
        }
      }
    
  }
`

export default Contributor;