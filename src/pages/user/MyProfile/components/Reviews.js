import React from "react";
import "../layout.css";
import Star from "../../../../assets/images/icon/star.svg";
import Calendar from "../../../../assets/images/icon/calendar.svg";

const Reviews = ({ title, reviews }) => {
  console.log(reviews);
  return (
    <div class="company-detail-block">
      <h4 class="company-detail-title">
        {title} ({reviews.length})
      </h4>
      {reviews.map((review) => {
        return (
          <div class="project-proposals-block">
            <div class="project-proposals-img">
              <img
                src={review.imageSrc}
                alt="user"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div class="project-proposals-description">
              <div class="proposals-user-detail">
                <div>
                  <h5>{review.author}</h5>
                  <ul style={{ display: "flex", paddingLeft: 0 }}>
                    <li>
                      <div class="proposals-user-review">
                        <span>
                          <img src={Star} class="icon" alt="icon" />
                          {review.rate} ({review.numsOfReviews} Reviews)
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="proposals-user-review">
                        <span>
                          <img src={Calendar} class="icon" alt="icon" />
                          {review.createdDate}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div class="proposals-pricing">
                    <h4>{review.priceRange}</h4>
                    <span>Price : {review.priceType} </span>
                  </div>
                </div>
              </div>
              <p style={{ marginBottom: 0 }}>{review.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
