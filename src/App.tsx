import React from "react";
import AssetCard from "./components/AssetsCard";

function App() {
  return (
    <React.Fragment>
      <div className="trending-assets-header-wrapper mt-10 flex flex-col md:flex-row lg:flex-row justify-center items-center gap-3">
        <img
          className="w-14 md:w-10 lg:w-10"
          src="https://ik.imagekit.io/ayushsoni1010/projects/activity_NyJA0E96n.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1669933295995"
          alt="Trending Assets Icon"
        />
        <h1 className="text-center text-4xl text-secondary font-assets-tomorrow leading-[50px]">
          Trending Assets Components
        </h1>
      </div>
      <AssetCard />
    </React.Fragment>
  );
}

export default App;
