import React, { useCallback, useEffect, useState } from "react";

export const SaveCount = (
  setCount: React.Dispatch<React.SetStateAction<number | undefined>>,
  count?: number
) => {
  const [loading, setLoading] = useState(true);

  const handleInitiation = useCallback(() => {
    const bruhCount = localStorage.getItem("bruh");
    setCount(bruhCount ? Number(bruhCount) : 0);
    setLoading(false);
  }, [setCount]);

  useEffect(() => {
    handleInitiation();
    return () => handleInitiation();
  }, [handleInitiation]);

  useEffect(() => {
    if (!count) return;
    localStorage.setItem("bruh", count.toString());
  }, [count]);

  return loading;
};
