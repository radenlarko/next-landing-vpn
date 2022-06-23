import React, { useState, useEffect } from "react";
import Link from "next/link";
import ButtonOutline from "../misc/ButtonOutline";
import LogoVPN from "../../public/assets/Logo.svg";
import { AboutIcon, FeatureIcon, PricingIcon, TestimonialIcon } from "../icons";
import { MyNav, MyNavMobile } from "../navigation";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <header
      className={`fixed top-0 w-full  z-30 bg-white-500 transition-all ${
        scrollActive ? " shadow-md pt-0" : " pt-4"
      }`}
    >
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
        <div className="col-start-1 col-end-2 flex items-center">
          <LogoVPN className="h-8" />
        </div>
        <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
          <MyNav
            to="about"
            onSetActive={() => setActiveLink("about")}
            extendClass={
              activeLink === "about"
                ? "text-orange-500 animation-active"
                : "text-black-500 hover:text-orange-500"
            }
          >
            About
          </MyNav>
          <MyNav
            to="feature"
            onSetActive={() => setActiveLink("feature")}
            extendClass={
              activeLink === "feature"
                ? "text-orange-500 animation-active"
                : "text-black-500 hover:text-orange-500"
            }
          >
            Feature
          </MyNav>
          <MyNav
            to="pricing"
            onSetActive={() => setActiveLink("pricing")}
            extendClass={
              activeLink === "pricing"
                ? "text-orange-500 animation-active"
                : "text-black-500 hover:text-orange-500"
            }
          >
            Pricing
          </MyNav>
          <MyNav
            to="testimoni"
            onSetActive={() => setActiveLink("testimoni")}
            extendClass={
              activeLink === "testimoni"
                ? "text-orange-500 animation-active"
                : "text-black-500 hover:text-orange-500"
            }
          >
            Testimonial
          </MyNav>
        </ul>
        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
          <Link href="/">
            <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                Sign In
            </a>
          </Link>
          <ButtonOutline>Sign Up</ButtonOutline>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <MyNavMobile
              to="about"
              onSetActive={() => setActiveLink("about")}
              extendClass={
                activeLink === "about"
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent"
              }
            >
              <AboutIcon />
              About
            </MyNavMobile>
            <MyNavMobile
              to="feature"
              onSetActive={() => setActiveLink("feature")}
              extendClass={
                activeLink === "feature"
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent"
              }
            >
              <FeatureIcon />
              Feature
            </MyNavMobile>
            <MyNavMobile
              to="pricing"
              onSetActive={() => setActiveLink("pricing")}
              extendClass={
                activeLink === "pricing"
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent"
              }
            >
              <PricingIcon />
              Pricing
            </MyNavMobile>
            <MyNavMobile
              to="testimoni"
              onSetActive={() => setActiveLink("testimoni")}
              extendClass={
                activeLink === "testimoni"
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent"
              }
            >
              <TestimonialIcon />
              Testimonial
            </MyNavMobile>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
