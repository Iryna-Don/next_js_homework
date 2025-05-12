import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <Link href="/">Home </Link>
            <Link href="/cars">Cars </Link>
            <Link href="/cars/create">Create A Car </Link>
        </div>
    );
};

export default Menu;