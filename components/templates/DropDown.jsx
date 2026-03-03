"use client";
import React, { useState } from "react";
import { Dropdown, Image } from "react-bootstrap";
import DabbleCheckIcon from "../svg/others/DabbleCheckIcon";
import { useRouter } from "next/navigation";

const DropDown = ({ data, className = "", defaultIndex = 0 }) => {
  const [selectItem, setSelectItem] = useState(defaultIndex);

  return (
    <>
      <Dropdown className={className} align="end">
        <Dropdown.Toggle
          as={"button"}
          className="btn btn--dark"
          variant="success"
          id="dropdown-basic"
        >
          {data[selectItem]?.img ? (
            <span className="icon">
              <Image src={data[selectItem].img} alt="" />
            </span>
          ) : null}
          <span className="text">{data[selectItem]?.name}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-100" align="end">
          {data.map((item) => (
            <DropDownItem
              key={item.id}
              data={item}
              selectItem={selectItem}
              setSelectItem={setSelectItem}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropDown;

const DropDownItem = ({ data, setSelectItem, selectItem }) => {
  const router = useRouter();
  function handleSelectItem() {
    setSelectItem(data.id);
    if (data.url) {
      router.push(data.url);
    }
  }
  return (
    <>
      <Dropdown.Item
        as={"button"}
        onClick={handleSelectItem}
        className={data.id === selectItem ? "active" : ""}
      >
        {data?.img ? (
          <span className="icon">
            <Image src={data.img} alt={data.name} />
          </span>
        ) : null}
        {data.name && <span className="text">{data.name}</span>}
        <span className="check">
          <DabbleCheckIcon />
        </span>
      </Dropdown.Item>
    </>
  );
};
