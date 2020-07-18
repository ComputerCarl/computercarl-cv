import React from 'react';
import styled from 'styled-components';
import { Contained, Row, Col } from '../../components/Formatters';

import svgGithubMap from './computercarl-github-map.svg';

const Note = styled.section`
    padding: 15px;
    border: 1px solid beige;
    border-radius: 6PX;
    background-color: honeydew;
    display: flex;
    flex-direction: row;
    align-items: center;
    a, a:hover, a:visited {
        color: green;
    }
    & > div {
        margin: 0 10px;
    }
`

const SectionSourceCode = props => {
    return (<Contained>
        <Note>
            <Row>
                <Col span={2}>
                    <h1>View the Code</h1>
                </Col>
                <Col span={4}>
                    You want more details?
                    This page is available as an open-source repository.
                    There, you can read the technical specifications on how this page was created.
                    Visit my GitHub page to get <a href="https://github.com/ComputerCarl/computercarl-cv" target="_new">the source</a> for this React-Gatsby application as well as some <a href="https://github.com/ComputerCarl" target="_new">other code</a> samples.
                </Col>
                <Col span={2}>
                    <img src={svgGithubMap} alt="github map" width="150px" />
                </Col>
            </Row>
        </Note>
    </Contained>
    )
};

export default SectionSourceCode;