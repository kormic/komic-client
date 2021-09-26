import { createContext, ReactNode, useContext, useState } from "react";

import { CategoryDTO } from "dto/CategoryDTO";

const CategoriesContext = createContext<{
  categories: CategoryDTO[];
}>({ categories: [] });

const CategoriesProvider = ({
  children,
  initialCategories = [],
}: {
  children: ReactNode;
  initialCategories: CategoryDTO[];
}) => {
  const [categories, setCategories] =
    useState<CategoryDTO[]>(initialCategories);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

const useCategories = () => {
  const context = useContext(CategoriesContext);

  if (context === undefined) {
    throw new Error("useCategories must be within a CategoriesProvider");
  }

  return context;
};

export { CategoriesProvider, useCategories };
