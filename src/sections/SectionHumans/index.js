import React from 'react';
import { Contained, Row, Col } from '../../components/Formatters';

import imgHumanBG from './human-bg.jpg';
import imgHumanGirls from './human-girls.jpg';

const SectionHumans = () => {
  return (<section id="humans">
    <Contained className="white">
      <Row type="flex" justify="space-between" align="bottom" gutter={24}>
        <Col span={12} style={{
          backgroundImage: `url(${imgHumanBG})`,
          padding: '15px;'
        }}>
          <h1 style={{ textAlign: 'center' }}>The Human Element</h1>
          <p>
            Your clients and customers have feelings.
            While advances in artificial intelligence have made detecting human emotion and simulating real responses better, they are still very much artificial.
      </p><p>
            I am a real person with real humor, real understanding, and real empathy.
            I like communicating with people, understanding their issues, and helping resolve them.
      </p>
        </Col>
        <Col span={12} style={{
          backgroundImage: `url(${imgHumanGirls})`,
          minHeight: '300px',
          backgroundSize: 'cover'
        }}>
        </Col>
      </Row>
    </Contained>
  </section>)
};

export default SectionHumans;