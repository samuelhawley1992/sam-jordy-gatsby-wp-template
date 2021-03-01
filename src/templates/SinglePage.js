import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default function SinglePage({ data }) {
    const page = data.allWpPage.edges[0].node
    return (
        <Layout>
            <div>
                <h1>{page.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: page.content }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    {
        allWpPage {
            edges {
                node {
                    title
                    content
                }
            }
        }
    }
`