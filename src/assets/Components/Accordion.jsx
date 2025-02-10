import ListItem from './ListItem';
import { useState } from 'react';

function Accordion({ faqs }) {
  const [currentNum, setCurrentNum] = useState(0);

  return (
    <div className="accordion">
      {faqs.map((list, index) => (
        <ListItem
          key={index}
          list={list}
          idNum={index}
          currentNum={currentNum}
          onClick={setCurrentNum}
        />
      ))}
    </div>
  );
}

export default Accordion;
