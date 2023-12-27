import styles from '@/app/ui/dashboard/users/users.module.css';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import Image from 'next/image';
import Link from 'next/link';
import { deleteUser } from '@/app/libs/actions';
import { fetchUsers } from '@/app/libs/data';

const UsersPage = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { count, users } = await fetchUsers(q, page);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder='Search for a user' />
                <Link href='/dashboard/users/add'>
                    <button className={styles.addButton}>Add New User</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>
                                <div className={styles.user}>
                                    <Image src={user.img || '/noavatar.png'} alt='' width={40} height={40} className={styles.userImage} />
                                    {user.username}
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.createdAt ? user.createdAt?.toString().slice(4, 16) : "08-11-2023"}</td>
                            <td>{user.isAdmin ? "Admin" : "Client"}</td>
                            <td>{user.isActive ? "Active" : "Passive"}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/users/${user._id}`}>
                                        <button className={`${styles.button} ${styles.view}`}>View</button>
                                    </Link>
                                    <form action={deleteUser}>
                                        <input type="hidden" name='id' value={user._id} />
                                        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}

export default UsersPage;