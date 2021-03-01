/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it - dont tell me how to live my life

const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // query content for WordPress posts, pages, and custom post types
    const result = await graphql(`
    query {
        allWpPost {
            edges {
                node {
                    title
                    date
                    excerpt
                    id
                    uri
                    slug
                }
            }
        }
        allWpPage {
            edges {
                node {
                    title
                    date
                    id
                    uri
                    slug
                }
            }
        }
    }
    `)

    // Get layouts from templates
    const postTemplate = path.resolve(`./src/templates/SinglePost.js`)
    const pageTemplate = path.resolve(`./src/templates/SinglePage.js`)
    const homePageTemplate = path.resolve(`./src/templates/HomePageTemplate.js`)
    

    // Create posts
    result.data.allWpPost.edges.forEach(edge => {
        createPage({
            path: edge.node.slug,
            component: slash(postTemplate),
            context: {
                id: edge.node.id,
            },
        })
    })

    // Create pages
    result.data.allWpPage.edges.forEach(edge => {

        if(edge.node.id==="cG9zdDoy") {
            createPage({
                path: edge.node.uri,
                component: slash(homePageTemplate),
                context: {
                    id: edge.node.id,
                }
            })
        } else {
            createPage({
                path: edge.node.slug,
                component: slash(pageTemplate),
                context: {
                    id: edge.node.id,
                },
            })
        }
        
    })
}