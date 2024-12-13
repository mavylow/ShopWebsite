import React, {
  useState,
  useMemo,
  useCallback,
} from "react";
import { useDebounce } from "./customHooks/useDebounce";
import ShopList from "./shoplist/ShopList";
import Sort from "./sort/Sort";
import { generateItem } from "./utils";
import { FILTERS_CONFIG, COLORS } from "./configs/filters";
import { SORTS_CONFIG } from "./configs/sorts";
import { MIN, MAX } from "./utils";
import "./App.css";

function App() {
  const COUNT_OF_ITEMS = 100;
  const [items] = useState(() =>
    generateItem(COUNT_OF_ITEMS)
  );
  const [filterValues, setFilterValues] = useState({
    search: "",
    multiselect: [],
    range: { min: MIN, max: MAX },
    sort: "popular",
  });

  const debouncedFilterValue = useDebounce(
    filterValues,
    500
  );
  const colors = useMemo(() => COLORS(items), [items]);

  const filtersConfig = useMemo(
    () => FILTERS_CONFIG(colors),
    [colors]
  );

  const handleFilterChange = useCallback((name, value) => {
    setFilterValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const itemsToRender = useMemo(() => {
    const filteredItems = filtersConfig.reduce(
      (acc, filter) =>
        filter.filter(
          acc,
          debouncedFilterValue[filter.name]
        ),
      items
    );
    const currentSort = SORTS_CONFIG.find(
      (sort) => sort.name === filterValues.sort
    );
    return currentSort
      ? filteredItems.sort(currentSort.sort)
      : filteredItems;
  }, [
    items,
    debouncedFilterValue,
    filterValues.sort,
    filtersConfig,
  ]);

  return (
    <>
      <div className="top-filters m-2 h-[18vh]">
        {filtersConfig
          .filter((filter) => filter.name === "search")
          .map((filter) => {
            const ComponentToRender = filter.type;
            return (
              <ComponentToRender
                key={filter.id}
                value={filterValues[filter.name]}
                name={filter.name}
                onChange={(value) =>
                  handleFilterChange(filter.name, value)
                }
              />
            );
          })}
        <Sort
          value={filterValues.sort}
          options={SORTS_CONFIG}
          onChange={(value) =>
            handleFilterChange("sort", value)
          }
        />
      </div>
      <div className="grid grid-cols-[25%_1fr] gap-2 h-4/5">
        <div className="side-filters p-2 font-sans border border-slate-400 mx-2 h-auto my-1">
          {filtersConfig
            .filter((filter) => filter.name !== "search")
            .map((filter) => {
              const ComponentToRender = filter.type;
              return (
                <ComponentToRender
                  key={filter.id}
                  id={filter.id}
                  className={filter.name}
                  value={filterValues[filter.name]}
                  name={filter.name}
                  option={filter.option}
                  onChange={(value) =>
                    handleFilterChange(filter.name, value)
                  }
                />
              );
            })}
          <span className="my-1 text-xs font-semibold">
            {itemsToRender.length
              ? `Count of products: ${itemsToRender.length}`
              : "No results"}
          </span>
        </div>
        <div>
          <div className="shop-list">
            <ShopList items={itemsToRender} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
