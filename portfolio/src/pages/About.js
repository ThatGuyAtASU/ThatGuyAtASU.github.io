import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return (
        <div>
            <Hero backgroundImage="">
            <h1>Guy Sercu</h1>
            </Hero>
            <Container style={{ marginTOp: 30}}>
                <Row>
                    <Col size="md-12">
                        <h1>About Me</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                    <p>My name is Guy Sercu. I am an avid gamer and aspire to be a web developer. I have studied Java in the past and am continuing to study React and Mongoose.</p>
                    <p>In the past I have worked in retail mostly and previously as a mechanic.</p>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default About;




