"use client";
import { useState, useEffect, useMemo } from "react";
import dayjs from "dayjs";
import "./countdown.css";

function App() {
  const [countdownData, setCountdownData] = useState(null);
  const [currentTime, setCurrentTime] = useState(dayjs());

  // 目標時間
  const targetTime = dayjs("2025-07-05 04:18:00");

  // 獲取倒計時數據
  const fetchCountdownData = async () => {
    try {
      const response = await fetch("/api/countdown/202507050418");
      const data = await response.json();
      setCountdownData(data);
    } catch (error) {
      console.error("Failed to fetch countdown data:", error);
    }
  };

  // 計算倒計時
  const countdown = useMemo(() => {
    const diff = targetTime.diff(currentTime);
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isExpired: false };
  }, [currentTime, targetTime]);

  // 初始化和定時器
  useEffect(() => {
    // 首次獲取數據
    fetchCountdownData();

    // 每秒更新時間
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-800 via-black to-indigo-900 p-6">
      <div className="text-center text-white mb-8">
        <h1 className="text-4xl font-bold mb-4">This is Countdown Page.</h1>
        <h2 className="text-xl mb-2">
          First, fetch /api/countdown/202507050418 once.
        </h2>
        <h2 className="text-xl">Second, setInterval every one sec.</h2>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center gap-8 max-w-4xl w-full">
          {/* 警示卡片群 */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* 全世界各國首都卡片 */}
            <div
              className="card w-128 bg-red-500 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
              title="全世界各國首都圈大地震"
            >
              <div className="card-body items-center text-center p-6">
                <h2 className="card-title text-xl mb-4">
                  2025/07/05 04:18
                  <br />
                  全世界各國首都
                  <br />
                  (當地時間)
                  <br />
                </h2>

                {/* SVG 圖標 */}
                <div className="flex justify-center gap-4 mb-4">
                  <svg
                    width="64px"
                    height="64px"
                    viewBox="0 0 1024 1024"
                    className="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M554.3 475.1m-434.1 0a434.1 434.1 0 1 0 868.2 0 434.1 434.1 0 1 0-868.2 0Z"
                        fill="#44C0C6"
                      ></path>
                      <path
                        d="M971.9 357.6C921.6 178.7 760 46.9 566.3 41.6c-53.4 63.2-101.6 146.3 13.6 146.3 185.8 0 137.5 136.9-70.6 146.7-208.1 9.8-149.4 156.5-32.1 171.2s112.5 102.7 112.5 136.9 102.7 14.7 151.6-58.7c48.9-73.4 102.7-151.6 97.8-200.5-3.1-31.2 75.5-30.5 132.8-25.9z"
                        fill="#60C13D"
                      ></path>
                    </g>
                  </svg>

                  <svg
                    width="64px"
                    height="64px"
                    viewBox="0 0 72 72"
                    id="emoji"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g id="color">
                        <polygon
                          fill="#9b9b9a"
                          points="36.641 23.012 40.117 26.752 37.922 30.756 37.936 36.303 22.978 36.303 22.592 32.459 21.554 30.277 22.063 27.49 21.298 20.899 33.33 11.134 40.153 14.303 36.641 23.012"
                        ></polygon>
                        <polygon
                          fill="#3f3f3f"
                          points="36.641 23.012 40.117 26.752 37.922 30.756 37.936 36.303 47.788 36.303 47.633 32.761 46.005 28.481 46.823 24.602 46.104 16.936 40.153 14.303 36.641 23.012"
                        ></polygon>
                        <path
                          fill="#ea5a47"
                          d="M19.2578,58.568c0-9.1562,6.9838-16.4253,16.6672-16.5788,9.112-.1445,16.6422,6.2323,16.6671,16.5788Z"
                        ></path>
                        <polygon
                          fill="#ffffff"
                          points="32.584 30.153 27.436 30.153 26.919 24.245 32.067 24.245 32.584 30.153"
                        ></polygon>
                      </g>
                    </g>
                  </svg>

                  <svg
                    height="64px"
                    width="64px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 511.977 511.977"
                    xmlSpace="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        style={{ fill: "#5e9cea" }}
                        d="M511.954,458.634c0,0,6.844-405.416-213.305-405.291c-170.753,0.094-170.651,149.308-170.651,149.308 s73.31-87.513,148.558-12.281c75.232,75.248-105.895,268.265-105.895,268.265h341.293V458.634z"
                      ></path>
                      <path
                        style={{ fill: "#4b89da" }}
                        d="M298.649,53.342c-71.131,0.031-112.614,25.952-136.801,56.186 c25.21-20.14,61.943-34.827,115.473-34.858c189.541-0.109,210.822,300.404,213.072,383.964h21.561 C511.954,458.634,518.798,53.217,298.649,53.342z"
                      ></path>
                      <polygon
                        style={{ fill: "#46cead" }}
                        points="21.259,351.981 21.259,447.978 149.068,447.978 149.068,351.981 85.312,298.639 "
                      ></polygon>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* 日本東京卡片 */}
            <div
              className="card w-64 bg-red-600 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
              title="日本東京首都圈大地震"
            >
              <div className="card-body items-center text-center p-6">
                <h2 className="card-title text-xl">
                  ⚠️
                  <br />
                  2025/07/05 04:18
                  <br />
                  日本東京(當地時間)
                </h2>
              </div>
            </div>

            {/* 臺灣臺北卡片 */}
            <div
              className="card w-64 bg-red-500 text-white shadow-xl hover:scale-105 transition duration-200 cursor-help"
              title="臺灣臺北首都圈大地震"
            >
              <div className="card-body items-center text-center p-6">
                <h2 className="card-title text-xl">
                  ⚠️
                  <br />
                  2025/07/05 04:18
                  <br />
                  臺灣臺北(當地時間)
                </h2>
              </div>
            </div>
          </div>

          {/* 倒計時顯示 */}
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">距離目標時間還有：</h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                <div className="text-3xl font-bold">{countdown.days}</div>
                <div className="text-sm">天</div>
              </div>
              <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                <div className="text-3xl font-bold">{countdown.hours}</div>
                <div className="text-sm">小時</div>
              </div>
              <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                <div className="text-3xl font-bold">{countdown.minutes}</div>
                <div className="text-sm">分鐘</div>
              </div>
              <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                <div className="text-3xl font-bold">{countdown.seconds}</div>
                <div className="text-sm">秒</div>
              </div>
            </div>
            {countdown.isExpired && (
              <div className="mt-4 text-red-500 text-xl font-bold">
                時間已到！
              </div>
            )}
          </div>

          {/* 當前時間顯示 */}
          <div className="text-center text-white">
            <p className="text-lg">
              當前時間: {currentTime.format("YYYY-MM-DD HH:mm:ss")}
            </p>
            <p className="text-lg">
              目標時間: {targetTime.format("YYYY-MM-DD HH:mm:ss")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
