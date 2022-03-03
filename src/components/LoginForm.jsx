import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');


        

        const handleSubmit = async (e) => {

            e.pereventDefault();
            
            const authObject = { 'Project-ID': "ada20c41-63ad-40aa-b7ac-a5d85cca9332", 'User-Name': username, 'User-Secret':  password};
            
            
            try {

                //username | password => chatengşne => give message


               await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            //wordks out => logged in
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);

                window.location.reload();


            } catch (error) {

                //error => try with new username...

                setError('Heeyy! not connected!')

                
            }


        }

        return (

            <div className="wrapper">
                <div className="form">
                    <h1 className="title">Chat App</h1>
                    <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Go Chat</span>
                        </button>

                    </div>
                    <h2 className="error">{error}</h2>
                    </form>
                    </div>        



            </div>


        )

}

export default LoginForm;
















