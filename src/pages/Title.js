import "./title.css"
import img from "../try.webp"
const title=()=>{
    return (
        <div className="post">
            <div className="post-setting">
                <h1>Title</h1>
                <h3>Subheading</h3>
                <h2>Date</h2>
                <h3 className="tags">Tags</h3>
                <div className="content">
                    <h3>content</h3>
                    <h4 className="code">code</h4>
                    <img src={img}></img>
                </div>
            </div>
        </div>
    )
}
export default title;