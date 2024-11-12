import "./footer.scss";
import FacebookIcon from '../../assets/images/Facebook.svg';
import TwitterIcon from '../../assets/images/X_twitter.svg';
import InstagramIcon from '../../assets/images/Instagram.svg';
import PinterestIcon from '../../assets/images/Pinterest.svg';

export default function Footer() {
    return (
        <section className="footer">
            <h1 className="footer__header"> Snaps </h1>
            <h3 className="footer__description"> For photographers </h3>
            <h3 className="footer__description"> Hire talent </h3>
            <h3 className="footer__description"> Inspiration </h3>
            <h3 className="footer__break"> a </h3>
            <h3 className="footer__description"> About </h3>
            <h3 className="footer__description"> Careers </h3>
            <h3 className="footer__description"> Support </h3>
            <section className="footer__icons">
                <img src={FacebookIcon} alt="Facebook Icon" className="footer__icon" />
                <img src={TwitterIcon} alt="Twitter Icon" className="footer__icon" />
                <img src={InstagramIcon} alt="Instagram Icon" className="footer__icon" />
                <img src={PinterestIcon} alt="Pinterest Icon" className="footer__icon" />
            </section>
            <h3 className="footer__copyright">
                © 2024 Snaps <span className="footer__dot"> . </span>
                <span className="footer__link">Terms</span>
                <span className="footer__link"> Privacy </span>
                <span className="footer__link"> Cookies</span>
            </h3>
        </section>
    );
}
