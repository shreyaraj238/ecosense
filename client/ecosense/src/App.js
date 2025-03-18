import { useEffect, useState } from "react";
import './App.css'; // Optional, if you want to include your custom styles.

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:5001/") // Adjusted for your new server port
            .then(response => response.text())
            .then(data => setMessage(data));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>EcoSense App</h1>
                <p>{message}</p>  {/* Displaying message from the backend */}
            </header>
        </div>
    );
}

export default App;
