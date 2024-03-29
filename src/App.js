import React from 'react';
import Accordion from './components/Accordion';
import accordionData from './components/accordionData'
import './style.css';

const App = () => {

  return (
    <div>
      <h1> React Accordion Menu</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => 
          <Accordion title={title} content={content} />
        
        )}
      </div>
    </div>
  );
}


export default App;
