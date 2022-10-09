import { BsFillMoonStarsFill } from "react-icons/bs";

function Nav({ setDarkMode, darkMode }) {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons dark:text-slate-200">Ndrainz</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            className="cursor-pointer text-2xl dark:text-slate-200"
            onClick={() => setDarkMode(!darkMode)}
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href="https://github.com/IndraSaputraIdrus"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
