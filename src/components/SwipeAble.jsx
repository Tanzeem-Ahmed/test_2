import React from 'react';
import { SwipeBar } from './SwipeBar';
import './swipe.css';

export const SwipeAble = ({ setCategory }) => {
  return (
    <div className='navbar'>
        <div className='open'>
          <SwipeBar setCategory={setCategory}/>
        </div> 
        <h1>Inshorts</h1>
    </div>
  )
}
