import React, {createContext, useReducer} from 'react';
import * as types from './types';

type Props = {
  children?: React.ReactNode;
}

const initialState = {
  active: false,
  activated: false,
  activeTarget: '',
}

const store: any = createContext(initialState);
const {Provider} = store;

type State = {
  active: boolean;
  activated: boolean;
  activeTarget: string;
}

type Actions =
 | { type: 'TOGGLE_ACTIVE', active: boolean }
 | { type: 'TOGGLE_ACTIVATE', activated: boolean }
 | { type: 'SET_ACTIVE_TARGET', activeTarget: string };

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
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export {store, StateProvider};
