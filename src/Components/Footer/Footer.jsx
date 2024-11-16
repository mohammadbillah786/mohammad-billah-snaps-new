import "./footer.scss";
import FacebookIcon from '../../assets/images/Facebook.svg';
import TwitterIcon from '../../assets/images/X_twitter.svg';
import InstagramIcon from '../../assets/images/Instagram.svg';
import PinterestIcon from '../../assets/images/Pinterest.svg';


export default function Footer() {
    return (
        <>
            <section className="footer">
                <h1 className="footer__header"> Snaps </h1>
                <section className="footer__bigger-section">
                    <section className="footer__section">
                        <h3 className="footer__description"> For photographers </h3>
                        <h3 className="footer__description"> Hire talent </h3>
                        <h3 className="footer__description"> Inspiration </h3>
                    </section>
                    <h3 className="footer__break"> a </h3>
                    <section className="footer__section">
                        <h3 className="footer__description"> About </h3>
                        <h3 className="footer__description"> Careers </h3>
                        <h3 className="footer__description"> Support </h3>
                    </section>
                </section>
                <section className="footer__icons">
                    <img className="footer__icon" src={FacebookIcon} alt="Facebook Icon" />
                    <img className="footer__icon" src={TwitterIcon} alt="Twitter Icon" />
                    <img className="footer__icon" src={InstagramIcon} alt="Instagram Icon" />
                    <img className="footer__icon" src={PinterestIcon} alt="Pinterest Icon" />
                </section>
            </section>
            <section className="footer__bottom">
                © 2024 Snaps     .  Terms     Privacy      Cookies
            </section>
        </>
    );
}



