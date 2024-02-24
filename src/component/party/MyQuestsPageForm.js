import { useAtom } from "jotai";
import { Link } from "react-router-dom";


export default function MyQuestsPageForm(props)
{

  

    // Componente per il modulo di filtro
    function NewQuestForm() 
    {
        return (
            <div className="card text-center mb-3" style={{width:"17rem", marginLeft:"2%", marginTop:"5%"}}>
                <form className="row g-3">
                    <div className="col-12"> 
                        <label for="quest" className="form-label">New Quest Form</label>
                    </div>
                    <div className="col-12">
                        <input type="date" className="form-control" id="inputDateCreated" placeholder="Date created"/>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputStatus" placeholder="Status"/>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputRank" placeholder="Rank"/>
                    </div>
                    <div className="col-12">
                        <input type="number" className="form-control" id="inputReward" placeholder="Reward"/>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputArea" placeholder="Area"/>
                    </div>
                    <div className="col-12">
                        <input type="date" className="form-control" id="inputDateCompleted" placeholder="Date completed"/>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputMapUrl" placeholder="Map url"/>
                    </div>
                    <div className="col-12">
                        <textarea type="text" className="form-control" id="inputDescription" rows="3" placeholder="Description"/>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputType" placeholder="Type"/>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputPatron" placeholder="Patron"/>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>                    
                </form>
            </div>
        );
    }

    // Componente Card per rappresentare una singola carta
    function Card({ title, text , rank, area, reward, status}) 
    {
        return (
        <div className="col ">
            <div className="card text-bg-success">
            <div className="card-body">
                <h5 className="card-title fw-bold ">Quest {title} - {rank}</h5>
                <p className="card-text">{text}</p>
                <p className="card-text">Dove? {area}</p>
                <p className="card-text text-warning">{reward} Gold</p>
                <p className="card-text">Status: {status}</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary" type="button"><Link class="nav-link" to="/QuestDetail">Details</Link></button>
                </div>
            </div>
            </div>
        </div>
        );
    }
    
    // Componente Grid per rappresentare la griglia di carte
    function CardGrid() 
    {
        return (
        <div className="row row-cols-1 row-cols-md-3 p-1" style={{marginLeft:"0%", marginTop:"2%"}}>
            <Card title={props.id} text={props.description} rank={props.rank} status={props.status} area={props.area} reward={props.reward}/>
        </div>
        );
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <NewQuestForm/>
                    </div>
                    <div className="col-md-8">
                        <CardGrid/>
                    </div>
                </div>
            </div>

        </>
    );
}