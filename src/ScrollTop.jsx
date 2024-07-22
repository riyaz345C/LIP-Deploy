import { useEffect } from "react";
import { useLocation } from "react-router-dom";

 const ScrollTop = ({bool}) => {
    const location = useLocation();
    useEffect(() => {
        if(!location.hash){
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    }, [location]);
  
    return null;
  };
  export default ScrollTop