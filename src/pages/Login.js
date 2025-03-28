import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const styles = {
    container: {
        maxWidth: '700px',
        margin: '200px auto', // Add margin from top
        padding: '20px',
        background: 'url(https://wallpapercave.com/wp/5Oi2ZbZ.jpg) center/cover no-repeat',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
        marginBottom: '25px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    h1: {
        color: '#00008B',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
    button: {
        width: '50%',
        padding: '10px',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
    },
    errorMessage: {
        color: 'red',
        marginTop: '10px',
    },
};

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if the entered username and password match the required values
        if (formData.email === 'admin' && formData.password === 'admin123') {
            navigate('/Admin'); // Redirect to /Admin route on successful login
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>Administrator Login</h1>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Username</label>
                    <input
                        type="text"
                        name="email"
                        placeholder='Enter Username'
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder='Enter Password'
                        value={formData.password}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Login</button>
                {error && <p style={styles.errorMessage}>{error}</p>}
            </form>
        </div>
    );
}

export default Login;