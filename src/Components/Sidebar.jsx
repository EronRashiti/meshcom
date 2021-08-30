import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

class Sidebar extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          render={({ location, history }) => (
            <div>
              <SideNav
                onSelect={selected => {
                  // Add your code here
                  const to = "/" + selected;

                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="/home">
                  <NavItem eventKey="home">
                    <NavIcon>
                      <i
                        className={"fa fa-home"}
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>IT Service</NavText>
                  </NavItem>

                  <NavItem eventKey="home">
                    <NavIcon>
                      <i
                        className={"fa fa-home"}
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Web Design</NavText>
                  </NavItem>

                  <NavItem eventKey="home">
                    <NavIcon>
                      <i
                        className={"fa fa-home"}
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Web Development</NavText>
                  </NavItem>

                  <NavItem eventKey="home">
                    <NavIcon>
                      <i
                        className={"fa fa-home"}
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>App Development</NavText>
                  </NavItem>

                  <NavItem eventKey="home">
                    <NavIcon>
                      <i
                        className={"fa fa-home"}
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Graphic Design</NavText>
                  </NavItem>

                  <NavItem eventKey="home">
                    <NavIcon>
                      <i
                        className={"fa fa-home"}
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>UI/UX Design</NavText>
                  </NavItem>
            
                </SideNav.Nav>
              </SideNav>
            </div>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default Sidebar;
