import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import BackgroundImage from '../images/Hero-bg.svg'
import styled from 'styled-components'
import { Container, Row } from 'react-bootstrap'

export default function HomePageTemplate({ data }) {
    const homepage = data.wpPage
    return (
      
      <Layout>
          <BackgroundImageOverlay />
          <BackgroundImageHolder />
            <HomePageLayout>
              <TopSection>
                <TopMainHeader>Start energy revolution from your community</TopMainHeader>
                <TopMainContent dangerouslySetInnerHTML={{ __html: homepage.content }} />
                <TopContactUsButton>Contact Us</TopContactUsButton>
                </TopSection>
            </HomePageLayout>
      </Layout>

    )
}

export const query = graphql`
{
    wpPage(id: {eq: "cG9zdDoy"}) {
      id
      title
      content
      slug
    }
  }  
`

const HomePageLayout = styled(Container)`
  color: black;
  position: relative;
  z-index: 10;
`

const TopSection = styled(Row)`
  color: black;
`

const TopMainHeader = styled.h1`
  color: white;
  font-size: 56px;
  font-weight: 600;
  width: 35vw;
  margin-top: 2em;
`

const TopMainContent = styled.div`
  font-size: 20px;
  font-weight: 400;
  width: 25vw;
  color: white;
  margin-bottom: 40px;
  margin-top: 40px;
`

const TopContactUsButton = styled(Link)`
  background-color: #4e61de;
  padding: 10px 22px;
  border-radius: 20px;
  color: white;
  transition: all 0.25s ease;
  &:hover {
    background-color: #27a9cf;
  }
`

const BackgroundImageHolder = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  width: 1920px;
  height: 1080px;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: -5;
`

const BackgroundImageOverlay = styled.div`
  background-color: #00000015;
  width: 100%;
  height: 1080px;
  top: 0;
  left: 0;
  position: fixed;
  right: 0;
  z-index: -1;
`