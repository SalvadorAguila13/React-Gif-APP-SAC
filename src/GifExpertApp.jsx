import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Sasuke"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // Metodo spread operator para agregar elementos al useState
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>UniversGifs</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
