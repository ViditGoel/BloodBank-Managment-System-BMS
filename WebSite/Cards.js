import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the Importance of Blood Donation!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the happiness by saving someones life'
              label='Happiness'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Blood donation can help save millions of lives on a daily basis'
              label='Helping'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Donors are selected after performing various tests on the blood'
              label='Safety'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Image depicting the Red BLood Cells of the human body'
              label='Curiousity'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Blood donation gives you a chance to save someones life'
              label='Importance'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
