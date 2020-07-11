import React from 'react';
import { Contained, Row, Col } from '../../components/Formatters';

const SectionAdvantages = () => {
    return (<section id="advantages">
        <Contained>
            <h1>Advantages</h1>
            <Row type="flex" justify="space-between" align="bottom" gutter={24}>
                <Col span={8}>
                    <img src="/images/a3.jpg" />
                    <h2>Well-Equipped</h2>
                    <p>My workstation is equipped with modern specifications and software, including an HD screen, tons of RAM, SSD storage, and an up-to-date development IDE.</p>
                </Col>
                <Col span={8}>
                    <img src="/images/a2.jpg" />
                    <h2>Versatile Schedule</h2>
                    <p>
                        Typically, I'm a morning person and prefer the "up and at 'em" lifestyle.
                        Nevertheless, I'll complete tasks at times in tune with your team, and in your time frame.
      </p>
                </Col>
                <Col span={8}>
                    <img src="/images/a1.jpg" />
                    <h2>English Native</h2>
                    <p>Born and raised on Long Island, N.Y, I had the advantage of learning English since birth, and have an expert knowledge in this <i>lingua franca</i>.</p>
                </Col>
            </Row>
        </Contained>
    </section>)
};

export default SectionAdvantages;