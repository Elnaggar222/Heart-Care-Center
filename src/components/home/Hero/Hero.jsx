import FirstHimg from "../../../assets/images/FirstHero.jpg";
import styles from "./Hero.module.css";
import SecondHero from "./SecondHero";

const Hero = () => {
  return (
    <section>
        <div className={styles.first_hero_img}>
          <img src={FirstHimg} alt="First Hero" />
        </div>
        {/* ##### */}
        <SecondHero />
    </section>
  );
};

export default Hero;
