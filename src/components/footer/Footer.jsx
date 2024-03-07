import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="footer-section relative p-5 bg-black flex flex-col items-center w-full">
      <div className="footer-columns flex flex-wrap justify-center 2xl:justify-start text-white *:w-[300px] max-sm:w-full w-3/4 max-sm:p-0 p-10">
        <div className="rock-salt text-2xl py-5 px-10 leading-10 border-r-2 max-lg:border-none flex items-center">
          Where Every Game Begins a Legendary Adventure!
        </div>
        <div className="py-5 px-10">
          <h3 className="menu-header font-bold text-2xl">Follow us</h3>
          <ul className="menu ml-10 *:text-xl">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className="py-5 px-10">
          <h3 className="menu-header font-bold text-2xl">Quick Links</h3>
          <ul className="menu ml-10 *:text-xl">
            <li>
              {" "}
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"allgames"}>All Games</Link>
            </li>
          </ul>
        </div>
        <div className="py-5 px-10">
          <h3 className="menu-header font-bold text-2xl">Contact us</h3>
          <ul className="menu ml-10 *:text-xl">
            <li> GG games</li>
            <li> (123) 456-7890</li>
            <li> info@example.com</li>
          </ul>
        </div>
      </div>
      <h2 className="text-stone-200 max-sm:text-[12px]">
        Copyright © 2024 GG Games | Crafted by Elsayed Elghazy
      </h2>
    </section>
  );
};

export default Footer;
