"use client";

import Link from "next/link";
import { DIcons } from "dicons";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",

      sections: [
        {
          id: "about",
          name: "About",
          items: [
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Work", href: "#experience" },
          ],
        },
        {
          id: "features",
          name: "Features",
          items: [
            { name: "Skill", href: "#skills" },
            { name: "Projects", href: "#projects" },
            { name: "Dashboard", href: "" },
          ],
        },
        {
          id: "products",
          name: "Products",
          items: [
            { name: "Gallery", href: "" },
            { name: "Contact", href: "" },
            { name: "Learning", href: "" },
          ],
        },
        // {
        //   id: "designs",
        //   name: "Designs",
        //   items: [
        //     { name: "Design", href: "" },
        //     { name: "Components", href: "/components" },
        //     { name: "Blogs", href: "/blogs" },
        //   ],
        // },
        {
          id: "other",
          name: "Others",
          items: [
            { name: "Graphic", href: "" },
            { name: "3D Icons", href: "" },
            { name: "Colors", href: "" },
          ],
        },
        {
          id: "company",
          name: "Company",
          items: [
            { name: "Contact", href: "" },
            { name: "Terms", href: "" },
            { name: "Privacy", href: "" },
          ],
        },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform `;

export default function Footer() {
  return (
    <footer className="border-ali/20 :px-4 mx-auto w-full border-b border-t bg-black  px-2">
      <div className="relative mx-auto grid  max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex ">
        <Link href="/">
          <p className="flex items-center justify-center rounded-full  ">
            <DIcons.Info className="w-8 text-red-600" />
          </p>
        </Link>
        <p className="bg-transparent text-slate-300 text-center text-xs leading-4 text-primary/60 md:text-left">
          Thank you for visiting my portfolio! I am a passionate and
          results-driven software engineer with a strong focus on blockchain
          development, full-stack engineering, and mobile application
          development. With hands-on experience in Ethereum, Solidity, Node.js,
          React.js, React Native, and Next.js, I specialize in building secure,
          high-performance, and scalable applications. Over the years, I have
          contributed to and led a wide range of projects, including
          decentralized applications (dApps), smart contract platforms, NFT
          marketplaces, mobile logistics apps, and enterprise-grade systems like
          DMS and BOM platforms. I have worked extensively with microservices
          architectures and cloud-based deployments, ensuring efficient,
          maintainable, and future-ready solutions. My approach combines
          technical depth with a keen eye for user experience, allowing me to
          craft digital products that are both powerful and intuitive. Whether
          it&apos;s developing blockchain ecosystems, mobile-first applications,
          or complex web platforms, I am dedicated to delivering innovative
          solutions that drive real-world impact.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border-dotted"> </div>
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-3 flex-row justify-between gap-6 leading-6 md:flex"
            >
              {category.sections.map((section) => (
                <div key={section.name}>
                  <ul
                    role="list"
                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                    className="flex flex-col space-y-2"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <Link
                          href={item.href}
                          className="text-sm text-slate-400 hover:text-slate-100 dark:text-slate-400 hover:dark:text-white md:text-xs"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-b border-dotted"> </div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <Link
            aria-label="Logo"
            href="mailto:prashantgangwar1001@gmail.com"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Mail
              strokeWidth={1.5}
              className="h-5 w-5  text-slate-100"
            />
          </Link>
         
          <Link
            aria-label="Logo"
            href=""
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Instagram className="h-5 w-5 text-slate-100" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://wa.me/"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.WhatsApp className="h-5 w-5  text-slate-100" />
          </Link>
          <Link
            aria-label="Logo"
            href=""
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.GitLab className="h-5 w-5  text-slate-100" />
          </Link>
          <Link
            aria-label="Logo"
            href=""
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.LinkedIn className="h-5 w-5  text-slate-100" />
          </Link>
        </div>
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-400">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <DIcons.Heart className="text-red-600 mx-1 h-4 w-4 animate-pulse" />
          <span> by </span>
          <span className="hover:text-ali dark:hover:text-ali cursor-pointer text-white">
            <Link
              aria-label="Logo"
              className="font-bold"
              href=""
              target="_blank"
            >
              Prashant{""}
            </Link>
          </span>
          -
          <span className="hover:text-ali dark:hover:text-red-600 cursor-pointer text-slate-300">
            <Link aria-label="Logo" className="" href="/">
              Gangwar
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
