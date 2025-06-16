"use client";
import { LayoutGrid } from "@/src/components/ui/layout-grid";

export function ProejctLayoutGrid() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Kanban</p>
      <p className="font-normal text-base text-white">
        Technologies: Node.js, React-native, React
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Mobile app for material tracking from entry to delivery using QR code
        generation, scanning, and Bluetooth-enabled printing. Enabled real-time
        status updates, secure data storage, and an intuitive interface for
        seamless logistics management.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Firefly POC</p>
      <p className="font-normal text-base text-white">
        Technologies: Node.js, Hyperledger Firefly.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This POC showcases the capabilities of Hyperledger Firefly, a
        blockchain-based platform, in securely storing JSON data, which will be
        provided in a file, and to verify the capability of the system to handle
        the load of 1000 Tx. By leveraging Firefly&apos;s powerful features and
        robust infrastructure, this POC demonstrates how organizations can
        ensure the integrity, transparency, and immutability of their JSON data.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Automated Crypto Bot
      </p>
      <p className="font-normal text-base text-white">
        Technologies: React js, Node.js, BInanace AMM.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A marketplace for trading bots, on which customers can invest and the
        bot will place orders automatically from the customer&apos;s wallet
        using Binance API on coins for a defined time to maximise the
        user&apos;s profit, and the platform will earn a profit on every
        profitable order.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Tradepending</p>
      <p className="font-normal text-base text-white">
        Technologies: React js, Nodejs, React-expo, MySQL
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        TradePending is all-in-one software for dealerships that includes
        trade-in valuations, payment calculators, digital brochures, video for
        sales teams and service departments, and service offers management on
        your website
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Earnest</p>
      <p className="font-normal text-base text-white">
        Technologies: Node.js, React, MySQL, AWS, PgerDuty, JIra, Bugsnag.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Earnest is a financial platform focused on providing innovative lending
        solutions, helping individuals access loans with flexible terms and
        competitive rates.
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Funding Possibilities
      </p>
      <p className="font-normal text-base text-white">
        Technologies: Next.js, React.js, Express.js, PostgreSQL, Sequelize
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Funding Possibilities specializes in creating customized financial
        solutions to help businesses grow. Whether it&apos;s venture capital for
        startups or strategic funding for established enterprises, the platform
        connects businesses with a network of financial institutions, investors,
        and advisors to meet capital needs with precision.
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">NETZ</p>
      <p className="font-normal text-base text-white">
        Technologies: Node.js, NestJS, React/Shadcn, Ethereum
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        NETZ is redefining global finance by leveraging blockchain technology to
        offer fast, secure, and cost-effective decentralized payments. Whether
        you&apos;re an individual, a business, or an institution, NETZ provides
        seamless solutions for remittances, trade settlements, and treasury
        management.
      </p>
    </div>
  );
};

const SkeletonNine = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Funding Possibilities
      </p>
      <p className="font-normal text-base text-white">
        Technologies: Nest.js, JavaScript, Firebase, PostgreSQL, GCP
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Patriot Claims is your trusted partner, dedicated to helping insurance
        carriers, claims adjusters, and homeowners alike.
      </p>
    </div>
  );
};

const SkeletonEight = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Pluckk – Grocery Delivery Platform
      </p>
      <p className="font-normal text-base text-white">
        Technologies: Next.js, Node.js, MySQL, Python
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Enhanced and maintained the Pluckk grocery delivery platform. Focused on
        developing and improving admin functionalities. Collaborated with the
        team to prioritize bug fixes and feature development. Implemented
        improvements across microservices for seamless integration. Built a web
        scraper using Python and Puppeteer to extract competitor pricing.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/kanban2.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/fireely.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/auto.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/tradepending.jpg",
  },

  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail: "/earnest.png",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail: "/fundingpossiblites.png",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "col-span-1",
    thumbnail: "/netz.png",
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "col-span-1",
    thumbnail: "/pluckk.png",
  },
  {
    id: 9,
    content: <SkeletonNine />,
    className: "col-span-1",
    thumbnail: "/patriot.png",
  },
];
