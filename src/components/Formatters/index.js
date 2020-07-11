import React from 'react';
import styled from 'styled-components';

export const Row = styled.div`
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
export const Col = ({ children, span, style }) => (<div
    className="col-man"
    style={{ flex: `${span} 0`, ...style }}>{children}
</div>);

export const Filler = styled.div`
box-sizing: border-box;
background-image: url(${({ backgroundImage }) => backgroundImage});
background-size: cover;
// position: relative;
margin: 0;
padding: 0;
height: 100%;
`

export const Vcenter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

export const Fully = styled.div`
// width: 100vw;
padding: 30px 0px;
`

export const Contained = styled.div`
padding: 10px;
max-width: 1000px;
position: relative;
margin: 0 auto;
`