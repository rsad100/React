import actionStrings from "../actions/actionStrings";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  err: null,
};

const profileReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionStrings.patchProfile + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.patchProfile + actionStrings.rejected:
      const errorResponse = action.payload;
      const errorMessage = errorResponse.data.msg;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        err: errorMessage,
      };
    case actionStrings.patchProfile + actionStrings.fulfilled:
      const response = action.payload;
      const result = response.data.result;
      return {
        ...prevState,
        isLoading: false,
        data: result,
      };
    default:
      return prevState;
  }
};

export default profileReducer;
