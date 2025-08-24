import React from "react";
const ITEMS = ["Home", "Projecten", "Expertise", "Over ons", "Contact"];
const Navigation = () => {
  return (
    <nav>
      <div className="menu-bar">
        <div className="menu-logo">
          <div className="size-5 rounded-full bg-neutral-500" />
        </div>
        <div className="menu-toggle-btn">
          <div className="menu-toggle-label">
            <p className="">Menu</p>
          </div>
          <div className="menu-hamburger-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-content">
          <div className="menu-media-wrapper">
            {/* <video src="/Home.mp4" /> */}
          </div>
          <div className="menu-content-wrapper">
            <div className="menu-content-main">
              <div className="menu-col">
                {ITEMS.map((item) => (
                  <div className="menu-link">
                    <a href="#">{item}</a>
                  </div>
                ))}
              </div>
              <div className="menu-col">
                <div className="menu-tag">
                  <a href="#">Web Animation</a>
                </div>
                <div className="menu-tag">
                  <a href="#">Interaction Media</a>
                </div>
                <div className="menu-tag">
                  <a href="#">Motion Craft</a>
                </div>
              </div>
            </div>
            <div className="menu-footer">
              <div className="menu-col">
                <p>Toronto, Canada</p>
              </div>
              <div className="menu-col">
                <p>+1 437 555 0199</p>
                <p>hello@nullspace.studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
