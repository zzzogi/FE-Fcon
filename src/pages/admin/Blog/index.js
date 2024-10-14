import React from "react";
import { useMemo, useState } from "react";
import "./blog.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import { TagsInput } from "react-tag-input-component";

const BlogPost = () => {
  const { register, handleSubmit, control } = useForm();
  const [selected, setSelected] = useState([]);
  Quill.register("modules/imageUploader", ImageUploader);

  const onSubmit = (data) => {
    console.log(data);
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["image", "link"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
              ],
            },
          ],
        ],
        imageUploader: {
          upload: (file) =>
            new Promise((resolve, reject) => {
              // const formData = new FormData();
              // formData.append('image', file);
              console.log(file);
            }),
        },
      },
    }),
    []
  );

  return (
    <div class="content">
      <div class="container">
        <div class="row">
          <div class={`col-md-12`}>
            <div class="select-project mb-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast("Đăng blog thành công!", {
                    type: "success",
                    position: "top-center",
                  });
                  handleSubmit(onSubmit);
                }}
              >
                <div class="row">
                  <div class="col-lg-12">
                    <h4>Create a new blog</h4>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="mb-3">
                      <label class="focus-label">Blog Title</label>
                      <input
                        type="text"
                        class="form-control"
                        {...register("project_title")}
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12">
                    <div class="mb-3">
                      <label class="focus-label">Blog content</label>
                      <Controller
                        name="blog_content"
                        control={control}
                        rules={{
                          required: "Please enter blog content",
                        }}
                        theme="snow"
                        render={({ field }) => (
                          <ReactQuill
                            {...field}
                            modules={modules}
                            placeholder={"Write blog"}
                            onChange={(text) => {
                              field.onChange(text);
                            }}
                            style={{
                              width: "1220px",
                              minHeight: "350px",
                            }}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <div class="mb-3">
                    <label class="focus-label">Tags</label>

                    <TagsInput
                      value={selected}
                      onChange={setSelected}
                      name="tags"
                      placeHolder="Enter tags"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 text-end">
                    <div class="btn-item">
                      <button
                        type="submit"
                        class="btn next-btn"
                        style={{
                          marginRight: "36px",
                          backgroundColor: "#e65425",
                          color: "#FFF",
                        }}
                      >
                        Post this blog
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
