// import { MouseEvent } from "react";
import { useState } from "react";

// {items: [], heading: string }
//  interface ListGroupProps
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  // onSelectItem is just like the onClick prop
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let items = [
  //   'New York',
  //   'San Francisco',
  //   'Tokyo',
  //   'London',
  //   'Paris'
  // ];
  // items = [];
  //let selectedIndex = -1; //No item selected
  //let selectedIndex = 0; //The first item should be selected
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0] // variable (selectedIndex)
  //arr[1] // updater function

  //Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          // <li className="list-group-item" key={item}
          // onClick={() => console.log("Clicked")}>
          // <li className="list-group-item" key={item}
          // onClick={() => console.log(item, index)}>
          // <li className="list-group-item" key={item}
          // onClick={(event) => console.log(event)}>
          // <li className="list-group-item active" key={item}
          // onClick={handleClick}>
          // <li className={ selectedIndex === index
          //   ? 'list-group-item active'
          //   : 'list-group-item'} key={item}
          // onClick={handleClick}>
          //  <li className={ selectedIndex === index
          //   ? 'list-group-item active'
          //   : 'list-group-item'} key={item}
          // onClick={() => {selectedIndex = index;}}>
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
