import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'


const Blog = ({ data }) =>{
    return (
        <Layout pageTitle="My Blog">
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
{
  allFile {
    nodes {
      name
    }
  }
}
`

export default Blog