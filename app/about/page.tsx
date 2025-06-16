"use client";
import { GoogleGeminiEffect } from "@/src/components/ui/genimi";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
// import { GoogleGeminiEffect } from "../src/components/ui/genimi";
// import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

export default function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-[400vh] w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="Meet the Developer"
        description={
          <>
            I'm a software engineer specializing in blockchain development, with
            expertise in dApps, smart contracts, and secure Web3 integrations
            using Solidity, Web3.js, and Ethers.js. I build scalable,
            gas-optimized solutions on platforms like Ethereum. I also have
            strong experience in mobile development and the MERN stack within
            microservices architectures. My focus is on creating transparent,
            efficient, and user-centric solutions.
          </>
        }
      />
    </div>
  );
}
