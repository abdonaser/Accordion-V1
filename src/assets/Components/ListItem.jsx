import { useState } from 'react';

function ListItem({ list, idNum, currentNum, onClick }) {
  const [index, setIndex] = useState();
  const handleIsOpen = () => {
    // onClick((prev) => (prev === idNum ? null : idNum));
    onClick(currentNum === idNum ? null : idNum);

    // console.log('index >', index, 'idnum > ', idNum, ' isOpen -> ', isOpen);
    // if (index === idNum) {
    //   setIndex('');
    //   handelOpen('');
    // } else {
    //   handelOpen(idNum);
    //   setIndex(idNum);
    // }
  };
  return (
    <div
      className={`item ${currentNum == idNum && 'open'}`}
      onClick={handleIsOpen}>
      <div className="number">{idNum < 9 ? `0${idNum + 1}` : idNum + 1}</div>
      <div className="title">{list.title}</div>
      <p className="i">{currentNum == idNum ? '-' : '+'}</p>
      {currentNum == idNum && <div className="content-box">{list.text}</div>}
    </div>
  );
}

export default ListItem;
