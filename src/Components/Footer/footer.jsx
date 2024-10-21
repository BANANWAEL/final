import React, { Component, Fragment } from "react";
import styles from './footer.module.css'; // Corrected filename
import img from "../../assets/logoo.png";

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                

                <div id="footer" className={`footercontainer p-3 ${styles.main}`}>
                    <div className={`container text-center ${styles.container}`}>
                        <div className="icon">
                            <img src={img} alt="Logo" width={"100px"} height={"100px"} />
                        </div>
                        <div className={`${styles.links}`}>
                            <a className={`${styles.link}`} href="#home">Home</a>
                            <a className={`${styles.link}`} href="#traks">Our Specialties</a>
                            <a className={`${styles.link}`} href="#beadiv">Start your Developing Journey</a>
                            <a className={`${styles.link}`} href="#footer">Contact Us</a>
                        </div>
                        <ul className={`${styles.icons}`}>
                            <a className={`${styles.icon}`} href="/"><i className="fa-brands fa-whatsapp"></i></a>
                            <a className={`${styles.icon}`} href="/"><i className="fa-brands fa-facebook"></i></a>
                            <a className={`${styles.icon}`} href="/"><i className="fa-brands fa-twitter"></i></a>
                            <a className={`${styles.icon}`} href="/"><i className="fa-brands fa-instagram"></i></a>
                            <a className={`${styles.icon}`} href="/"><i className="fa-brands fa-linkedin"></i></a>
                        </ul>
                        <p>Copyright &copy; 2024; Designed by <span className="designer">Team.1</span></p>
                    </div>
                </div>
            </Fragment>
        )
    }
}
