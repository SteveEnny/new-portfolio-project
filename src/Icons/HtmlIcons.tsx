import React, { useState } from "react";

const HtmlIcon = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <svg
      className="icon-two w-12 h-12 transition-colors duration-300"
      fill="none"
      height="2500"
      width="2183"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124 141.53199999999998"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <path
        d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
        fill={hovered ? "#e34f26" : "#333"} // Dark color by default
      />
      <path
        d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
        fill={hovered ? "#ef652a" : "#555"} // Dark color by default
      />
      <path
        d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
        fill="#fff" // Dark color by default
      />
    </svg>
  );
};

export default HtmlIcon;
