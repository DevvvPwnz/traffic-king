import React from "react";
import "./index.css";
import Logo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import { gsap } from "gsap"
import { UilUserCircle } from "@iconscout/react-unicons";
import { UilEllipsisV } from "@iconscout/react-unicons";
import { UilMapMarkerQuestion } from "@iconscout/react-unicons";
import { UilFocus } from "@iconscout/react-unicons";
import { UilPackage } from "@iconscout/react-unicons";
import { UilChartLine } from "@iconscout/react-unicons";
import { UilRocket } from "@iconscout/react-unicons";
import { UilSignout } from "@iconscout/react-unicons";
import { UilSetting } from "@iconscout/react-unicons";


import { useAuth } from "../../contexts/AuthContext";

function Header() {
  const [navToggle, setNavToggle] = React.useState(false);
  const [userToggle, setUserToggle] = React.useState(false);
  const { currentUser, logout } = useAuth();
  const tl = gsap.timeline()

  const userRef = React.useRef();
  const headerRef = React.useRef();

  const onToggle = () => {
    setNavToggle(!navToggle);
  };

  const onClickUser = () => {
    setUserToggle(!userToggle);
  };

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(userRef.current)) {
      setUserToggle(false);
    }
  };

  React.useEffect(() => {
    tl.from(headerRef.current,{opacity:0,},3)
    document.body.addEventListener("click", handleOutsideClick);

    return function cleanup() {
      setUserToggle(false);
    };
  }, []);

  return (
    <header className="header" id="header" ref={headerRef}>
      <div className="container">
        <div className="header__body">
          <div className="header__logo">
            <img src={Logo} alt="" />
          </div>
          <div className="header__toggle" onClick={onToggle}>
            <UilEllipsisV size="50px" color="#e2b511" />
          </div>

          <nav className="header__nav">
            <ul className="header__list">
              <li>
                <a href="#about" className="header__link">
                  О нас
                </a>
              </li>
              <li>
                <a href="#format" className="header__link">
                  Форматы Рекламы
                </a>
              </li>
              <li>
                <a href="#footer" className="header__link">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__btns" ref={userRef}>
            <div className="header__btns-icon" onClick={onClickUser}>
              <UilUserCircle size="50px" />
            </div>
            <div
              className={userToggle ? "header__user active" : "header__user"}
            >
              {currentUser ? (
                <div className="header-setting">
                  <Link className="header-setting__link" to="/dashboard">
                    {" "}
                    <div className="header-setting__icon">
                      <UilChartLine />
                    </div>{" "}
                    Кабинет
                  </Link>
                  <Link className="header-setting__link" to="/profile">
                    <div className="header-setting__icon">
                      <UilSetting />
                    </div>
                    Настройки
                  </Link>
                  <Link
                    onClick={logout}
                    className="header-setting__link"
                    to="/profile"
                  >
                    <div className="header-setting__icon">
                      {" "}
                      <UilSignout />
                    </div>
                    Выйти
                  </Link>
                </div>
              ) : (
                <div className="header__user-links">
                  <Link to="/login" className="header__btns-btn btn__main">
                    Войти
                  </Link>
                  <Link
                    to="/sign-up"
                    className="header__btns-btn btn__main btn__main-full"
                  >
                    Регистрация
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={
            navToggle
              ? "header__nav-responsive active"
              : "header__nav-responsive"
          }
        >
          <div className="nav__responsive-body">
            <ul className="nav__responsive-lists">
              <li className="nav__responsive-list">
                <UilMapMarkerQuestion color="#e2b511" />
                <a
                  href="#about"
                  onClick={onToggle}
                  className="nav__responsive-link"
                >
                  О нас
                </a>
              </li>
              <li className="nav__responsive-list">
                <UilFocus color="#e2b511" />
                <a
                  href="#format"
                  onClick={onToggle}
                  className="nav__responsive-link1"
                >
                  Форматы Рекламы
                </a>
              </li>
              <li className="nav__responsive-list">
                <UilPackage color="#e2b511" />
                <a
                  href="#footer"
                  onClick={onToggle}
                  className="nav__responsive-link"
                >
                  Контакты
                </a>
              </li>
              <li className="nav__responsive-list">
                <UilChartLine color="#e2b511" />
                <Link to="/login" className="nav__responsive-link">
                  Личный Кабинет
                </Link>
              </li>
            </ul>
            <hr />
            <div className="nav__responsive-btn">
              <div className="nav__responsive-icon">
                <UilRocket color="#e2b511" />
              </div>

              <Link to="/login">Запустить компанию</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
