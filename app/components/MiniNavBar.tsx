import { useState } from "react";
function MiniNavBar() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="fixed">
      <button
        onClick={handleClick}
        className={`
        cursor-pointer
        w-20 h-20
        bg-gray-500
        hover:bg-gray-300
        duration-200
        rounded-br-full rounded-tl-full
        ${open ? " rounded-bl-none  rounded-tr-full" : "rounded-bl-full rounded-tr-none"}
      `}
      ></button>
    </div>
  );
}
export default MiniNavBar;
