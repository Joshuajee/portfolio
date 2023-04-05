import Link from "next/link"
import { useScroll } from "@/hooks/windows"

const navs = [
    { name: "About", link: ""},
    { name: "Experience", link: ""},
    { name: "Projects", link: ""}
]

const Navbar = () => {

    const scrollPosition = useScroll()

    const trigger = scrollPosition > 80

    return (
        <nav className={`${trigger && "shadow-lg backdrop-blur-xl bg-[#09192F]/50 z-10"} fixed w-full flex justify-between py-4 px-10`}>

            <div className="text-white">Logo</div>

            <ul className="hidden md:flex items-center text-[#8892B0] text-xs">

                {
                    navs.map((nav, index) => {
                        return (
                            <li data-aos-delay={Number(index) * 100} data-aos="fade-down" className="mx-4" key={index}>
                                <Link href="#first-section">
                                    {nav.name} 
                                </Link>
                            </li>
                        )
                    })

                }

                <li data-aos="fade-down" data-aos-delay={navs.length * 100}>
                    <button role={"button"} className="border-[#5EF4DA] border-[1px] py-2 px-3 rounded">
                        My Resume
                    </button>
                </li>


            </ul>

        </nav>
    )
}

export default Navbar