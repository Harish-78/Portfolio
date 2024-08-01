import { Button, Drawer, Menu } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  MenuFoldOutlined,
  HomeOutlined,
  InfoOutlined,
  ProjectOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const list = [
    {
      label: "Home",
      to: "/",
      icon: <HomeOutlined />,
      gap: false,
    },
    {
      label: "About",
      to: "/about",
      icon: <InfoOutlined />,
      gap: false,
    },
    {
      label: "Projects",
      to: "/projects",
      icon: <ProjectOutlined />,
      gap: false,
    },
    {
      label: "Contact",
      to: "/contact",
      icon: <PhoneOutlined />,
      gap: false,
    },
    {
      label: (
        <div className="flex justify-start ml-5">
          <Button>Resume</Button>
        </div>
      ),
      to: "/resume",
      gap: true,
    },
  ];

  const handleOnclick = (route) => {
    navigate(`${route}`);
  };

  return (
    <div className="w-full shadow-sm bg-white  flex justify-between">
      <div className="flex items-center ">
        <img
          src="https://cdn-icons-png.freepik.com/256/10327/10327368.png?ga=GA1.1.1109276746.1711880727&semt=ais_hybrid"
          alt="icons"
          className="ml-4  w-10 h-10"
        />
        <h6 className="ml-4 font-semibold font-sans">Portfolio</h6>
      </div>
      <div className="hidden lg:flex md:flex   items-center mr-2">
        {list?.length
          ? list
              .filter((x, index) => x?.gap === false)
              .map((item, index) => (
                <div
                  className={`m-2  flex cursor-pointer 
                  underline-hover`}
                  onClick={() => handleOnclick(item?.to)}
                  key={index}
                >
                  <p className="m-2 font-sans text-[13px] mt-3">
                    {item?.label}{" "}
                  </p>
                </div>
              ))
          : null}
        <Button>Resume</Button>
      </div>
      <div className="flex sm:hidden m-4 ">
        <Button type="default" className="w-2" onClick={showDrawer}>
          <MenuFoldOutlined />
        </Button>
      </div>
      <Drawer
        title="Basic Drawer"
        placement={"right"}
        closable={false}
        width={250}
        onClose={onClose}
        open={open}
        key={"right"}
      >
        <Menu
          style={{
            width: 256,
          }}
          mode="inline"
          items={list}
        />
      </Drawer>
    </div>
  );
};

export default Navbar;
