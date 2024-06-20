import {AppRootReducerType} from '../store/Store';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('appState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (appState: AppRootReducerType) => {
    try {
        const serializedState = JSON.stringify(appState);
        localStorage.setItem('appState', serializedState);
    } catch {
        // ignore write errors
    }
};

