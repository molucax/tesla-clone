import React, { useState } from 'react'
import styled from "styled-components"
import { ImMenu } from "react-icons/im"
import { GrClose } from "react-icons/gr"
import { data } from "../data"

const Header = () => {

    const [burgerStatus, setBurgerStatus] = useState(false)

    return (
        <Container>
            <a href="https://molucax.vercel.app/">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {
                    (data.slice(0, 4)).map((c, i) => (
                        <a key={i} href="https://molucax.vercel.app/">{c.title}</a>
                    ))
                }
            </Menu>
            <RightMenu>
                <a href="https://molucax.vercel.app/">Shop</a>
                <a href="https://molucax.vercel.app/">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>
                {
                    (data.slice(0, 4)).map((c, i) => (
                        <li><a key={i} href="https://molucax.vercel.app/">{c.title}</a></li>
                    ))
                }
                <li><a href="https://molucax.vercel.app/">Existing Inventory</a></li>
                <li><a href="https://molucax.vercel.app/">Used Inventory</a></li>
                <li><a href="https://molucax.vercel.app/">Trade-in</a></li>
                <li><a href="https://molucax.vercel.app/">Cybertruck</a></li>
                <li><a href="https://molucax.vercel.app/">Roadaster</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    z-index: 1;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    
    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: nowrap;
    }
`

const CustomMenu = styled(ImMenu)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CustomClose = styled(GrClose)`
    cursor: pointer;
`