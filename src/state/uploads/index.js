const uploads = (
  state = {
    files: []
  },
  action
) => {
  switch (action.type) {
    case "ADD_FILE":
      return {
        ...state,
        files: [...state.files, ...action.file]
      };
    case "REMOVE_FILE":
      return {
        ...state,
        files: state.files.filter(file => {
          return file !== action.file;
        })
      };
    default:
      return state;
  }
};

export default uploads;
