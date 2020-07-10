import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import loadScript from '../load-script';
import imgFormPlaceHolder from './form-placeholder.jpg';
import Loader from '../Loader';

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

const MauticForm = styled.div`
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

export default () => {
  const [isLive, setLive] = useState(false);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://bff.adstute.com/form/generate.js?id=4';
    script.async = true;
    document.querySelector('#resume-form').append(script);
    script.addEventListener('load', () => {
      setLive(true);
    })
  }, []);

  return (<FormBox>
    <H1>
      {isLive ?
        <img width="300" src="/images/header-content.png" alt="Fill Form to DL Resume" /> :
        <img width="300" src="/images/header-content-pre.jpg" alt="Fill Form to DL Resume" />
      }
    </H1>
    <LowerFormArea id="resume-form">
      {isLive ?
        <MauticForm /> :
        <Loader />
      }
    </LowerFormArea>
  </FormBox>)
}