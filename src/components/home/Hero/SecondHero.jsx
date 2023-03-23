import secondHero from "../../../assets/images/SecondHero.png";
import styles from "./Hero.module.css";
import circleHero from "../../../assets/images/circle_hero.jpg";
import { Container } from "react-bootstrap";

const SecondHero = () => {
  return (
    
    <div className={styles.second_section}>
        <Container className={` ${styles.second_hero_container} h-100 d-flex justify-content-around align-items-center`}>
          <p>
            Your <br />
            <span className="heart_message">heart</span>
            <br />
            <span className="ident-big">
                In Our
                <br />
                <span className="hands_message">hands</span>
            </span>
          </p>
          <div className={styles.circle_hero}>
            <img src={circleHero} alt="circleHero" />
          </div>
        </Container>
      {/* ######## */}
      <div className={styles.background}>
        <img src={secondHero} alt="second Hero" />
      </div>
    </div>
  );
};

export default SecondHero;
