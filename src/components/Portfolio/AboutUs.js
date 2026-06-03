import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <section
        className="relative py-24 overflow-hidden"
        style={{ backgroundColor: "#172621" }}
      >
        {/* Background Glow */}
        

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT IMAGE */}
            <div className="relative flex justify-center">

              {/* Border */}
              <div className="absolute -top-5 -left-5 w-[92%] h-full border-2 border-[#d7a449] rounded-3xl"></div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl w-full max-w-md">

                <img
                  src={`${process.env.PUBLIC_URL}/images/basithposterstory.png`}
                  alt="Founder"
                  className="w-full h-[580px] object-cover hover:scale-105 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="max-w-lg">

              {/* Small Title */}
              <div className="flex items-center mb-5">
                <div className="w-12 h-[2px] bg-[#d7a449] mr-4"></div>

                <span className="uppercase tracking-[4px] text-[#d7a449] text-sm font-semibold">
                  About PKB LANDESK
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-7">
                Turning Properties
                <br />

                <span className="text-[#d7a449]">
                  Into Smart Investments
                </span>
              </h1>

              {/* Short Content */}
              <div className="space-y-5 text-gray-300 text-base leading-8">

                <p>
                  <span className="text-white font-semibold">
                    PKB LANDESK
                  </span>{" "}
                  delivers trusted real estate solutions focused on
                  premium homes, commercial spaces, and valuable land
                  investments.
                </p>

                <p>
                  With professionalism, transparency, and market
                  expertise, we help clients make confident property
                  decisions that create long-term value and growth.
                </p>

              </div>

              {/* Quote */}
              <div className="mt-8 border-l-4 border-[#d7a449] pl-5">
                <h3 className="text-2xl italic text-white leading-relaxed font-light">
                  “Where dreams find an address.”
                </h3>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">

                <a
                  href="https://wa.me/919037542148"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="px-7 py-3 rounded-full font-semibold text-sm hover:scale-105 transition duration-300 shadow-lg"
                    style={{
                      backgroundColor: "#d7a449",
                      color: "#172621",
                    }}
                  >
                    Contact Us
                  </button>
                </a>

                

              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}