import { useAtom } from "jotai";
import { Link } from "react-router-dom";


export default function HomepagePost ()
{

   

    // Componente per il modulo di filtro
    function Quest2() 
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
    function Card({ title }) 
    {
        return (
        <div className="col">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <li className="list-group-item">Date created</li>
                <li className="list-group-item">Status</li>
                <li className="list-group-item">Rank</li>
                <li className="list-group-item">Reward</li>
                <li className="list-group-item">Area</li>
                <li className="list-group-item">Date completed</li>
                <li className="list-group-item">Map url</li>
                <li className="list-group-item">Description</li>
                <li className="list-group-item">Type</li>
                <li className="list-group-item">Patron</li>                
            </div>
            </div>
        </div>
        );
    }

    function CardReadOnly({ title }) 
    {
        return (
        <div className="col">
            <div className="card">
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
                <li className="list-group-item">Date created</li>
                <li className="list-group-item">Status</li>
                <li className="list-group-item">Rank</li>
                <li className="list-group-item">Reward</li>
                <li className="list-group-item">Area</li>
                <li className="list-group-item">Date completed</li>
                <li className="list-group-item">Map url</li>
                <li className="list-group-item">Description</li>
                <li className="list-group-item">Type</li>
                <li className="list-group-item">Patron</li>           
                <br></br>
                <div class="d-grid gap-2 d-md-flex col-5 mx-auto">
                    <button class="btn btn-primary" type="button"><Link class="nav-link" to={QuestModificable}>Modificable</Link></button>
                    <button class="btn btn-primary" type="button">Delete</button>
                </div>
            </div>
            </div>
        </div>
        );
    }

    function CardModificable({ title }) 
    {
        return (
        <div className="col">
            <div className="card">
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
                <form className="row g-3">
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
                </form>
                <br></br>
                <div class="d-grid gap-2 d-md-flex col-5 mx-auto">
                    <button class="btn btn-primary" type="button">Apply</button>
                    <button class="btn btn-primary" type="button">Cancel</button>
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
        <div className="row row-cols-1 row-cols-md-2 g-5">
            <Card title="Quest #2" text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
        </div>
        );
    }

    function CardGridReadOnly() 
    {
        return (
        <div className="row row-cols-1 row-cols-md-2 g-5">
            <CardReadOnly title="Quest #2" text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
        </div>
        );
    }

    function CardGridModificable() 
    {
        return (
        <div className="row row-cols-1 row-cols-md-2 g-5">
            <CardModificable title="Quest #2" text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
        </div>
        );
    }
    
    // Componente per dire che QUEST non appartiene ad utente
    function NoQuestUser()
    {
        return (
            <div className="container" style={{marginLeft:"20%", marginTop:"3%"}}>
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <CardGrid />
                    </div>
                </div>
            </div>
        );
    }

    // Componente per dire che QUEST appartiene ad utente
    function QuestUser()
    {
        return (
            <div className="container" style={{marginLeft:"20%", marginTop:"3%"}}>
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <CardGridReadOnly />
                    </div>
                </div>
            </div>
        );
    }

    // Componente per dire che QUEST è modificabile
    function QuestModificable()
    {
        return (
            <div className="container" style={{marginLeft:"20%", marginTop:"3%"}}>
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <CardGridModificable />
                    </div>
                </div>
            </div>
        );
    }

    return(
        <>
            {/* <h1 className="text-center m-5">SONO HOMEPAGE </h1>
            <h1 className="text-center m-5">{v} </h1> */}

            <QuestUser/>
            <NoQuestUser/>
            <QuestModificable/>
        </>
    );
}