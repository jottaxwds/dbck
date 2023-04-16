import React from "react";
import { useInView } from "react-intersection-observer";

const useAnimated = () => {
    const { ref, inView } = useInView();
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      if(!inView) {
        return;
      }
      setIsVisible(true);
    }, [inView]);

    return { ref, isVisible };
}

export default useAnimated;