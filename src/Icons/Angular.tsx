const AngularIcon = () => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 256 272"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      className="icon"
      duration-300
    >
      <path
        className="dark-fill"
        d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z"
        fill="#E23237"
      />
      <path
        className="dark-fill"
        d="M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z"
        fill="#B52E31"
      />
      <path
        d="M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 27.99.498-82.179-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z"
        fill="#FFF"
      />
      <style>
        {`
            .icon {
              transition: all 0.3s ease-in-out;
            }
  
            .icon .dark-fill {
              fill: #333; /* Default dark color */
            }
  
            .icon:hover .dark-fill:nth-child(1) {
              fill: #E23237; /* Original color for first path */
            }
  
            .icon:hover .dark-fill:nth-child(2) {
              fill: #B52E31; /* Original color for second path */
            }
  
            .icon:hover .dark-fill:nth-child(3) {
              fill: #FFF; /* Original color for third path */
            }
          `}
      </style>
    </svg>
  );
};

export default AngularIcon;
