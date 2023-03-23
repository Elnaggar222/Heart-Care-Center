import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { Heartbeat} from "phosphor-react"
import { useEffect, useRef, useState } from 'react'
import Modal from '../../UI/modal/Modal'


const NavLinks = ({children,route,end=false}) => {

    return(
        <Nav.Link as="span">
            <NavLink className={styles.navLink} to={route} end={end} >
                {children}
            </NavLink>
        </Nav.Link>
    ) 
}

// bg="dark"
const Header = () => {

    const [showModal,setShowModal] = useState(false)

    const isMount = useRef(false)
    const [isScrolled,setIsScrolled] = useState(false)
    useEffect(()=>{
        if(!isMount.current){
            window.addEventListener("scroll",()=>{
                if(window.scrollY > 60){
                    setIsScrolled(true)
                }else{
                    setIsScrolled(false)
                }
            })
            isMount.current = true
        }
    },[])



    return (
        <header className={`${styles.header} ${isScrolled ? 'scrolled' : ''}`}>
            <Navbar variant="dark"> 
                <Container>
                    <Navbar.Brand as="span" >
                        <NavLink className={styles.try} route="/">
                            <div className={`${styles.heart_logo} d-flex justify-content-center align-items-center gap-2`} >
                                <Heartbeat weight="fill" />
                                <div>Heart Care Center</div>
                            </div>
                        </NavLink>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                    {!showModal &&(
                        <>
                            <NavLinks route="/" end>HOME</NavLinks>
                            <NavLinks route="/blogs" end>CONTACT</NavLinks>
                            <NavLinks route="/blogs/new">NEW POST</NavLinks>
                            <NavLinks route="/login" >LOG IN</NavLinks>
                            <NavLinks route="/login" >SIGN UP</NavLinks>
                        </>
                    )}
                        <Button onClick={() => setShowModal((showModal)=>!showModal)} className={styles.choicesIcon}>+</Button>
                        
                    </Nav>
                        <div className={`${styles["Modal-overlay"]} ${showModal ?'appear':''}`}>
                            <Modal closeModal={()=>setShowModal(false)} />
                        </div>
                        {showModal ?(
                            <div className={styles.Big_Overlay} onClick={()=>setShowModal(false)}>
                            </div>
                        ):null}
                </Container>
            </Navbar>
        </header>
    )
}

export default Header