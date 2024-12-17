import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';

const Login = () =>  {
    const [username, setUserName] = useState('');

    const [email, setEmail] =useState('');
    
    const [password, setPassword] =useState('');
    
    const [rememberMe, setRememberMe] = useState(false);
    
    //const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        // Here you would normally handle the login logic,
        // such as sending a POST request to your server with the email and password
        // and storing the response in a variable.
        // For now, we'll just log the credentials for demonstration purposes.
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember me:', rememberMe);
       // history.push('/dashboard');
    };
    
    const styles = {
      container: {  
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {

        marginBottom: '10px',
    },
    checkbox: {
        margin: '10px 0',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#4caf50',
        color: '#fff',
        fontSize: '16px'
        ,cursor: 'pointer',
    },
    links: {
        marginTop: '20px',
        textAlign: 'center',
        justifyContent: 'space-between',
        display: 'flex',
    },
};


    return (
        <div style={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}  style={styles.form}>
               
            <div  style={styles.inputGroup}>
                  
                  <label>Username:</label>
                  <input
                  type="text"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  style={styles.input}
                  required 
                  />
                  </div>

                <div  style={styles.inputGroup}>
                  
                    <label>Email:</label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    required 
                    />
                    </div>
                    <div
                        style={styles.inputGroup}>
                        <label>Password:</label>
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        required/>
                    </div>
                    <div
                    style={styles.checkbox}>
                        <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}/>
                        <label>Remember Me:</label>
                        </div>
                            <button type="submit"
                            style={styles.button}>Login</button>
                        </form>
                        <div style={styles.links}>
                            <a href="ForgotPassword">Forgot Password?</a>
                            <a href="SignUp">Sign Up</a>
                        </div>
                        </div>
);
};
export default Login;


