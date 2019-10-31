import React, {useEffect} from "react";
import usePlayer from "../hook/usePlayer";

const Counter = () => {

  const {onSearchPlayerInfo} = usePlayer();

  useEffect(() => {
    const response = onSearchPlayerInfo('201939');
    console.log(response);
  }, []);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Counter;