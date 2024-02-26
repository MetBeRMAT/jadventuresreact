import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import MyQuestsPage from "../quest/MyQuestsPage.js";


export default function HomepagePreLogin()
{

    const [quests, setQuests] = useState([]);
    const [filteredQ, setFiltered] = useState([]);

    useEffect(
        ()=>
        {
            axios.get("/quests").then(
                (response)=>
                {
                    setQuests(response.data);
                    setFiltered(response.data);
                }
            );
        },
        []
    )


    const searchType = useRef(null);
    const searchMax = useRef(null);
    const searchMin = useRef(null);
    const searchMinRew = useRef(null);
    const searchArea = useRef(null);
    const searchStatus = useRef(null);

    function filter()
    {
        
        
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

        let newQuests = [...quests];
        let rankFiltered = [];

        for(let i = minArray; i <= maxArray; i++)
            for(let k = 0; k < newQuests.length; k++)
                if(newQuests[k].rank.includes(questRank[i]))
                    rankFiltered.push(newQuests[k]);

        newQuests = rankFiltered.filter(
                    q =>
                    q.type.includes(keyType)     &&
                    q.status.includes(keyStatus)   &&
                    q.reward >= keyReward        &&
                    q.area.includes(keyArea)       
                            );
        
        setFiltered(newQuests);

    }

    // Componente per il modulo di filtro
    function FilterForm() 
    {
        return (
            
            <div className="mx-auto border bg-dark text-white text-center" style={{position:"-webkit-sticky", position: "sticky", top:"100px",width:"18rem", marginLeft:"5%", marginRight:"20%", marginTop:"10%", backgroundColor: "black"}}>
                <form className="row g-3">
                    <div className="col-md-12"> 
                        <label for="filter" className="form-label">Filter</label>
                    </div>
                    <div className="col-9" style={{position:"-webkit-sticky", position: "sticky", top:"100px",width:"14rem", marginLeft:"10%", marginRight:"10%", marginTop:"10%"}}>
                <form className="row g-3"></form>
                        <input name="type" ref={searchType} type="text"className="form-control" id="inputType" placeholder="Type"/>
                    </div>
                    <div className="col-md-9" style={{position:"-webkit-sticky", position: "sticky", top:"100px",width:"14rem", marginLeft:"10%", marginRight:"10%", marginTop:"10%"}}>
                        <input name="min" ref={searchMin} type="text" className="form-control" id="inputMinRank" placeholder="Min Rank"/>
                    </div>
                    <div className="col-md-9" style={{position:"-webkit-sticky", position: "sticky", top:"100px",width:"14rem", marginLeft:"10%", marginRight:"10%", marginTop:"10%"}}>
                        <input name="max" ref={searchMax} type="text" className="form-control" id="inputMaxRank" placeholder="Max Rank"/>
                    </div>
                    <div className="col-9" style={{position:"-webkit-sticky", position: "sticky", top:"100px",width:"14rem", marginLeft:"10%",marginRight:"10%", marginTop:"10%"}}>
                        <input name="rew" ref={searchMinRew} type="number" className="form-control" id="inputMinReward" placeholder="Min Reward"/>
                    </div>
                    <div className="mb-1" style={{position:"-webkit-sticky", position: "sticky", top:"100px",width:"14rem", marginLeft:"10%", marginRight:"10%", marginTop:"10%"}}>
                        <input name="area" ref={searchArea} type="text" className="form-label" id="inputArea" placeholder="Area"/>
                    </div>
                    <div className="mb-1" style={{position:"-webkit-sticky", position: "sticky", top:"100px",width:"14rem", marginLeft:"10%", marginRight:"10%", marginTop:"10%"}}>
                        <input name="status" ref={searchStatus} type="text" className="form-label" id="inputStatus" placeholder="Status"/>
                    </div>
                    <div className="mb-3">
                        <button onClick={filter} type="submit" className="btn btn-primary">Filter</button>
                    </div>                    
                </form>
            </div>
        );
    }

    // Componente Grid per rappresentare la griglia di carte
    function CardGrid() 
    {
        return (
            
        // <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginLeft:"-12%", marginTop:"0%"}}>
        //     {
        //         filteredQ.map(q=><MyQuestsPage key={q.id} {...q} />)
        //     }
        // </div>

            <div className="row row-cols-2 g-4" style={{marginTop:"0%"}}>
            {
                filteredQ.map(q=><MyQuestsPage key={q.id} {...q} />)
            }
            </div>
        );
    }

    return(
        <>
            
                {/* <div className="bg-image" style={{ 
                    backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/757/75/612/minimalistic-computers-funny-simplistic-simple-entertainment-funny-hd-art-wallpaper-thumb.jpg')", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    backgroundRepeat: "no-repeat", 
                    minHeight: "auto", 
                    width: "auto", 
                }}>
                    <div className="row">
                        <div className="col-md-4">
                            <FilterForm/>
                        </div>
                        <div className="col-6">
                            <CardGrid/>
                        </div>
                    </div>
                </div> */}


                <div class="text-bg-dark p-3 text-center">
                    <div class="row">
                        <div class="col-sm-3">
                            <FilterForm/>
                        </div>
                        <div class="col-sm-9">
                            <div class="row">
                                <div class="col-12">
                                    <CardGrid/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}