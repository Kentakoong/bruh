import React, { useEffect, useLayoutEffect } from "react";
import { useCallback } from "react";

export const SaveCount = (
  setCount: React.Dispatch<React.SetStateAction<number | undefined>>,
  count?: number
) => {
  const handleInitiation = useCallback(() => {
    const bruhCount = localStorage.getItem("bruh");
    setCount(bruhCount ? Number(bruhCount) : 0);
  }, [setCount]);

  useLayoutEffect(() => {
    handleInitiation();
    return () => handleInitiation();
  }, [handleInitiation]);

  useEffect(() => {
    if (!count) return;
    localStorage.setItem("bruh", count.toString());
  }, [count]);
};
