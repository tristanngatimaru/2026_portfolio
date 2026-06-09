import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function ContactMe() {
  return (
    <div className="flex flex-col items-end text-right">
      <h1 className="select-none font-seg font-bold text-[50px] lg:text-[96px] leading-none drop-shadow-xl">
        CONTACT ME
      </h1>

      <div className="mt-4">
        <p className="select-none font-seg font-light text-[18px] lg:text-[32px] tracking-wide">
          TRISTAN FISHER
        </p>

        <a
          href="mailto:tristanfisher@outlook.co.nz"
          className="text-sm lg:text-lg opacity-80 hover:opacity-100 transition-opacity"
        >
          tristanfisher@outlook.co.nz
        </a>
      </div>

      <div className="flex gap-4 mt-6 text-2xl">
        <a
          href="https://www.facebook.com/Pitchylaroux/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="hover:scale-110 transition-transform" />
        </a>

        <a
          href="https://www.instagram.com/ox_pitchy_xo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:scale-110 transition-transform" />
        </a>

        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="hover:scale-110 transition-transform" />
        </a>

        <a
          href="https://github.com/TristanBaileyFisher"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
}
export default ContactMe;
