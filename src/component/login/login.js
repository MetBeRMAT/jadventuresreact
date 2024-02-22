const Login = (props) =>
{
    // const [guildName,setGuildName] = useState("");
    // const [password,setPassword] = useState("");

    return(
        <>
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-md-6">
                    <h2 class="text-center mb-4">Login</h2>
                    <form>
                    <div class="form-group">
                        <label for="guildName">Guild Name:</label>
                        <input type="text" class="form-control" id="guildName" name="guildName" required />
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="password" name="password" required />
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}

export default Login;