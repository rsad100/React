import actionStrings from "../actions/actionStrings";

const initialState = {
  data: [],
  next: undefined,
  previous: undefined,
  isLoading: false,
  isError: false,
  err: null,
};

const productReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionStrings.getProducts + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.getProducts + actionStrings.rejected:
      const errorResponse = action.payload;
      const errorMessage = errorResponse.data.msg;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        err: errorMessage,
      };
    case actionStrings.getProducts + actionStrings.fulfilled:
      const response = action.payload;
      const result = response.data.result;
      const prev = response.data.previous;
      const next = response.data.next;
      return {
        ...prevState,
        isLoading: false,
        data: result,
        next: next,
        previous: prev,
      };
    default:
      return prevState;
  }
};

export default productReducer;
