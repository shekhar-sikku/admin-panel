import './ui/not-found.css';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <h1>404</h1>
                <h2>Oops! This Page Could Not Be Found</h2>
                <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                <Link href="/dashboard">Go To Dashboard</Link>
            </div>
        </div>
    )
}

export default NotFound;