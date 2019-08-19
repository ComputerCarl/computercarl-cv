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
        background-color: green !important;
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