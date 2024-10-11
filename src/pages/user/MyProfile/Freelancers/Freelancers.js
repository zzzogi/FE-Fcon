import React from "react";
import BreadCrumb from "../../../../components/user/BreadCrumb/BreadCrumb";
import "../layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Ava1 from "../../../../assets/images/avatar/avatar-2.jpg";
import Ava2 from "../../../../assets/images/user/avatar-1.jpg";
import Ava3 from "../../../../assets/images/user/avatar-3.jpg";
import Ava4 from "../../../../assets/images/user/avatar-4.jpg";
import Ava5 from "../../../../assets/images/user/avatar-5.jpg";
import Ava6 from "../../../../assets/images/user/avatar-6.jpg";
import Reviews from "../components/Reviews";
import { Educations } from "../components/Educations";
import Experiences from "../components/Experiences";
import Detail from "../components/Detail";
import Sidebar from "../components/Sidebar";

export const DeverloperProfile = () => {
  const userData = {
    image: Ava1,
    name: "Michael Stewart",
    description: "UI UX Designer",
    info: {
      address: "Los Angles",
      createdDate: "22 September 2023",
      rating: "5.0",
      numsOfReviews: 245,
      recommended: 89,
      completed_project: 220,
      ongoing_project: 10,
      feedbacks: 78,
      rehied: "Rehired",
      response_time: 123, //in minutes
    },
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
    reviews: [
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
          <BreadCrumb title="Freelancer Details" page="Freelancer Details" />
        </div>
      </div>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <Detail userData={userData} />
              <Experiences experiences={userData.experiences} />
              <Educations educations={userData.educations} />
              <Reviews reviews={userData.reviews} title={"Reviews"} />
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
