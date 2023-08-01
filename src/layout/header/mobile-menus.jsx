import Link from "next/link";
import React, { use, useState } from "react";
// internal
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  const [open, setOpen] = useState({});

  //openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      
    } else {
      setNavTitle(menu);
    }
  };

  
  return (
    <>
      <nav className="mean-nav">
        <ul>
          {menu_data.map((menu, i) => (
            <React.Fragment key={i}>
              {menu.has_dropdown && (
                <li className="has-dropdown">
                  <Link href={menu.link}>{menu.title}</Link>
                  <ul
                    className="submenu"
                    style={{
                      display: navTitle === menu.title ? "block" : "none",
                    }}
                  >
                    {menu.sub_menus.map((sub, i) => (
                      <li key={i} className="mega-menu">
                        <div className="mega-title-menu">
                          <Link className={`${open.id == sub.id ? 'rotateIcon': ''}`} href={sub.link} onClick={()=>setOpen({IconClass: 'rotateIcon', id: sub.id})}>{sub.title}</Link>
                        </div>
                        <ul className="mega-menu-main">
                          {
                            sub.services.map((mene_mega, i) => (
                              open.id == sub.id ? <div key={i} className="list-mega-menu">
                                <Link href={mene_mega.link}>{mene_mega.title}</Link>
                              </div> : ''
                            ))
                          }
                        </ul>
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`mean-expand ${
                      navTitle === menu.title ? "mean-clicked" : ""
                    }`}
                   
                    onClick={() => openMobileMenu(menu.title)}
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    <i className="fal fa-plus"></i>
                  </a>
                </li>
              )}
              {!menu.has_dropdown && (
                <li>
                  <Link href={menu.link}>{menu.title}</Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;
