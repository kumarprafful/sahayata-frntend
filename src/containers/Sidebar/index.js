import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import IntlMessages from "Util/IntlMessages";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import { withRouter } from "react-router-dom";
import LanguageChanger from "Components/LanguageChanger";

import { connect } from "react-redux";
import {
  setContainerClassnames,
  addContainerClassname,
  changeDefaultClassnames
} from "Redux/actions";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.addEvents = this.addEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleProps = this.handleProps.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.getContainer = this.getContainer.bind(this);
    this.getMenuClassesForResize = this.getMenuClassesForResize.bind(this);
    this.setSelectedLiActive = this.setSelectedLiActive.bind(this);
    this.view = this.view.bind(this);

    this.state = {
      selectedParentMenu: "",
      viewingParentMenu: ""
    };
  }

  handleWindowResize(event) {
    if (event && !event.isTrusted) {
      return;
    }
    const { containerClassnames } = this.props;
    let nextClasses = this.getMenuClassesForResize(containerClassnames);
    this.props.setContainerClassnames(0, nextClasses.join(" "));
  }

  handleDocumentClick(e) {
    const container = this.getContainer();
    let isMenuClick = false;
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains("menu-button") ||
        e.target.classList.contains("menu-button-mobile"))
    ) {
      isMenuClick = true;
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      (e.target.parentElement.classList.contains("menu-button") ||
        e.target.parentElement.classList.contains("menu-button-mobile"))
    ) {
      isMenuClick = true;
    } else if (
      e.target.parentElement &&
      e.target.parentElement.parentElement &&
      e.target.parentElement.parentElement.classList &&
      (e.target.parentElement.parentElement.classList.contains("menu-button") ||
        e.target.parentElement.parentElement.classList.contains(
          "menu-button-mobile"
        ))
    ) {
      isMenuClick = true;
    }
    if (
      (container.contains(e.target) && container !== e.target) ||
      isMenuClick
    ) {
      return;
    }
    this.toggle(e);
    this.setState({
      viewingParentMenu: ""
    });
  }

  getMenuClassesForResize(classes) {
    const { menuHiddenBreakpoint, subHiddenBreakpoint } = this.props;
    let nextClasses = classes.split(" ").filter(x => x != "");
    const windowWidth = window.innerWidth;
    if (windowWidth < menuHiddenBreakpoint) {
      nextClasses.push("menu-mobile");
    } else if (windowWidth < subHiddenBreakpoint) {
      nextClasses = nextClasses.filter(x => x != "menu-mobile");
      if (
        nextClasses.includes("menu-default") &&
        !nextClasses.includes("menu-sub-hidden")
      ) {
        nextClasses.push("menu-sub-hidden");
      }
    } else {
      nextClasses = nextClasses.filter(x => x != "menu-mobile");
      if (
        nextClasses.includes("menu-default") &&
        nextClasses.includes("menu-sub-hidden")
      ) {
        nextClasses = nextClasses.filter(x => x != "menu-sub-hidden");
      }
    }
    return nextClasses;
  }

  getContainer() {
    return ReactDOM.findDOMNode(this);
  }

  toggle() {
    const { containerClassnames, menuClickCount } = this.props;
    const currentClasses = containerClassnames
      ? containerClassnames.split(" ").filter(x => x != "")
      : "";

    if (currentClasses.includes("menu-sub-hidden") && menuClickCount == 3) {
      this.props.setContainerClassnames(2, containerClassnames);
    } else if (
      currentClasses.includes("menu-hidden") ||
      currentClasses.includes("menu-mobile")
    ) {
      this.props.setContainerClassnames(0, containerClassnames);
    }
  }

  handleProps() {
    this.addEvents();
  }

  addEvents() {
    ["click", "touchstart"].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }
  removeEvents() {
    ["click", "touchstart"].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
  }
  setSelectedLiActive() {
    const oldli = document.querySelector(".sub-menu  li.active");
    if (oldli != null) {
      oldli.classList.remove("active");
    }

    /* set selected parent menu */
    const selectedlink = document.querySelector(".sub-menu  a.active");
    if (selectedlink != null) {
      selectedlink.parentElement.classList.add("active");
      this.setState({
        selectedParentMenu: selectedlink.parentElement.parentElement.getAttribute(
          "data-parent"
        )
      });
    } else {
      var selectedParentNoSubItem = document.querySelector(
        ".main-menu  li a.active"
      );
      if (selectedParentNoSubItem != null) {
        this.setState({
          selectedParentMenu: selectedParentNoSubItem.getAttribute("data-flag")
        });
      } else if (this.state.selectedParentMenu == "") {
        this.setState({
          selectedParentMenu: "gogo"
        });
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setSelectedLiActive();
      this.toggle();
      window.scrollTo(0, 0);
    }

    this.handleProps();
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
    this.handleWindowResize();
    this.handleProps();
    this.setSelectedLiActive();
  }

  componentWillUnmount() {
    this.removeEvents();
    window.removeEventListener("resize", this.handleWindowResize);
  }

  changeDefaultMenuType(e, containerClassnames) {
    e.preventDefault();
    let nextClasses = this.getMenuClassesForResize(containerClassnames);
    this.props.setContainerClassnames(0, nextClasses.join(" "));
  }

  openDirectPage(e, selectedParent) {
    const { containerClassnames, menuClickCount } = this.props;
    this.props.setContainerClassnames(3, containerClassnames);

    this.setState({
      viewingParentMenu: selectedParent
    });
  }

  openSubMenu(e, selectedParent) {
    e.preventDefault();
    const { containerClassnames, menuClickCount } = this.props;
    const currentClasses = containerClassnames
      ? containerClassnames.split(" ").filter(x => x != "")
      : "";

    if (!currentClasses.includes("menu-mobile")) {
      if (
        currentClasses.includes("menu-sub-hidden") &&
        (menuClickCount == 2 || menuClickCount == 0)
      ) {
        this.props.setContainerClassnames(3, containerClassnames);
      } else if (
        currentClasses.includes("menu-hidden") &&
        (menuClickCount == 1 || menuClickCount == 3)
      ) {
        this.props.setContainerClassnames(2, containerClassnames);
      } else if (
        currentClasses.includes("menu-default") &&
        !currentClasses.includes("menu-sub-hidden") &&
        (menuClickCount == 1 || menuClickCount == 3)
      ) {
        this.props.setContainerClassnames(0, containerClassnames);
      }
    } else {
      this.props.addContainerClassname(
        "sub-show-temporary",
        containerClassnames
      );
    }
    this.setState({
      viewingParentMenu: selectedParent
    });
  }
  changeViewingParentMenu(menu) {
    this.toggle();
    this.setState({
      viewingParentMenu: menu
    });
  }

  view() {
    var type = this.props.authUser.type;
    if(type == "farmer"){
      return (
        <Fragment>
        <NavItem
          className={classnames({
            active:
              (this.state.selectedParentMenu == "second-menu" &&
                this.state.viewingParentMenu == "") ||
              this.state.viewingParentMenu == "second-menu"
          })}
        >
          <NavLink
            to="/app/second-menu"
            onClick={e => this.openSubMenu(e, "second-menu")}
          >
            <i className="simple-icon-map" /> <LanguageChanger text="God view" />
          </NavLink>
        </NavItem>
        <NavItem
          className={classnames({
            active:
              (this.state.selectedParentMenu == "sellCrop" &&
                this.state.viewingParentMenu == "") ||
              this.state.viewingParentMenu == "sellCrop"
          })}
        >
          <NavLink
            to="/app/sellCrop"
            onClick={e => this.openDirectPage(e, "sellCrop")}
          >
            <i className="simple-icon-action-redo" />{" "}
            <LanguageChanger text="Market" />
          </NavLink>
        </NavItem>
        <NavItem
          className={classnames({
            active:
              (this.state.selectedParentMenu == "transport" &&
                this.state.viewingParentMenu == "") ||
              this.state.viewingParentMenu == "transport"
          })}
        >
          <NavLink
            to="/app/transport"
            onClick={e => this.openDirectPage(e, "transport")}
          >
            <i className="simple-icon-compass" />
            <LanguageChanger text="Transport" />
          </NavLink>
        </NavItem>
        <NavItem
          className={classnames({
            active:
              (this.state.selectedParentMenu == "warehouse" &&
                this.state.viewingParentMenu == "") ||
              this.state.viewingParentMenu == "warehouse"
          })}
        >
          <NavLink
            to="/app/warehouse"
            onClick={e => this.openDirectPage(e, "warehouse")}
          >
            <i className="iconsmind-Warehouse" />
            <LanguageChanger text="Warehouse" />
          </NavLink>
        </NavItem>
        </Fragment>
      );
    }
    else if(type == "transport"){
      return (
        <Fragment>

            <NavItem
              className={classnames({
                active:
                  (this.state.selectedParentMenu == "alltrasport" &&
                    this.state.viewingParentMenu == "") ||
                  this.state.viewingParentMenu == "alltrasport"
              })}
            >
              <NavLink
                to="/app/alltransport"
                onClick={e => this.openDirectPage(e, "alltrasport")}
              >
                <i className="iconsmind-Truck" />
                <LanguageChanger text="All transport" />
              </NavLink>
            </NavItem>

            <NavItem
                  className={classnames({
                    active:
                      (this.state.selectedParentMenu == "alltransaction" &&
                        this.state.viewingParentMenu == "") ||
                      this.state.viewingParentMenu == "alltransaction"
                  })}
                >
                  <NavLink
                    to="/app/alltransaction"
                    onClick={e => this.openDirectPage(e, "alltransaction")}
                  >
                    <i className="iconsmind-Mail-Money" />
                    <LanguageChanger text="All transaction" />
                  </NavLink>
                </NavItem>

        </Fragment>
      );
    }
    else if(type == "storage"){
      return (
        <Fragment>
        <NavItem
          className={classnames({
            active:
              (this.state.selectedParentMenu == "warehouse" &&
                this.state.viewingParentMenu == "") ||
              this.state.viewingParentMenu == "warehouse"
          })}
        >
          <NavLink
            to="/app/warehouse"
            onClick={e => this.openDirectPage(e, "warehouse")}
          >
            <i className="iconsmind-Warehouse" />
            <LanguageChanger text="My Warehouse" />
          </NavLink>
        </NavItem>
        <NavItem
              className={classnames({
                active:
                  (this.state.selectedParentMenu == "allwarehouse" &&
                    this.state.viewingParentMenu == "") ||
                  this.state.viewingParentMenu == "allwarehouse"
              })}
            >
              <NavLink
                to="/app/allwarehouse"
                onClick={e => this.openDirectPage(e, "allwarehouse")}
              >
                <i className="iconsmind-The-WhiteHouse" />
                <LanguageChanger text="All warehouse" />
              </NavLink>
            </NavItem>

            <NavItem
                  className={classnames({
                    active:
                      (this.state.selectedParentMenu == "alltransaction" &&
                        this.state.viewingParentMenu == "") ||
                      this.state.viewingParentMenu == "alltransaction"
                  })}
                >
                  <NavLink
                    to="/app/alltransaction"
                    onClick={e => this.openDirectPage(e, "alltransaction")}
                  >
                    <i className="iconsmind-Mail-Money" />
                    <LanguageChanger text="All transaction" />
                  </NavLink>
                </NavItem>

        </Fragment>
      );
    }
  }

  render() {
    return (
      <div className="sidebar">
        <div className="main-menu">
          <div className="scroll">
            <PerfectScrollbar
              option={{ suppressScrollX: true, wheelPropagation: false }}
            >
              <Nav vertical className="list-unstyled">
                <NavItem
                  className={classnames({
                    active:
                      (this.state.selectedParentMenu == "gogo" &&
                        this.state.viewingParentMenu == "") ||
                      this.state.viewingParentMenu == "gogo"
                  })}
                >
                  <NavLink
                    to="/app/gogo"
                    onClick={e => this.openDirectPage(e, "gogo")}
                  >
                    <i className="simple-icon-home" />{" "}
                    <LanguageChanger text="Home" />
                  </NavLink>
                </NavItem>

                {this.view()}
              </Nav>
            </PerfectScrollbar>
          </div>
        </div>

        {/*god view*/}

        <div className="sub-menu">
          <div className="scroll">
            <PerfectScrollbar
              option={{ suppressScrollX: true, wheelPropagation: false }}
            >
              <Nav
                className={classnames({
                  "d-block":
                    (this.state.selectedParentMenu == "second-menu" &&
                      this.state.viewingParentMenu == "") ||
                    this.state.viewingParentMenu == "second-menu"
                })}
                data-parent="second-menu"
              >
                <NavItem>
                  <NavLink to="/app/second-menu/all">
                    <i className="simple-icon-paper-plane" />{" "}
                    <LanguageChanger text="All" />
                  </NavLink>
                </NavItem>
              </Nav>

              <Nav
                className={classnames({
                  "d-block":
                    (this.state.selectedParentMenu == "second-menu" &&
                      this.state.viewingParentMenu == "") ||
                    this.state.viewingParentMenu == "second-menu"
                })}
                data-parent="second-menu"
              >
                <NavItem>
                  <NavLink to="/app/second-menu/warehouse">
                    <i className="simple-icon-paper-plane" />{" "}
                    <LanguageChanger text="All Warehouse" />
                  </NavLink>
                </NavItem>
              </Nav>

              <Nav
                className={classnames({
                  "d-block":
                    (this.state.selectedParentMenu == "second-menu" &&
                      this.state.viewingParentMenu == "") ||
                    this.state.viewingParentMenu == "second-menu"
                })}
                data-parent="second-menu"
              >
                <NavItem>
                  <NavLink to="/app/second-menu/mandi">
                    <i className="simple-icon-paper-plane" />{" "}
                    <LanguageChanger text="Mandi" />
                  </NavLink>
                </NavItem>
              </Nav>

              <Nav
                className={classnames({
                  "d-block":
                    (this.state.selectedParentMenu == "second-menu" &&
                      this.state.viewingParentMenu == "") ||
                    this.state.viewingParentMenu == "second-menu"
                })}
                data-parent="second-menu"
              >
                <NavItem>
                  <NavLink to="/app/second-menu/transport">
                    <i className="simple-icon-paper-plane" />{" "}
                    <LanguageChanger text="Transport" />
                  </NavLink>
                </NavItem>
              </Nav>

              {/*sellCrop*/}
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ menu ,authUser}) => {
  const {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount
  } = menu;
  return {
    containerClassnames,
    subHiddenBreakpoint,
    menuHiddenBreakpoint,
    menuClickCount,
    authUser
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { setContainerClassnames, addContainerClassname, changeDefaultClassnames }
  )(Sidebar)
);
