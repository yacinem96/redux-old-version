
import { connect } from "react-redux"
import {Counter} from "./components/counter"
import {Title} from "./components/input"
import './App.css';
import { decrementCounter, incrementCounter ,changeTitle} from "./redux/actions/actions-creators";

function App(props) {

  return (
    <div className="App  ">
     
    <Counter counter={props.counter} increments={props.increments} decrements={props.decrements} />
    <p>--------------------------------------------------------------------------</p>
    <Title title={props.title}  titlef={props.titlef} />
    </div>
  );
}

const mapStateToProps=(state)=>{
  return {
    counter: state.CounterReducer.counter,
    title: state.TitleReducer.title
   
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increments: () => dispatch(incrementCounter()),
    decrements: () => dispatch(decrementCounter()),
    titlef: (e) => dispatch(changeTitle(e)),
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(App);
