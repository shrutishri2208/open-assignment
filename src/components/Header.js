import React from "react";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="header flex items-center justify-between">
        <img
          src="https://open-frontend-bucket.s3.amazonaws.com/interviews/001/logo.svg"
          alt=""
        />
        <p>
          Total Time Spend <span className="font-bolder">1 hr</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
