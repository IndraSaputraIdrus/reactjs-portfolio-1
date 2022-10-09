import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Profile from "../assets/profile.png";

function Hero() {
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl text-teal-600 font-medium md:text-6xl">
          Indra Saputra Idrus
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-slate-200">
          Student and Programmer
        </h3>
        <p className="text-md py-5 leading-5 text-gray-800 md:text-lg max-w-xl mx-auto dark:text-gray-300">
          Belajar programming dan web development
        </p>
      </div>

      <div className="text-4xl flex justify-center gap-10 py-3 text-gray-600 dark:text-gray-300">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>

      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <img alt="profile" src={Profile} layout="fill" objectFit="cover" />
      </div>
    </>
  );
}

export default Hero;
