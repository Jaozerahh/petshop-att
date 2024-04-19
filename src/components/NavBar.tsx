import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "agendamento" | "categorias"
}


export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-pink-500 border-b-4 pb-2"

    return (
        <nav className="flex w-full justify-between items-center px-4 py-2 bg-green-800">
            <h1 className="text-4xl font-bold">PetShop</h1>
            <ul className="flex gap-16">
                <li className={active == "dashboard" ? classActive: ""}><Link href="/">dashboard</Link></li>
                <li className={active == "agendamento" ? classActive: ""}><Link href="/agendamento">agendamento</Link></li>
                <li className={active == "categorias" ? classActive: ""}><Link href="/categorias">categorias</Link></li>
            </ul>
            <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
        </nav>
    )
}
