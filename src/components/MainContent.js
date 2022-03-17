import React from 'react';

export default function MainContent(props) {
  return (
    <div className='content-main'>
      <div className='content-wrapper'>
        <div className='content-image'>
          <img src={props.imageUrl} alt='' />
        </div>
        <div className='content-info'>
          <div className='info-header'>
            <p>
              <i class='bx bx-map bx-tada-hover'></i> {props.location}
            </p>
            <a href={props.googleMapsUrl} target='_blank' rel='noreferrer'>
              View on Google Maps
            </a>
          </div>
          <div className='info-body'>
            <h1>{props.title}</h1>
            <span className='content-date'>
              {props.startDate} - {props.endDate}
            </span>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
