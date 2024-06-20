import React, {useEffect} from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import {AppRootReducerType, useAppDispatch} from './store/Store';
import {incCounterAC} from './counterReducer';

function App() {

    const counter = useSelector<AppRootReducerType, number>(state => state.counter.startValue)
    const dispatch = useAppDispatch()

    useEffect(()=> {
    // dispatch(setValueFromLocalStorageTC())
    },[])

    //
    // const [value, setValue] = useState<number>(0);
    //
    // useEffect(() => {
    //
    //     let valueAsString = localStorage.getItem('counterKey')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setValue(newValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('counterKey', JSON.stringify(value))
    // }, [value])

    const incHandler = () => {
        dispatch(incCounterAC())
        // setValue( value + 1)

    };



    return (
        <div className="App">
            <h1>{counter}</h1>
            <button onClick={incHandler}>inc</button>

        </div>
    );
}

export default App;
