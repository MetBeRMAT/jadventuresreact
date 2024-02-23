import { Link } from "react-router-dom";
import { currentGuild } from "../../App";
import { useAtom } from "jotai";

const Navbar = () =>
{
    const [guild, setGuild] = useAtom(currentGuild);
    let showMyQuest = "nav-link";
    let dontShowMyQuest = "nav-link disabled";
    
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-light mb-4 sticky-top">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item ms-5 p-3 fw-bold">
                        <Link class="nav-link" to="/">AllQuests</Link>
                    </li>
                    <li class="nav-item p-3 fw-bold position-absolute top-50 start-50 translate-middle">
                        <Link class="nav-link disabled">MyQuest</Link>
                    </li>
                    <li class="nav-item p-3 fw-bold position-absolute top-50 start-50 translate-middle">
                        <Link class={guild ? showMyQuest : dontShowMyQuest} to="/MyQuestsPage">MyQuest</Link>
                    </li>
                    <li class="nav-item p-3 me-5 position-absolute top-0 end-0 fw-bold">
                        {guild ? <img src={guild.seal_img_url}/>
                        : <Link class="nav-link" to="/login">Login</Link>}
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        
        
        </>
    );
}

export default Navbar;