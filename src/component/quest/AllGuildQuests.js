import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { currentGuild } from "../../App";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ShowAllGuildQuests from "./ShowAllGuildQuests";

export default function AllGuildQuests()
{
    const [guild, setGuild] = useAtom(currentGuild);
    const [myQuest, setMyQuests] = useState([]);

    const [newQuest, setNew] = useState({
        date_created:"",
        status:"",
        rank:"",
        reward:"",
        area:"",
        type:"",
        guild_id:guild.id,
        description:"",
        mape_url:"",
        date_completed:""
    });

    useEffect(
        ()=>
        {
            axios.get("/guilds/"+guild.id+"/quests").then(
                (response)=>
                {
                    setMyQuests(response.data);
                }
            );
        },
        []
    )

    function UploadQuest()
    {
                axios.post("/guilds/"+guild.id+"/quests", newQuest).then((response)=>{
                    setNew({
                        date_created:"",
                        status:"",
                        rank:"",
                        reward:"",
                        area:"",
                        type:"",
                        guild_id:guild.id,
                        description:"",
                        mape_url:"",
                        date_completed:""
                    });})
    }

    function synchronize(e)
    {
        let clone = {...newQuest};
        clone[e.target.name] = e.target.value;
        setNew(clone);
    }

    function deleteQuest(id)
    {
        axios.delete("/quests/"+id).then(
            ()=>
            {
                let clone = [...myQuest];
                let pos = clone.findIndex(q => q.id==id);
                clone.splice(pos,1);
                setMyQuests(clone);
            }
        )
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <div className="card text-center mb-3" style={{width:"17rem", marginLeft:"-15%", marginTop:"5%"}}>
                    <div className="col-12"> 
                        <label for="quest" className="form-label">New Quest Form</label>
                    </div>
                    <div className="col-12">
                        <input name="date_created" type="date" className="form-control" onChange={synchronize} placeholder="Date created"/>
                    </div>
                    <div className="col-12">
                        <input name="status" type="text" className="form-control" onChange={synchronize} placeholder="Status"/>
                    </div>
                    <div className="col-12">
                        <input name="rank" type="text" className="form-control" onChange={synchronize} placeholder="Rank"/>
                    </div>
                    <div className="col-12">
                        <input name="reward" type="number" className="form-control" onChange={synchronize} placeholder="Reward"/>
                    </div>
                    <div className="col-12">
                        <input name="area" type="text" className="form-control" onChange={synchronize} placeholder="Area"/>
                    </div>
                    <div className="col-12">
                        <input name="date_completed" type="date" className="form-control" onChange={synchronize} placeholder="Date completed"/>
                    </div>
                    <div className="col-12">
                        <input name="mape_url" type="text" className="form-control" onChange={synchronize} placeholder="Map url"/>
                    </div>
                    <div className="col-12">
                        <textarea name="description" type="text" className="form-control" onChange={synchronize} rows="3" placeholder="Description"/>
                    </div>
                    <div className="col-12">
                        <input name="type" type="text" className="form-control" onChange={synchronize} placeholder="Type"/>
                    </div>
                    <div className="col-12">
                        <button onClick={UploadQuest} className="btn btn-primary">Send</button>
                    </div>                    
            </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginLeft:"-12%", marginTop:"2%"}}>
                        {guild.posted_quests.map(q=><ShowAllGuildQuests key={q.id} {...q} deleteMe={deleteQuest}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}