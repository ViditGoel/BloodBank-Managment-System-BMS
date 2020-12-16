import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/blood.mp4' autoPlay loop muted />
      <h1>DONATE BLOOD</h1>
      <p>Every bit counts, What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Save Lives <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;