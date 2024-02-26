import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function ShowAllGuildQuests(props)
{

               
    // function deleteQuest()
    // {
    //     axios.delete("/quests/"+id);
    // }

    function Card({ id, title, text , rank, area, reward, status}) 
    {
        return (
        <>
        <div className="col ">
            <div className="card text-bg-success">
            <div className="card-body">
                <h5 className="card-title fw-bold ">Quest {title} - {rank}</h5>
                <p className="card-text">{text}</p>
                <p className="card-text">Dove? {area}</p>
                <p className="card-text text-warning">{reward} Gold</p>
                <p className="card-text">Status: {status}</p>
                <svg class="bi" aria-hidden="true"/>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">                                
                {status=="AWAITING" || status=="SUCCESS" || status=="FAILED" ? <button onClick={()=> props.deleteMe(props.id)} class="btn btn-danger" > Delete </button> : <button class="btn btn-danger disabled"> Delete </button>}
                    <button class="btn btn-primary" type="button"><Link class="nav-link" to={"/QuestDetail/"+id}>Details</Link></button>
                </div>
                {/* onclick={()=> axios.delete("/quests/"+id)} */}
            </div>
            </div>
        </div>
        </>
        );
    }

    function CardGrid() 
    {
        return (
        <div className="row row-cols-1 row-cols-md-1 p-1" style={{marginLeft:"-11%", marginTop:"0%"}}>
            <Card id={props.id} title={props.id} text={props.description} rank={props.rank} status={props.status} area={props.area} reward={props.reward}/>
        </div>
        );
    }

    return(
        <>
        <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <CardGrid/>
                    </div>
                </div>
            </div>
        </>
    )
}