import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {counterReducer} from '../counterReducer';
import {thunk, ThunkAction, ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';
import {loadState, saveState} from '../utils/localstorage-utils';

export type AppRootReducerType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootReducerType, unknown, AnyAction>
export type AppDispatchType = ThunkDispatch<AppRootReducerType, unknown, AnyAction>

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer,loadState(),applyMiddleware(thunk))

export const useAppDispatch = useDispatch<AppDispatchType>;

store.subscribe(() => {
        saveState({
            counter: store.getState().counter
        })
})

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;