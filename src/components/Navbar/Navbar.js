import React, { Component } from 'react';

export default class Navbar extends Component {
  state = { isMobileMenuOpen: false };

  toggleMobileMenu = () => {
    this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen });
  };

  closeMobileMenu = () => {
    this.setState({ isMobileMenuOpen: false });
  };

  handleClickOutside = (e) => {
    const menuContainer = this.menuRef;
    const buttonContainer = this.buttonRef;

    if (
      menuContainer &&
      !menuContainer.contains(e.target) &&
      !buttonContainer.contains(e.target)
    ) {
      this.closeMobileMenu();
    }
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeMobileMenu();
  };

  render() {
    const { isMobileMenuOpen } = this.state;

    return (
      <div className="fixed w-full flex flex-col md:flex-row bg-transparent z-20">
        <div className="w-full md:w-5/12 flex items-center justify-between bg-transparent shadow-md">
          <img
            src={`${process.env.PUBLIC_URL}/images/pkblogoicon.png`}
            alt="Logo"
            width="90px"
            className='m-2'
          />

          <button
            ref={(ref) => (this.buttonRef = ref)}
            className="md:hidden flex flex-col justify-between h-6 w-8 focus:outline-none z-50 mr-4"
            onClick={this.toggleMobileMenu}
          >
            <div
              className={`h-1 w-8 bg-white rounded transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></div>
            <div
              className={`h-1 w-8 bg-white rounded transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></div>
            <div
              className={`h-1 w-8 bg-white rounded transition-transform duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></div>
          </button>
        </div>

        <div
          ref={(ref) => (this.menuRef = ref)}
          className={`fixed top-0 right-0 h-screen w-full bg-black/70 transform transition-transform duration-300 z-20 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:static md:translate-x-0 md:flex md:w-7/12 md:justify-end md:items-center`}
        >
          <ul className="flex flex-col md:flex-row items-end md:items-center gap-4 md:gap-6 text-lg p-6 relative mt-20 text-[white]">
            {['Home', 'About Us', 'Services', 'Projects', 'Contact Us'].map(
              (item, index) => (
                <li
                  key={item}
                  className={`transform transition-all duration-500 ease-in-out ${
                    isMobileMenuOpen
                      ? `translate-x-0 opacity-100 delay-${index * 200}`
                      : 'translate-x-full opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${isMobileMenuOpen ? index * 200 : 0}ms`,
                  }}
                >
                  <button
                    onClick={() =>
                      this.scrollToSection(
                        item.toLowerCase().replace(' ', '-') === 'home'
                          ? 'header'
                          : item.toLowerCase().replace(' ', '-') === 'contact-us'
                          ? 'footer'
                          : item.toLowerCase().replace(' ', '-')
                      )
                    }
                    className="hover:underline"
                  >
                    {item}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  }
}
