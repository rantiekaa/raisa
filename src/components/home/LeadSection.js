import React from "react";
import Navbar from "../layout/Navbar";
import image from "../../assets/imgs/tying-shoelaces.png";
import Bolt from "../../assets/imgs/bolt.svg";
import ButtonOrder from "../common/ButtonOrder";
import { useNavigate } from "react-router-dom";

function LeadSection() {
  const navigate = useNavigate()

  const onGetYoursClick = () => {
    navigate('/detail-product')
  }

  return (
    <section className="relative">
      <Navbar />
      <img
        src={image}
        alt="Tying Shoelaces"
        className="absolute top-0 left-0 2xl:left-32 -z-10"
      />
      <div className="flex justify-end pr-32 2xl:pr-64 pt-64 2xl:pt-80">
        <div className="w-min">
          <div className="font-peace-sans text-pink flex flex-col gap-7">
            <div className="text-5xl 2xl:text-6xl -rotate-6 -ml-2">
              JUST NEED <span className="scratch relative">SOCKS</span>
            </div>
            <div className="text-6xl 2xl:text-7xl -rotate-2">
              AND IT WILL BE
            </div>
            <div className="text-8xl 2xl:text-9xl rotate-2">PERFECT!</div>
          </div>
          <p className="w-3/5 mb-5">
            THE ULTIMATE STYLE SIDEKICKS CRAFTED TO INJECT A BURST OF
            PERSONALITY INTO EVERY STRIDE YOU TAKE
          </p>
          <ButtonOrder
            onClick={onGetYoursClick}
            title="Get Yours!"
          />
        </div>
      </div>
      <img
        src={Bolt}
        alt="Bolt"
        className="w-full absolute z-10 -bottom-72 2xl:-bottom-[22rem]"
      />
    </section>
  );
}

export default LeadSection;
