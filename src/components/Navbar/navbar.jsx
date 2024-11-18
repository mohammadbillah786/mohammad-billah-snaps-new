import "./navbar.scss";
import { useNavigate } from "react-router-dom";
import FilterIcon from '../../assets/images/Filter.svg';

export default function Navbar({ filterOpen, setFilterOpen}) {

  let navigate = useNavigate();
  function handleClick2() {
    navigate('/');
  }

  function handleClick() {
    if (filterOpen === true) {
      setFilterOpen(false)
    } else {
      setFilterOpen(true);
    }
  }

  return (
    <section className="header">
      <h1 onClick={handleClick2}> Snaps </h1>
      <button onClick={handleClick} className={filterOpen ? "colorTrue" : "colorFalse"}> Filter<img className="navbarIcon" src={FilterIcon}></img> </button>
    </section>
  )
}