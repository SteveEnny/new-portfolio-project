// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// export const useNavigationLoading = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setIsLoading(true);
    
//     // Simulate a small delay to show the loading state
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   return isLoading;
// }; 