import { useState } from "react";
function MiniNavBar() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="w-full flex justify-end">
      <button
        onClick={handleClick}
        style={{ zIndex: 9999 }}
        className={`fixed mt-5 mr-5
        cursor-pointer
        w-20 h-20
        bg-gray-500
        hover:bg-gray-300
        duration-200
        rounded-br-full rounded-tl-full
        ${open ? " rounded-bl-none  rounded-tr-full" : "rounded-bl-full rounded-tr-none"}
      `}
      ></button>
      <div
        className={`h-screen w-64 z-[-2] bg-teal-800 fixed duration-300 ease-in-out ${open ? "translate-0" : "translate-x-72"}  `}
      >
        <div className="w-full h-auto flex flex-col pt-32 pl-5 text-white text-2xl font-safira">
          <ul>
            <li>
              <a
                href="#home"
                onClick={handleClick}
                className="hover:scale-110 duration-100 ease-in-out hover:text-teal-200 text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={handleClick}
                className="hover:scale-110 duration-100 ease-in-out hover:text-teal-200 text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#tech-stack"
                onClick={handleClick}
                className="hover:scale-110 duration-100 ease-in-out hover:text-teal-200 text-white"
              >
                Tech Stack
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={handleClick}
                className="hover:scale-110 duration-100 ease-in-out hover:text-teal-200 text-white"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#graphic-design"
                onClick={handleClick}
                className="hover:scale-110 duration-100 ease-in-out hover:text-teal-200 text-white"
              >
                Graphic Design
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleClick}
                className="hover:scale-110 duration-100 ease-in-out hover:text-teal-200 text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={handleClick}
        className={`z-[-3] bg-black fixed w-screen h-screen  duration-200 ease-in-out ${open ? "pointer-events-auto opacity-50" : "pointer-events-none opacity-0"} `}
      ></div>
    </div>
  );
}
export default MiniNavBar;
