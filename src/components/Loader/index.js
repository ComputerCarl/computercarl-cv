import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// loader from https://codepen.io/fadzrinmadu/pen/rNxzwge

const Styled = styled.div`
  position: relative;
  left: 50%;
  top: 80%;
  transform: translate(-50%);
  width: 60px;
  height: 60px;
.box {
  position: absolute;
  width: 30px;
  height: 30px;
  background: slategrey;
  filter: opacity(.5);
}

.box:nth-child(1) {
  animation: a1 2s infinite linear;
}

.box:nth-child(2) {
  animation: a2 2s infinite linear;
}

@keyframes a1 {
  0% {
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
  }
  12.5% {
    top: 0;
    left: 0;
    width: 60px;
    height: 30px;
  }
  25% {
    top: 0;
    left: 0;
    width: 60px;
    height: 30px;
  }
  37.5% {
    top: 0;
    left: 30px;
    width: 30px;
    height: 30px;
  }
  50% {
    top: 0;
    left: 30px;
    width: 30px;
    height: 30px;
  }
  62.5% {
    top: 0;
    left: 30px;
    width: 30px;
    height: 60px;
  }
  75% {
    top: 0;
    left: 30px;
    width: 30px;
    height: 60px;
  }
  87.5% {
    top: 30px;
    left: 30px;
    width: 30px;
    height: 30px;
  }
  100% {
    top: 30px;
    left: 30px;
    width: 30px;
    height: 30px;
  }
}

@keyframes a2 {
  0% {
    right: 0;
    bottom: 0;
    width: 30px;
    height: 30px;
  }
  12.5% {
    right: 0;
    bottom: 0;
    width: 30px;
    height: 30px;
  }
  25% {
    right: 0;
    bottom: 0;
    width: 60px;
    height: 30px;
  }
  37.5% {
    right: 0;
    bottom: 0;
    width: 60px;
    height: 30px;
  }
  50% {
    right: 30px;
    bottom: 0;
    width: 30px;
    height: 30px;
  }
  62.5% {
    right: 30px;
    bottom: 0;
    width: 30px;
    height: 30px;
  }
  75% {
    right: 30px;
    bottom: 0;
    width: 30px;
    height: 60px;
  }
  87.5% {
    right: 30px;
    bottom: 0;
    width: 30px;
    height: 60px;
  }
  100% {
    right: 30px;
    bottom: 30px;
    width: 30px;
    height: 30px;
  }
}

`

const Loader = props => {
    return (
        <Styled>
            <div class="box"></div>
            <div class="box"></div>
        </Styled>
    )
};

Loader.propTypes = {};

export default Loader;