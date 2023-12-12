import React from "react";
import { Loader } from "./Loader";

const LoaderScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="bg-gray-200 p-8 rounded-lg">
          <Loader />
        </div>
    </div>
  );
}

export default LoaderScreen;