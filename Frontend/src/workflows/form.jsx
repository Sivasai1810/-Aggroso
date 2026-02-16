import React, { useEffect, useState } from "react";
import "./form.css"
import axios from "axios";

const AVAILABLE_STEPS = [
  "cleantext",
  "summarize",
  "ExtractKeyPoints",
  "TagCategory",
];

const Form = () => {
  const [userText, setUserText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [selectedTask,setSelectedTask]=useState([]);
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("workflowHistory")) || [];
    setHistory(stored);
  }, []);

  const addTask = (step) => {
    if (tasks.includes(step)) return;
    setTasks((prev) => [...prev, step]);
     setSelectedTask((prev) => [...prev, step]);
  };

  const removeTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSend = async () => {
    if (!userText) return alert("Please fill the text box");
    if (tasks.length === 0) return alert("Select at least one workflow");

    const playload = {
      inputtexts: userText,
      workflows: tasks,
    };

    try {
      const res = await axios.post("https://aggroso-0xrr.onrender.com/sent/data", {playload});
     console.log(res.data.result)
      setResults(res.data.result);
      const newEntry = {
        id: Date.now(),
        text: userText,
        workflows: tasks,
        results: res.data.results,
      };

      const updatedHistory = [newEntry, ...history].slice(0, 5);

      setHistory(updatedHistory);
      localStorage.setItem("workflowHistory", JSON.stringify(updatedHistory));
       setUserText(" ")
        setTasks([])
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };
console.log(results);
  return (
    <div className="container">
      <h2>Workflow Runner</h2>

      <textarea
        placeholder="Paste your text..."
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      />

      <div className="steps">
        {AVAILABLE_STEPS.map((step) => (
          <button key={step} onClick={() => addTask(step)}>
            {step}
          </button>
        ))}
      </div>

      {tasks.length > 0 && (
        <div className="selected">
          <h4>Workflow Order</h4>
          <ol>
            {tasks.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => removeTask(index)}>✕</button>
              </li>
            ))}
          </ol>
        </div>
      )}

      <button className="run-btn" onClick={handleSend}>
        Run Workflow
      </button>
 {Array.isArray(results) && results.length > 0 && (
  <div className="results">
    <h3>Results</h3>

    {results.map((res, index) => {
      const stepName = selectedTask[Number(res.id)] || "Unknown";

      return (
        <div key={index} className="result-card">
          <div className="result-top">
            <span className={`step-pill ${stepName}`}>
              {stepName.replace(/([A-Z])/g, " $1")}
            </span>
            <span className="step-count">Step {index + 1}</span>
          </div>

          <div className="result-content">
            <p>{res.output}</p>
          </div>
        </div>
      );
    })}
  </div>
)}

      
      {history.length > 0 && (
        <div className="history">
          <h3>Last 5 Runs</h3>
          {history.map((item) => (
            <div key={item.id} className="history-card">
              <p><strong>Workflows:</strong> {item.workflows.join(" → ")}</p>
              <small>{item.text.slice(0, 80)}...</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Form;


