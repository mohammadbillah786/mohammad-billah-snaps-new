import "./footer.scss";

export default function Footer() {
    return (
        <div>
            <h1 className="header"> Snaps </h1>
            <h3 className="description"> For photographers </h3>
            <h3 className="description"> Hire talent </h3>
            <h3 className="description"> Inspiration </h3>
            <h3 className="break"> a </h3>
            <h3 className="description"> About </h3>
            <h3 className="description"> Careers </h3>
            <h3 className="description"> Support </h3>
            <div className="icons">
                <img src="src\assets\images\Facebook.svg"></img>
                <img src="src\assets\images\X_twitter.svg"></img>
                <img src="src\assets\images\Instagram.svg"></img>
                <img src="src\assets\images\Pinterest.svg"></img>
            </div>
            <h3> © 2024 Snaps  <span> . </span> <span>Terms</span>  <span> Privacy </span>   <span> Cookies</span> </h3>
        </div>
    );
}


