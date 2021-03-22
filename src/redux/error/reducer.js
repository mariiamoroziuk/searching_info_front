const INIT_STATE = {
  message: '',
  openSnackbar: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SHOW_ERROR":
      return {
        message: action.payload,
        openSnackbar: true,
      };
    case "HIDE_ERROR":
      return {
        message: '',
        openSnackbar: false
      };
    default:
      return state;
  }
};