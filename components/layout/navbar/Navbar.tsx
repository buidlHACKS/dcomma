import Link from "next/link";
import { useRouter } from "next/router";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const sections = [
  {
    title: "ADDRESS",
    links: [
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 11.15H7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 11.15V6.53003C2 4.49003 3.65 2.84003 5.69 2.84003H11.31C13.35 2.84003 15 4.11002 15 6.15002"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.48 12.2C16.98 12.68 16.74 13.42 16.94 14.18C17.19 15.11 18.11 15.7 19.07 15.7H20V17.15C20 19.36 18.21 21.15 16 21.15H6C3.79 21.15 2 19.36 2 17.15V10.15C2 7.94002 3.79 6.15002 6 6.15002H16C18.2 6.15002 20 7.95002 20 10.15V11.6H18.92C18.36 11.6 17.85 11.82 17.48 12.2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 12.62V14.68C22 15.24 21.54 15.7 20.97 15.7H19.04C17.96 15.7 16.97 14.91 16.88 13.83C16.82 13.2 17.06 12.61 17.48 12.2C17.85 11.82 18.36 11.6 18.92 11.6H20.97C21.54 11.6 22 12.06 22 12.62Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        label: "Balance checker",
        link: "/",
      },
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.01 18.51L15.06 13.56"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.06 13.56L11.52 17.1C10.74 17.88 9.47 17.88 8.69 17.1L4.44999 12.86C3.66999 12.08 3.66999 10.81 4.44999 10.03L11.52 2.96C12.3 2.18 13.57 2.18 14.35 2.96L18.59 7.20002C19.37 7.98002 19.37 9.25001 18.59 10.03L15.06 13.56Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 21H8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.56 7.92001L13.63 14.99"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        label: "Transactions",
        link: "/transactions",
      },
    ],
  },
  {
    title: "NFT",
    links: [
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.01001 11.22V15.71C3.01001 20.2 4.81001 22 9.30001 22H14.69C19.18 22 20.98 20.2 20.98 15.71V11.22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.66999L8.99999 8.68C8.81999 10.51 10.17 12 12 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.31 12C20.33 12 21.81 10.36 21.61 8.35L21.33 5.6C20.97 3 19.97 2 17.35 2H14.3L15 9.01C15.17 10.66 16.66 12 18.31 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.64 12C7.29 12 8.78 10.66 8.94 9.01L9.16 6.8L9.64001 2H6.59C3.97001 2 2.97 3 2.61 5.6L2.34 8.35C2.14 10.36 3.62 12 5.64 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        label: "NFT market",
        link: "/nft",
      },
    ],
  },
  // {
  //   title: "Tools",
  //   links: [
  //     {
  //       icon: (
  //         <svg
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             fillRule="evenodd"
  //             clipRule="evenodd"
  //             d="M3 2C3.55228 2 4 2.44772 4 3V19C4 19.5523 4.44772 20 5 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2Z"
  //             fill="currentColor"
  //           />
  //           <path
  //             fillRule="evenodd"
  //             clipRule="evenodd"
  //             d="M7 8C7.55228 8 8 8.44772 8 9V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17V9C6 8.44772 6.44772 8 7 8Z"
  //             fill="currentColor"
  //           />
  //           <path
  //             fillRule="evenodd"
  //             clipRule="evenodd"
  //             d="M11 14C11.5523 14 12 14.4477 12 15V17C12 17.5523 11.5523 18 11 18C10.4477 18 10 17.5523 10 17V15C10 14.4477 10.4477 14 11 14Z"
  //             fill="currentColor"
  //           />
  //           <path
  //             fillRule="evenodd"
  //             clipRule="evenodd"
  //             d="M15 4C15.5523 4 16 4.44772 16 5V17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17V5C14 4.44772 14.4477 4 15 4Z"
  //             fill="currentColor"
  //           />
  //           <path
  //             fillRule="evenodd"
  //             clipRule="evenodd"
  //             d="M19 10C19.5523 10 20 10.4477 20 11V17C20 17.5523 19.5523 18 19 18C18.4477 18 18 17.5523 18 17V11C18 10.4477 18.4477 10 19 10Z"
  //             fill="currentColor"
  //           />
  //         </svg>
  //       ),
  //       label: "Events",
  //       link: "/events",
  //     },
  //   ],
  // },
];

export const Navbar = () => {
  const router = useRouter();

  const isMatch = (path: string) => {
    if (path === "/") {
      return router.asPath === path;
    }
    return (
      router.asPath.includes(path) &&
      (router.asPath.length === path.length || router.asPath !== "/")
    );
  };

  return (
    <nav className="h-screen px-6 pt-4 bg-white w-72 rounded-2xl dark:bg-gray-700">
      <div className="py-2 my-4 mb-8 ">
       <img width={"85%"}  src="https://i.imgur.com/kJ1M74H.png"></img>
      </div>

      {sections.map(section => {
        return (
          <div key={section.title}>
            <p className="w-full pb-2 mb-4 ml-2 font-normal text-gray-400 border-b-2 border-gray-100 text-md">
              {section.title}
            </p>

            {section.links.map(link => {
              return (
                <Link
                  className="relative flex items-center justify-start font-thin text-gray-500 dark:text-gray-300"
                  href={link.link}
                  key={link.label}
                >
                  <a
                    className={`${
                      isMatch(link.link)
                        ? "bg-indigo-100 text-indigo-700 "
                        : "hover:text-gray-800 dark:text-white hover:bg-gray-100"
                    } flex items-center p-3 my-4 rounded-xl transition-colors duration-200 cursor-pointer  dark:hover:text-white dark:hover:bg-gray-600`}
                  >
                    <span className="text-left">{link.icon}</span>
                    <span className="mx-4 text-lg font-normal">
                      {link.label}
                    </span>
                    {isMatch(link.link) && (
                      <img
                        src="/images/selected.svg"
                        className="absolute right-0"
                      />
                    )}
                  </a>
                </Link>
              );
            } ) }
            
          </div>
        );

      } ) }
         <p className="w-full mt-12 pb-2 mb-4 ml-2 font-normal text-gray-400 border-b-2 border-gray-100 text-md">
              AUTHENTICATION
      </p>
        <div className="mb-8">

           <ConnectButton chainStatus="icon" showBalance={false}></ConnectButton>

       </div>

    </nav>
  );
};
