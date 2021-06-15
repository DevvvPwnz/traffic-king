import React from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  NavLink,
} from "react-router-dom";
import Compaign from "../Compaign/index";
import Support from "../SupportForm/index";
import "./index.css";
import Logo from "../../assets/imgs/logo.png";
import { TextField, ThemeProvider,Button } from "@material-ui/core";
import theme from '../SignUp/theme'
import { UilAirplay } from "@iconscout/react-unicons";
import { UilAnalysis } from "@iconscout/react-unicons";
import { UilDollarSign } from "@iconscout/react-unicons";
import { UilQuestion } from "@iconscout/react-unicons";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TimelineIcon from "@material-ui/icons/Timeline";
import { useAuth } from "../../contexts/AuthContext";


export default function Dashboard() {

  const [navOpen, setNavOpen] = React.useState(false);
  const [userNavOpen, setUserNavOpen] = React.useState(false);
  const userRef = React.useRef();
  const navRef = React.useRef();
  const { logout } = useAuth();

  const handleNav = () => {
    setNavOpen(!navOpen);
  };
  const handleUserNav = () => {
    setUserNavOpen(!userNavOpen);
  };

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(userRef.current)) {
      setUserNavOpen(false);
    }
  };
  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);

    return function cleanup() {
      setUserNavOpen(false);
    };
  }, []);

  return (
    <section className="dashboard">
      
      <div className="dashboard-header">
        <div className="header-nav" ref={navRef} onClick={handleNav}>
          {navOpen ? (
            <MenuOpenIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </div>
        <Link to="/"><img className="header-nav__logo" src={Logo} alt="" /> </Link>
        
        <div className="header-user" ref={userRef}>
          <div className="header-user__icon" onClick={handleUserNav}>
            <AccountCircleIcon fontSize="large" />
            <div
              className={
                userNavOpen ? "header-user__nav active" : "header-user__nav"
              }
            > 
              <Link to="/profile" className="header-user__link">
                Настройки
              </Link>
              <div onClick={logout} className="header-user__link">
                Выйти
              </div>
            </div>
          </div>
        </div>
      </div>
      <Router>
      <div className="dashboard-wrapper">
          <div
            className={
              navOpen ? "dashboard-siderbar active" : "dashboard-siderbar"
            }
          >
            <div className="dashboard-sidebar__list">
              <NavLink
                to="/compaign"
                activeClassName="selected"
                className="dashboard-sidebar__link"
                onClick={handleNav}
              >
                <div className="dashboard-sidebar__icon">
                  <UilAirplay color="gold" />
                </div>
                <div
                  className={
                    navOpen
                      ? "dashboard-sidebar__text active"
                      : "dashboard-sidebar__text"
                  }
                >
                  Создать компанию
                </div>
              </NavLink>

              <NavLink
                to="/statistic"
                activeClassName="selected"
                className="dashboard-sidebar__link"
                onClick={handleNav}
              >
                <div className="dashboard-sidebar__icon">
                  <UilAnalysis color="gold" />
                </div>

                <div
                  className={
                    navOpen
                      ? "dashboard-sidebar__text active"
                      : "dashboard-sidebar__text"
                  }
                >
                  {" "}
                  Статистика
                </div>
              </NavLink>

              <NavLink
                to="/payment"
                activeClassName="selected"
                className="dashboard-sidebar__link"
                onClick={handleNav}
              >
                <div className="dashboard-sidebar__icon">
                  <UilDollarSign color="gold" />
                </div>
                <div
                  className={
                    navOpen
                      ? "dashboard-sidebar__text active"
                      : "dashboard-sidebar__text"
                  }
                >
                  {" "}
                  Пополнить баланс
                </div>
              </NavLink>
             
              <NavLink
                to="/support"
                activeClassName="selected"
                className="dashboard-sidebar__link"
                onClick={handleNav}
                exact={true}
              >
                <div className="dashboard-sidebar__icon">
                  <UilQuestion color="gold" />
                </div>
                <div
                  className={
                    navOpen
                      ? "dashboard-sidebar__text active"
                      : "dashboard-sidebar__text"
                  }
                >
                  {" "}
                  Задать вопрос
                </div>
              </NavLink>
            </div>
          </div>
         
          <div className="dashboard-content">

            <Switch>
              <Route path="/dashboard"><Compaign/></Route>
             
              <Route path="/statistic">
                <section className="statistic">
                  <div className="statistic-icon">
                    <TimelineIcon fontSize="large" />
                  </div>
                  Нет истории статистики,Вы ещё не запускали компанию.
                </section>
              </Route>
              <Route path="/compaign">
                <Compaign />
              </Route>
              <Route path="/payment">
                <section className="payment">
                  <div className="form-payment">
                    <ThemeProvider theme={theme}>
                      <TextField
                        fullWidth
                        id="payment"
                        name="payment"
                        label="Cумма"
                        
                        variant="outlined"
                      />

                      <Button
                        m="10px"
                        size="large"
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                      >
                        Пополнить
                      </Button>
                    </ThemeProvider>
                  </div>
                </section>
              </Route>
              <Route path="/support"><Support closeIcon={true}/></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </section>
  );
}
