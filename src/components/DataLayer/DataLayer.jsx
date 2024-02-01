import { useContext, useReducer, createContext } from "react";

export const DataContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataContext.Provider>
);

export const useDataLayerValue = () => useContext(DataContext);

// ----------------------------------------------------------
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
  // console.log(action);  
  switch (action.type) {
    case "SET_USER":       
      return { ...state, user: action.user, };

    case "SET_TOKEN":
      return { ...state, token: action.token, };

    case "SET_SPOTIFY":
      return { ...state, spotify: action.spotify, };

    case "SET_PLAYLISTS":
      return { ...state, playlists: action.playlists, };

    case "SET_DISCOVER_WEEKLY":
      return { ...state, discover_weekly: action.discover_weekly, };

    default:
      return state;
  }
};
