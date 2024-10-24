import { createContext, useContext, useReducer } from "react";

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, fname: action.payload.fname };
    default:
      return state;
  }
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return { ...state, productname: action.payload.name };
    default:
      return state;
  }
};

const rootReducer = (state, action) => {
  return {
    user: userReducer(state.user, action),
    product: productReducer(state.product, action),
  };
};

const StoreContext = createContext();

const initialState = {
  user: null,
  product: null,
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const MainComp = () => {
  return (
    <StoreProvider>
      <Component1 />
    </StoreProvider>
  );
};

const Component1 = () => {
  const store = useContext(StoreContext);

  const { state, dispatch } = store;

  return (
    <div>
      <p>{state.user?.fname}</p>
      <button
        onClick={() =>
          dispatch({ type: "SET_USER", payload: { fname: "hello" } })
        }
      >
        Click Me!
      </button>
    </div>
  );
};
