import React, {createContext, useReducer} from 'react';
import * as types from './types';

type Props = {
  children?: React.ReactNode;
}


type State = {
  active: boolean;
  activated: boolean;
  activeTarget: string;
  activeTargetHeight: number;
}

type Actions =
 | { type: 'TOGGLE_ACTIVE', active: boolean }
 | { type: 'TOGGLE_ACTIVATE', activated: boolean }
 | { type: 'SET_ACTIVE_TARGET', activeTarget: string }
 | { type: 'SET_STICKY_SCROLL_HEIGHT', activeTargetHeight: number };

const initialState = {
  active: false,
  activated: false,
  activeTarget: '',
  activeTargetHeight: 0
}

const store: any = createContext(initialState);
const {Provider} = store;

const StateProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer((state: State, action: Actions) => {
    switch (action.type) {
      case types.TOGGLE_ACTIVE: {
        const newState = {...state, active: action.active}
        return newState;
      }
      case types.TOGGLE_ACTIVATE: {
        const newState = {...state, activated: action.activated}
        return newState;
      }
      case types.SET_ACTIVE_TARGET: {
        const newState = {...state, activeTarget: action.activeTarget}
        return newState;
      }
      case types.SET_STICKY_SCROLL_HEIGHT: {
        const newState = {...state, activeTargetHeight: action.activeTargetHeight}
        return newState;
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export {store, StateProvider};
