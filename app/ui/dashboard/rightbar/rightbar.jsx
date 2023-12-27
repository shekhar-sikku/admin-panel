import Image from 'next/image';
import styles from './rightbar.module.css';
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image className={styles.bg} src="/astronaut.png" alt="" fill />
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>🔥 Available Now</span>
                    <h3 className={styles.title}>
                        How to use the new version of the admin dashboard?
                    </h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        A payment may have a variety of statuses, here is a list of each and what they mean.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.text}>
                    <span className={styles.notification}>🚀 Coming Soon</span>
                    <h3 className={styles.title}>
                        New server actions are available, partial pre-rendering is coming
                        up!
                    </h3>
                    <span className={styles.subtitle}>Boost your productivity</span>
                    <p className={styles.desc}>
                        A transaction type is the combination of a transaction source type and a transaction action
                    </p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightBar;