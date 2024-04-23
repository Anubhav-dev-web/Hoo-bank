import React from "react";

const Button = ({ styles, content }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-md ${styles}
      transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110  duration-300`}
    >
      {content}
    </button>
  );
};

export default Button;
