import React, { useState, useEffect } from 'react';
import RobotForm from './RobotForm';
import store from '../stores/RobotStore';

function App() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    setRobots(store.getRobots());
    store.emitter.addEventListener('UPDATE', () => {
      setRobots([...store.getRobots()]);
    });
  }, []);

  const addRobot = (robot) => {
    store.addRobot(robot);
  };

  return (
    <div>
      <h1>A list of robots</h1>
      <RobotForm onAddRobot={addRobot} />
      <ul>
  {robots.map((robot, index) => (
    <li key={index} className="robot">
      Hello, my name is {robot.name}. I am a {robot.type} and weigh {robot.mass || ''}
{robot.mass ? '' : ''}

    </li>
  ))}
</ul>

    </div>
  );
}

export default App;
