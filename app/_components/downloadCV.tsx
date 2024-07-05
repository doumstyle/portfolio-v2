'use client'

import { saveAs } from "file-saver";

export const downloadCV = () => {
  saveAs(
    "/CV2024.pdf",
    "resume.pdf"
  );
};
