export const addFile = file => ({
  type: "ADD_FILE",
  file
});

export const discardFile = file => ({
  type: "REMOVE_FILE",
  file
});
