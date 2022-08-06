import React, { useReducer, createContext } from "react";

export enum MobileMenuActions {
  TOGGLE = "TOGGLE",
  CLOSE = "CLOSE",
}

type T_Action = {
  type: MobileMenuActions;
  payload?: boolean;
};

type T_State = {
  isOpen: boolean;
};

const initialState: T_State = {
  isOpen: false,
};

export const MobileMenuCtx = createContext<{
  state: T_State;
  // dispatch: React.Dispatch<any>;
  dispatch: React.Dispatch<T_Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

function reducer(state: T_State, action: T_Action): T_State {
  // const { type, payload } = action;
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case "CLOSE":
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
}

export const MobileMenuProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MobileMenuCtx.Provider value={{ state, dispatch }}>
      {children}
    </MobileMenuCtx.Provider>
  );
};
