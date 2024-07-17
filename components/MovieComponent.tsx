// components/MovieComponet.tsx
import React, { useState, useEffect } from "react";

const MovieComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const setFalse = setTimeout(() => {
      setIsLoading(true);
    }, 500);

    const setTrue = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(setTrue);
      clearTimeout(setFalse);
    };
  }, []);

  return (
    <div>
      <h1>Movie Information</h1>
      {isLoading ? <p>is loading</p> : <p>content</p>}
    </div>
  );
};

export default MovieComponent;
