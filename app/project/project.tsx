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

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/kanban2.jpg",
    // thumbnail:
    //   "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/fireely.jpg",
    // thumbnail:
    //   "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/auto.jpg",
    // thumbnail:
    //   "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/tradepending.jpg",

    // thumbnail:
    //   "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
