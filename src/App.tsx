import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Comps/navbar/Navbar";
import DropDown from "./Comps/select/DropDown";

// interface Item {
//   Icon: string;
//   title: string;
// }

// const data: Item[] = [
//   { Icon: "fvd", title: "dfv" },
//   { Icon: "f", title: "  " },
//   { Icon: "", title: "" },
// ];

// const ListElement = ({ item }: { item: Item }) => {
//   const {Icon,title} =item
//   return <>{title}{Icon}</>;
// };

// on(item){
//   api(item.id)
// }

function App() {
  return (
    <>
      {/* <DropDown data={data} ListElement={ListElement} /> */}
      <Navbar />
    </>
  );
}

export default App;
