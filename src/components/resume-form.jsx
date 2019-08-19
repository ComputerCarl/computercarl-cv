import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import loadScript from '../load-script';

const FormBox = styled.div`
    font-family: sans-serif;
    background-color: #fafafa;
    padding: 15px;
    border: 1px solid grey;
    border-radius: 10px;
`

const MauticForm = styled.div`
  text-align: left;
  input::placeholder {
    color: #aa8;
  }
  .mauticform-post-success .mauticform-innerform {
    display: none;
  }
  .mauticform-message {
    text-align: center;
    }

    .mauticform-button {
      box-shadow: 0px 0px 0px 2px #9fb4f2;
      background-color:#7892c2;
      border-radius:10px;
      border:1px solid #4e6096;
      display:inline-block;
      cursor:pointer;
      color:#ffffff;
      font-family:Arial;
      font-size:19px;
      padding:12px 37px;
      text-decoration:none;
      text-shadow:0px 1px 0px #283966;
    }
    .mauticform-button:active {
      position:relative;
      top:1px;
    }
    .mauticform-button:hover {
      color: white;
      background-color: #476e9e;
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
        <div>header</div>
        <MauticForm id='resume-form' />
    </FormBox>)
}