type Asset = {
  asset_name: string;
  asset_type: string;
  asset_pricing: {
    title: string;
    price: number;
    increment: boolean;
    percentage: string;
  };
  asset_tvl: {
    title: string;
    price: number;
  };
  asset_imgURL: string;
  asset_popular_pairs: {
    title: string;
    firstIcon?: string;
    secondIcon?: string;
    thirdIcon?: string;
  };
};

export type { Asset };
