import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/images/logo.svg";
import "./layout.css";
import Pen from "../../assets/images/icon/edit-2.svg";
import Pending from "../../assets/images/icon/airplay.svg";
import Chart from "../../assets/images/icon/pie-chart.svg";
import Home from "../../assets/images/icon/home.svg";
import BlogPost from "./Blog";
import PendingProjects from "./Requests";
import RevenueReport from "./Revenue";

const Admin = () => {
  const [page, setPage] = useState("blog");

  return (
    <div class="main-wrapper">
      <div class="sidebar" id="sidebar">
        <div class="sidebar-inner">
          <div class="header">
            <div class="header-left">
              <a href="/admin" class="logo">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
          </div>
          <div
            id="sidebar-menu"
            class="sidebar-menu"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <ul>
              <li class={`${page === "blog" ? "active" : null}`}>
                <div
                  style={{ textDecoration: "none" }}
                  onClick={() => setPage("blog")}
                >
                  <img src={Pen} class="icon" alt="icon" />{" "}
                  <span>Create blog</span>
                </div>
              </li>
              <li class={`${page === "project" ? "active" : null}`}>
                <div
                  style={{ textDecoration: "none" }}
                  onClick={() => setPage("project")}
                >
                  <img src={Pending} class="icon" alt="icon" />{" "}
                  <span>Pending projects</span>
                </div>
              </li>

              <li class={`${page === "revenue" ? "active" : null}`}>
                <div
                  style={{ textDecoration: "none" }}
                  onClick={() => setPage("revenue")}
                >
                  <img src={Chart} class="icon" alt="icon" />{" "}
                  <span>Revenue Statistics</span>
                </div>
              </li>
            </ul>
            <div
              onClick={() => (window.location.href = "/")}
              style={{
                cursor: "pointer",
                padding: 12,
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={Home} class="icon" alt="icon" />{" "}
              <span>Go back home</span>
            </div>
          </div>
        </div>
      </div>

      <div class="page-wrapper">
        <div class="content container-fluid">
          {page === "blog" ? (
            <BlogPost />
          ) : page === "project" ? (
            <PendingProjects />
          ) : page === "revenue" ? (
            <RevenueReport />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Admin;
