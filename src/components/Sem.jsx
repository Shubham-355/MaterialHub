import { useNavigate } from "react-router-dom";
import "../App.css";
import React, { useState, useEffect } from "react";
import fileData from "../../filedata";

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
          <button onClick={() => setSelectedSub(14)}>ITW</button>
        </div>
      </div>
      {selectedSub === 14 && <ITW navigate={navigate} />}
    </div>
  );
}

function Sem4({ navigate }) {
  const [selectedSub, setSelectedSub] = useState(null);
  return (
    <div className="SemContent">
      <div className="SubGridContainer">
        <div className="SubGrid">
          {/* <button onClick={() => setSelectedSub(10)}>POM</button> */}
          <button onClick={() => setSelectedSub(12)}>PSNM</button>
          {/* <button onClick={() => setSelectedSub(9)}>COA</button> */}
          <button onClick={() => setSelectedSub(13)}>OS</button>
          <button onClick={() => setSelectedSub(11)}>OOPJ</button>
        </div>
      </div>
      {/* {selectedSub === 10 && <POM navigate={navigate} />} */}
      {selectedSub === 12 && <PSNM navigate={navigate} />}
      {/* {selectedSub === 9 && <COA navigate={navigate} />} */}
      {selectedSub === 13 && <OS navigate={navigate} />}
      {selectedSub === 11 && <OOPJ navigate={navigate} />}
    </div>
  );
}

function Sem5({ navigate }) {
  return <div className="SemContent"></div>;
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
          <code>{selectedPractical}</code>
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
          <code>{selectedPractical}</code>
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
          <code>{selectedPractical}</code>
        </pre>
      </div>
    </div>
  );
}
function PSNM() {
  const [selectedPractical, setSelectedPractical] = useState("");
  const handleButtonClick = (code) => {
    setSelectedPractical(code);
  };

  const practicals = fileData?.PSNM || {};

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
          <code>{selectedPractical}</code>
        </pre>
      </div>
    </div>
  );
}

export default Sem;
