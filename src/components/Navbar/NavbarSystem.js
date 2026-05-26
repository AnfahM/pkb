import React, { Component } from 'react';

export default class NavbarSystem extends Component {
  scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    return (
      <div>
        <div className="bg-transparent fixed top-0 left-0 w-full z-20">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            <div className="text-xl font-bold m-6">
              <img
                src={`${process.env.PUBLIC_URL}/images/pkblogoicon.png`}
                alt="Logo"
                width={'110px'}
              />
            </div>

            <div className="hidden md:flex space-x-6 text-white">
              <button
                onClick={() => this.scrollToSection('header')}
                className="hover:underline"
              >
                <b>Home</b>
              </button>
              <button
                onClick={() => this.scrollToSection('about-us')}
                className="hover:underline"
              >
                <b>About Us</b>
              </button>
              <button
                onClick={() => this.scrollToSection('services')}
                className="hover:underline"
              >
                <b>Services</b>
              </button>
              <button
                onClick={() => this.scrollToSection('projects')}
                className="hover:underline"
              >
                <b>Projects</b>
              </button>
              <button
                onClick={() => this.scrollToSection('footer')}
                className="hover:underline pr-2"
              >
                <b>Contact Us</b>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-20"></div>
      </div>
    );
  }
}
