import React, { useState } from "react";

const RobotForm = ({ onAddRobot }) => {
  const [robot, setRobot] = useState({ name: "", type: "", mass: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRobot((prev) => ({ ...prev, [id]: value }));
  };

  const handleAdd = () => {
    const newRobot = {
      ...robot,
      mass: parseFloat(robot.mass) < 500 ? "" : robot.mass,
    };
    onAddRobot(newRobot);
    setRobot({ name: "", type: "", mass: "" });
  };

  return (
    <div>
      <input id="name" value={robot.name} onChange={handleChange} placeholder="Name" />
      <input id="type" value={robot.type} onChange={handleChange} placeholder="Type" />
      <input id="mass" value={robot.mass} onChange={handleChange} placeholder="Mass" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default RobotForm;
