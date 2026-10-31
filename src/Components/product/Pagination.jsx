import { useSelector, useDispatch } from "react-redux";
import ProductList from "./ProductList";
import data from "../../data/productsData.json";
import { loadMore } from "../../store/paginationSlice";

function Pagination() {
  const dispatch = useDispatch();

  const { page, perPage } = useSelector(
    state => state.pagination
  );

  const productsToShow = data.data.slice(0, page * perPage);
  const hasMore = productsToShow.length < data.data.length;

  return (
    <>
      <ProductList
        title="Products"
        products={productsToShow}
      />

      {hasMore && (
        <button onClick={() => dispatch(loadMore())}>
          Load more
        </button>
      )}
    </>
  );
}

export default Pagination;