import React, { useRef, useState } from "react";
import AvatarPlaceholder from "../../../../assets/images/avatar_placeholder.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePicture = ({ register }) => {
  const hiddenInputRef = useRef();

  const { ref: registerRef, ...rest } = register("imgUr1");

  const [preview, setPreview] = useState();

  const handleUploadedFile = (event) => {
    const file = event.target.files[0];

    const urlImage = URL.createObjectURL(file);

    setPreview(urlImage);
  };

  const onUpload = (e) => {
    e.preventDefault();
    toast("Chức năng này hiện chưa hỗ trợ!", {
      type: "info",
      position: "top-center",
    });
    // hiddenInputRef.current.click();
  };

  const uploadButtonLabel = preview ? "Change image" : "Upload image";

  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <label
        style={{
          paddingBottom: "8px",
          color: "rgba(0, 0, 0, 0.87)",
        }}
      >
        Profile picture
      </label>

      <input
        type="file"
        name="imgUrl"
        {...rest}
        onChange={handleUploadedFile}
        ref={(e) => {
          registerRef(e);
          hiddenInputRef.current = e;
        }}
        style={{
          display: "none",
        }}
      />

      <img
        alt="profile placeholder"
        src={preview || AvatarPlaceholder}
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          objectFit: "contain",
        }}
      />

      <button onClick={onUpload} class="btn btn-primary">
        {uploadButtonLabel}
      </button>
      <ToastContainer />
    </div>
  );
};

export default ProfilePicture;
