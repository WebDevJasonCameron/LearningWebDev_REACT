import { createContext } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({});

export const ProductsProvider = ({children}) => {
  return (
    <ProductsContext.Provider>{children}</ProductsContext.Provider>
  )
}