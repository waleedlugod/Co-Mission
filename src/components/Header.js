import styles from "co-mission/styles/Header.module.css"
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className={styles.mainHeader}>

            <div className={styles.headerSearch}>

                <p className={styles.searchMessage}>Search for the art you want, from the creators you love.</p>
                <button className={styles.searchButton}>
                    <div className={styles.searchButtonInner}>
                        <FontAwesomeIcon style={{fontSize:"30px"}} icon={faSearch}></FontAwesomeIcon>
                    </div>
                </button>
                <input className={styles.searchBar}></input>

            </div>

            <div className={styles.headerBG}>
                <div className={styles.headerBGOverlay}></div>
            </div>

        </div>
    );
}