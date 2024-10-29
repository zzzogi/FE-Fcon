import React, { useContext, useState, useEffect } from "react";

const userContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  const initialUserInfo = JSON.parse(localStorage.getItem("userInfo")) || {
    userId: 0,
    userRole: "admin",
    username: "",
    email: "",
    passwordHash: "",
    userType: "",
    contactInfo: "",
    createdAt: "",
    updatedAt: "",
    numberJobDone: 0,
    location: "",
    deliveryTime: "",
    languageLevel: "",
    imgUr1: "",
    memberships: [],
    posts: [],
    reviewReviewees: [],
    reviewReviewers: [],
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  return (
    <userContext.Provider value={{ userInfo, update: setUserInfo }}>
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  const { userInfo, update } = useContext(userContext);
  return { userInfo, update };
};
