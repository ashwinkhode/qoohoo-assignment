import Link from "next/link";
import Image from "next/image";
import {
  RiUserLine,
  RiMenu2Line,
  RiHeartLine,
  RiShoppingBag3Line,
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiAddFill,
  RiArrowRightSLine,
} from "react-icons/ri";
import { IoLogoDeviantart } from "react-icons/io5";
import { Blob1, Blob2 } from "../components/svg";

const HEADER_LINKS = [
  {
    title: "NEW",
    href: "/",
  },
  {
    title: "SALE",
    href: "/",
  },
  {
    title: "MAN",
    href: "/",
  },
  {
    title: "WOMEN",
    href: "/",
  },
];

export default function Home() {
  return (
    <div className="min-w-full min-h-screen flex flex-col justify-between items-stretch">
      {/* HEADER */}
      <header className="min-w-full flex justify-between items-center font-bold">
        <div className="w-4/5 flex items-center border-b-2 border-r-2 border-gray-200 bg-green-50 cursor-pointer">
          <div className="px-6 py-4">
            <Link href="/" passHref>
              <RiMenu2Line className="text-xl" />
            </Link>
          </div>
          <div className="px-6 py-4 border-l-2 border-r-2 border-gray-200 cursor-pointer">
            <Link href="/" passHref>
              <IoLogoDeviantart className="text-xl" />
            </Link>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex space-x-1 px-4 ">
              {HEADER_LINKS.map((item) => (
                <button key={item.title} className="px-6 py-4 font-bold">
                  <Link href={item.href}>{item.title}</Link>
                </button>
              ))}
            </div>
            <div className="flex items-center px-4">
              <div className="relative px-6 py-4 cursor-pointer">
                <Link href="/" passHref>
                  <RiHeartLine className="text-xl" />
                </Link>
                <div className="absolute top-2 right-4 px-1 bg-black text-white text-xs font-bold rounded-full">
                  0
                </div>
              </div>
              <button className="font-bold px-6 py-4" onClick={() => {}}>
                SEARCH
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/5 flex justify-center items-center">
          <button className="px-6 py-4">
            <RiShoppingBag3Line className="text-xl" />
          </button>
          <button className="px-6 py-4">
            <RiUserLine className="text-xl" />
          </button>
        </div>
      </header>

      {/* HERO */}
      <main className="relative flex-1 flex justify-between items-stretch bg-green-50">
        <div className="relative w-4/5 flex justify-around border-r-2 border-gray-200 z-0">
          <Blob1 className="absolute top-8 h-full z-[-1] opacity-50" />
          <Blob2 className="absolute h-full z-[-1]" />
          <div className="absolute -bottom-24">
            <Image
              src="/main_lady.png"
              alt="lady in orange dress"
              width="600"
              height="600"
            />
          </div>
          <div className="w-2/4 flex justify-start items-center space-x-12 mx-16">
            <h1 className="text-3xl mt-24 font-bold">
              TIED GREEN <br /> V-NECK SHIRT
            </h1>
            <div>
              <button
                className="mt-24 px-3 py-3 rounded-full bg-black text-white"
                onClick={() => {}}
              >
                <RiAddFill className="text-xl" />
              </button>
            </div>
          </div>
          <div className="w-1/4 flex space-y-8 flex-col justify-center">
            {[1, 2].map((item) => (
              <article
                key={item}
                className="mx-auto bg-white flex justify-between items-stretch rounded-2xl shadow-2xl cursor-pointer"
              >
                <div className="w-1/2 p-4 space-y-2">
                  <h1 className="text-xs">Medium Crossbody Bag</h1>
                  <p className="text-xs font-bold">$34</p>
                </div>
                <div className="relative w-1/2">
                  <Image
                    src="/purse.png"
                    alt="yellow purse"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative w-1/5 flex items-center bg-white">
          <button className="absolute top-1/2 -left-6 bg-white px-3 py-3 rounded-full text-red-400 border-2 border-red-300">
            <RiArrowRightSLine className="text-xl" />
          </button>
          <div className="relative h-[400px] overflow-hidden">
            <div className="w-full absolute top-1/2 left-0 rotate-90 z-10 font-bold text-4xl h1-stroke-effect">
              SUMMER 2020
            </div>
            <Image
              src="/summer_lady.png"
              alt="summer lady"
              width="400"
              height="500"
              layout="fixed"
              objectPosition="top center"
              className="z-10"
            />
            <div className="absolute top-0 left-1/2 bg-[#DECAC9] w-full h-full z-0"></div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="min-w-full flex justify-between items-center font-bold">
        <div className="w-4/5 bg-green-50 flex space-x-2 px-16 py-8 border-r-2 border-gray-200">
          <div className=" px-1.5 py-1 rounded border-2 border-gray-200">
            <Link href="/" passHref>
              <RiFacebookFill className="text-xl" />
            </Link>
          </div>
          <div className=" px-1.5 py-1 rounded border-2 border-gray-200">
            <Link href="/" passHref>
              <RiInstagramLine className="text-xl" />
            </Link>
          </div>
          <div className=" px-1.5 py-1 rounded border-2 border-gray-200">
            <Link href="/" passHref>
              <RiTwitterFill className="text-xl" />
            </Link>
          </div>
        </div>
        <div className="w-1/5 font-bold text-center">SIZE GUIDE &gt;</div>
      </footer>
    </div>
  );
}
