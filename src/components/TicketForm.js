import React, {useState} from "react";

export default function TicketForm({dispatch}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');

    const priorityLables = {
        1: 'Low',
        2: "Medium",
        3: "High"
    }

    const clearForm = () => {
            setTitle('');
            setDescription('');
            setPriority('1')
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //stop reloading afterSubmit
        
        const ticketData = {
            id : new Date().toISOString(),
            title,
            description,
            priority,
        };

        dispatch({
            type : 'ADD_TICKET',
            payload : ticketData
        })


        clearForm();
    }
    return (
        <form onSubmit={handleSubmit} className="ticket-form">
            <div>
                <label>Title</label>
                <input type="text" value={title} className="form-input" onChange={ e => setTitle(e.target.value)}></input>
            </div>
            <div>
                <label>Description</label>
                <textarea type="text" value={description} className="form-input" onChange={ e => setDescription(e.target.value)}></textarea>
            </div>
            <fieldset className="priority-fieldset">
                <legend>priority</legend>
                {
                    Object.entries(priorityLables).map(([value, lable]) => (
                    <label key={value} className="priority-label">
                        <input type="radio" value={value} checked= {priority === value} className="priority-input" onChange={e => setPriority(e.target.value)}></input>
                        {lable}
                    </label>
                    ))
                }
            </fieldset>

            <button type="submit" className="button">submit</button>

        </form>
    )
}