import React, { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const dropUpButtons = document.querySelectorAll(".drop-up");

    dropUpButtons.forEach((button) => {
      button.addEventListener("click", handleWhatsAppClick);
    });

    return () => {
      dropUpButtons.forEach((button) => {
        button.removeEventListener("click", handleWhatsAppClick);
      });
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919037542148", "_blank");
  };

  return (
    <footer className="p-5 md:p-[20px_10vw] flex flex-col items-center gap-5" style={{ backgroundColor: "#172621" }}>
      <hr className="w-full border-t border-white mt-20 mb-12" />

      {/* Top section */}
      <div className="w-full grid md:grid-cols-[1fr_auto_1fr] grid-cols-1 items-center gap-5 relative">
        {/* Logo */}
        <a href="https://wa.me/919037542148" className="flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/pkbfulllogonobg.png`}
            alt="Fiyor Travels Logo"
            className="w-[250px] h-[220px] object-contain"
          />
        </a>

        {/* Contact Info */}
        <div className="flex flex-col md:items-start items-center text-gray-400 text-sm gap-1">
          <p className="text-gray-400 font-semibold text-base mb-1">Contact Us :</p>
          <div className="flex items-center gap-2 md:pl-6">
            <img src="https://cdn-icons-png.flaticon.com/512/455/455705.png" alt="Phone" className="w-4 h-4" />
            <span><b>+91 9037542148</b></span>
          </div>
          <div className="flex items-center gap-2 md:pl-6">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="w-4 h-4" />
            <span><b>abdulbasithpk3844@gmail.com</b></span>
          </div>
          <div className="flex items-center gap-2 md:pl-6">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-4 h-4" />
            <span><b>@pkb.landesk</b></span>
          </div>
        </div>

        {/* Social Icons */}
        <ul className="flex md:flex-col flex-row items-center justify-center gap-5 mt-3">
          <li>
            <a
              href="https://wa.me/919037542148"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full transition-transform hover:scale-110 relative"
            >
              <span className="w-8 h-8 bg-[url('https://cdn-icons-png.flaticon.com/512/733/733585.png')] bg-center bg-no-repeat bg-contain"></span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pkb.landesk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full transition-transform hover:scale-110 relative"
            >
              <span className="w-8 h-8 bg-[url('https://cdn-icons-png.flaticon.com/512/2111/2111463.png')] bg-center bg-no-repeat bg-contain"></span>
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Text */}
      <div className="w-full border-t border-[#191d24] pt-5">
        <p className="text-[#69758c] text-center text-sm">PKB LANDESK. All rights reserved.</p>
      </div>

      {/* Drop-Up Button (Mobile) with WhatsApp icon */}
      <button
        type="button"
        className="flex md:hidden drop-up fixed bottom-[50px] right-[20px] w-12 h-12 rounded-full bg-[#191d24] border border-[rgba(255,255,255,0.3)] shadow-[0_0_15px_rgba(255,255,255,0.5)] items-center justify-center overflow-hidden hover:scale-110 transition-transform z-50"
      >
        <span className="w-6 h-6 bg-[url('https://cdn-icons-png.flaticon.com/512/733/733585.png')] bg-center bg-no-repeat bg-contain"></span>
      </button>
    </footer>
  );
}
