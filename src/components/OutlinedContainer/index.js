import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: white;
    position: relative;
    padding: 15px;
    display: inline-block;
    box-sizing: border-box;
    &:before {
        content: '';
        border: 1.5px solid lightgrey;
        position: absolute;
        left: 5px;
        top: 5px;
        right: 5px;
        bottom: 5px;
        pointer-events: none;
    }
`

const OutlinedContainer = props => {
    return (<Wrapper style={props.style}>{props.children}</Wrapper>)
};

// OutlinedContainer.propTypes = {};

export default OutlinedContainer;