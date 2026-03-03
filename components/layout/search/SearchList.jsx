import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const SearchList = ({ data, activeIndex, onSelect }) => {
  const listRef = useRef(null);
  const t = useTranslations();

  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const activeItem = listRef.current.children[activeIndex];
      if (activeItem) {
        activeItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="search-list" ref={listRef}>
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <div
            className={`search-list__item ${index === activeIndex ? "active" : ""
              }`}
            key={item.id}
            onClick={() => onSelect && onSelect(item)}
            role="button"
            tabIndex={0}
          >
            <span className="thumb">
              <Image
                src={item.img}
                width={64}
                height={64}
                alt={t("common.alt.gameThumb")}
              />
            </span>

            <div className="content">
              <h3 className="title">{item.name}</h3>
              <p className="desc">{item.category || item.provider}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="search-list__empty text-center py-3 text-white">
          {t("common.noResults")}
        </div>
      )}
    </div>
  );
};

export default SearchList;
