import React from 'react';
import { Contained, Row, Col } from '../../components/Formatters';

import imgDevBg from './development.png';
import ServiceGuy from './carl-tablet.svg';


const SectionDeveloper = () => {
    return (<section id="developer">
        <Contained>
            <Row type="flex" justify="space-between" align="center">
                {/* <Col span={1}>
                    <img src={ServiceGuy} style={{ height: '300px' }} alt="Handsome man, waving. Not what Carl looks like, but imagine." />
                </Col> */}
                <Col span={4}>
                    <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>
                        Carl Mann, Solutions Architect
                    </h1>
                    <img src={imgDevBg} style={{
                        width: '500px',
                        position: 'absolute',
                        zIndex: '-1',
                        filter: 'opacity(0.1)',
                        marginTop: '-125px',
                        marginLeft: '75px'
                    }} alt="" />
                    <Row type="flex" justify="space-between" align="top">
                        <Col span={8}>
                            <p>
                                Technically, I'm a full-stack developer specializing in MERN (Mogo-Express-React-Node) and Jamstack (Gatsby, headless CMS, RESTful API).
                            </p><p>
                                However, labeling oneself as a software developer creates a problem – the need to produce software. There's already so much existing, working, tested, and supported software – some free for the taking.
                            </p><p>
                                How would you like to start with your project 75% finished and paid?
                            </p>
                        </Col>
                        <Col span={8}>
                            <p>
                                Thinking in solutions changes the paradigm from code development to project development.
                                No need to reinvent the wheel by engineering the content-management system, authentication & authorization "programs", or any other working solutions already available for you no use now.
                            </p><p>
                                For the other 25% – the unique things your application does – my expertise in JavaScript, Node JS, React JS, Gatsby JS, and a whole lot more JS's (JavaScript libraries) can help you not only get your product to market faster, but with fewer errors and more resiliency, while also improving usability and functionality.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Contained>
    </section>
    )
};

export default SectionDeveloper;