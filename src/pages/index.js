import React, { useEffect } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Ribbon from '../components/ribbon';
import SEO from '../components/seo';
import loadScript from '../load-script';
import ShareBox from '../components/share-box';

import SectionAdvantages from '../sections/SectionAdvantages';
import SectionDeveloper from '../sections/SectionDeveloper';
import SectionSkills from '../sections/SectionSkills'
import SectionFooter from '../sections/SectionFooter';
import SectionHeader from '../sections/SectionHeader';
import SectionHumans from '../sections/SectionHumans';
import SectionRoles from '../sections/SectionRoles'
import SectionSlider from '../sections/SectionSlider';

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

const SPA = (props) => {
    useEffect(() => {
        loadScript('/js/live-helper.js');
        loadScript('/js/matomo.js');
        // loadScript('/js/mautic.js'); // was this for tracking?
    }, []);

    return (
        <>
            <SEO
                title="Computer Carl"
                image="/images/og-header.jpg"
            >
            </SEO>
            {/* <PageStyle /> */}
            <ShareBox />
            <Ribbon>
                <h2>Call Now:</h2>
                <h1><a href="tel:19192834112">1.919.283.4112</a></h1>
            </Ribbon>
            <NavBar>
                <div>Instant solution to your development needs. Call or chat now!</div>
            </NavBar>
            <SectionHeader {...props} />
            <SectionDeveloper />
            <SectionSkills />
            <SectionHumans />
            <SectionRoles />
            <SectionAdvantages />
            <SectionSlider />
            <SectionFooter />
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