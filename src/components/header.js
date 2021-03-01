import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from 'styled-components'
import LimitlessRenewableLogo from '../images/limitlessRenewable.svg'

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    wpMenu(id: {eq: "dGVybToy"}) {
      menuItems {
        nodes {
          id
          label
          url
        }
      }
    }
  }
    `)

    const items = data.wpMenu.menuItems.nodes
    return (
    <>
      <NavHeader>
        <NavHeaderLeft>
          <NavLogoImg />
          <NavLogoText>Limitless<br></br>Resources</NavLogoText>
        </NavHeaderLeft>
        <NavHeaderRight>
          {items.map(item => (
            <NavLink to={item.url} key={item.id}>
                {item.label}
            </NavLink>
          ))}
        </NavHeaderRight>
      </NavHeader>
    </>
    )
  }

const NavHeader = styled.header`
  color: white;
  width: 90vw;
  display: flex;
  margin: 0 auto;
  &:hover {
  }
`
const NavLogoImg = styled.image`
  height: 40px;
  width: 40px;
  background-image:url(${LimitlessRenewableLogo})
`

const NavLogoText = styled.h3`
  color: #fff;
  line-height: 15px;
  font-size: 16px;
  margin-bottom: 0;
  padding-left: 10px;
`

const NavHeaderLeft = styled.div`
  width: 20vw;
  margin-top: 32px;
  display: flex;
  justify-content: left;
  align-items: center;
`

const NavHeaderRight = styled.div`
  justify-content: right;
  width: 70vw;
  margin-top: 32px;
  display: flex;
  align-items: center;
`

const NavLink = styled(Link)`
  font-size: 24px;
  font-weight: 500;
  text-align: right;
  display: flex;
  flex-direction: row;
  margin-right: 32px;
  text-decoration: none;
  color: white;
  transition: ease all 0.25s;
  &:hover {
    color: #27a9cf;
  }
`

export default Header
