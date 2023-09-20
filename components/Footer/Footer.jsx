import Image from "next/image";
import { findCruLinks, destLinks, popPortsLinks, planCruLinks } from "@/constants/LinkConst";

const Footer = () => {
  return (
    <div className="bg-black/90 text-gray-300 h-fit">
      <div className="container mx-auto">
        <hr />
        <Image
            src="/images/svg/navbar-logo.svg"
            width={150}
            height={150}
            quality={50}
            priority
            alt="navbar-logo.svg"
            className="mx-auto"
          />
        <div className="flex flex-col lg:flex-row py-14 justify-center items-center md:justify-around">
          <div className="flex flex-col lg:flex-row lg:gap-20 text-center lg:text-start">
            <div className="mb-2">
              <h6 className="font-bold mb-1 md:mb-5">FIND A CRUISE</h6>
              <ul>
                {findCruLinks.map((v, i) => (
                  <li className="text-sm pb-1" key={i}>
                    {v.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-2">
              <h6 className="font-bold mb-1 md:mb-5">DESTINATIONS</h6>
              <ul>
                {destLinks.map((v, i) => (
                  <li className="text-sm pb-1" key={i}>
                    {v.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-2">
              <h6 className="font-bold mb-1 md:mb-5">POPULAR PORTS</h6>
              <ul>
                {popPortsLinks.map((v, i) => (
                  <li className="text-sm pb-1" key={i}>
                    {v.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-2">
              <h6 className="font-bold mb-1 md:mb-5">PLAN A CRUISE</h6>
              <ul>
                {planCruLinks.map((v, i) => (
                  <li className="text-sm pb-1" key={i}>
                    {v.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row justify-between items-center py-3">
          <div className="inline-flex mb-2 md:mb-0">
            <a className="text-gray-500 cursor-pointer hover:text-gray-700">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
          <div className="text-sm">
            <p>All Rights are Wrong</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;