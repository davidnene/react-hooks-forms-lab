import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchName, setSearchName] = useState("");
  
  
function handleSearchChange(event) {
  setSearchName(event.target.value)
}


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplaySearch = items.filter((item) => 
    item.name.toLowerCase().includes(searchName.toLowerCase())
  )
  .filter((item) => selectedCategory === "All" || item.category === selectedCategory);

 
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange = {handleSearchChange} search = {searchName} />
      <ul className="Items">
        {
         itemsToDisplaySearch.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />))
          }
      </ul>
    </div>
  );
}

export default ShoppingList;
