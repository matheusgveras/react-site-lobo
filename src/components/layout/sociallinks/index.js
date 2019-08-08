import React from 'react';
import { Link } from "react-router-dom";
function SocialLinks() {
    return (
        <ul>
            <li> <Link target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/company/lobo-frontal/">Linkedin</Link></li>
            <li> <Link target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/lobofrontal/">Instagram</Link></li>
            <li> <Link target="_blank" rel="noopener noreferrer" to="https://www.facebook.com/lobofrontal/">Facebook</Link></li>
            <li> <Link target="_blank" rel="noopener noreferrer" to="https://github.com/matheusgveras">Github</Link></li>
            <li> <Link target="_blank" rel="noopener noreferrer" to="https://pinterest.com/lobofrontal">Pinterest</Link></li>
        </ul>
    );
}
export default SocialLinks;
