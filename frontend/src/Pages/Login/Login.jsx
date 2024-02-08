import React from 'react'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            setResponseMessage(data.message);
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('An error occurred while processing your request.');
        }
    };
    return (
        <>
            <div className="App">
                <h1>Login App</h1>
                <div>
                    <label>
                        Email/Phone No.:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <button onClick={handleLogin}>Login</button>
                </div>
                {responseMessage && (
                    <div>
                        <p>{responseMessage}</p>
                    </div>
                )}

            </div>
        </>
    )
}

export default Login