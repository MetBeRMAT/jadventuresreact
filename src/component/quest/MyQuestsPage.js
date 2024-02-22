import { useAtom } from "jotai";
import { valoreGlobale } from "../../App";
import { Link } from "react-router-dom";


export default function MyQuestsPage ()
{

    const [v,setV] = useAtom(valoreGlobale);

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
    function Card({ title, text }) 
    {
        return (
        <div className="col">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <svg class="bi" aria-hidden="true"/>
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
        <div className="row row-cols-1 row-cols-md-2 g-5" style={{marginLeft:"-11%", marginTop:"0%"}}>
            <Card title="Quest 1" text="This is a longer card with supporting text below as a natural lead-in to additional content" />
            <Card title="Quest 2" text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
            <Card title="Quest 3" text="This is a longer card with supporting text below as a natural lead-in to additional content." />
            <Card title="Quest 4" text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
            <Card title="Quest 5" text="This is a longer card with supporting text below as a natural lead-in to additional content." />
            <Card title="Quest 6" text="This is a longer card with supporting text below as a natural lead-in to additional content." />
        </div>
        );
    }

    return(
        <>
            {/* <h1 className="text-center m-5">SONO HOMEPAGE </h1>
            <h1 className="text-center m-5">{v} </h1> */}

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