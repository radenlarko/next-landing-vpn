import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

const IconContainer = ({ children }) => (
  <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
    {children}
  </div>
);

const Title = ({ children }) => (
  <p className="text-black-600 mb-4 font-medium text-lg">{children}</p>
);

const Ul = ({ children }) => <ul className="text-black-500 ">{children}</ul>;

const Li = ({ children }) => (
  <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
    {children}
  </li>
);

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start">
          <LogoVPN className="h-8 mb-6" />
          <p className="mb-4">
            <strong className="font-medium">LaslesVPN</strong> is a private
            virtual network that has unique features and has high security.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <IconContainer>
              <Facebook className="h-6 w-6" />
            </IconContainer>
            <IconContainer>
              <Twitter className="h-6 w-6" />
            </IconContainer>
            <IconContainer>
              <Instagram className="h-6 w-6" />
            </IconContainer>
          </div>
          <p className="text-gray-400">©2020LaslesVPN</p>
        </div>

        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <Title>Product</Title>
          <Ul>
            <Li>Download</Li>
            <Li>Pricing</Li>
            <Li>Locations</Li>
            <Li>Server</Li>
            <Li>Countries</Li>
            <Li>Blog</Li>
          </Ul>
        </div>

        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <Title>Engage</Title>
          <Ul>
            <Li>LaslesVPN</Li>
            <Li>FAQ</Li>
            <Li>Tutorials</Li>
            <Li>About Us</Li>
            <Li>Privacy Policy</Li>
            <Li>Terms of Service</Li>
          </Ul>
        </div>

        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <Title>Earn Money</Title>
          <Ul>
            <Li>Affiliate</Li>
            <Li>Become Partner</Li>
          </Ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
