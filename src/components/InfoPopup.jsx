import React from "react";
import { VscEyeClosed } from "react-icons/vsc";

function InfoPopup({ isOpen, onClose, children}) {
    return isOpen? (
        <div className="popup-overlay">
            <div className="popup-container">
                <button className="close-btn" onClick={onClose}>
                    <VscEyeClosed className="eyeclose" />
                </button>
                <div className="popup-content">{children}</div>
            </div>
        </div>
    ) : null;
}

export default InfoPopup;