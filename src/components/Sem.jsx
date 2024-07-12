import { useNavigate } from "react-router-dom";
import "../App.css";
import React, { useState, useEffect } from "react";
import fileData from "../../filedata";
import Prism from 'prismjs';
import "prismjs/themes/prism-funky.css"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-java"
import "prismjs/components/prism-markup"
import "prismjs/components/prism-bash"

function Sem() {
  const navigate = useNavigate();
  const [selectedSemester, setSelectedSemester] = useState(null);
  const getButtonStyle = (semester) => {
    return {
      backgroundColor: selectedSemester === semester ? "#ffa31a" : "#1b1b1b",
      color: selectedSemester === semester ? "black" : "white",
    };
  };

  return (
    <div className="SemContainer">
      <div className="SemNavigatorContainer">
        <div className="SemNavigator">
          {/* <button onClick={() => setSelectedSemester(1)}>Sem 1</button>
                    <button onClick={() => setSelectedSemester(2)}>Sem 2</button> */}
          <button
            className="sem3btn"
            style={getButtonStyle(3)}
            onClick={() => setSelectedSemester(3)}
          >
            Sem 3
          </button>
          <button
            className="sem4btn"
            style={getButtonStyle(4)}
            onClick={() => setSelectedSemester(4)}
          >
            Sem 4
          </button>
          <button
            className="sem5btn"
            style={getButtonStyle(5)}
            onClick={() => setSelectedSemester(5)}
          >
            Sem 5
          </button>
          <button
            className="sem6btn"
            style={getButtonStyle(6)}
            onClick={() => setSelectedSemester(6)}
          >
            Sem 6
          </button>
          <button
            className="sem7btn"
            style={getButtonStyle(7)}
            onClick={() => setSelectedSemester(7)}
          >
            Sem 7
          </button>
          <button
            className="sem8btn"
            style={getButtonStyle(8)}
            onClick={() => setSelectedSemester(8)}
          >
            Sem 8
          </button>
        </div>
      </div>
      {/* {selectedSemester === 1 && <Sem1 />}
            {selectedSemester === 2 && <Sem2 />} */}
      {selectedSemester === 3 && <Sem3 navigate={navigate} />}
      {selectedSemester === 4 && <Sem4 navigate={navigate} />}
      {selectedSemester === 5 && <Sem5 navigate={navigate} />}
      {selectedSemester === 6 && <Sem6 navigate={navigate} />}
      {selectedSemester === 7 && <Sem7 navigate={navigate} />}
      {selectedSemester === 8 && <Sem8 navigate={navigate} />}
    </div>
  );
}

// function Sem1() {
//     const navigate = useNavigate();
//     return (
//
//     )
// }

// function Sem2() {
//     const navigate = useNavigate();
//         return (
//
//         )
// }

function Sem3({ navigate }) {
  const [selectedSub, setSelectedSub] = useState(null);
  return (
    <div className="SubGridContainer">
      <div className="SubGridContainer">
        <div className="SubGrid">
          <button onClick={() => setSelectedSub("ITW")}>ITW</button>
        </div>
      </div>
      {selectedSub === "ITW" && <ITW navigate={navigate} />}
    </div>
  );
}

function Sem4({ navigate }) {
  const [selectedSub, setSelectedSub] = useState(null);
  return (
    <div className="SemContent">
      <div className="SubGridContainer">
        <div className="SubGrid">
          <button onClick={() => setSelectedSub("POM")}>POM</button>
          <button onClick={() => setSelectedSub("PSNM")}>PSNM</button>
          {/* <button onClick={() => setSelectedSub("COA")}>COA</button> */}
          <button onClick={() => setSelectedSub("OS")}>OS</button>
          <button onClick={() => setSelectedSub("OOPJ")}>OOPJ</button>
        </div>
      </div>
      {selectedSub === "POM" && <POM navigate={navigate} />}
      {selectedSub === "PSNM" && <PSNM navigate={navigate} />}
      {/* {selectedSub === "COA" && <COA navigate={navigate} />} */}
      {selectedSub === "OS" && <OS navigate={navigate} />}
      {selectedSub === "OOPJ" && <OOPJ navigate={navigate} />}
    </div>
  );
}

function Sem5({ navigate }) {
  const [selectedSub, setSelectedSub] = useState(null);
  return (
    <div className="SemContent">
      <div className="SubGridContainer">
        <div className="SubGrid">
          <button onClick={() => setSelectedSub("DAA")}>DAA</button>
          <button onClick={() => setSelectedSub("AJP")}>AJP</button>
          <button onClick={() => setSelectedSub("CN")}>CN</button>
        </div>
      </div>
      {selectedSub === "DAA" && <DAA navigate={navigate} />}
      {selectedSub === "AJP" && <AJP navigate={navigate} />}
      {selectedSub === "CN" && <CN navigate={navigate} />}
    </div>
  );
}

function Sem6({ navigate }) {
  return <div className="SemContent"></div>;
}

function Sem7({ navigate }) {
  return <div className="SemContent"></div>;
}

function Sem8({ navigate }) {
  return <div className="SemContent"></div>;
}

function ITW() {
  const [selectedPractical, setSelectedPractical] = useState("");
  const handleButtonClick = (code) => {
    setSelectedPractical(code);
  };

  const practicals = fileData?.ITW || {};

  useEffect(() => {
    Prism.highlightAll();
  }, [selectedPractical]);

  return (
    <div className="SubDataContainer">
      <div className="practicals">
        {Object.keys(practicals).map((key, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(practicals[key])}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="practical-content">
        <pre>
          <code className="language-html">{selectedPractical}</code>
        </pre>
      </div>
    </div>
  );
}

function OS() {
  const [selectedPractical, setSelectedPractical] = useState("");
  const handleButtonClick = (code) => {
    setSelectedPractical(code);
  };

  const practicals = fileData?.OS || {};

  useEffect(() => {
    Prism.highlightAll();
  }, [selectedPractical]);

  return (
    <div className="SubDataContainer">
      <div className="practicals">
        {Object.keys(practicals).map((key, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(practicals[key])}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="practical-content">
        <pre>
          <code className="language-bash">{selectedPractical}</code>
        </pre>
      </div>
    </div>
  );
}

function OOPJ() {
  const [selectedPractical, setSelectedPractical] = useState("");
  const handleButtonClick = (code) => {
    setSelectedPractical(code);
  };

  const practicals = fileData?.OOPJ || {};

  useEffect(() => {
    Prism.highlightAll();
  }, [selectedPractical]);

  return (
    <div className="SubDataContainer">
      <div className="practicals">
        {Object.keys(practicals).map((key, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(practicals[key])}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="practical-content">
        <pre>
          <code className="language-java">{selectedPractical}</code>
        </pre>
      </div>
    </div>
  );
}

function PSNM() {
  const [selectedPractical, setSelectedPractical] = useState("");
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const handleButtonClick = (code) => {
    setSelectedPractical(code);
  };

  const handleAssignmentButtonClick = (pdfPath) => {
    setSelectedAssignment(pdfPath);
    setSelectedPractical(null);
    window.open(pdfPath, "_blank");
  };

  const { practicals, assignments } = fileData?.PSNM || {};

  return (
    <div className="SubDataContainer">
      <div className="practicals">
        {Object.keys(assignments).map((key, index) => (
          <button
            key={index}
            onClick={() => handleAssignmentButtonClick(assignments[key])}
          >
            {key}
          </button>
        ))}
        {Object.keys(practicals).map((key, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(practicals[key])}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="practical-content">
        <pre>
          <code>{selectedPractical}</code>
        </pre>
      </div>
    </div>
  );
}

function POM() {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const handleButtonClick = (code) => {
    setSelectedPractical(code);
  };

  const handleAssignmentButtonClick = (pdfPath) => {
    setSelectedAssignment(pdfPath);
    window.open(pdfPath, "_blank");
  };

  const { assignments } = fileData?.POM || {};

  return (
    <div className="SubDataContainer">
      <div className="practicals">
        {Object.keys(assignments).map((key, index) => (
          <button
            key={index}
            onClick={() => handleAssignmentButtonClick(assignments[key])}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

function AJP() {
  const [selectedPractical, setSelectedPractical] = useState("");
  const handleButtonClick = (code) => {
    setSelectedPractical(code);
  };

  const practicals = fileData?.AJP || {};

  useEffect(() => {
    Prism.highlightAll();
  }, [selectedPractical]);

  return (
    <div className="SubDataContainer">
      <div className="practicals">
        {Object.keys(practicals).map((key, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(practicals[key])}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="practical-content">
        <pre>
          <code className="language-java">{selectedPractical}</code>
        </pre>
      </div>
    </div>
  );
}

function CN() {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const handleButtonClick = (code) => {
    setSelectedPractical(code);
  };

  const handleAssignmentButtonClick = (pdfPath) => {
    setSelectedAssignment(pdfPath);
    window.open(pdfPath, "_blank");
  };

  const { assignments } = fileData?.CN || {};

  return (
    <div className="SubDataContainer">
      <div className="practicals">
        {Object.keys(assignments).map((key, index) => (
          <button
            key={index}
            onClick={() => handleAssignmentButtonClick(assignments[key])}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

function DAA() {
  const [selectedPractical, setSelectedPractical] = useState("");
  const handleButtonClick = (code) => {
    setSelectedPractical(code);
  };

  const practicals = fileData?.DAA || {};

  useEffect(() => {
    Prism.highlightAll();
  }, [selectedPractical]);

  return (
    <div className="SubDataContainer">
      <div className="practicals">
        {Object.keys(practicals).map((key, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(practicals[key])}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="practical-content">
        <pre>
          <code className="language-java">{selectedPractical}</code>
        </pre>
      </div>
    </div>
  );
}

export default Sem;
