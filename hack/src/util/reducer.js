export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_HITS":
      return {
        ...state,
        loading: false,
        hits: action.payload.hits,
        nbpages: action.payload.nbPages,
      };
    case "HANDLE_SEARCH":
      return {
        ...state,
        query: action.payload,
      };
    // case "PAGE_UP":
    //   return {
    //     ...state,
    //     page: state.page + 1,
    //   };
    // case "PAGE_MIN":
    //   return {
    //     ...state,
    //     page: 0,
    //   };
    // case "PAGE_DOWN": {
    //   return {
    //     ...state,
    //     page: state.page - 1,
    //   };
    // }
    // case "PAGE_MAX":
    //   return {
    //     ...state,
    //     page: state.nbPages - 1,
    //   };
    case "HANNDLE_PAGE":
      if(action.payload === 'inc'){
        let newPage = state.page + 1;
        if(newPage + 1 > state.nbPages){
          newPage = 0
        }
        return {...state, page: newPage}
      } else if (action.payload === 'dec'){
        let newPage = state.page - 1;
        if(newPage < 0){
          newPage = state.nbPages - 1;
        }
        return {...state, page: newPage}
      }
    case "SET_PAGE":
      let newPage = action.payload;
      if(newPage >= state.nbPages){
        newPage = state.nbPages - 1
      }
      return{
        ...state,
        page: newPage
      }
    case "REMOVE_HIT":
      return {
        ...state,
        hits: state.hits.filter((hit) => hit.objectID !== action.payload),
      };
    default:
      throw new Error(`No Matching ${action.type} action type`);
  }
};
