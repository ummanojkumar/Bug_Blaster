import logo from './logo.svg';
import './App.css';
import './styles.css'
import { useReducer } from 'react';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/ticketReducer';
import TicketList from './components/TicketList';

function App() {

  const intialState = {tickets : [], editingTicket: null}

  const[state, dispatch] = useReducer(ticketReducer, intialState);

  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} editingTicket= {state.editingTicket}></TicketForm>
        {
          console.log({state})
          
        }

        {state.tickets.length >0 && (
          <div className='results'> 
            <h2> All Tickets </h2>
            <TicketList tickets={state.tickets} dispatch={dispatch}></TicketList>
            </div>)
          
        }
       
       

      </div>
    </div>
  );
}

export default App;
