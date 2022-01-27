import { Row } from 'antd';
import React from 'react';
import assets from '../../assets';
import AlgorithmDropDown from './AlgorithmDropDown';
import InputSizeSlider from './InputSizeSlider';
import RandomizeButton from './RandomizeButton';
import SpeedSlider from './SpeedSlider';
import StartButton from './StartButton';
import NightToggle from './NightToggle';
import "./HomeHeader.css";

const HomeHeader = ({
  algorithms,
  onAlgorithmChange,
  currentAlgorithm,
  onSpeedChange,
  onInputSizeChanged,
  onRandomize,
  
  onStart,
  isVisualizing,
}) => {
  const openUrl = (url) => {
    window.open(url, '_blank')?.focus();
  };
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className>
    <Row className="important"
      style={{
        background: '#fff',
        color: 'white',
        padding: '10px 0px 10px 0px',
        width: '100%',
        position: 'fixed',
  
    width: '100%',
    boxShadow: '0 .5rem 1.5rem rgba(0,0,0,.2)',
    display: 'flex',
    
   
    height: '10rem',
    
      }}
      align="middle"
      justify="space-around"
    >
      <div className="heading"
      width={125}
      height={50}
      style={{ cursor: 'pointer' }}
      onClick =
        {refreshPage}>
          <a href="index.html" class="logo">
      <i class="fab fa-sellsy" style = {{fontSize: '40px' }}></i>
       <span style = {{fontSize: '40px', marginLeft: '8px', fontWeight: 'bold'}} >Sorté.</span>
       </a>
          </div>  
      

      <AlgorithmDropDown
        currentAlgorithm={currentAlgorithm}
        algorithms={algorithms}
        onAlgorithmChange={(algo) => onAlgorithmChange(algo)}
      />
      <SpeedSlider
        onSpeedChange={onSpeedChange}
        isVisualizing={isVisualizing}
      />
      <InputSizeSlider
        onInputSizeChanged={onInputSizeChanged}
        isVisualizing={isVisualizing}
      />
      <RandomizeButton onClick={onRandomize} />
      <StartButton onClick={onStart} />
      <NightToggle/>
    </Row>
  
    </div>
  );
};
export default HomeHeader;
