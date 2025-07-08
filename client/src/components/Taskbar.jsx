import React, { useState, useEffect } from 'react';
import '../index.css';
import Taskbar_Gif from './Taskbar_Gif.jsx';

function Taskbar() {
  // Menu open/close toggle (mobile sidebar)
  const [isOpen, setIsOpen] = useState(false);

  // Collapse the top taskbar when scrolling down
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Show or hide the "scroll to top" button
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll behavior for collapsing the taskbar and showing the button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If user scrolls down past 50px and taskbar isn’t already collapsed, collapse it
      if (currentScrollY > 50 && !isCollapsed) {
        setIsCollapsed(true);
        setShowScrollTop(true);
      } 
      // If user scrolls back to the top, expand the taskbar again
      else if (currentScrollY <= 50 && isCollapsed) {
        setTimeout(() => {
          setIsCollapsed(false);
          setShowScrollTop(false);
        }, 50); // Optional short delay to avoid janky transitions
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCollapsed]);

  return (
    <>
      {/* Main taskbar container. Adds "collapsed" or "open" class based on scroll and toggle */}
      <div className={`taskbar_container ${isOpen ? 'taskbar_open' : ''} ${isCollapsed ? 'collapsed' : ''}`}>
        <Taskbar_Gif className='taskbar_gif' />

        {/* Title & tagline */}
        <div className='title-and-tagline'>
          <h1 className="dancing-text">
            <a href="/">
              <span>p</span><span>r</span><span>o</span><span>g</span><span>r</span><span>a</span><span>m</span><span>m</span><span>i</span><span>n</span><span>g</span>
              &nbsp;&nbsp;
              <span>c</span><span>l</span><span>o</span><span>s</span><span>e</span><span>t</span>
            </a>
          </h1>
          <p className="tagline">A pixel-coded space of thoughts and things.</p>
        </div>

        {/* Open menu button (hamburger icon) */}
        <button className="taskbar_toggle" onClick={() => setIsOpen(true)}>☰</button>

        {/* Sidebar navigation menu */}
        <div className="taskbar_menu">
          <button className="close_btn" onClick={() => setIsOpen(false)}>X</button>
          <a href="/"><i className="hn hn-home-solid"></i>Home</a>
          <a href="/myself"><i className="hn hn-user-solid"></i>Myself</a>
          <a href="/projects"><i className="hn hn-business"></i>Projects</a>
          <a href="/contact"><i className="hn hn-phone-ringing-low-solid"></i>Contact</a>
        </div>
      </div>

      {/* Scroll-to-top button shows when not at top */}
      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className="hn hn-arrow-alt-circle-up"></i> Top
        </button>
      )}
    </>
  );
}

export default Taskbar;
