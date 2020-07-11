import React from 'react';
import { Contained, Row, Col } from '../../components/Formatters';

import imgDevBg from './development.png';
import ServiceGuy from './carl-tablet.svg';


const SectionDeveloper = () => {
    return (<section id="developer">
        <Contained>
            <Row type="flex" justify="space-between" align="center">
                <Col span={1}>
                    <img src={ServiceGuy} style={{ height: '300px' }} alt="Handsome man, waving. Not what Carl looks like, but imagine." />
                </Col>
                <Col span={4}>
                    <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>
                        Carl Mann, Software Developer
    </h1>
                    <img src={imgDevBg} style={{
                        width: '500px',
                        position: 'absolute',
                        zIndex: '-1',
                        filter: 'opacity(0.1)',
                        marginTop: '-125px',
                        marginLeft: '75px'
                    }} alt="" />
                    <Row type="flex" justify="space-between" align="center">
                        <Col span={8}>
                            <p>
                                Are you looking to create your next product using modern software development?
        </p><p>
                                My expertise in JavaScript, Node JS, React JS, Gatsby JS, and a whole lot more JS's (JavaScript libraries) can help you not only get your product to market faster, but with less errors and more resiliency, while also improving usability and functionality.
      </p>
                        </Col>
                        <Col span={8}>
                            <p>
                                JavaScript, really?
    </p><p>
                                Almost since web development became a thing, JavaScript (JS) has been in the background wiring web apps to make stuff happen.
                                HTML provides the structure, CSS provides styling, and JS provides not only the (advanced) interactivity – but with the advent of Node (server-side JS), now JS can power the entire stack.
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