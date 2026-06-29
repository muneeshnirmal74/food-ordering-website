import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Inner_banner(props) {
    return (
        <>
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg={12} className="mb-5 mb-lg-0">
                            <div className="hero_text text-center">
                                <h1 className="text-white">{props.PageName}</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Inner_banner;