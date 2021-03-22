const INIT_STATE = {
  loading: false,
  oneIdInfo: {},
  manyIdsInfo: {}
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_ONE_INFO_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "GET_ONE_INFO_SUCCESS":
      return {
        ...state,
        oneIdInfo: action.payload.data,
        loading: false
      };
    case "GET_ONE_INFO_ERROR":
      return {
        ...state,
        loading: false,
      };
    case "CLEAR_MANY_IDS_INFO":
      return {
        ...state,
        manyIdsInfo: {},
      };
    case "GET_MANY_INFO_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "GET_MANY_INFO_SUCCESS":
      return {
        ...state,
        manyIdsInfo: action.payload.data,
        loading: false
      };
    case "GET_MANY_INFO_ERROR":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};