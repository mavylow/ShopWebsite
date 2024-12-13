export const SORTS_CONFIG = [
  {
    id: "Popular first",
    name: "popular",
    sort: (a, b) => b.rating - a.rating,
  },
  {
    id: "Expensive first",
    name: "expensive",
    sort: (a, b) => b.price - a.price,
  },
  {
    id: "Cheap first",
    name: "cheap",
    sort: (a, b) => a.price - b.price,
  },
];
