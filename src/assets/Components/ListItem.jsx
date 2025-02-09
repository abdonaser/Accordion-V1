import { useState } from 'react';

function ListItem({ list, idNum }) {
  const [isOpen, setisOpen] = useState(false);
  const handleIsOpen = () => {
    setisOpen((isOpen) => !isOpen);
  };
  return (
    <div className={`item ${isOpen && 'open'}`} onClick={handleIsOpen}>
      <div className="number">{idNum < 9 ? `0${idNum + 1}` : idNum + 1}</div>
      <div className="title">{list.title}</div>
      <p className="i">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{list.text}</div>}
    </div>
  );
}

export default ListItem;
