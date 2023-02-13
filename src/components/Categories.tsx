import React from 'react';

type CategoriesProps = {
  onChangeCategory: (i: number) => void;
  value: number;
}

const categories = ['Все', 'Adidas', 'Nike', 'Puma', 'New Balance', 'Asics'];

const Categories: React.FC<CategoriesProps> = React.memo(({ onChangeCategory, value }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
});
export default Categories;
