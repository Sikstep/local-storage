import {AppThunk} from './store/Store';

const initialState: StateType = {
    startValue: 0
}

export type StateType = {
    startValue: number
}
type ActionTypes =
    ReturnType<typeof incCounterAC> |
    ReturnType<typeof setValueFromLocalStorageAC>
export const counterReducer = (state: StateType = initialState, action:ActionTypes):StateType => {
    switch (action.type) {
        case 'INCREMENT-COUNTER':
            return {...state, startValue: ++state.startValue}
        case 'SET-VALUE-FROM-LOCAL-STORAGE':
            return {...state, startValue: action.value}
        default:
            return  state
    }
}

export const incCounterAC = () => ({type: 'INCREMENT-COUNTER'} as const)
export const setValueFromLocalStorageAC = (value: number) => ({type: 'SET-VALUE-FROM-LOCAL-STORAGE', value} as const)

//THUNK
// export const incValuesTC = ():AppThunk => async (dispatch, getState) => {
//     const value = getState().counter.startValue
//    localStorage.setItem('counterValue', JSON.stringify(value + 1))
//     dispatch(incCounterAC())
// }
//
// export const setValueFromLocalStorageTC = ():AppThunk => async (dispatch) => {
//
//     let valueAsString = localStorage.getItem('counterValue')
//         if (valueAsString) {
//             let newValue = JSON.parse(valueAsString)
//             console.log(newValue)
//             dispatch(setValueFromLocalStorageAC(newValue))
//         }
// }