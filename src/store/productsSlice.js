import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts, getProductById } from '../Components/API/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return await getAllProducts();
  }
);
export const fetchProductsById = createAsyncThunk(
  'products/fetchProductsById',
  async (id) => {
    return await getProductById(id);
  },
  {
    condition: (id, { getState }) => {
      const { productsById, detailsLoadingById } = getState().products;
      return !productsById[id] && !detailsLoadingById[id];
    },
  }
);


const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    productsById: {},
    detailsLoadingById: {},
    detailsErrorById: {},
    loading: false,
    error: null,
  },
  
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductsById.pending, (state, action) => {
        const id = action.meta.arg;
        state.detailsLoadingById[id] = true;
        delete state.detailsErrorById[id];
      })
      .addCase(fetchProductsById.fulfilled, (state, action) => {
        const id = action.meta.arg;
        state.detailsLoadingById[id] = false;
        state.productsById[id] = action.payload;
      })
      .addCase(fetchProductsById.rejected, (state, action) => {
        const id = action.meta.arg;
        state.detailsLoadingById[id] = false;
        state.detailsErrorById[id] = action.error.message;
      });
  },
});

export default productsSlice.reducer;