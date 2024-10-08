import React from "react";
import CustomTitle from "../CustomTitle/CustomTitle";
import "./SectionCategory.css";
import CateSVG_1 from "../../../assets/images/icon/categories1.svg";
// import CateSVG_2 from "../../../assets/images/icon/categories2.svg"
import CateSVG_3 from "../../../assets/images/icon/categories3.svg";
import CateSVG_5 from "../../../assets/images/icon/categories5.svg";
import CateSVG_6 from "../../../assets/images/icon/categories6.svg";
import CateSVG_7 from "../../../assets/images/icon/categories7.svg";
import CateSVG_8 from "../../../assets/images/icon/categories8.svg";
import CateSVG_4 from "../../../assets/images/icon/categories4.svg";

const CateCard = ({ name, skills, image }) => {
  return (
    <div className="CateCard">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h5>{name}</h5>
        <p>
          {skills} skills <i class="bi bi-arrow-right-short"></i>
        </p>
      </div>
    </div>
  );
};

const SectionCategory = () => {
  const categories = [
    {
      name: "Development & IT",
      skills_number: 958,
      image: CateSVG_1,
    },
    {
      name: "Design & Creative",
      skills_number: 662,
      image: CateSVG_7,
    },
    {
      name: "Digital Marketing",
      skills_number: 515,
      image: CateSVG_3,
    },
    {
      name: "Writing & Translation",
      skills_number: 486,
      image: CateSVG_4,
    },
    {
      name: "Music & Video",
      skills_number: 956,
      image: CateSVG_5,
    },
    {
      name: "Video & Animation",
      skills_number: 222,
      image: CateSVG_6,
    },
    {
      name: "Engineering & Architect",
      skills_number: 756,
      image: CateSVG_7,
    },
    {
      name: "Finance & Accounting",
      skills_number: 958,
      image: CateSVG_8,
    },
  ];
  return (
    <div className="SectionCategory">
      <div className="section-title">
        <CustomTitle
          title="Popular Categories"
          desc="Get some Inspirations from 1300+ skills"
        />
      </div>
      <div className="section-content">
        <div className="section-list-inner">
          {categories.map((cate) => {
            return (
              <CateCard
                name={cate.name}
                skills={cate.skills_number}
                image={cate.image}
              />
            );
          })}
        </div>
        <div className="section-work-inner">
          <div className="work-card bg-1">
            <div className="content">
              <div className="text">
                <h2>I need a Developed Project</h2>
                <p>
                  Get the perfect Developed project for your budget from our
                  creative community.
                </p>
              </div>
              <div className="brown">Brown</div>
            </div>
          </div>
          <div className="work-card bg-2">
            <div className="content">
              <div className="text">
                <h2>Find Your Next Great Job Opportunity!</h2>
                <p>
                Do you want to earn money, find unlimited clients and build your freelance career?
                </p>
              </div>
              <div className="brown">Brown</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCategory;
