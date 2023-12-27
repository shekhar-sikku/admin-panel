'use client'
import { MdSearch } from 'react-icons/md';
import styles from './search.module.css';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = ({ placeholder }) => {
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleChange = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", 1)

        if (e.target.value) {
            e.target.value.length > 2 && params.set("q", e.target.value)
        } else {
            params.delete("q")
        }
        replace(`${pathname}?${params}`)
    }, 400)

    return (
        <div className={styles.container}>
            <MdSearch />
            <input type="text" name="" id="dashboardSearch" placeholder={placeholder} className={styles.input} onChange={handleChange} />
        </div>
    )
}

export default Search;