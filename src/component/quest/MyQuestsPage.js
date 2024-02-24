import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { currentGuild } from "../../App";
import { useEffect, useRef, useState } from "react";
import axios from "axios";



export default function MyQuestsPage(props)
{


    // Componente per il modulo di filtro
    

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
        <div className="row row-cols-1 row-cols-md-1 p-1" style={{marginLeft:"-15%", marginTop:"5%"}}>
            <Card title={props.id} text={props.description} rank={props.rank} status={props.status} area={props.area} reward={props.reward}/>
        </div>
        );
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-11">
                        <CardGrid/>
                    </div>
                </div>
            </div>

        </>
    );
}