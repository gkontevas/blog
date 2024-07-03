import Link from 'next/link';

const Header = () => {

    return (
        <header className="px-12 py-6 bg-black" id="peggy">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-800">Logo</div>
                <div className="flex gap-8 text-2xl text-white">
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/add">Add</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
