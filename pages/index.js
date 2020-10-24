import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { Reducers } from "../REDUX/Combine/Combine";
import Main from "../COMPONENTS/INTERFACE/Main";

const store = createStore(Reducers, applyMiddleware(thunk));

function Home() {
  return (
    <Provider store={store}>
       <Main/>
    </Provider>
  );
}

export default Home;
