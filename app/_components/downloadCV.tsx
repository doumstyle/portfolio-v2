"use client";

import { saveAs } from "file-saver";

export const downloadCV = () => {
  saveAs("/CV2025-27.pdf", "resume.pdf");
};
