import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from '../SimpleSpinner';

import svgResumeWord from './resume-word.svg';
import svgRocket from './upchunk-rocket.svg';

const FormBox = styled.div`
  box-sizing: border-box;
    font-family: sans-serif;
    background-color: rgba(255,255,255,0.9);
    border: 1px solid grey;
    border-radius: 10px;
    /* static to set from jarring page */
    min-width: 340px;
    min-height: 448px;
    `

const H1 = styled.div`
    background-color: #2F729C;
    border: 1px solid grey;
    border-radius: 9px 9px 0 0;
    `

const MauticStyling = styled.div`
  background-size: cover;
  text-align: left;
  input::placeholder {
    color: #bbb;
  }
  .mauticform-label {
    font-size: .8em;
  }
  .mauticform-post-success .mauticform-innerform {
    display: none;
  }
  .mauticform-message {
    color: #557;
    text-align: center;
  }
`

const LowerFormArea = styled.div`
  padding: 10px;
`
const scriptSrc = 'https://crm.upchunk.com/form/generate.js?id=1'

export default () => {
  const [isLive, setLive] = useState(false);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    document.querySelector('#resume-form').append(script);
    script.addEventListener('load', () => {
      setLive(true);
    })
  }, []);

  const RocketBox = styled.div`
    color: ghostwhite;
    display: flex;
    flex-direction: row;
    padding: 10px;
  `

  return (<FormBox>
    <H1>
      {/* {isLive ?
        <img width="300" src="/images/header-content.png" alt="Fill Form to DL Resume" /> :
        <img width="300" src="/images/header-content-pre.jpg" alt="Fill Form to DL Resume" />
      } */}
      <RocketBox>
        <div>
          <img src={svgRocket} width="100px" />
        </div><div align="center">
          <span style={{ fontSize: '1.1em', marginTop: '5px', display: 'inline-block' }}>Enter your contact info below to access my</span>
          <img src={svgResumeWord} width="200px" />
        </div>
      </RocketBox>
    </H1>
    <LowerFormArea id="resume-form">
      <MauticStyling />
      {!isLive && <><div>Loading form...</div><Loader /></>}
    </LowerFormArea>
  </FormBox>)
}