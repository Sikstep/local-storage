import {AnyAction, combineReducers, legacy_createStore as createStore} from 'redux';
import {counterReducer} from '../counterReducer';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';

const rootReducer = combineReducers({
    counter:counterReducer
})

export type AppRootReducerType = ReturnType<typeof rootReducer>
//@ts-ignore
export const store = createStore(rootReducer)

type AppDispatchType = ThunkDispatch<AppRootReducerType, unknown, AnyAction>
export const useAppDispatch = useDispatch<AppDispatchType>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootReducerType, unknown, AnyAction>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;