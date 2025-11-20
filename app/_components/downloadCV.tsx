"use client";

import { saveAs } from "file-saver";

export const downloadCV = () => {
  saveAs("/cv.pdf", "CV_Mamadou_AMADOU.pdf");
};
