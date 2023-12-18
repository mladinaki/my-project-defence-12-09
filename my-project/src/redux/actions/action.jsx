export const ADD = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const DLT = (_id) => {
  return {
    type: "RMV_CART",
    payload: _id,
  };
};

export const REMOVE = (iteam) => {
  return {
    type: "RMW_ONE",
    payload: iteam,
  };
};

export const EDT = (_id) => {
  return {
    type: "EDIT_CART",
    payload: _id,
  };
};

export const UPD = (item) => {
  return {
    type: "UPDATE_CART",
    payload: item,
  };
};
