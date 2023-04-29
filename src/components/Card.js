import Image from "next/image";
import Link from "next/link";
import styles from "co-mission/styles/Card.module.css";

export default function Card({ href }) {
    return (
        <Link href="" className={styles.card}>
            <Image className={styles.img} src={href} fill alt="" />
            <div className={styles.info}>
                <p className={styles.price}>$100</p>
                <p className={styles.add}>ADD</p>
            </div>
            <div className={styles.filter}></div>
        </Link>
    );
}
