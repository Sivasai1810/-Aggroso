<h1>Workflow Builder Lite</h1>

<h2>Overview</h2>
<p>
  This project is a simple workflow automation backend that runs a sequence of
  text-processing steps on user input.
</p>
<p>
  Each workflow consists of multiple steps such as cleaning text, summarizing,
  extracting key points, and tagging categories.
</p>
<p>
  The system executes steps sequentially and returns the output of each step.
</p>

<hr />

<h2>How to Run the Project</h2>

<ol>
  <li>
    <strong>Clone the repository</strong>
    <pre>
git clone &lt;https://github.com/Sivasai1810/-Aggroso&gt;
    </br>
cd &lt;project-folder&gt;
    </pre>
  </li>

  <li>
    <strong>Install dependencies</strong>
    <pre>
npm install
    </pre>
  </li>

  <li>
    <strong>Set environment variables</strong>
    <p>Create a <code>.env</code> file and add:</p>
    <pre>
GROQ_API_KEY=your_groq_api_key_here
    </pre>
  </li>

  <li>
    <strong>Start the backend server</strong>
    <pre>
cd Backend
npm run dev
    </pre>
  </li>

  <li>
    <strong>Start the frontend</strong>
    <pre>
cd frontend
npm run dev
    </pre>
  </li>

  <li>
    <strong>Server will run on:</strong>
    <pre>
http://localhost:3000
    </pre>
  </li>
</ol>

<hr />

<h2>What Is Done</h2>

<ul>
  <li>Workflow execution with dynamic steps</li>
  <li>Supported workflow steps:
    <ul>
      <li>Clean text</li>
      <li>Summarize text</li>
      <li>Extract key points</li>
      <li>Tag category</li>
    </ul>
  </li>
  <li>Step execution handled using a handler-based architecture</li>
  <li>Model integration using the Groq LLM API</li>
  <li>Sequential step execution (output of one step becomes input of the next)</li>
  <li>Clean and reusable prompt design</li>
  <li>Returns step-by-step outputs in the API response</li>
</ul>
<hr />
