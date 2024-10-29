import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/user/Home/Home";
import Login from "../pages/user/Login/Login";
import Register from "../pages/user/Register/Register";
import Project from "../pages/user/Project/Project";
import About from "../pages/user/About/About";
import Blog from "../pages/user/Blog/Blog";
import BlogDetail from "../pages/user/BlogDetail/BlogDetail";
import Profile from "../pages/user/Profile/Profile";
import Member from "../pages/user/Member/Member";
import { DeverloperProfile } from "../pages/user/MyProfile/Freelancers/Freelancers";
import { Employers } from "../pages/user/MyProfile/Employers/Employers";
import { ProjectDetail } from "../pages/user/ProjectDetail/ProjectDetail";
import MembershipPage from "../pages/user/Membership";
import PostProject from "../pages/user/PostProject";
import Admin from "../pages/admin";
import BlogReview from "../pages/user/BlogReview";
import UserSetting from "../pages/user/UserSetting";
import Proposals from "../pages/user/Proposals";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Router */}
      <Route path="/" element={<Home />} />

      {/* Login Router */}
      <Route path="/login" element={<Login />} />

      {/* Register Router */}
      <Route path="/register" element={<Register />} />

      {/* Employer Router */}
      <Route path="/members" element={<Member />}></Route>
      <Route path="/members/profile/:userType/:slug" element={<Profile />} />
      <Route path="/company-profile" element={<Employers />} />

      {/* Developer Router */}
      <Route path="/developer-profile" element={<DeverloperProfile />} />

      {/* User */}
      <Route path="/user-setting" element={<UserSetting />} />

      {/* Proposal */}
      <Route path="/proposal" element={<Proposals />} />

      {/* Membership */}
      <Route path="/membership" element={<MembershipPage />} />

      {/* Project Router */}
      <Route path="/projects" element={<Project />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/post-project" element={<PostProject />} />

      {/* About Router */}
      <Route path="/about-us" element={<About />} />

      {/* Blogs Router */}
      <Route path="/blogs" element={<Blog />} />

      {/* Blog Detail Router */}
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/my-blogs" element={<BlogReview />} />

      {/* Blog Detail Router */}
      {/* <Routes path="/profile/:userType/:slug" element={<Profile />} /> */}

      {/* Admin */}
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default AppRoutes;
