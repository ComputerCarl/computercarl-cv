import React from 'react';
import styled from 'styled-components';
import { Contained, Row, Col, Fully } from '../../components/Formatters';

import imgGreenAbstract from './green-abstract-bg.jpg';


const Styled = styled.section`
color: white;
h1 {
  text-align: center;
  background-color: rgba(0, 0, 0, .5);
}
`

const SectionRoles = () => {
    return (
        <Styled id="roles">
            <Fully style={{
                backgroundImage: `url(${imgGreenAbstract})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: '100% 100%'
            }}>
                <Contained>
                    <h1>Flexible Roles</h1>
                    <Row>
                        <Col span={8}>
                            <ul>
                                <li>Graphic Designer</li>
                                <li>
                                    Virtual Assistant
          </li>
                                <li>
                                    Digital Marketer
          </li>
                                <li>
                                    Web Designer
          </li>
                                <li>
                                    Project Manager
          </li>
                                <li>
                                    Photo Editor
          </li>
                                <li>
                                    Copy Editor
          </li>
                            </ul>
                        </Col>
                        <Col span={8}>
                            <ul>
                                <li>
                                    Data Processor
      </li>
                                <li>
                                    Admin. Assistant
      </li>
                                <li>
                                    Internet Researcher
      </li>
                                <li>
                                    Customer Support Agent
      </li>
                                <li>
                                    Telephone Support Agent
</li>
                                <li>
                                    Copywriter
      </ li>
                                <li>
                                    Application Tester
</li>
                            </ul>
                        </Col>
                        <Col span={8}>
                            <ul>
                                <li>
                                    Email Support Agent
      </li>
                                <li>
                                    Technical Support Agent
      </li>
                                <li>
                                    Full-Stack Developer
      </li>
                                <li>
                                    Order Processor
      </li>
                                <li>
                                    Video Editor
      </li>
                                <li>
                                    Database Admin
      </li>
                                <li>
                                    Chat Support Agent
      </li>
                            </ul>
                        </Col>
                    </Row>
                </Contained>
            </Fully>
        </Styled>
    )
};

export default SectionRoles;