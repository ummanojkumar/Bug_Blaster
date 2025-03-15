import logo from './logo.svg';
import './App.css';
import './styles.css'
import { useReducer } from 'react';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/ticketReducer';
import TicketList from './components/TicketList';
import { sortTickets } from './utilites/sortingUtilites';

function App() {

  const intialState = {tickets : [], editingTicket: null, sortPreference : "High to Low"}

  const[state, dispatch] = useReducer(ticketReducer, intialState);

  const sortedTickets = sortTickets(state.tickets, state.sortPreference);

  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} editingTicket= {state.editingTicket}></TicketForm>
        {/* {
          console.log({state})
          
        } */}

        <select onChange={e => dispatch({type: 'SET_SORTING', payload: e.target.value})}>
          <option value="High to Low">High to Low</option>
          <option value="Low to High">Low to High</option>
        </select>

        {state.tickets.length >0 && (
          <div className='results'> 
            <h2> All Tickets </h2>
            <TicketList tickets={sortedTickets} dispatch={dispatch}></TicketList>
            </div>)
          
        }
       
       

      </div>
    </div>
  );
}

export default App;
