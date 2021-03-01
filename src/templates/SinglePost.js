import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default function SinglePost({ data }) {
    const post = data.allWpPost.edges[0].node
    return (
        <Layout>
            <div>
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    {
        allWpPost {
            edges {
                node {
                    title
                    content
                }
            }
        }
    }
`