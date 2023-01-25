import React from 'react';
import './card.css'

export const ContentCard = ({element}) => {
  return (
    <div className='card'>
        <img src={element.imageUrl} alt={element.title} width='300px' height='300px'/>
        <div className='content'>
          <h2 style={{paddingBottom: "5px"}}>{element.title}</h2>
          <p><b>Short by </b>{element.author} / {element.time} {element.date}.</p>
          <p style={{fontSize: '17px', fontWeight: '400', paddingTop: '10px'}}>{element.content}</p>
          <a href={element.readMoreUrl} target="_blank" style={{textDecoration: 'none', color: 'black', fontSize: '13px', fontWeight: 'bold', paddingTop: '10px', opacity: '0.7'}}>read more...</a>
        </div>
    </div>
  )
}
