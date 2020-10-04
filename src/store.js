export const Store = {};

export const setData = (k, v) => {
  Store[k] = v;
  return v;
};

export const setObject = (obj) => {
  Object.assign(Store, obj);
  return obj;
};
