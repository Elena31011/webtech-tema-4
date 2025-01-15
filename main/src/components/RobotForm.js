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
      mass: isNaN(mass) || mass < 500 ? '' : mass.toString(),
    });
    setFormData({ name: '', type: '', mass: '' });
  };

  return (
    <div>
      <input id="name" placeholder="name" value={formData.name} onChange={handleChange} />
      <input id="type" placeholder="type" value={formData.type} onChange={handleChange} />
      <input id="mass" placeholder="mass" value={formData.mass} onChange={handleChange} type="number" />
      <button onClick={handleAdd} value="add">add</button>
    </div>
  );
}

export default RobotForm;
