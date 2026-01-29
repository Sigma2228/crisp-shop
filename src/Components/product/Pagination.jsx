import { useState } from "react";
import ProductList from "./ProductList";
import data from "../../data/productsData.json"


function Pagination() {
   const [page, setPage] = useState(0);
  const perPage = 4;
  const productsToShow = data.data.slice(0, page * perPage);
const hasMore = productsToShow.length < data.data.length;
   return (
    <>
      <ProductList
        title="Products"
        products={productsToShow}
      />

      {hasMore ? (
        <button onClick={() => setPage(prev => prev + 1)}>
          Load more
        </button>
      ) : null}
       
      
    </>
  );
}
export default Pagination