import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    // se usa para solucionar el problema de value (No deja cambiar el valor del texto).
    setInputValue(target.value);
    {
      // console.log(target.value);
      // setInputValue(event.target.value);
      // console.log(event.target.value);
    }
  };

  const onSubmit = (event) => {
    {
      // event.preventDefault se usa para que el navegador evite recargarse y se quede con los valores actuales.
    }
    event.preventDefault();
    if (inputValue.trim().length < 1) return;
    setInputValue(" ");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gid's"
        value={inputValue}
        onChange={onInputChange}
        // onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};

export default AddCategory;
