import { useAtom } from "jotai";
import { valoreGlobale } from "../../App";
import { useEffect, useRef, useState } from "react";


export default function HomepagePreLogin ()
{

    const [v,setV] = useAtom(valoreGlobale);
    const [quests, setQuests] = useState([]);
    
    const searchType = useRef(null);
    const searchMax = useRef(null);
    const searchMin = useRef(null);
    const searchMinRew = useRef(null);
    const searchArea = useRef(null);
    const searchStatus = useRef(null);

    

    function filter()
    {
        let newQuests = [...quests];
        
        let keyType = searchType.current.value; 
        let keyMin = searchMin.current.value;
        let keyMax = searchMax.current.value;
        let keyArea = searchArea.current.value;
        let keyStatus = searchStatus.current.value;
        let keyReward = searchMinRew.current.value;
        
        let questRank = ["D","C","B","A","S"];
        let minArray = 0; 
        let maxArray = questRank.length;

        for(let i = 0; i < questRank.length; i++)
        {
            if(questRank[i] == keyMin)
            minArray = i;
            if(questRank[i] == keyMax)
            maxArray = i;
        }

        let rankFiltered = [...quests];
        for(let i = minArray; i < maxArray; i++)
            for(let k = 0; i < newQuests.length; k++)
                if(newQuests[k].rank.equals(questRank[i]))
                    rankFiltered.push(newQuests[k]);

        newQuests = rankFiltered.filter(
                    q =>
                    q.type.includes(keyType)     &&
                    q.status.equals(keyStatus)   &&
                    q.reward >= keyReward        &&
                    q.area.equals(keyArea)       
                            );
        
        setQuests(newQuests);

    }

    // Componente per il modulo di filtro
    function FilterForm() 
    {
        return (
            <div className="card text-center mb-3" style={{width:"14rem", marginLeft:"2%", marginTop:"5%"}}>
                <form className="row g-3">
                    <div className="col-12"> 
                        <label for="filter" className="form-label">Filter</label>
                    </div>
                    <div className="col-12">
                        <input name="type" ref={searchType} type="text" className="form-control" id="inputType" placeholder="Type"/>
                    </div>
                    <div className="col-md-6">
                        <input name="min" ref={searchMin} type="number" className="form-control" id="inputMinRank" placeholder="Min Rank"/>
                    </div>
                    <div className="col-md-6">
                        <input name="max" ref={searchMax} type="number" className="form-control" id="inputMaxRank" placeholder="Max Rank"/>
                    </div>
                    <div className="col-12">
                        <input name="rew" ref={searchMinRew} type="number" className="form-control" id="inputMinReward" placeholder="Min Reward"/>
                    </div>
                    <div className="col-12">
                        <input name="area" ref={searchArea} type="text" className="form-control" id="inputArea" placeholder="Area"/>
                    </div>
                    <div className="col-12">
                        <input name="status" ref={searchStatus} type="text" className="form-control" id="inputStatus" placeholder="Status"/>
                    </div>
                    <div className="col-12">
                        <button onClick={filter} type="submit" className="btn btn-primary">Filter</button>
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
            </div>
            </div>
        </div>
        );
    }
    
    // Componente Grid per rappresentare la griglia di carte
    function CardGrid() 
    {
        return (
        <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginLeft:"-12%", marginTop:"0%"}}>
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
                        <FilterForm/>
                    </div>
                    <div className="col-md-8">
                        <CardGrid/>
                    </div>
                </div>
            </div>

        </>
    );
}