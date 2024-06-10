import { useState } from "react"
import InfoPopup from "./InfoPopup";
import { VscInfo } from "react-icons/vsc";
import copyright from '../assets/copyright.gif'
import { Link } from "react-router-dom";

function MaterialHub() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    
    return (
        <div className="MH">
            <Link to="/" className="link">
            <div className="MaterialHub">
                <div className="MaterialHubOP">
                    <div className="frontMaterialHubOP">Material</div>
                    <div className="backMaterialHubOP">Hub</div>
                </div>
            </div></Link>
            <div className="MaterialHubDescription">Feel free to use</div>

            <button className="open-btn" onClick={() => setIsPopupOpen(true)}><VscInfo className="infobtn" /></button>

            <InfoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                <div>
                    <div>&copy; MaterialHub</div>
                    <div>All rights reserved.</div>
                    <div>Unauthorized use and/or duplication of this material without express and written permission from the author and/or owner of this site is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to Your Website Name with appropriate and specific direction to the original content.</div>
                    <img className="copyrightgif" src={copyright} alt="GIF" />
                </div>
            </InfoPopup>
        </div>
    )
}

export default MaterialHub