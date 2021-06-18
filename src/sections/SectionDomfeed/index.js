import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OutlinedContainer from '../../components/OutlinedContainer/index';
import tiltedImg from './domfeed-tilted.jpg'
// import tiltedImg from './tilted.png'
import { Contained, Row, Col } from '../../components/Formatters';
import balloonBg from './baoon-bg.jpg'
import servicesDiagram from './services-diagram.png'

const Background = styled.div`
    background-color: ghostwhite;
`

const Image = styled.img`
    float: right;
    padding-left: 10px;
`
const BalloonBg = styled.div`
    background-image: url(${balloonBg});
    background-size: cover;
    padding: 15px;
`

const SectionDomfeed = props => {
    return (<section id="domfeed">
        <Background>
            <Contained >
                <OutlinedContainer>
                    <Image src={tiltedImg} alt="screenshot of domain finder" float="right" />
                    <h1 style={{ textAlign: 'center' }}>Sample Project: Domfeed Domains</h1>
                    <p>
                        I made <a href="https://domfeed.com" target="_new">this project</a> as a domain name suggestion tool and platform to sell premium domain names.
                        It was written in React JS and utilizes Gatsby JS for dynamic site generation.
                    </p><p>
                        There is also a technical <a href="https://domfeed.com/how-to-start-a-blog" target="_new">article</a> written by me explaining how to sign up for and customize WordPress.
                    </p><p>
                        The UX was designed and implemented by me without the use of UI libraries.
                        My original design idea was bold and functional, but decided on the second draft to design a softer palette.
                    </p><p>
                        After the initial static web files load, the JavaScript kicks in and loads many features into the page, such as; progressive images, a carousel, CRM-backed web forms, and a chat widget.
                    </p><p>
                        One of the important pieces of the project is the heavy use of microservices.
                    </p>
                    <BalloonBg>
                        <Image src={servicesDiagram} alt="microservices galore!" float="right" />

                        <h1 style={{ textAlign: 'center' }}>Microservices</h1>
                        <p>

                            Unlike traditional applications, which have all the code in a single place, Domfeed has its functionality split between many independent services.
                        </p><p>
The following diagram shows how Domfeed was split, and how the services interact.
                        </p>

                    </BalloonBg>
                </OutlinedContainer>
            </Contained>
        </Background>
    </section>
    )
};

SectionDomfeed.propTypes = {};

export default SectionDomfeed;

