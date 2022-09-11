import { createStore , combineReducers} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import CounterReducer from "./reducers/counterReducer"
import TitleReducer from "./reducers/titleReducer"


const reducers=combineReducers({
   CounterReducer,
   TitleReducer
})

const store=createStore(
   reducers,
   composeWithDevTools()
   );

   export default store