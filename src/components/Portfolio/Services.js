import React, { Component } from "react";

export default class Services extends Component {
  render() {
    const services = [
      {
        title: "Residential Properties",
        image: `${process.env.PUBLIC_URL}/images/residential.jpeg`,
        desc: "Premium homes and apartments designed for modern families and comfortable living.",
      },
      {
        title: "Commercial Properties",
        image: `${process.env.PUBLIC_URL}/images/commercial.jpeg`,
        desc: "Smart commercial spaces tailored for business growth and long-term value.",
      },
      {
        title: "Land Sales",
        image: `${process.env.PUBLIC_URL}/images/land.jpeg`,
        desc: "Secure residential and commercial land opportunities in prime locations.",
      },
      {
        title: "Smart Investments",
        image: `${process.env.PUBLIC_URL}/images/investment.jpeg`,
        desc: "Professional property investment guidance with future growth potential.",
      },
      {
        title: "Property Management",
        image: `${process.env.PUBLIC_URL}/images/property.jpeg`,
        desc: "Complete maintenance and management solutions for your valuable properties.",
      },
      {
        title: "Legal Assistance",
        image: `${process.env.PUBLIC_URL}/images/legal.jpeg`,
        desc: "Transparent documentation and legal support for hassle-free transactions.",
      },
    ];

    const whatsappLink = "https://wa.me/919037542148";

    return (
      <section
        className="relative py-24 px-6 lg:px-12 overflow-hidden"
        style={{ backgroundColor: "#172621" }}
      >
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-[#D4AF37] uppercase tracking-[4px] text-sm font-semibold">
            Our Services
          </span>

          <h1 className="text-white text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Building Spaces.
            <br />
            <span className="text-[#D4AF37]">
              Creating Futures.
            </span>
          </h1>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            At PKB LANDESK, we provide trusted real estate solutions
            designed to help families, investors, and businesses find
            the perfect property opportunities with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#1E2E29] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-white text-2xl font-semibold mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-400 leading-relaxed text-sm mb-6">
                  {service.desc}
                </p>

                {/* WhatsApp Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: "#D4AF37",
                      color: "#172621",
                    }}
                  >
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        
      </section>
    );
  }
}