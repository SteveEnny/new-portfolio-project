const FramerIcon = () => {
  return (
    <svg
      className="w-12 h-12 transition-colors duration-300"
      width="2500"
      height="2500"
      viewBox="3.7 3.7 43.6 43.6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        {`
          .icon-path { fill: black; transition: fill 0.3s ease-in-out; }
          .icon:hover .icon-path:nth-child(1) { fill: #59529d; }
          .icon:hover .icon-path:nth-child(2) { fill: #5271b4; }
          .icon:hover .icon-path:nth-child(3) { fill: #bb4b96; }
        `}
      </style>
      <g className="icon">
        <path
          className="icon-path"
          d="M47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z"
        />
        <path className="icon-path" d="M47.3 25.5v21.8l-10.9-10.9z" />
        <path
          className="icon-path"
          d="M25.5 25.5l-10.9 10.9-10.9 10.9V3.7l10.9 10.9z"
        />
      </g>
    </svg>
  );
};

export default FramerIcon;
