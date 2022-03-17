import React from 'react';
import MainContent from './MainContent';
import data from '../Data';

export default function ContentContainer() {
  let content = data.map((item, index) => {
    return (
      <MainContent
        key={index}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    );
  });
  return <div className='main-wrapper'>{content}</div>;
}
