import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const list = [
    {
      link: "Home",
      icon: "https://cdn-icons-png.freepik.com/256/2673/2673694.png?ga=GA1.1.1847498234.1706074892&semt=ais",
      to: "/",
    },
    {
      link: "About",
      icon: "https://cdn-icons-png.freepik.com/256/3122/3122785.png?ga=GA1.1.1847498234.1706074892",
      to: "/about",
    },
    {
      link: "Projects",
      icon: "https://cdn-icons-png.freepik.com/256/2702/2702943.png?ga=GA1.1.1847498234.1706074892&semt=ais",
      to: "/projects",
    },
    {
      link: "Resume",
      icon: "https://cdn-icons-png.freepik.com/256/3479/3479188.png?ga=GA1.1.1847498234.1706074892&semt=ais",
      to: "/resume",
    },
    {
      link: "Blogs",
      icon: "https://cdn-icons-png.freepik.com/256/2740/2740423.png?ga=GA1.1.1847498234.1706074892&semt=ais",
      to: "/blogs",
    },
  ];

  const handleOnclick = (route) => {
    navigate(`${route}`);
  };

  return (
    <div className="w-full shadow-sm  flex justify-between">
      <div className="flex items-center ">
        <img
          src="https://cdn-icons-png.freepik.com/256/10327/10327368.png?ga=GA1.1.1109276746.1711880727&semt=ais_hybrid"
          alt="icons"
          className="ml-4  w-10 h-10"
        />
        <h6 className="ml-4 font-semibold font-sans">Portfolio</h6>
      </div>
      <div className="flex ">
        {list?.length
          ? list.map((item, index) => (
              <div
                className={`m-2  flex cursor-pointer 
                  underline-hover`}
                onClick={() => handleOnclick(item?.to)}
                key={index}
              >
                <p className="m-2 font-sans text-[13px] mt-3">{item?.link} </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Navbar;
