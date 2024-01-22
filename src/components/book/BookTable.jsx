import React, { useState } from 'react';
import '../main.css'; 

const BookTable = () => {
  const [complaints, setComplaints] = useState([]);
  const [newComplaint, setNewComplaint] = useState('');

  const addComplaint = () => {
    if (newComplaint.trim() !== '') {
      setComplaints([...complaints, newComplaint]);
      setNewComplaint('');
    }
  };

  return (
    <div className="complaint-book">
      <h2>Customer Complaints</h2>
      <div className="complaint-form">
        <textarea
          placeholder="Write your complaint here..."
          value={newComplaint}
          onChange={(e) => setNewComplaint(e.target.value)}
        />
        <button onClick={addComplaint}>Submit</button>
      </div>
      <div className="complaint-list">
        {complaints.length > 0 ? (
          <ul>
            {complaints.map((complaint, index) => (
              <li key={index}>{complaint}</li>
            ))}
          </ul>
        ) : (
          <p>No complaints yet.</p>
        )}
      </div>
    </div>
  );
};

export default BookTable;
