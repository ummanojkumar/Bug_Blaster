import logo from './logo.svg';
import './App.css';
import './styles.css'
import { useReducer } from 'react';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/ticketReducer';

function App() {

  const intialState = {tickets : []}

  const[state, dispatch] = useReducer(ticketReducer, intialState);

  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch}></TicketForm>
        {
          console.log({state})
          
        }

      </div>
    </div>
  );
}

export default App;
