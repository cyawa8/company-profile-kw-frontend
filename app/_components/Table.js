"use client"

import { Table } from "antd";

const Tabel = ({columns, dataSource, pagination = true}) => {
   console.log("Dat:", dataSource);
  return(
      <Table
      rowKey="id"
        columns = {columns}
        dataSource = {dataSource}
        pagination = {pagination === true ? {
          showSizeChanger: true,
          pageSizeOptions: ['5', '10', '20', '50'],
          showTotal: (total, range) =>
            `${range[0]}–${range[1]} dari total ${total} data`, // ✅ Teks total
          defaultPageSize: 10,
        } : pagination
        }
      />
  );
};

export default Tabel;