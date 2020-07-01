import React, { useState, useEffect } from 'react';
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from 'styled-components';
// import { Row, Col } from 'antd';
// import 'antd/lib/grid/style/index.css';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import ServiceGuy from '../images/carl-tablet.svg';
// import ParticleEffectButton from 'react-particle-effect-button'
import BackgroundImage from 'gatsby-background-image';
import Ribbon from '../components/ribbon';
import svgCarlMann from '../images/carlmann.svg';
import svgGreyCurve from '../images/grey-curve.svg';
import imgWhiteboard from '../images/whiteboard.jpg';
import imgGreenAbstract from '../images/green-abstract-bg.jpg';
import imgHumanBG from '../images/human-bg.jpg';
import imgHumanGirls from '../images/human-girls.jpg';
import ResumeForm from '../components/resume-form';
import SEO from '../components/seo';
import loadScript from '../load-script';
// import tawkTo from '../tawk-to';
import ShareBox from '../components/share-box';
import devBg from '../images/development.png';

const Row = styled.div`
  ${({ align, justify }) => `
    // border: 1px solid lightgrey;
    display: flex;
    flex-layout: row;
    justify-content: ${justify || 'space-between'};
    align-items: ${align || 'flex-start'};
    &>div.col-man {
      padding: 10px;
    }
    @media(max-width: 650px) {
      flex-direction: column;
    }
    `
  }
`
const Col = ({ children, span, style }) => (<div
  className="col-man"
  style={{ flex: `${span} 0`, ...style }}>{children}
</div>);

const PageStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Raleway&display=swap');
html, body {
  margin: 0;
  padding: 0;
  font-family: Open Sans, Helvetica, sans-serif;
}
h1 {
  font-family: Raleway, sans-serif;
  font-weight: normal;
  font-size: 2em;
}

p {
  font-size: 1.2em;
}

  .main-copy {
  margin-left: 5%;
  color: mistyrose;
}
  .white {
  color: white;
}
  .indent {
  margin-left: 5%;
}
  .center {
  text-align: center;
}
ul.contact { margin: 0; }
ul.contact li {
  margin: 10px 3px;
}
ul.contact, ul.contact a: link, ul.contact a: visited {
  color: mistyrose;
  font-size: 14pt;
  text-decoration: none;
  font-weight: normal;
}
li.fa-email { list-style-image: url(/images/fa-email.svg); }
li.fa-phone { list-style-image: url(/images/fa-phone.svg); }
li.fa-pin { list-style-image: url(/images/fa-pin.svg); }
li.fa-skype { list-style-image: url(/images/fa-skype.svg); }
li.fa-link { list-style-image: url(/images/fa-link.svg); }
section#roles h1 {
  margin: -38px auto auto;
  border-radius: 0 0 10px 10px;
  width: 40%;
}
section#advantages h1 {
  text-align: center;
}
section#advantages img {
  margin: auto;
  position: relative;
  display: block;
}
section#advantages h2 {
  text-align: center;
  border-bottom: 2px solid #b3e2e9;
  text-transform: uppercase;
  margin: 3px;
  font-weight: normal;
}

`

const ContactButton = styled.div`
background-color: darkblue;
padding: 10px 40px;
color: white;
border: 1px solid darkblue;
display: inline-block;
border-radius: 100px;
  &: hover {
  background-color: blue;
}
`

const Filler = styled.div`
box-sizing: border-box;
background-image: url(${({ backgroundImage }) => backgroundImage});
background-size: cover;
// position: relative;
margin: 0;
padding: 0;
height: 100%;
`

const Vcenter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const Fully = styled.div`
// width: 100vw;
padding: 30px 0px;
`

const Contained = styled.div`
padding: 10px;
max-width: 1000px;
position: relative;
margin: 0 auto;
// border: 1px solid grey;
`

const SectionRoles = styled.section`
color: white;
h1 {
  text-align: center;
  background-color: rgba(0, 0, 0, .5);
}
`

const NavBar = styled.div`
box-sizing: border-box;
background-color: rgb(50, 60, 70);
padding: 10px;
height: 50px;
color: mistyrose;
font-family: "Trebuchet MS", Helvetica, sans-serif;
font-size: 1.2em;
margin-right: 250px;
@media(max-width: 575px) {
  & > div {
    display: none;
  }
}
`

const sliderSettings = {
  // dots: true,
  // lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1
};

const SliderCss = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
const Slider = ({ children }) => {
  return (<SliderCss>
    {children}
  </SliderCss>)
}



const SPA = (props) => {
  let isClient;
  const [hidden, toggleHidden] = useState(false);
  const [isLive, toggleLive] = useState(false);

  useEffect(() => {
    loadScript('/js/live-helper.js');
    loadScript('/js/matomo.js');
    loadScript('/js/mautic.js');
    toggleLive(true); // [] use this for the carousel later
  }, []);

  return (
    <>
      <SEO
        title="Computer Carl"
        image="/images/og-header.jpg"
      >
      </SEO>
      <PageStyle />
      <ShareBox />
      <Ribbon>
        <h2>Call Now:</h2>
        <h1><a href="tel:19192834112">1.919.283.4112</a></h1>
      </Ribbon>
      <NavBar>
        <div>Instant solution to your development needs. Call or chat now!</div>
      </NavBar>

      <section id='header'>
        <BackgroundImage
          Tag="div"
          fluid={props.data.imageOne.childImageSharp.fluid}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: '100% 100%'
          }}
        >
          <Contained>
            <Row type="flex" justify="space-between">
              <Col span={16}>
                <img src={svgCarlMann} /><br />
                <p className="white indent">
                  With the myriad of modern-day technologies such as XaaS, machine learning, development platforms, databases and micro-services, it's easy to drown in information.
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
          {/* </Fully > */}
        </BackgroundImage>
      </section>


      <section id="developer">
        <Contained>
          <Row type="flex" justify="space-between" align="center">
            <Col span={1}>
              <img src={ServiceGuy} style={{ height: '300px' }} />
            </Col>
            <Col span={4}>
              <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>
                Carl Mann, Software Developer
            </h1>
              <img src={devBg} style={{
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


      <section id="skills">
        <Fully style={{
          backgroundImage: `url(${svgGreyCurve})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: '100% 100%'
        }}>
          <Contained>
            <Row type="flex" justify="space-between" align="center" gutter={24}>
              <Col span={8} style={{ height: '100%' }}>
                <h1>Multi-Faceted Skill Set</h1>
                <img src="/images/multi-skilled.jpg" />
              </Col>
              <Col span={8}>
                <h2>Programming</h2>
                <b>Languages:</b>       CSS, HTML, JavaScript (client and Node), (limited PHP)<br />
                <b>Frameworks & Templating:</b> React, jQuery, Handlebars, Pug,  (limited Backbone), WordPress<br />
                <b>Databases:</b> MySQL, Mongo, Access<br />
                <b>Tools:</b> VS Code, Atom, ToDoList, Kanboard, Git<br />
                <b>Server Side / API:</b> Node, Express, Feathers<br />
                <b>Methodologies:</b> Agile, Test-Driven Development (Jest, Mocha), NPM, Cross-browser compatibility, Responsive design, CSS Media Queries
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
      </section>

      <br />
      <section id="humans">
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
      </section>


      <section id="advantages">
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
              <p>Typically, I'm a morning person and prefer the "up and at 'em" lifestyle.
              Nevertheless, I'll complete tasks at times in tune with your team, and in your time frame.</p>
            </Col>
            <Col span={8}>
              <img src="/images/a1.jpg" />
              <h2>English Native</h2>
              <p>Born and raised on Long Island, N.Y, I had the advantage of learning English since birth, and have an expert knowledge in this <i>lingua franca</i>.</p>
            </Col>
          </Row>
        </Contained>
      </section>


      <SectionRoles id="roles">
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
                  <li>
                    Graphic Designer
                  </li>
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
      </SectionRoles>

      <section id="slider">
        <Fully style={{ backgroundColor: '#eee' }}>
          <Contained>
            <Slider >
              <div><img src="/images/slide-1.png" /></div>
              <div><img src="/images/slide-2.png" /></div>
              <div><img src="/images/slide-3.png" /></div>
              <div><img src="/images/slide-4.png" /></div>
              <div><img src="/images/slide-5.png" /></div>
              <div><img src="/images/slide-6.png" /></div>
              <div><img src="/images/slide-7.png" /></div>
              <div><img src="/images/slide-8.png" /></div>
            </Slider>
          </Contained>
        </Fully>
      </section>

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
                />
              </Col>
              <Col span={8} className="antd-col-center">
                <img src={svgCarlMann} align="center" style={{
                  display: "block",
                  margin: "0 auto",
                  width: '50%'
                }} />
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

    </>
  )
}

export const data = graphql`
query {
  imageOne: file(relativePath: { eq: "header-wave-bg.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1100) {
          ...GatsbyImageSharpFluid
      }
    }
  }
}
`
export default SPA;