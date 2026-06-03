import React from "react";

const Highlights = () => {
  const features = [
    {
      number: "3+",
      title: "Years Experience",
      desc: "Trusted expertise in real estate solutions and property investments.",
    },
    {
      number: "100+",
      title: "Happy Clients",
      desc: "Successfully helping families and investors find ideal properties.",
    },
    {
      number: "50+",
      title: "Properties Listed",
      desc: "Premium residential and commercial properties in prime locations.",
    },
    {
      number: "24/7",
      title: "Customer Support",
      desc: "Professional guidance and support whenever you need assistance.",
    },
  ];

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#172621" }}
    >
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <div className="flex items-center justify-center mb-5">
            <div className="w-12 h-[2px] bg-[#d7a449] mr-4"></div>

            <span className="uppercase tracking-[4px] text-[#d7a449] text-sm font-semibold">
              Why Choose Us
            </span>

            <div className="w-12 h-[2px] bg-[#d7a449] ml-4"></div>
          </div>

          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Trusted Real Estate
            <br />

            <span className="text-[#d7a449]">
              Solutions For Your Future
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 leading-8">
            We combine trust, professionalism, and market expertise
            to deliver premium real estate experiences for every client.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-[#1E2E29] border border-[#d7a449]/10 rounded-3xl p-8 hover:-translate-y-3 transition duration-500 hover:border-[#d7a449]/40 shadow-xl"
            >

              {/* Number */}
              <h2 className="text-[#d7a449] text-5xl font-bold mb-5 group-hover:scale-110 transition duration-300">
                {item.number}
              </h2>

              {/* Title */}
              <h3 className="text-white text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7 text-sm">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">

          <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug">
            Ready To Find Your
            <span className="text-[#d7a449]">
              {" "}Dream Property?
            </span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Let PKB LANDESK guide you towards smart and secure investments.
          </p>

          <a
            href="https://wa.me/919037542148"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="mt-8 px-8 py-4 rounded-full font-semibold text-sm hover:scale-105 transition duration-300 shadow-lg"
              style={{
                backgroundColor: "#d7a449",
                color: "#172621",
              }}
            >
              Contact On WhatsApp
            </button>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Highlights;