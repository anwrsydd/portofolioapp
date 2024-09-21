import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="m-10 md:mx-[20rem]">
      <p className="text-lg md:mx-[14rem] mx-16">Good Morning</p>
      <div className="flex flex-col items-center justify-center">
        <Image className="justify-center rounded-xl shadow-md" src={"/images/patrick.png"} width={250} height={60} alt="Patrick" />
        <p className="text-lg font-semibold">I&apos;m Anwar Syadad</p>
        <p className="text-base">Still learning about  Next.JS Framework</p>
        <div className="flex gap-1.5">
          <FontAwesomeIcon icon={faGithub}  className="mt-0.5"/>
          <Link href={"https://github.com/anwrsydd"}>Github</Link>
        </div>
        <div className="flex gap-1.5">
          <FontAwesomeIcon icon={faInstagram}  className="mt-0.5"/>
          <Link href={"https://instagram.com/anwr.syd"}>Instagram</Link>
        </div>
      </div>
      <div className="md:mx-[13rem] mx-16">
        <h2 className="font-semibold">Here&apos;s some of my projects:</h2>
        <ul>
          <li className="border h-[4rem] p-3 rounded-lg">
            <a href="https://github.com/anwrsydd/jeketisr">
              <h3 className="font-semibold text-blue-600">JeketiSR</h3>
              <p className="text-sm">JKT48 fanmade website</p>
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}
