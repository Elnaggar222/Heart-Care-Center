import {NavLink } from 'react-router-dom';
import styles from './Modal.module.css';


const Modal = ({ closeModal }) => {
  return (
    <nav>
      <ul className={styles.links}>
        <li> <NavLink className={styles["nav-link"]} to="/login" > LOG IN       </NavLink>   </li>
        <li> <NavLink className={styles["nav-link"]} to="/signUp"> SIGN UP     </NavLink>   </li>
        <li> <NavLink className={styles["nav-link"]} to="/" end  > HOME           </NavLink>   </li>
        <li> <NavLink className={styles["nav-link"]} to="/contact" > CONTACT </NavLink>   </li>
        <li> <NavLink className={styles["nav-link"]} to="/blogs/new" > NEW POST  </NavLink>   </li>
      </ul>
    </nav>
  );
};

export default Modal;
