import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { currentGuild } from "../../App";
import { useEffect, useRef, useState } from "react";
import axios from "axios";



export default function MyQuestsPage(props)
{


    let success = "text-success"
    let failed = "text-danger"
    let pending = "text-white"
    let awaiting = "text-warning-emphasis"
    

    // Componente Card per rappresentare una singola carta
    function Card({ map_url,title, text , rank, area, reward, status}) 
    {
        return (
                <div class="card text-bg-dark">
                    <img src={map_url} class="card-img" style={{opacity:"0.1"}}/>
                    <div class="card-img-overlay">
                        <h3 style={{fontFamily:"Lucida Handwriting,cursive"}} class="card-title">Quest n°{title}</h3>
                        <dl class="row">
                            <dt class="col-sm-3"></dt>
                                <dd class="col-sm-9">
                                    <p></p>
                                    <p></p>
                                </dd>

                            <dt style={{fontFamily:"Times New Roman,Serif"}} class="col-sm-3">Description:</dt>
                            <dd style={{fontFamily:"Monaco,Monospace"}} class="d-flex col-sm-9 justify-content-end">{text}</dd>

                            <dt class="col-sm-3"></dt>
                            <dd class="col-sm-9">
                                <p></p>
                                <p></p>
                            </dd>

                            <dt style={{fontFamily:"Times New Roman,Serif"}} class="col-sm-3">Area:</dt>
                            <dd style={{fontFamily:"Monaco,Monospace"}} class="d-flex col-sm-9 justify-content-end">{area}</dd>

                            <dt class="col-sm-3"></dt>
                            <dd class="col-sm-9">
                                <p></p>
                                <p></p>
                            </dd>

                            <dt style={{fontFamily:"Times New Roman,Serif"}} class="col-sm-3">Rewards:</dt>
                            <dd style={{fontFamily:"Monaco,Monospace"}} class="d-flex col-sm-9 justify-content-end">{reward} golds</dd>

                            <dt class="col-sm-3"></dt>
                            <dd class="col-sm-9">
                                <p></p>
                                <p></p>
                            </dd>

                            <dt style={{fontFamily:"Times New Roman,Serif"}} class="col-sm-3">Status:</dt>
                            <dd style={{fontFamily:"Copperplate,Fantasy"}} class={`d-flex col-sm-9 justify-content-end ${status=="SUCCESS" ? success : status === "AWAITING" ? awaiting : status === "PENDING" ? pending : failed}`}>{status}</dd>
                            
                        </dl>
                        <button class="btn btn-info position-absolute bottom-0 end-0" type="button"><Link class="nav-link" to={"/QuestDetail/"+title}>Details</Link></button>
                        <h2 style={{color:"#fd7e14",fontFamily:"Audiowide,sans-serif"}}className="position-absolute top-0 start-2%">{rank}</h2>
                    </div>
                </div>
        // <div className="col ">
        //     <div className="card text-bg-success">
        //     <div className="card-body">
        //         <h5 className="card-title fw-bold ">Quest {title} - {rank}</h5>
        //         <p className="card-text">{text}</p>
        //         <p className="card-text">Dove? {area}</p>
        //         <p className="card-text text-warning">{reward} Gold</p>
        //         <p className="card-text">Status: {status}</p>
        //         <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        //             <button class="btn btn-primary" type="button"><Link class="nav-link" to="/QuestDetail">Details</Link></button>
        //         </div>
        //     </div>
        //     </div>
        // </div>
        );
    }
    
    // Componente Grid per rappresentare la griglia di carte
    function CardGrid() 
    {
        return (
        // <div className="row row-cols-1 row-cols-md-1 p-1" style={{marginLeft:"-15%", marginTop:"5%"}}>
        //     <Card mape_url={props.mape_url} title={props.id} text={props.description} rank={props.rank} status={props.status} area={props.area} reward={props.reward}/>
        // </div>
            <div>
                <Card map_url={props.map_url} title={props.id} text={props.description} rank={props.rank} status={props.status} area={props.area} reward={props.reward}/>
            </div>
        );
    }

    return(
        <>
            
                <div>
                    <CardGrid/>
                </div>
            
            
                {/* <div className="row">
                    <div className="col-">
                        <div>
                            <CardGrid/>
                        </div>
                    </div>
                </div> */}
        </>
    );
}