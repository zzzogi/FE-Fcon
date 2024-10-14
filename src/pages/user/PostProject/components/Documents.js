import React, { useRef } from "react";
import { useFieldArray, Controller } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import Trash from "../../../../assets/images/icon/trash-2.svg";

const Documents = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "documents",
    keyName: "documentId",
  });

  const hiddenFileInput = useRef(null);

  const onAddDocuments = () => {
    hiddenFileInput.current.click();
  };

  const handleAddDocuments = (event) => {
    const uploadedFiles = Array.from(event.target.files);

    const files = uploadedFiles.map((file) => ({
      file,
    }));

    append(files);

    hiddenFileInput.current.value = "";
  };

  return (
    <>
      <input
        style={{ display: "none" }}
        ref={hiddenFileInput}
        type="file"
        multiple
        onChange={handleAddDocuments}
      />

      <div sx={{ m: 2, width: 300 }}>
        {fields.map(({ documentId, file }, index) => (
          <div key={documentId}>
            <Controller
              control={control}
              name={`documents.${index}`}
              render={() => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p>{file.name}</p>

                  <img
                    src={Trash}
                    class="icon"
                    onClick={() => remove(index)}
                    alt="icon"
                    style={{
                      marginLeft: 6,
                      marginBottom: 12,
                    }}
                  />
                </div>
              )}
            />
          </div>
        ))}

        <button variant="text" onClick={onAddDocuments}>
          Add documents
        </button>
      </div>
    </>
  );
};

export default Documents;
