export default function Header(){
    return (
        <header className="h-[4rem] shadow-white/15 shadow-lg mx-4 md:mx-[6rem] rounded-md top-4 sticky bg-gray-700 relative text-gray-100">
            <h1 className="absolute top-4 left-3 text-lg font-semibold">Anwr</h1>
            <div className="absolute top-4 right-4 flex gap-4">
                <a href="https://t.me/meowkrep">Contact</a>
            </div>
        </header>
    )
}