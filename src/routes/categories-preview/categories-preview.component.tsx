import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context.tsx";
import "./categories-preview.styles.scss";

import CategoryPreview from "../../components/category-preview/category-preview.component.tsx";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const items = categoriesMap[title];
        return <CategoryPreview key={title} title={title} items={items} />;
      })}
    </>
  );
};

export default CategoriesPreview;
