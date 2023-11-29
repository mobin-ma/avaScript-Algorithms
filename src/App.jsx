import React, { useState } from 'react';
import Practice1 from './components/Practice1';
import Practice2 from './components/Practice2';
import Practice3 from './components/Practice3';
import Practice4 from './components/Practice4';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 4; // تعداد کل اسلایدها

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <div className="wrrap">
      <h1 className="title">JavaScript Data Structures and Algorithms</h1>
      <div className='toggle'>
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
      <div className="container">
        {currentIndex === 0 && <Practice1 />}
        {currentIndex === 1 && <Practice2 />}
        {currentIndex === 2 && <Practice3 />}
        {currentIndex === 3 && <Practice4 />}
      </div>
    </div>
  );
};

export default App;
