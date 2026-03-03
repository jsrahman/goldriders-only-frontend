import React, { createContext, useContext } from "react";
import CopyIcon from "../svg/others/CopyIcon";
import InfoIcon from "../svg/others/InfoIcon";
import WageredSlide from "./WageredSlide";
import NoData from "./NoData";
import { useTranslations } from "next-intl";

const TableContext = createContext();

const Table = ({ children, className = "" }) => {
  const [header, setHeader] = React.useState([]);

  return (
    <TableContext.Provider value={{ header, setHeader }}>
      <table className={`table ${className}`}>{children}</table>
    </TableContext.Provider>
  );
};

const Header = ({ header }) => {
  const t = useTranslations();
  return (
    <thead>
      <tr>
        {header.map((item, index) => (
          <th key={index}>{t(item.label)}</th>
        ))}
      </tr>
    </thead>
  );
};

const Body = ({ body }) => {
  const { header } = useContext(TableContext);
  const t = useTranslations();

  function CustomTd({ type, children }) {
    function handleCopy(text) {
      navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard");
    }

    switch (type) {
      case "action":
        if (typeof children === "object") {
          return (
            <button className="btn btn--base" onClick={children.action}>
              {t(children.title)}
            </button>
          );
        }
        return <button className="btn btn--base">{t(children)}</button>;
      case "copy":
        return (
          <>
            <span
              className="text--base me-1"
              role="button"
              onClick={() => handleCopy(children)}
            >
              <CopyIcon />
            </span>
            <span>{children}</span>
          </>
        );
      case "wagered":
        return (
          <div className="wagered">
            <div className="wagered-header flex-between">
              wagered {children?.percent || 0}%
              <span className="wagered-info" role="button">
                <InfoIcon />
              </span>
            </div>
            <WageredSlide
              percent={children?.percent}
              start={children?.current}
              end={children?.total}
            />
          </div>
        );
      case "action-dark":
        return <button className="btn btn--dark">{t(children)}</button>;
      case "status":
        return <span>{t(children)}</span>;
      default:
        return <span dangerouslySetInnerHTML={{ __html: children }}></span>;
    }
  }

  if (body === null) {
    return (
      <tbody>
        <tr>
          <td colSpan="100%">
            <NoData text={t("No Data Found")} />
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {body.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>
              <CustomTd type={header[cellIndex]?.key}>{cell}</CustomTd>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

Table.Header = Header;
Table.Body = Body;

export default Table;
