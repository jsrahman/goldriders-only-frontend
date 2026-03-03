"use client";
import React from "react";
import Table from "@/components/templates/Table";
const ResponsiveTable = ({ className, header, data }) => {
  return (
    <div className={`table-responsive ${className}`}>
      <Table>
        <Table.Header header={header} />
        <Table.Body body={data} />
      </Table>
    </div>
  );
};
export default ResponsiveTable;
