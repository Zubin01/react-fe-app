import './App.css';
import {Welcome} from './components/WelcomeComponent'
import {ClockComponent} from './components/Clock'

// const Welcome = (props) => (
//     <div><h1>Hello, {props.name}</h1></div>
// );

function App() {
    return (
        <div className="App">
            <div className="container">Parent</div>
            {/*<Welcome name="Sara"/>*/}
            {/*<Welcome name="Cahal"/>*/}
            {/*<Welcome name="Edite"/>*/}
            <ClockComponent />
        </div>
    );
}

export default App;
