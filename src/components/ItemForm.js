import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ onItemFormSubmit }) {

  const [inputName, setInputName] = useState("");
  const [inputCategory, setInputCategory] = useState("Produce");


  function handleInputName(event) {
    setInputName(event.target.value)
  }
  
  function handleInputCategory(event) {
    setInputCategory(event.target.value)
  }



  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
     name: inputName,
     category: inputCategory,
    }
    );
    setInputName("")
  }
  
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={inputName} onChange={handleInputName} />
      </label>

      <label>
        Category:
        <select name="category" value = {inputCategory} onChange={handleInputCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
