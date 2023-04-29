import Card from "co-mission/components/Card";
import styles from "co-mission/styles/Feed.module.css";

export default function Feed() {
    return (
        <div className={styles.main}>
            <div className={styles.feed}>
                {[...Array(20)].map((curr, idx) => (
                    <Card key={idx} href="/sky.jpg" />
                ))}
            </div>
        </div>
    );
}
