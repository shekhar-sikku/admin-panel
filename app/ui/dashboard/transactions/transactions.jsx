import styles from './transactions.module.css';
import Image from 'next/image';

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Latest Transactions
            </h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src='/noavatar.png' alt='' width={40} height={40} className={styles.userImage} />
                                Sikku Sharma
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>08-11-2023</td>
                        <td>$333.77M</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src='/noavatar.png' alt='' width={40} height={40} className={styles.userImage} />
                                Sikku Sharma
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.approved}`}>Approved</span>
                        </td>
                        <td>08-11-2023</td>
                        <td>$333.77M</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src='/noavatar.png' alt='' width={40} height={40} className={styles.userImage} />
                                Sikku Sharma
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                        </td>
                        <td>08-11-2023</td>
                        <td>$333.77M</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions;