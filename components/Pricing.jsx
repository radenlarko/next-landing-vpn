import React from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline";
import Maps from "../public/assets/HugeGlobal.svg";
import Testimoni from "./Testimoni";

const data = [
  {
    title: "Free Plan",
    list: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    price: "Free",
    unit: "",
  },
  {
    title: "Standard Plan",
    list: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
    price: "$9",
    unit: "/ mo",
  },
  {
    title: "Premium Plan",
    list: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
    price: "$12",
    unit: "/ mo",
  },
];

const partner = [
  {
    name: "amazon",
    src: "/assets/Icon/amazon.png",
  },
  {
    name: "netflix",
    src: "/assets/Icon/netflix.png",
  },
  {
    name: "reddit",
    src: "/assets/Icon/reddit.png",
  },
  {
    name: "discord",
    src: "/assets/Icon/discord.png",
  },
  {
    name: "spotify",
    src: "/assets/Icon/spotify.png",
  },
];

const listTestimoni = [
  {
    name: "iezh Robert",
    image: "/assets/people-3.png",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
  {
    name: "iezh Robert",
    image: "/assets/people-3.png",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
  {
    name: "iezh Robert",
    image: "/assets/people-3.png",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
  {
    name: "iezh Robert",
    image: "/assets/people-3.png",
    city: "Warsaw",
    country: "Poland",
    rating: "4.5",
    testimoni:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
  },
];

const Price = ({ title, list, price, unit }) => (
  <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
    <div className="p-4 lg:p-0 mt-6 lg:mt-16">
      <Image src="/assets/Free.png" width={145} height={165} alt="Free Plan" />
    </div>
    <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
      {title}
    </p>
    <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
      {list.map((item, idx) => (
        <li key={idx} className="relative check custom-list my-2">
          {item}
        </li>
      ))}
    </ul>
    <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
      <p className="text-2xl text-black-600 text-center mb-4">
        {price === "Free" ? (
          price
        ) : (
          <>
            {price} <span className="text-black-500">{unit}</span>
          </>
        )}
      </p>
      <ButtonOutline>Select</ButtonOutline>
    </div>
  </div>
);

const TitleSection = ({ title, description }) => (
  <>
    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
      {title}{" "}
    </h3>
    <p className="leading-normal mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">
      {description}
    </p>
  </>
);

const Pricing = () => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <TitleSection
            title="Choose Your Plan"
            description="Let's choose the package that is best for you and explore it happily
            and cheerfully."
          />
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {data.map((item, idx) => (
              <Price
                key={idx}
                title={item.title}
                list={item.list}
                price={item.price}
                unit={item.unit}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full my-16">
          <TitleSection
            title="Huge Global Network of Fast VPN"
            description="See LaslesVPN everywhere to make it easier for you when you move
            locations."
          />
          <div className="py-12 w-full px-8 mt-16">
            <Maps className="w-full h-auto" />
          </div>
          <div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap">
            {/* <Netflix className="h-18 w-auto" /> */}
            {partner.map((item) => (
              <Image
                key={item.name}
                src={item.src}
                width={165}
                height={56}
                objectFit="contain"
                className="mt-4 lg:mt-2"
                alt="logo-partner"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full my-16" id="testimoni">
          <TitleSection
            title="Trusted by Thousands of Happy Customer"
            description="These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature."
          />
          <div className="w-full flex flex-col py-12">
            <Testimoni listTestimoni={listTestimoni} />
          </div>
          <div className="relative w-full mt-16">
            <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  Subscribe Now for <br /> Get Special Features!
                </h5>
                <p>Let&apos;s subscribe with us and find the fun.</p>
              </div>
              <ButtonPrimary>Get Started</ButtonPrimary>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
