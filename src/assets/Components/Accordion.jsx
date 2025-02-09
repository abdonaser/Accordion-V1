import ListItem from './ListItem';

function Accordion({ faqs }) {
  console.log(faqs);

  return (
    <div className="accordion">
      {faqs.map((list, index) => (
        <ListItem key={index} list={list} idNum={index} />
      ))}
    </div>
  );
}

export default Accordion;
