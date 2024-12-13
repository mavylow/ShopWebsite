import Search from "../filters/Search";
import Multiselect from "../filters/Multiselect";
import Range from "../filters/Range";

export const COLORS = (items) =>
  Array.from(new Set(items.map((item) => item.color)));

export const FILTERS_CONFIG = (colors) => [
  {
    id: "By name and description",
    type: Search,
    name: "search",
    filter: (items, value) => {
      const search = value.toLowerCase();
      return value
        ? items.filter(
            (item) =>
              item.name.toLowerCase().includes(search) ||
              item.description
                .toLowerCase()
                .includes(search) ||
              item.category.toLowerCase().includes(search)
          )
        : items;
    },
  },
  {
    id: "By colors",
    type: Multiselect,
    name: "multiselect",
    option: colors,
    filter: (items, value) =>
      value.length
        ? items.filter((item) => value.includes(item.color))
        : items,
  },
  {
    id: "By price",
    type: Range,
    name: "range",
    filter: (items, value) =>
      items.filter(
        (item) =>
          item.price >= value.min && item.price <= value.max
      ),
  },
];
