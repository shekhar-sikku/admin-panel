import Link from "next/link";

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="wrapper">
                <h1>Homepage</h1>
                <div className="links">
                    <Link href='/dashboard'>
                        <button>Dashboard</button>
                    </Link>
                    <Link href='/login'>
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage;