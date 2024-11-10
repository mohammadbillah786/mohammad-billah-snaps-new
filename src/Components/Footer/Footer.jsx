import "./footer.scss";
import FacebookIcon from '../../assets/images/Facebook.svg';
import TwitterIcon from '../../assets/images/X_twitter.svg';
import InstagramIcon from '../../assets/images/Instagram.svg';
import PinterestIcon from '../../assets/images/Pinterest.svg';


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
                <img src={FacebookIcon} alt="Facebook Icon" />
                <img src={TwitterIcon} alt="Twitter Icon" />
                <img src={InstagramIcon} alt="Instagram Icon" />
                <img src={PinterestIcon} alt="Pinterest Icon" />

            </div>
            <h3> © 2024 Snaps  <span> . </span> <span>Terms</span>  <span> Privacy </span>   <span> Cookies</span> </h3>
        </div>
    );
}


