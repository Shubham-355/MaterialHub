import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import '../App.css'
import SubCard from "./SubCard";
import React, {useState} from "react";

function Sem() {
    const navigate = useNavigate();
    const [selectedSemester, setSelectedSemester] = useState(null);
    return (
        <div className="SemContainer">
            <div className="SemNavigatorContainer">
                <div className="SemNavigator">
                    {/* <button onClick={() => setSelectedSemester(1)}>Sem 1</button>
                    <button onClick={() => setSelectedSemester(2)}>Sem 2</button> */}
                    <button onClick={() => setSelectedSemester(3)}>Sem 3</button>
                    <button onClick={() => setSelectedSemester(4)}>Sem 4</button>
                    <button onClick={() => setSelectedSemester(5)}>Sem 5</button>
                    <button onClick={() => setSelectedSemester(6)}>Sem 6</button>
                    <button onClick={() => setSelectedSemester(7)}>Sem 7</button>
                    <button onClick={() => setSelectedSemester(8)}>Sem 8</button>
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
    return (
        <div className="SubGridContainer">
            <div className="SubGrid">
                <div onClick={() => navigate("/itw")}><SubCard name="ITW" /></div>
            </div>
            <Routes>
                <Route path="/itw/" element={<ITW />} />
            </Routes>
        </div>
    )
}

function Sem4({navigate}) {
    return (
        <div className="SemContent">
            <div className="SubGridContainer">
            <div className="SubGrid">
                <div onClick={() => navigate("/pom")}><SubCard name="POM" /></div>
                <div onClick={() => navigate("/psnm")}><SubCard name="PSNM" /></div>
                <div onClick={() => navigate("/coa")}><SubCard name="COA" /></div>
                <div onClick={() => navigate("/os")}><SubCard name="OS" /></div>
                <div onClick={() => navigate("/oopj")}><SubCard name="OOPJ" /></div>
            </div>
            <Routes>
                <Route path="/pom/" element={<POM />} />
                <Route path="/psnm/" element={<PSNM />} />
                <Route path="/coa/" element={<COA />} />
                <Route path="/os/" element={<OS />} />
                <Route path="/oopj/" element={<OOPJ />} />
            </Routes>
        </div>
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
    return (   
        <button>ITW</button> 
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
    return (   
        <button>OOPJ</button> 
    )
}
function PSNM() {
    return (   
        <button>subject6</button> 
    )
}

export default Sem