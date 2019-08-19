import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import loadScript from '../load-script';

const FormBox = styled.div`
  box-sizing: border-box;
    font-family: sans-serif;
    background-color: rgba(255,255,255,0.9);
    border: 1px solid grey;
    border-radius: 10px;
    
    `
const H1 = styled.div`
    background-color: #2F729C;
    border: 1px solid grey;
    border-radius: 9px 9px 0 0;
    `

const MauticForm = styled.div`
  padding: 0 15px;
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



export default () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://bff.adstute.com/form/generate.js?id=4';
    script.async = true;
    document.querySelector('#resume-form').append(script);
  }, []);
  return (<FormBox>
    <H1>
      <img width="300" src="/images/header-content.png" alt="Fill Form to DL Resume" />
    </H1>
    <MauticForm id='resume-form' />
  </FormBox>)
}