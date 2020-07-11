import React from 'react';

import { Contained, Fully, Row, Col } from '../../components/Formatters';

import svgGreyCurve from './grey-curve.svg';

const SectionSkills = () => {
    return (<section id="skills">
        <Fully style={{
            backgroundImage: `url(${svgGreyCurve})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: '100% 100%'
        }}>
            <Contained>
                <Row type="flex" justify="space-between" align="center" gutter={24}>
                    <Col span={8} style={{ height: '100%' }}>
                        <h1>Multi-Faceted Skill Set</h1>
                        <img src="/images/multi-skilled.jpg" alt="wow.. look at the tech" />
                    </Col>
                    <Col span={8}>
                        <h2>Programming</h2>
                        <b>Languages:</b> CSS, HTML, JavaScript (client and Node), (limited PHP)<br />
                        <b>Frameworks & Templating:</b> React, jQuery, Handlebars, Pug,  (limited Backbone), WordPress<br />
                        <b>Databases:</b> MySQL, Mongo, Access<br />
                        <b>Tools:</b> VS Code, Atom, ToDoList, Kanboard, Git<br />
                        <b>Server Side / API:</b> Node, Express, Feathers<br />
                        <b>Methodologies:</b> Agile, BDD, TDD (Jest, Mocha), NPM, Cross-browser compatibility, Responsive design, CSS Media Queries
      </Col>
                    <Col span={8}>
                        <h2>Server Management</h2>
                        <b>Servers:</b> IIS, Apache, XAMPP<br />
                        <b>Interfaces:</b> Linux CLI, PM2<br />
                        <b>DevOps:</b> Docker, VirtualBox, Hyper-V, Linode, Vagrant, Azure, Heroku, CapRover

        <h2>Desktop &amp; Design</h2>
                        <b>Productivity</b>: Windows, Ubuntu, Debian, CentOS, (limited Mac) Microsoft Office Suites, Exchange Server, QuickBooks<br />
                        <b>Raster Graphics</b>: Adobe Photoshop, GIMP<br />
                        <b>Vector Graphics</b>: Affinity Designer, DrawPlus, CorelDraw, InkScape<br />
                        <b>Video/Animation</b>: Sony Movie Studio, AnimeStudio<br />
                        <br />
                        <b>...and hundreds more!</b>
                    </Col>
                </Row>
            </Contained>
        </Fully>
    </section>)
};

export default SectionSkills;