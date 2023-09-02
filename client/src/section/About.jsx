import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex p-24 justify-center pt-15 md:p-24 lg:p-32 gap-5 flex-wrap"
    >
      <div className="min-w-[150px]">
        <img
          src="/images/satoshi.webp"
          alt="My Image"
          className="rounded-full"
        />
      </div>
      <div>
        <h1 className="text-[3rem] font-thin">
          Hi, I'm <span className="font-bold">Satoshi Shirosaka</span>
        </h1>
        <p className="max-w-[800px] mt-10 text-[1.2rem]">
          I'm a <span className="font-bold">Full-Stack developer</span> with
          economics education background and a passion for building web
          applications. I bring a unique blend of technical expertise and
          analytical thinking to every project.
        </p>
      </div>
    </div>
  );
};

export default About;
