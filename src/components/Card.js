import Image from "next/image";
import Link from "next/link";
import styles from "co-mission/styles/Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

export default function Card({ href }) {
    return (
        <Link href="" className={styles.card}>
            <Image className={styles.img} src={href} fill alt="" />
            <div className={styles.info}>
                <div className={styles.price}>
                    <FontAwesomeIcon className="fa-2xl" icon={faSackDollar} />
                    <div>
                        <p>Starting at...</p>
                        <p>$100</p>
                    </div>
                </div>
            </div>
            <div className={styles.filter}></div>
        </Link>
    );
}
