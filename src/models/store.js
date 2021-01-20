import { initialState as gameInitialState } from "./game/reducer";
import { initialState as logInitialState } from "./log/reducer";

import rootReducer from "./rootReducer";
import { createStore, compose } from "redux";

const enhancers = [];

const { __REDUX_DEVTOOLS_EXTENSION__: devToolsExtension } = global;

if (devToolsExtension && typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const store = createStore(
  rootReducer,
  { game: gameInitialState, log: logInitialState },
  compose(...enhancers)
);

export default store;
