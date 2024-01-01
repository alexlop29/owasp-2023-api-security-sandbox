type Shop = {
  Name: string;
};

type Shops = {
  Shops: Shop[];
};

type Revenue = {
  Name: string;
  Revenue: Number;
};

// Consider to splitting into types for documents controller

export { Shop, Shops, Revenue };
