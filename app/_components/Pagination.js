"use client";

import { Pagination } from "antd";

export default function PaginationControl({
  current,
  pageSize,
  total,
  onChange,
  showSizeChanger = false,
  ...props
}) {
  return (
    <div className="flex justify-center">
      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={onChange}
        showSizeChanger={showSizeChanger}
        {...props}
      />
    </div>
  );
}
