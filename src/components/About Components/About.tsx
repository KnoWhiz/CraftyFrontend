/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <div className="flex pt-40 pb-10 px-24 items-center gap-x-20">
      <div className="flex flex-col gap-y-6 justify-start items-baseline w-1/2 font-raleway leading-8">
        <h1 className="text-title font-bold mb-3">About Us</h1>
        <p className="text-xl">
          At Crafty, we believe that every educator deserves the tools to create
          engaging and effective video content without the hassle. That&apos;s
          why we&apos;ve developed an AI-powered platform that simplifies the
          video creation process from start to finish.
        </p>
        <p className="text-xl">
          Our mission is to revolutionize the way educators deliver lessons by
          providing them with a powerful yet user-friendly platform. Crafty
          empowers educators to focus on what truly matters: crafting
          exceptional learning experiences for their students.
        </p>
        <p className="text-xl">
          By combining the latest advancements in artificial intelligence with a
          deep understanding of educational needs, we&apos;ve created a tool
          that automates many of the time-consuming tasks involved in video
          production. From scriptwriting and slide generation to video editing
          and publishing, Crafty handles it all.
        </p>
        <p className="text-xl">
          Our team is composed of passionate educators, experienced developers,
          and AI experts who share a common goal: to make a positive impact on
          education. We are committed to continuous improvement and tailoring
          Crafty to meet the evolving needs of educators worldwide.
        </p>
      </div>
      <div className="max-w-2/5">
        <img
          src="./assets/illustrations/about-placeholder.png"
          alt="About Placeholder"
        />
      </div>
    </div>
  );
};

export default About;
