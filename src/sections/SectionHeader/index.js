import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ResumeForm from '../../components/ResumeForm';
import { Contained, Row, Col } from '../../components/Formatters';
import svgCarlMann from '../../images/carlmann.svg';

// import BackgroundImage from 'gatsby-background-image';

import svgBgImage from './header-wave-bg.svg';

const ContactButton = styled.div`
  background-color: darkblue;
  padding: 10px 40px;
  color: white;
  border: 1px solid darkblue;
  display: inline-block;
  border-radius: 100px;
  &:hover {
    background-color: blue;
  }
`
const Cover = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  min-height: 550px;
  background-size: 100% 100%;
  background-image: url(${svgBgImage});
  background-repeat: no-repeat;
  z-index: -1;
`

const SectionHeader = props => {
  return (<section id='header'>
    <Cover />
    <Contained>
      <Row type="flex" justify="space-between">
        <Col span={16}>
          <img src={svgCarlMann} alt="Carl Mann, Developer & Support Agent" />
          <br />
          <p className="white indent">
            With the myriad of modern-day technologies such as XaaS, machine learning, development platforms, databases, and micro-services; it's easy to drown in information.
      </p><p className="white indent">
            This is where I can help.
            For over 15 years, I have provided solutions trusted by hundreds of people, businesses, and government agencies.
            I would like an opportunity to earn that trust from you.
      </p>
          <div className="center">
            <ContactButton
              onClick={() => window.scrollTo(0, document.body.scrollHeight)}
            >
              Contact Carl
        </ContactButton>
          </div>
        </Col>
        <Col span={8}>
          <ResumeForm />
        </Col>
      </Row>
    </Contained>
  </section >)
};

SectionHeader.propTypes = {
  props: PropTypes.any
};

export default SectionHeader;