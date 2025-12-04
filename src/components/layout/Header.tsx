"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [hasBackground, setHasBackground] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const headerText = document.querySelector(".header-text");
      const header = headerRef.current;

      if (headerText && header) {
        const box = headerText.clientHeight;
        const headerHeight = header.clientHeight;

        if (scroll >= box - headerHeight) {
          setHasBackground(true);
        } else {
          setHasBackground(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Kiểm tra ngay khi component mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathname) {
      setActivePath(pathname);
    }
  }, [pathname]);

  return (
    <>
      <>
        <div className="sub-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <ul className="info">
                  <li>
                    <i className="fa fa-envelope" /> dainguyenholding@gmail.com
                  </li>
                  <li>
                    <i className="fa fa-map" /> Số 09, đường Nguyễn Thị Nhung,
                    KĐT Vạn Phúc, Phường Hiệp Bình, TP. HCM
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4">
                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61565729471541">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Header Area Start ***** */}
        <header
          ref={headerRef}
          className={`header-area header-sticky ${hasBackground ? "background-header" : ""}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  {/* ***** Logo Start ***** */}
                  <Link href="/" className="logo">
                    <Image
                      src="/images/logo/logo.png"
                      alt="Logo"
                      width={300}
                      height={300}
                      quality={100}
                      priority
                    />
                  </Link>
                  {/* ***** Logo End ***** */}
                  {/* ***** Menu Start ***** */}
                  <ul
                    className="nav"
                    style={{ display: isMenuOpen ? "block" : undefined }}
                  >
                    <li>
                      <Link
                        href="/"
                        className={activePath === "/" ? "active" : ""}
                      >
                        Trang chủ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className={activePath === "/about" ? "active" : ""}
                      >
                        Về chúng tôi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/project"
                        className={activePath === "/project" ? "active" : ""}
                      >
                        Dự án
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/news"
                        className={activePath === "/news" ? "active" : ""}
                      >
                        Tin tức
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/recruitment"
                        className={activePath === "/recruitment" ? "active" : ""}
                      >
                        Tuyển dụng
                      </Link>
                    </li>
                    <li className="menu-contact-hidden">
                      <Link
                        href="/contact"
                        className={activePath === "/contact" ? "active" : ""}
                      >
                        Liên hệ
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <i className="fa fa-phone" /> Liên hệ
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={`menu-trigger ${isMenuOpen ? "active" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <span>Menu</span>
                  </div>
                  {/* ***** Menu End ***** */}
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* ***** Header Area End ***** */}
      </>
    </>
  );
};

export default Header;
