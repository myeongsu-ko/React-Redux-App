// 액션

const INCREMENT = "INCREMENT";
const DECREASE = "DECREASE";

//function increase(size){}
export const increase = (size) => {
  //밑에다 바로 안써도 바로 export 할 수 있음.
  return { type: INCREMENT, size: size };
};

export const decrease = (size) => {
  //밑에다 바로 안써도 바로 export 할 수 있음.
  return { type: DECREASE, size: size };
};

//2. 초기값 만들기
const initstate = {
  number: 0,
};

//3. 리듀셔 만들기 // state, action
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + action.size };
    case DECREASE:
      return { number: state.number - action.size };
    default:
      return state;
  }
};

export default reducer;
