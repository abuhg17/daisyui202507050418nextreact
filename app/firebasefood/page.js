"use client";
import React, { useState, useEffect, useMemo } from "react";

const FirebaseFoodPage = () => {
  // 狀態管理
  const [foods, setFoods] = useState([]);
  const [sortKey, setSortKey] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  // 抓取資料 (模擬 useFetch)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/firebasefood");
        const data = await response.json();
        setFoods(data.myvue3food || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setFoods([]);
      }
    };

    fetchData();
  }, []);

  // 點擊排序欄位切換排序
  const sort = (key) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  // 顯示箭頭
  const arrow = (key) => {
    if (sortKey !== key) return "";
    return sortAsc ? "🔼" : "🔽";
  };

  // 輔助解析日期 YYYY-MM-DD 或 YYYY/MM/DD
  const parseYMDDate = (str) => {
    if (typeof str !== "string") return 0;
    const normalized = str.replace(/\//g, "-");
    const parts = normalized.split("-");
    if (parts.length === 3) {
      const [y, m, d] = parts.map(Number);
      if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
        return new Date(y, m - 1, d).getTime();
      }
    }
    return 0;
  };

  // 排序資料 (使用 useMemo 替代 computed)
  const sortedFoods = useMemo(() => {
    if (!sortKey) return foods;

    return [...foods].sort((a, b) => {
      let v1 = a[sortKey];
      let v2 = b[sortKey];

      if (sortKey === "fooddate") {
        const t1 = parseYMDDate(v1);
        const t2 = parseYMDDate(v2);
        return sortAsc ? t1 - t2 : t2 - t1;
      }

      const n1 = parseFloat(v1);
      const n2 = parseFloat(v2);
      if (!isNaN(n1) && !isNaN(n2)) {
        return sortAsc ? n1 - n2 : n2 - n1;
      }

      return sortAsc
        ? String(v1).localeCompare(String(v2))
        : String(v2).localeCompare(String(v1));
    });
  }, [foods, sortKey, sortAsc]);

  return (
    <div>
      <h1>FirebaseFood Page</h1>

      <p className="mb-2">
        目前排序：<strong>{sortKey || "無"}</strong>
        {sortKey && <span>{sortAsc ? " 🔼 升冪" : " 🔽 降冪"}</span>}
      </p>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th
                onClick={() => sort("foodname")}
                className="cursor-pointer select-none"
              >
                foodname <span>{arrow("foodname")}</span>
              </th>
              <th
                onClick={() => sort("foodbrand")}
                className="cursor-pointer select-none"
              >
                foodbrand <span>{arrow("foodbrand")}</span>
              </th>
              <th
                onClick={() => sort("foodstore")}
                className="cursor-pointer select-none"
              >
                foodstore <span>{arrow("foodstore")}</span>
              </th>
              <th
                onClick={() => sort("foodprice")}
                className="cursor-pointer select-none"
              >
                foodprice <span>{arrow("foodprice")}</span>
              </th>
              <th
                onClick={() => sort("foodamount")}
                className="cursor-pointer select-none"
              >
                foodamount <span>{arrow("foodamount")}</span>
              </th>
              <th
                onClick={() => sort("fooddate")}
                className="cursor-pointer select-none"
              >
                fooddate <span>{arrow("fooddate")}</span>
              </th>
              <th
                onClick={() => sort("id")}
                className="cursor-pointer select-none"
              >
                id <span>{arrow("id")}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedFoods.map((food, idx) => (
              <tr key={food.id}>
                <td>{idx + 1}</td>
                <td>{food.foodname}</td>
                <td>{food.foodbrand}</td>
                <td>{food.foodstore}</td>
                <td>{food.foodprice}</td>
                <td>{food.foodamount}</td>
                <td>{food.fooddate}</td>
                <td>{food.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FirebaseFoodPage;
