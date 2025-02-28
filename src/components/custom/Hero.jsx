import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 画面サイズをチェックして、モバイルかどうかを判定
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // スマホ画面の場合の閾値を768pxに設定
    };

    // 初期チェック
    checkMobile();

    // ウィンドウのリサイズイベントを監視
    window.addEventListener("resize", checkMobile);

    // コンポーネントがアンマウントされるときにイベントリスナーをクリーンアップ
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      className={`relative flex items-center justify-center min-h-screen 
        ${isMobile ? 'bg-gray-200' : 'md:bg-cover md:bg-center md:bg-no-repeat'} w-full`}
      style={{
        backgroundImage: isMobile
          ? 'url("/placeholder2.jpg")'  // スマホ画面の背景画像
          : 'url("/placeholder.jpg")', // デスクトップ画面の背景画像
      }}
    >
      {/* 半透明のコンテンツボックス */}
      <div className="bg-white/30 backdrop-blur-lg rounded-xl p-10 text-center max-w-3xl shadow-lg">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-gray-900">
          <span className="text-[#f56551]">
            Discover Your Next Adventure with AI:
          </span>{" "}
          Personalized Itineraries at Your Fingertips
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mt-4">
          Your personal trip planner and travel curator, creating custom
          itineraries tailored to your interests and budget.
        </p>

        <Link to={"/create-trip"}>
          <Button className="mt-6"> Get Started, It's Free </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;

