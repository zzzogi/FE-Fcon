import React from "react";
import "../layout.css";
import Download from "../../../../assets/images/icon/download.svg";
import { formatKBToMB } from "../../../../utils/commonFunc";

const Attachments = ({ attachments }) => {
  return (
    <div>
      <div class="company-detail-block">
        <h4 class="company-detail-title">Attachments</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {attachments.map((attachment) => {
            return (
              <div class="custom-col">
                <div class="attachment-file">
                  <div class="attachment-files-details">
                    <h6>{attachment.title}</h6>
                    <span>file size {formatKBToMB(attachment.size)}</span>
                  </div>
                  <button class="file-download-btn">
                    <img src={Download} alt="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Attachments;
