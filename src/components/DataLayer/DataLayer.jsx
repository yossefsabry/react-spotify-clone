import { useContext, useReducer, createContext } from "react";

export const DataContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataContext.Provider>
);

export const useDataLayerValue = () => useContext(DataContext);

// -----------
// reducer.jsx

export const initialState = {

  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  discover_weekly: null,
  top_artists: null,
  spotify: null,
};

export const  reducerLayer = (state, action) => {
  console.log(action);  
  switch (action.type) {
    case "SET_USER":       
      return { ...state, user: action.user, };
    default:
      return state;
  }
};
