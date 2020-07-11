import React from 'react';
import styled from 'styled-components';
import { Contained, Fully } from '../../components/Formatters';

// [] implement slider?
// const sliderSettings = {
//     // dots: true,
//     // lazyLoad: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 1
//   };

const SliderCss = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  `
const Slider = ({ children }) => {
  return (<SliderCss>
    {children}
  </SliderCss>)
}

const SectionSlider = props => {
  return (
    <section id="slider">
      <Fully style={{ backgroundColor: '#eee' }}>
        <Contained>
          <Slider >
            <div><img src="/images/slide-1.png" alt="Docker developer" /></div>
            <div><img src="/images/slide-2.png" alt="Node" /></div>
            <div><img src="/images/slide-3.png" alt="HTML, JavaScript, & CSS" /></div>
            <div><img src="/images/slide-4.png" alt="Mongo master" /></div>
            <div><img src="/images/slide-5.png" alt="WordPress wiz" /></div>
            <div><img src="/images/slide-6.png" alt="NPM" /></div>
            <div><img src="/images/slide-7.png" alt="Git" /></div>
            <div><img src="/images/slide-8.png" alt="React" /></div>
          </Slider>
        </Contained>
      </Fully>
    </section>
  )
};

export default SectionSlider;