import React, { useRef } from "react";
import assetsData from "./_asset-data.json";
import common from "../../utils/common";
import { Asset as AssetType } from "../../types/assets.type";

const AssetCard: React.FunctionComponent = () => {
  // common.LiveAssetsData();
  const assetDataRef = useRef(assetsData);
  return (
    <React.Fragment>
      <div className="trending-assets-card-wrapper grid grid-cols-1 m-12 mt-28 lg:m-28 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {assetDataRef?.current?.map((item: AssetType, index: number) => {
          return (
            <div
              className="asset-card-wrapper flex justify-center h-96 w-[292px] relative"
              key={index + item?.asset_name}
            >
              <div
                className={`asset-icon-wrapper absolute left-24 -top-14 border-solid border-[1px] border-[#303449] w-fit h-fit p-6 rounded-full backdrop-blur-[50px] ${item?.asset_name}`}
              >
                <img src={item?.asset_imgURL} alt={item?.asset_type} />
              </div>
              <div className="asset-details-wrapper text-center mt-20">
                <h5 className="text-[#737BAE] font-assets-tomorrow text-xs font-semibold">
                  {item?.asset_type}
                </h5>
                <div className="assets-pricing-wrapper">
                  <div className="relative flex justify-center bg-[#14172B] mt-4 text-secondary font-assets-tomorrow font-semibold text-base rounded-[17px] w-[242px] h-[40px] border-solid border-x-[1px] border-t-[1.55px] border-[#2A2D40]">
                    <p className=" text-secondary pt-2 font-assets-tomorrow font-semibold text-base">
                      {common.getDollarPricing(item?.asset_pricing?.price)}
                    </p>
                    <p
                      className={`absolute top-3 right-5 font-assets-tomorrow font-semibold text-xs ${
                        item?.asset_pricing.increment
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      {item?.asset_pricing?.percentage}
                    </p>
                  </div>
                  <p className="text-primary font-assets-tomorrow text-xs font-semibold mt-2">
                    {item?.asset_pricing?.title}
                  </p>
                </div>
                <div className="assets-tvl-wrapper">
                  <p className="bg-[#14172B] p-2 mt-4 text-secondary pt-2 font-assets-tomorrow font-semibold text-base rounded-[17px] w-[242px] h-[40px] border-solid border-x-[1px] border-t-[1.55px] border-[#2A2D40]">
                    {common.getDollarPricing(item?.asset_tvl?.price, false)}
                  </p>
                  <p className="text-primary text-xs font-assets-tomorrow font-semibold mt-2">
                    {item?.asset_tvl?.title}
                  </p>
                </div>
                <div className="assets-popular-pairs-wrapper">
                  <div className="bg-[#14172B] mt-4 text-secondary pt-2 font-assets-tomorrow font-semibold text-base rounded-[30px] w-fit h-[40px] flex justify-center items-center gap-4 px-4 p-2 mx-auto">
                    <img
                      className="w-6"
                      src={item?.asset_popular_pairs?.firstIcon}
                      alt={item?.asset_type}
                    />
                    <img
                      className="w-6"
                      src={item?.asset_popular_pairs?.secondIcon}
                      alt={item?.asset_type}
                    />
                    <img
                      className="w-6"
                      src={item?.asset_popular_pairs?.thirdIcon}
                      alt={item?.asset_type}
                    />
                  </div>
                  <p className="text-primary text-xs font-assets-tomorrow font-semibold mt-2">
                    {item?.asset_popular_pairs?.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default AssetCard;
