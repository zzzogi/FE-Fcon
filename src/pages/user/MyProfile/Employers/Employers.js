import React from "react";
import BreadCrumb from "../../../../components/user/BreadCrumb/BreadCrumb";
import "../layout.css";
import ChipList from "../components/Chip";
import Attachments from "../components/Attachments";
import Detail from "../components/Detail";
import CompanyLogo from "../../../../assets/images/default-logo.svg";
import Reviews from "../components/Reviews";
import Ava2 from "../../../../assets/images/user/avatar-1.jpg";
import Ava3 from "../../../../assets/images/user/avatar-3.jpg";
import Ava4 from "../../../../assets/images/user/avatar-4.jpg";
import Ava5 from "../../../../assets/images/user/avatar-5.jpg";
import Ava6 from "../../../../assets/images/user/avatar-6.jpg";
import Sidebar from "../components/Sidebar";

export const Employers = () => {
  const userData = {
    image: CompanyLogo,
    name: "Soft Technologies",
    description: "Build a Coaching Website Product Store images",
    info: {
      address: "Los Angles",
      createdDate: "22 September 2023",
      rating: "5.0",
      numsOfViews: 908,
      numsOfProposals: 15,
      freelancer_type: "Full-time",
      project_type: "Hourly",
      project_duration: "10-15 Hours",
      experience: "Basic",
      languages: ["English", "Arabic"],
      language_fluency: "Conversational",
    },
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    chips: [
      {
        title: "After Effects",
        link: "",
      },
      {
        title: "Illustrator",
        link: "",
      },
      {
        title: "HTML",
        link: "",
      },
      {
        title: "Whiteboard",
        link: "",
      },
    ],
    attachments: [
      {
        title: "sample.pdf",
        size: 1123, //in kB
        link: "",
      },
      {
        title: "Website logo.jpg",
        size: 1453, //in kB
        link: "",
      },
      {
        title: "Banner image.jpg",
        size: 908, //in kB
        link: "",
      },
      {
        title: "Services image.jpg",
        size: 1342, //in kB
        link: "",
      },
    ],
    tags: [
      {
        title: "Machine Learning",
        link: "",
      },
      {
        title: "AI Chatbot",
        link: "",
      },
      {
        title: "Virtual Assistant",
        link: "",
      },
    ],
    experiences: [
      {
        title: "Team Leader",
        fromYear: 2017,
        toYear: 2023,
        role: "UI UX Designer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
      {
        title: "Senior UI UX Designer",
        fromYear: 2019,
        toYear: 2021,
        role: "UI UX Designer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
      {
        title: "Junior UI UX Designer",
        fromYear: 2016,
        toYear: 2019,
        role: "UI UX Designer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
    ],
    educations: [
      {
        title: "Master Degree",
        fromYear: 2013,
        toYear: 2016,
        address: "Arizona State University",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
      {
        title: "Bachelor Degree",
        fromYear: 2010,
        toYear: 2013,
        address: "Arizona State University",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
    ],
    project_proposals: [
      {
        author: "Theresa Phillips",
        imageSrc: Ava2,
        rate: 5.0,
        numsOfReviews: 346,
        createdDate: new Date().toDateString(),
        priceRange: "50$-450$",
        priceType: "Fixed",
        content:
          "I've been buying and selling on kofejob Marketplace for the past two years, and it's been a game-changer for me. The platform is user-friendly, and I've had great success selling my handmade crafts. Plus, the customer support team is always there to help if I have any questions or issues.",
      },
      {
        author: "Aaron Storey",
        imageSrc: Ava3,
        rate: 5.0,
        numsOfReviews: 346,
        createdDate: new Date().toDateString(),
        priceRange: "$50-$200",
        priceType: "Fixed",
        content:
          "I've been buying and selling on kofejob Marketplace for the past two years, and it's been a game-changer for me. The platform is user-friendly, and I've had great success selling my handmade crafts. Plus, the customer support team is always there to help if I have any questions or issues.",
      },
      {
        author: "Theresa Phillips",
        imageSrc: Ava4,
        rate: 5.0,
        numsOfReviews: 346,
        createdDate: new Date().toDateString(),
        priceRange: "$20-$350",
        priceType: "Fixed",
        content:
          "I've been buying and selling on kofejob Marketplace for the past two years, and it's been a game-changer for me. The platform is user-friendly, and I've had great success selling my handmade crafts. Plus, the customer support team is always there to help if I have any questions or issues.",
      },
      {
        author: "Archer Crossley",
        imageSrc: Ava5,
        rate: 5.0,
        numsOfReviews: 346,
        createdDate: new Date().toDateString(),
        priceRange: "$10-$450",
        priceType: "Fixed",
        content:
          "I've been buying and selling on kofejob Marketplace for the past two years, and it's been a game-changer for me. The platform is user-friendly, and I've had great success selling my handmade crafts. Plus, the customer support team is always there to help if I have any questions or issues.",
      },
      {
        author: "Amy Stockdill",
        imageSrc: Ava6,
        rate: 5.0,
        numsOfReviews: 346,
        createdDate: new Date().toDateString(),
        priceRange: "$300-$350",
        priceType: "Fixed",
        content:
          "I've been buying and selling on kofejob Marketplace for the past two years, and it's been a game-changer for me. The platform is user-friendly, and I've had great success selling my handmade crafts. Plus, the customer support team is always there to help if I have any questions or issues.",
      },
    ],
  };

  return (
    <div>
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb title="Company Profile" page="Company Profile" />
        </div>
      </div>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <Detail userData={userData} page="employers" />
              <ChipList title={"Skills Required"} chips={userData.chips} />
              <Attachments attachments={userData.attachments} />
              <ChipList title={"Tags"} chips={userData.tags} />
              <Reviews
                reviews={userData.project_proposals}
                title={"Project Proposals"}
              />
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
