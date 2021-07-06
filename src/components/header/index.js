import React, { useEffect, useState } from 'react';
import Logo from '../logo';
import MenuOverlay from '../menu-overlay';
import MobileMenu from '../mobile-menu';
import SocialIcon from '../social-icon';

function Header() {
  const [ofcanvasShow, setOffCanvasShow] = useState(false);

  const onCanvasHandler = () => {
    setOffCanvasShow((prev) => !prev);
  };

  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector('.sticky-header');

    setHeaderTop(header.offsetTop);
    // offsetTop = 0

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <>
      <header className="header">
        <div className="header-top d-xs-block">
          <div className="container">
            <div className="row">
              <div className="col">
                <p>
                  <i className="icofont-google-map"></i> <span>ADDRESS:</span>{' '}
                  London, UK
                </p>
              </div>
              <div className="col">
                <ul className="social-links text-end">
                  <li>
                    <SocialIcon
                      path="https://twitter.com/"
                      icon="icofont-twitter"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      path="https://www.facebook.com/"
                      icon="icofont-facebook"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      path="https://www.instagram.com/"
                      icon="icofont-instagram"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      path="https://rss.com/"
                      icon="icofont-rss-feed"
                    />
                  </li>
                  <li>
                    <SocialIcon
                      path="https://www.youtube.com/"
                      icon="icofont-play-alt-1"
                    />
                  </li>
                </ul>
              </div>
              <div className={`header-middle mobile-sticky`}>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="header-middle-content d-flex justify-content-between">
                        <div className="header-logo">
                          <Logo title="LogoInc" />
                        </div>

                        <div className="mobile-menu-toggle d-lg-none">
                          <button
                            onClick={onCanvasHandler}
                            className="offcanvas-toggle">
                            <svg viewBox="0 0 800 600">
                              <path
                                d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                                id="top"></path>
                              <path d="M300,320 L540,320" id="middle"></path>
                              <path
                                d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                                id="bottom"
                                transform="translate(480, 320) scale(1, -1) translate(-480, -318)"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`sticky-header bg-danger d-none d-lg-block ${
            scroll > headerTop ? 'sticky' : ''
          }`}>
          <h3 className="text-light text-center">STICKY HEADER</h3>
        </div>
        <MenuOverlay show={ofcanvasShow} />
        <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
      </header>
    </>
  );
}

export default Header;
