import styles from '@/app/ui/dashboard/products/products.module.css';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import Image from 'next/image';
import Link from 'next/link';
import { fetchProducts } from '@/app/libs/data';
import { deleteProduct } from '@/app/libs/actions';


const ProductsPage = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { count, products } = await fetchProducts(q, page);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder='Search for a product' />
                <Link href='/dashboard/products/add'>
                    <button className={styles.addButton}>Add New Product</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Created At</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>
                                <div className={styles.product}>
                                    <Image src={product.img || '/noproduct.jpg'} alt='' width={40} height={40} className={styles.productImage} />
                                    {product.title}
                                </div>
                            </td>
                            <td>{product.desc}</td>
                            <td>${product.price}</td>
                            <td>{product.createdAt ? product.createdAt?.toString().slice(4, 16) : "10-11-2023"}</td>
                            <td>{product.stock}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/products/${product._id}`}>
                                        <button className={`${styles.button} ${styles.view}`}>View</button>
                                    </Link>
                                    <form action={deleteProduct}>
                                        <input type="hidden" name='id' value={product._id} />
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

export default ProductsPage;