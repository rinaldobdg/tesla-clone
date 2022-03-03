import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            desc="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"        
        />
        <Section 
            title="Model 3"
            desc="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"  
        />
        <Section 
            title="Model X"
            desc="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"  
        />
        <Section 
            title="Model Y"
            desc="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"  
        />
        <Section 
            title="Lower Cost Solar Panels in America"
            desc="Money-back Guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"  
        />

        <Section 
            title="Solar for New Roofs"
            desc="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"  
        />

        <Section 
            title="Accessories"
            desc=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop now"
            rightBtnText=""  
        />

    </Container>
    
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10; 
    
    

`