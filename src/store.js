export const Store = {
  name: '배경훈',
  address: '서울시 강남구 선릉로 513 APEXTOWER 8층 06150',
  mobile: '010-5385-2384',
  position: 'R&D DEV',
  email: 'khb@marpple.com'
};

export const setData = (k, v) => {
  Store[k] = v;
  return v;
};

export const setObject = (obj) => {
  Object.assign(Store, obj);
  return obj;
};
