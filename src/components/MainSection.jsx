import React from 'react'
import { ContentCard } from './ContentCard';
import './main.css';

export const MainSection = ({loading, setLoading, data}) => {
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
