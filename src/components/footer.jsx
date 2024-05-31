import {FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6"

function Footer() {
    const twitterUrl = process.env.REACT_APP_TWITTER_URL;
    const instagramUrl = process.env.REACT_APP_INSTAGRAM_URL;
    const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL;

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="social">
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer"><FaInstagram className="instagram-icon" /></a>
                    <a href={twitterUrl} target="_blank" rel="noopener noreferrer"><FaXTwitter className="twitter-icon" /></a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"><FaLinkedin className="linkedin-icon" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;