import { currentGuild, currentParty } from "../../App";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function Login(props)
{
    
    const [guild, setGuild] = useAtom(currentGuild);
    const [guilds, setGuilds] = useState([]);
    const [party, setParty] = useState(currentParty);
    const [parties, setParties] = useState([]);

    useEffect(
        ()=>
        {
            axios.get("/guilds").then(
                (response)=>
                {
                    setGuilds(response.data);
                }
            );
        },
        []
    )

    useEffect(
        ()=>
        {
            axios.get("/parties").then(
                (response)=>
                {
                    setParties(response.data);
                }
            );
        },
        []
    )

    const searchName = useRef(null);
    const searchPw = useRef(null);

    function log(event)
    {
        event.preventDefault();
        let keyName = searchName.current.value;
        let keyPw = searchPw.current.value;
        for(let i = 0; i < guilds.length; i++)
        {
            if(guilds[i].name == keyName && guilds[i].authentication_seal == keyPw)
            {
                setGuild(guilds[i]);
                return;
            }
            if(parties[i].name == keyName && parties[i].authentication_seal == keyPw)
            {
                setParty(guilds[i]);
                return;
            }
    }

    return(
        <>
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-md-6">
                    <h2 class="text-center mb-4">Login</h2>
                    <form>
                    <div class="form-group">
                        <label for="guildName">Guild Name:</label>
                        <input type="text" ref={searchName} class="form-control" id="guildName" name="guildName" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" ref={searchPw} class="form-control" id="password" name="password" required />
                    </div>
                    <br></br>
                    {/* BUTTON LOGIN */}
                    <div class="d-grid gap-2 col-3 mx-auto">
                        {/* <Link to="/HomepagePostLogin" className="btn btn-primary" role="button" onClick={log}>Login</Link> */}
                        {/* <button class="btn btn-primary btn-block" onClick={log}>Login</button> */}
                        {/* <button class="btn btn-primary btn-block" to="/HomepagePostLogin"><Link class="nav-link" onClick={log}>Login</Link></button> */}
                        <Link className="btn btn-primary btn-block " role="button" onClick={log}>Login</Link>
                    </div>

                    </form>
                </div>
                </div>
            </div>
        </>
    )
    }
}