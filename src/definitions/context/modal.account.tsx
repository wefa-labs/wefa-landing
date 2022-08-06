import React, { useReducer, createContext } from "react";

export enum ModalAccountActions {
  TOGGLE = "TOGGLE",
  CLOSE = "CLOSE",
  OPEN = "OPEN",
}

type T_Action = {
  type: ModalAccountActions;
  payload?: boolean;
};

type T_State = {
  isOpen: boolean;
};

const initialState: T_State = {
  isOpen: false,
};

export const ModalAccountCtx = createContext<{
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
    case "OPEN":
      return {
        ...state,
        isOpen: true,
      };
    case "CLOSE":
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
    // throw new Error();
  }
}

export const ModalAccountProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ModalAccountCtx.Provider value={{ state, dispatch }}>
      {children}
    </ModalAccountCtx.Provider>
  );
};
