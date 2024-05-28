import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import '../App.css'
import React, {useState, useEffect} from "react";
import '../../filelocation.json'
import fileData from '../../filelocation.json';


function Sem() {
    const navigate = useNavigate();
    const [selectedSemester, setSelectedSemester] = useState(null);
    const getButtonStyle = (semester) => {
        return {
            backgroundColor: selectedSemester === semester ? '#ffa31a' : '#1b1b1b',
            color : selectedSemester === semester ? 'black' : 'white'
        };
    };

    return (
        <div className="SemContainer">
            <div className="SemNavigatorContainer">
                <div className="SemNavigator">
                    {/* <button onClick={() => setSelectedSemester(1)}>Sem 1</button>
                    <button onClick={() => setSelectedSemester(2)}>Sem 2</button> */}
                    <button style={getButtonStyle(3)} onClick={() => setSelectedSemester(3)}>Sem 3</button>
                    <button style={getButtonStyle(4)} onClick={() => setSelectedSemester(4)}>Sem 4</button>
                    <button style={getButtonStyle(5)} onClick={() => setSelectedSemester(5)}>Sem 5</button>
                    <button style={getButtonStyle(6)} onClick={() => setSelectedSemester(6)}>Sem 6</button>
                    <button style={getButtonStyle(7)} onClick={() => setSelectedSemester(7)}>Sem 7</button>
                    <button style={getButtonStyle(8)} onClick={() => setSelectedSemester(8)}>Sem 8</button>
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
            {/* <div className="SemNavigatorContainer">
                <div className="SemNavigator">
                    
                    <button onClick={() => navigate("/sem7")}>Sem 7</button>
                    <button onClick={() => navigate("/sem8")}>Sem 8</button>
                </div>
            </div>
             */}
        </div>
    )
}

// function Sem1() {
//     const navigate = useNavigate();
//     return (
//         <div className="SubGridContainer">
//             <div className="SubGrid">
//                 <div onClick={() => navigate("/")}><SubCard name="Maths" /></div>
//                 <div onClick={() => navigate("/")}><SubCard name="BEEE" /></div>
//                 <div onClick={() => navigate("/")}><SubCard name="FOP" /></div>
//                 <div onClick={() => navigate("/")}><SubCard name="FME" /></div>
//                 <div onClick={() => navigate("/")}><SubCard name="" /></div>
//                 <div onClick={() => navigate("/")}><SubCard name="" /></div>
//             </div>
//             <Routes>
//                 <Route path="//" element={< />} />
//                 <Route path="//" element={< />} />
//                 <Route path="//" element={< />} />
//                 <Route path="//" element={< />} />
//                 <Route path="//" element={< />} />
//                 <Route path="//" element={< />} />
//             </Routes>
//         </div>
        
//     )
// }

// function Sem2() {
//     const navigate = useNavigate();
//         return (
//             <div className="SubGridContainer">
//             <div className="SubGrid">
//                 <div onClick={() => navigate("/")}><SubCard name="" /></div>
//                 <div onClick={() => navigate("/")}><SubCard name="" /></div>
//                 <div onClick={() => navigate("/")}><SubCard name="" /></div>
//                 <div onClick={() => navigate("/")}><SubCard name="" /></div>
//                 <div onClick={() => navigate("/")}><SubCard name="" /></div>
//                 <div onClick={() => navigate("/")}><SubCard name="" /></div>
//             </div>
//             <Routes>
//                 <Route path="//" element={< />} />
//                 <Route path="//" element={< />} />
//                 <Route path="//" element={< />} />
//                 <Route path="//" element={< />} />
//                 <Route path="//" element={< />} />
//                 <Route path="//" element={< />} />
//             </Routes>
//         </div>
//         )
// }

function Sem3({navigate}) {
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
    )
}

function Sem4({navigate}) {
    const [selectedSub, setSelectedSub] = useState(null);
    return (
        <div className="SemContent">
            <div className="SubGridContainer">
                <div className="SubGrid">
                    <button onClick={() => setSelectedSub(10)}>POM</button>
                    <button onClick={() => setSelectedSub(12)}>PSNM</button>
                    <button onClick={() => setSelectedSub(9)}>COA</button>
                    <button onClick={() => setSelectedSub(13)}>OS</button>
                    <button onClick={() => setSelectedSub(11)}>OOPJ</button>
                </div>
            </div>
            {selectedSub === 10 && <POM navigate={navigate} />}
            {selectedSub === 12 && <PSNM navigate={navigate} />}
            {selectedSub === 9 && <COA navigate={navigate} />}
            {selectedSub === 13 && <OS navigate={navigate} />}
            {selectedSub === 11 && <OOPJ navigate={navigate} />}
            {/* <div className="SubGridContainer">
                <div className="SubGrid">
                    <div onClick={() => navigate("/pom")}><SubCard name="POM" /></div>
                    <div onClick={() => navigate("/psnm")}><SubCard name="PSNM" /></div>
                    <div onClick={() => navigate("/coa")}><SubCard name="COA" /></div>
                    <div onClick={() => navigate("/os")}><SubCard name="OS" /></div>
                    <div onClick={() => navigate("/oopj")}><SubCard name="OOPJ" /></div>
                </div>
            </div>
            <Routes>
                <Route path="/pom/" element={<POM />} />
                <Route path="/psnm/" element={<PSNM />} />
                <Route path="/coa/" element={<COA />} />
                <Route path="/os/" element={<OS />} />
                <Route path="/oopj/" element={<OOPJ />} />
            </Routes> */}
        </div>
    )
}

function Sem5({navigate}) {
    return (
        <div className="SemContent">
            Sem 5 content
        </div>
    )
}

function Sem6({navigate}) {
    return (
        <div className="SemContent">
            Sem 6 content
        </div>
    )
}

function Sem7({navigate}) {
    return (
        <div className="SemContent">
            Sem 7 content
        </div>
    )
}

function Sem8({navigate}) {
    return (
        <div className="SemContent">
            Sem 8 content
        </div>
    )
}

function ITW() {
    const [selectedPractical, setSelectedPractical] = useState('');
    const handleButtonClick = async (filePath) => {
        const response = await fetch(filePath);
        const code = await response.text();
        setSelectedPractical(code);
    };

    const practicals = fileData?.ITW || {}; // Ensure practicals is an object
    return (
        <div className="SubDataContainer">
            <div className="practicals">
                {Object.keys(practicals).map((key, index) => (
                    <button key={index} onClick={() => handleButtonClick(practicals[key])}>
                        {key}
                    </button>
                ))}
            </div>
            <div className="practical-content">
            
                <pre>
                    <code>
                        <div dangerouslySetInnerHTML={{ __html: selectedPractical }} />
                    </code>
                </pre>
            </div>
        </div> 
    )
}
function POM() {
    return (   
        <button className="Subject">POM</button> 
    )
}
function COA() {
    return (   
        <button>COA</button> 
    )
}
function OS() {
    return (   
        <button>OS</button> 
    )
}
function OOPJ() {
    const [selectedPractical, setSelectedPractical] = useState('');
    const handleButtonClick = async (filePath) => {
        const response = await fetch(filePath);
        const code = await response.text();
        setSelectedPractical(code);
    };

    const practicals = fileData?.OOPJ || {}; // Ensure practicals is an object
    return (
        <div className="SubDataContainer">
            <div className="practicals">
                {Object.keys(practicals).map((key, index) => (
                    <button key={index} onClick={() => handleButtonClick(practicals[key])}>
                        {key}
                    </button>
                ))}
            </div>
            <div className="practical-content">
                <pre>
                    <code>
                        {selectedPractical}
                    </code>
                </pre>
            </div>
        </div> 
    )
}
function PSNM() {
    return (   
        <button>PSNM</button> 
    )
}

export default Sem