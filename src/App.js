import './App.css';
import Counter from "./Counter";
import {createStore} from "redux";
import {Provider} from "react-redux";

// "Room", 2 lightSwitches, 1 light
const initialState = {
    light: false,
    switchA: false,
    switchB: false
};

// action? switchA on/off, switchB on/off
function lightSwitchReducer(state = initialState, action) {
    switch(action.type) {
        case "A_ON":
            return {
                switchA: true,
                switchB: state.switchB,
                light: true
            }
        case "A_OFF":
            return {
                switchA: false,
                switchB: state.switchB,
                light: state.switchB
            }
        case "B_ON":
            return {
                switchB: true,
                switchA: state.switchA,
                light: true
            }
        case "B_OFF":
            return {
                switchB: false,
                switchA: state.switchA,
                light: state.switchA
            }
        default:
            return state;
    }
}

const store = createStore(lightSwitchReducer);
console.log('initial', store.getState());
store.dispatch({ type: 'A_ON' });
console.log(store.getState());
store.dispatch({ type: 'B_ON' });
console.log(store.getState());
store.dispatch({ type: 'A_OFF' });
console.log(store.getState());
store.dispatch({ type: 'B_OFF' });
console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      App
    </Provider>
  );
}

export default App;
