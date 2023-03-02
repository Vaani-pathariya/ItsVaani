import "./landingpage.css"
import { Link } from "react-router-dom";
const LandingPage=()=>{
    return (
        <div className="landingpage">
            <div className="all-posts">
                <Link to="/title">hello</Link>
            </div>
        </div>
    )
}
export default LandingPage;