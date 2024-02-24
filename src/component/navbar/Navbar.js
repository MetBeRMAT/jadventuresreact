import { Link, redirect } from "react-router-dom";
import { currentGuild, currentParty } from "../../App";
import { useAtom } from "jotai";
import HomepagePostLogin from "../homepage/HomepagePostLogin";

const Navbar = () =>
{
    const [guild, setGuild] = useAtom(currentGuild);
    const [party, setParty] = useAtom(currentParty);
    let showMyQuest = "nav-link text-white";
    let dontShowMyQuest = "nav-link disabled";
    let showMyAvailableQuest = "nav-link text-white";
    
    function logout()
    {
        window.location.href = "http://localhost:3000/";
        setGuild(null);
    }
    
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-light mb-4 sticky-top bg-dark bg-gradient">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item ms-5 p-3 fw-bold">
                        <Link class="text-white nav-link" to="/">AllQuests</Link>
                    </li>
                    <li class="nav-item ms-5 p-3 fw-bold">
                        {guild && <Link className={showMyAvailableQuest} to="/MyQuestsAwaitingPage">Available Quests</Link>}
                    </li>
                    <li class="nav-item p-3 fw-bold position-absolute top-50 start-50 translate-middle">
                        <Link class={guild ? showMyQuest : dontShowMyQuest} to="/AllGuildQuests">My Quests</Link>
                    </li>
                    <li class="nav-item p-4 me-5 position-absolute top-25 end-0 fw-bold">
                        {guild ? guild.name : <Link class="text-white nav-link" to="/login"></Link>}
                    </li>
                    <li class="nav-item p-3 me-3 position-absolute top-25 end-0 fw-bold">
                        {guild ? <button onClick={logout}> <img src={guild.seal_img_url}/> </button>
                        : <Link class="text-white nav-link" to="/login">Login</Link>}
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        
        
        </>
    );
}

export default Navbar;