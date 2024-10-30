// ModelViewer.tsx
"use client";

import Spline from "@splinetool/react-spline";
import React from "react";

export const ModelViewer: React.FC = () => {
  return (
    <Spline
      scene="https://prod.spline.design/fJ2ptJKzT-sDkpfO/scene.splinecode"
      onLoad={() => console.log("3D model loaded successfully")}
      onError={(error) => {
        console.error("Error loading 3D model:", error);
        alert("There was an error loading the model."); // Notify the user
      }}
    />
  );
};

export default ModelViewer;
