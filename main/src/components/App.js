import React, { useState } from 'react';

function RobotForm({ onAddRobot }) {
    const [formData, setFormData] = useState({ name: '', type: '', mass: '' });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleAdd = () => {
        const mass = parseFloat(formData.mass);
        onAddRobot({
            name: formData.name || '',
            type: formData.type || '',
            mass: isNaN(mass) || mass < 500 ? '' : mass,
        });
        setFormData({ name: '', type: '', mass: '' });
    };

    return (
        <div>
            <input id="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input id="type" value={formData.type} onChange={handleChange} placeholder="Type" />
            <input id="mass" value={formData.mass} onChange={handleChange} placeholder="Mass" type="number" />
            <button onClick={handleAdd} value="add">Add</button>
        </div>
    );
}

function App() {
    const [robots, setRobots] = useState([]);

    const addRobot = (robot) => {
        setRobots((prev) => [...prev, robot]);
    };

    return (
        <div>
            <h1>Robot Manager</h1>
            <RobotForm onAddRobot={addRobot} />
            <ul>
                {robots.map((robot, index) => (
                    <li key={index}>
                        Name: {robot.name}, Type: {robot.type}, Mass: {robot.mass}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
