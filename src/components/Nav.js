import React, { useEffect, useState } from 'react';
import { SectionIds } from './SectionIds';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link as LinkRouter } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Nav = () => {
  const [activeLink, setActiveLink] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const marginTop = 0;
      const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  const determineActiveSection = () => {
    for (let i = SectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(SectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(SectionIds[i]);
          break;
        }
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getIconForSection = (sectionId) => {
    switch (sectionId) {
      case "inicio":
        return <BiHomeAlt />;
      case "about":
        return <BiUser />;
      case "services":
        return <BsClipboardData />;
      case "work":
        return <BsBriefcase />;
      case "contact":
        return <BsChatSquareText />;
      default:
        return null;
    }
  };

  return (
    <nav className={`fixed top-2 lg:top-8 w-full overflow-hidden z-50 ${isScrolled ? "scrolled" : ""}`}>
      <div className='lg:container mx-auto'>
        <div className='container '>
          <div className='w-full bg-black/20 h-[86px] backdrop-blur-2xl rounded-3xl max-w-[550px] mx-auto px-1 flex justify-between items-center text-white/50'>
            <div className='lg:hidden my-1 px-4'>
              <a href='#'>
                <img
                  src={Logo}
                  alt='logo'
                  className='sm:inline md:inline max-w-full h-auto min-w-[55px]'
                />
              </a>
            </div>

            <ul className='flex mx-auto justify-around text-center lg:gap-14'>
              {SectionIds.map((sectionId, i) => (
                <li key={i} onClick={() => scrollToSection(sectionId)}>
                  <LinkRouter
                    to='/'                    
                  >
                    <span className="text-2xl min-h-12 flex justify-center text-center items-center">
                      {activeLink === sectionId ? <span className="active">{getIconForSection(sectionId)}</span> : getIconForSection(sectionId)}
                    </span>
                    <span className='text-lg'>
                      {sectionId}
                    </span>
                  </LinkRouter>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
