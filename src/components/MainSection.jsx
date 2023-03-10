import React from 'react'
import { ContentCard } from './ContentCard';
import './main.css';

export const MainSection = ({data}) => {
  return (
    <div className='main'>
    {
        data.map((element, idx) => (
            <ContentCard element={element} key={idx} />
        ))
    }
    </div>
  )
}
