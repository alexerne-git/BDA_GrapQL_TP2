import { useEffect, useReducer } from 'react';
import reducerAction from './redusers';
import initialStateJson from '../../initialState';

const useForceUpdate = () => useReducer((state) => !state, false)[1];

const createSharedState = (reducer, initialState) => {
  const subscribers = [];
  let state = initialState;
  const dispatch = (action) => {
    state = reducer(state, action);
    subscribers.forEach((callback) => callback());
  };
  const useSharedState = () => {
    const forceUpdate = useForceUpdate();
    useEffect(() => {
      const callback = () => forceUpdate();
      subscribers.push(callback);
      callback(); // in case it's already updated
      const cleanup = () => {
        const index = subscribers.indexOf(callback);
        subscribers.splice(index, 1);
      };
      return cleanup;
    }, [forceUpdate]);
    return [state, dispatch];
  };
  return useSharedState;
};

const redux = createSharedState(reducerAction, initialStateJson);
export default redux;
