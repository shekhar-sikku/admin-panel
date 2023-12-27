'use client'
import styles from './pagination.module.css';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const Pagination = ({ count }) => {
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();

    const page = searchParams.get("page") || 1;
    const params = new URLSearchParams(searchParams);

    const ITEM_PER_PAGE = 6

    const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
    const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

    const handleChangePage = (type) => {
        type === "prev"
            ? params.set("page", parseInt(page) - 1)
            : params.set("page", parseInt(page) + 1);
        replace(`${pathname}?${params}`);
    }

    return (
        <div className={styles.container}>
            <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage("prev")}>Prev</button>
            <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage("next")}>Next</button>
        </div>
    )
}

export default Pagination;