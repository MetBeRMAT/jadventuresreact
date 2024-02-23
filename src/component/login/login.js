import { currentGuild } from "../../App";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Login = (props) =>
{
    
    const [guild, setGuild] = useAtom(currentGuild);
    const [guilds, setGuilds] = useState([]);
    
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

    const searchName = useRef(null);
    const searchPw = useRef(null);

    function log(event)
    {
        event.preventDefault();
        let keyName = searchName.current.value;
        let keyPw = searchPw.current.value;
        for(let i = 0; i < guilds.length; i++)
            if(guilds[i].name == keyName && guilds[i].authentication_seal == keyPw)
            {
                setGuild(guilds[i]);
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
                    <button class="btn btn-primary btn-block" onClick={log}>Login</button>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}

export default Login;