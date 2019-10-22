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
    // loadScript('/js/tawk-to.js');
    toggleLive(true); // [] use this for the carousel later

    // no use setting variables; no re-render after this is run
    // example "isLive = true;" will not affect the app
    // what are you thinking? Use props! React - props change, app changes!
    // const [whatever, updateWhatever] = useEffect({a: 1})
    // updateWhatever({a: 2})

  });
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
        <div>Instant solution to your customer service needs. Call or chat now!</div>
      </NavBar>
      {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} /> */}
      <section id='header'>
        <BackgroundImage
          Tag="div"
          fluid={props.data.imageOne.childImageSharp.fluid}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: '100% 100%'
          }}
        >
          {/* <Fully style={{
          backgroundImage: `url(${props.data.imageOne.childImageSharp.fluid.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: '100% 100%'
        }}> */}
          {/* <Fully style={{ backgroundColor: '#005' }}> */}
          <Contained>
            <Row type="flex" justify="space-between">
              <Col span={16}>
                <img src={svgCarlMann} /><br />
                <p className="white indent">
                  Finding a versatile technical service agent can be a daunting process.
                    With the myriad of modern-day technologies such as XaaS, machine learning, development platforms, databases and microservices, it's easy to drown in information.
              </p><p className="white indent">
                  This is where I can help.
                  For over 20 years, I have provided solutions trusted by hundreds of businesses, families, and government agencies.
                  I would like an opportunity to earn that trust from you.
              </p>
                <div className="center">
                  <ContactButton
                    // onClick={() => toggleHidden(!hidden)}
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


      <section id="pick-me">
        <Contained>

          <Row type="flex" justify="space-between" align="center">
            <Col span={8}>
              {/* <img src={imgWhiteboard} style={{
                margin: '0 20px',
                borderRadius: '0px 50px',
                height: '200px'
              }} /> */}
              <img src={ServiceGuy} style={{ height: '300px' }} />

            </Col>
            <Col span={16}>
              <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>
                Are you tired of training prospects instead of providing support?
            </h1>
              <p>
                Get a jump-start by hiring a service representative already versed in many of today's technologies.
                </p><p>
                I want to be your newest customer service rep, and I've built this page to prove it.
                Please feel free to ask any questions, or use the form above to view my resume, and I will get back to you right away.
              </p>
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
                <b>Produtivity</b>: Windows, Ubuntu, Debian, CentOS, (limited Mac) Microsft Office Suites, Exchange Server, QuickBooks<br />
                <b>Raster Graphics</b>: Adobe Photoshop, GIMP<br />
                <b>Vector Graphics</b>: DrawPlus, CorelDraw, InkScape<br />
                <b>Video/Animation</b>: Sony Movie Studio, AnimeStudio<br />
                <br />
                <b>...and dozens more!</b>
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
              <img src="/images/a1.jpg" />
              <h2>English Native</h2>
              <p>Born and raised on Long Island, N.Y, I had the advantage of learning English since birth - a privilege not shared by agents of many other countries.</p>
            </Col>
            <Col span={8}>
              <img src="/images/a2.jpg" />
              <h2>Versatile Schedule</h2>
              <p>Typically, I'm a morning person and prefer the "up and at 'em" lifestyle.
              Nevertheless, that doesn't mean I'm inflexible to keeping odd hours when needed.</p>
            </Col>
            <Col span={8}>
              <img src="/images/a3.jpg" />
              <h2>Well Equipped</h2>
              <p>My workspace is already equipped with fast Internet and modern equipment; including a GPU and 4K screen for the ultimate in multi-tasking and development.</p>
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