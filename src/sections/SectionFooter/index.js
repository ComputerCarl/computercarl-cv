import React from 'react';

import { Contained, Row, Col } from '../../components/Formatters';

// import svgCarlMann from './carlmann.svg';
import svgCarlMann from '../../images/carlmann.svg';

const SectionFooter = () => {
    return (
        <section id="footer">
            <div style={{
                width: '100%',
                backgroundColor: `#345`,
                margin: 0
            }}>
                <Contained>
                    <Row justify="space-around" align="center">
                        <Col span={8}>
                            <img
                                src="/images/carl-office.svg"
                                width="100%"
                                alt=""
                            />
                        </Col>
                        <Col span={8} className="antd-col-center">
                            <img src={svgCarlMann} align="center" style={{
                                display: "block",
                                margin: "0 auto",
                                width: '50%',
                            }}
                                alt="Carl Mann, Developer & Support Agent" />
                        </Col>
                        <Col span={8}><ul className="contact">
                            <li className="fa-email"><a href="mailto:carl@computercarl.com">carl@computercarl.com</a></li>
                            <li className="fa-phone"><a href="tel:19192834112">1.919.283.4112</a></li>
                            <li className="fa-pin">Willow Spring, NC, USA</li>
                            <li className="fa-skype">hamptonit</li>
                            <li className="fa-link"><a href="https://computercarl.com">computercarl.com</a></li>
                        </ul></Col>
                    </Row>
                </Contained>
            </div>
        </section>
    )
};

export default SectionFooter;