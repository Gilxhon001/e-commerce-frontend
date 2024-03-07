import CategoryItem from "../category-item/category-item.component.tsx";
import "./directory.styles.scss";
import { Category } from "../../types/interfaces.ts";
import React from "react";

interface DirectoryProps {
  categories: Category[];
}

const Directory: React.FC<DirectoryProps> = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category: Category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
