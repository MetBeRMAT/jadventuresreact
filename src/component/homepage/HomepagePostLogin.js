import { useAtom } from "jotai";
import { valoreGlobale } from "../../App";


export default function HomepagePost ()
{

    const [v,setV] = useAtom(valoreGlobale);

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
                        <input type="text" className="form-control" id="inputType" placeholder="Type"/>
                    </div>
                    <div className="col-md-6">
                        <input type="number" className="form-control" id="inputMinRank" placeholder="Min Rank"/>
                    </div>
                    <div className="col-md-6">
                        <input type="number" className="form-control" id="inputMaxRank" placeholder="Max Rank"/>
                    </div>
                    <div className="col-12">
                        <input type="number" className="form-control" id="inputMinReward" placeholder="Min Reward"/>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputArea" placeholder="Area"/>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputStatus" placeholder="Status"/>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Filter</button>
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