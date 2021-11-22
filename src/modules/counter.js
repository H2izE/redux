
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
//액션 타입 정의

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
//액션 생성함수 정의

const initialState = {
    number: 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}
// 리듀서 함수 정의

export default counter;
