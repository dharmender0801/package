import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
import user1 from "../assets/images/users/user1.jpg";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const menus = [
    {
      serviceName: "Quiz2play",
      serviceRoute: "quiz2play",
      serviceData: [
        {
          operatorName: "Safaricom Kenya",
          route: "safaricom-kenya",
          serverKey: "1234",
          insertQuery:
            "INSERT INTO `quiz2play_vendor_detail` (cp_id,callback_url,cut,counter,callback_limit,vendor_name,operator_name,operator_id,service_name,lp_url,payout,STATUS) VALUE ('{cpid}','{callbackurl}','{cut}','{counter}','{limit}','{vendorname}','Kenya','1','quiz2play','{lpUrl}','0','1')",
          getAdvIdQuery:
            "SELECT * FROM quiz2play_vendor_detail ORDER BY  cp_id DESC LIMIT 1",
          updateQuery: "",
          getQuery: "",
          lpUrl:"http://lp.quiz2play.com/kenya/subscribe/masked?cpId={cpid}&kpId=<kpid>&pubId=1"
        },
        {
          operatorName: "Mtn Nigeria",
          route: "mtn-nigeria",
          serverKey: "1234",
          insertQuery:
            "INSERT INTO `quiz2play_vendor_detail` (cp_id,callback_url,cut,counter,callback_limit,vendor_name,operator_name,operator_id,service_name,lp_url,payout,STATUS) VALUE ('{cpid}','{callbackurl}','{cut}','{counter}','{limit}','{vendorname}','Kenya','1','quiz2play','{lpUrl}','0','1')",
          getAdvIdQuery:
            "SELECT * FROM quiz2play_vendor_detail ORDER BY  cp_id DESC LIMIT 1",
          updateQuery: "",
          getQuery: "",
          lpUrl:""
        },
        {
          operatorName: "9Mobile Nigeria",
          route: "9mobile-nigeria",
          serverKey: "1234",
          insertQuery:
            "INSERT INTO `quiz2play_vendor_detail` (cp_id,callback_url,cut,counter,callback_limit,vendor_name,operator_name,operator_id,service_name,lp_url,payout,STATUS) VALUE ('{cpid}','{callbackurl}','{cut}','{counter}','{limit}','{vendorname}','Kenya','1','quiz2play','{lpUrl}','0','1')",
          getAdvIdQuery:
            "SELECT * FROM quiz2play_vendor_detail ORDER BY  cp_id DESC LIMIT 1",
          updateQuery: "",
          getQuery: "",
          lpUrl:""
        },
        {
          operatorName: "Zain Iraq",
          route: "zain-iraq",
          serverKey: "1234",
          insertQuery:
            "INSERT INTO `quiz2play_vendor_detail` (cp_id,callback_url,cut,counter,callback_limit,vendor_name,operator_name,operator_id,service_name,lp_url,payout,STATUS) VALUE ('{cpid}','{callbackurl}','{cut}','{counter}','{limit}','{vendorname}','Kenya','1','quiz2play','{lpUrl}','0','1')",
          getAdvIdQuery:
            "SELECT * FROM quiz2play_vendor_detail ORDER BY  cp_id DESC LIMIT 1",
          updateQuery: "",
          getQuery: "",
          lpUrl:""
        },
        {
          operatorName: "Zain KSA",
          route: "zain-ksa",
          serverKey: "1234",
          insertQuery:
            "INSERT INTO `quiz2play_vendor_detail` (cp_id,callback_url,cut,counter,callback_limit,vendor_name,operator_name,operator_id,service_name,lp_url,payout,STATUS) VALUE ('{cpid}','{callbackurl}','{cut}','{counter}','{limit}','{vendorname}','Kenya','1','quiz2play','{lpUrl}','0','1')",
          getAdvIdQuery:
            "SELECT * FROM quiz2play_vendor_detail ORDER BY  cp_id DESC LIMIT 1",
          updateQuery: "",
          getQuery: "",
          lpUrl:""
        },
        {
          operatorName: "Mobily KSA",
          route: "mobily-ksa",
          serverKey: "1234",
          insertQuery:
            "INSERT INTO `quiz2play_vendor_detail` (cp_id,callback_url,cut,counter,callback_limit,vendor_name,operator_name,operator_id,service_name,lp_url,payout,STATUS) VALUE ('{cpid}','{callbackurl}','{cut}','{counter}','{limit}','{vendorname}','Kenya','1','quiz2play','{lpUrl}','0','1')",
          getAdvIdQuery:
            "SELECT * FROM quiz2play_vendor_detail ORDER BY  cp_id DESC LIMIT 1",
          updateQuery: "",
          getQuery: "",
          lpUrl:""
        },
        {
          operatorName: "Stc KSA",
          route: "stc-ksa",
          serverKey: "1234",
          insertQuery:
            "INSERT INTO `quiz2play_vendor_detail` (cp_id,callback_url,cut,counter,callback_limit,vendor_name,operator_name,operator_id,service_name,lp_url,payout,STATUS) VALUE ('{cpid}','{callbackurl}','{cut}','{counter}','{limit}','{vendorname}','Kenya','1','quiz2play','{lpUrl}','0','1')",
          getAdvIdQuery:
            "SELECT * FROM quiz2play_vendor_detail ORDER BY  cp_id DESC LIMIT 1",
          updateQuery: "",
          getQuery: "",
          lpUrl:""
        },
        {
          operatorName: "Ais Thailand",
          route: "ais-thailand",
          serverKey: "1234",
          insertQuery:
            "INSERT INTO `quiz2play_vendor_detail` (cp_id,callback_url,cut,counter,callback_limit,vendor_name,operator_name,operator_id,service_name,lp_url,payout,STATUS) VALUE ('{cpid}','{callbackurl}','{cut}','{counter}','{limit}','{vendorname}','Kenya','1','quiz2play','{lpUrl}','0','1')",
          getAdvIdQuery:
            "SELECT * FROM quiz2play_vendor_detail ORDER BY  cp_id DESC LIMIT 1",
          updateQuery: "",
          getQuery: "",
          lpUrl:""
        },
      ],
    },
    {
      serviceName: "Games2Play",
      serviceRoute: "quiz2play",
      serviceData: [
        {
          operatorName: "Safaricom Kenya",
          route: "safaricom-kenya",
          serverKey: "1234",
          insertQuery: "",
          updateQuery: "",
          getQuery: "",
        },
      ],
    },
    {
      serviceName: "Voicechat",
      serviceData: [
        {
          operatorName: "Safaricom Kenya",
          route: "safaricom-kenya",
          serverKey: "1234",
          insertQuery: "",
          updateQuery: "",
          getQuery: "",
        },
      ],
    },
    {
      serviceName: "Classified",
      serviceData: [
        {
          operatorName: "Safaricom Kenya",
          route: "safaricom-kenya",
          serverKey: "1234",
          insertQuery: "",
          updateQuery: "",
          getQuery: "",
        },
      ],
    },
  ];

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <Navbar color="success" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <LogoWhite />
        </NavbarBrand>
        <Button
          color="primary"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Link to={"/Dashboard"}>
          <IoHome color="white" size={20} />
        </Link>

        <Nav className="me-auto  " navbar>
          {menus.map((item) => (
            <UncontrolledDropdown inNavbar nav key={item.serviceName}>
              <DropdownToggle caret nav>
                {item.serviceName}
              </DropdownToggle>
              <DropdownMenu end>
                {item.serviceData.map((subItem) => (
                  <Link
                    to={`${item.serviceRoute}/${subItem.route}`}
                    state={{ data: { subItem }, serviceDatas: { item } }}
                    className="nav-link"
                  >
                    <DropdownItem>{subItem.operatorName}</DropdownItem>
                  </Link>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          ))}
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="success">
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="30"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Info</DropdownItem>
            <DropdownItem>My Account</DropdownItem>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>My Balance</DropdownItem>
            <DropdownItem>Inbox</DropdownItem>
            <DropdownItem onClick={logout}>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
