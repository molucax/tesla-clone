import React from 'react'
import styled from "styled-components";
import Section from "./Section";
import { data } from "../data";

const Home = () => {
    return (
        <Container>
            {
                data.map(x => {
                    return (
                        <Section 
                            title={x.title}
                            description={x.description}
                            backgroundImg={x.image}
                            leftBtnText={x.leftBtnText}
                            rightBtnText={x.rightBtnText}
                        />
                    )
                })
            }
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
