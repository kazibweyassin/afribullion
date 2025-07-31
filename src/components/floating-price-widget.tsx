"use client";

import { useState, useEffect, useCallback } from "react";

export function FloatingPriceWidget() {
  const [price, setPrice] = useState<string>("-");
  const [change, setChange] = useState<string>("");
  const [isPositive, setIsPositive] = useState<boolean>(true);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [prevPrice, setPrevPrice] = useState<number | null>(null);

  const TWO_DAYS_MS = 2 * 24 * 60 * 60 * 1000;

  const fetchPrice = useCallback(async () => {
    setIsUpdating(true);
    try {
      const res = await fetch("/api/gold-prices");
      const data = await res.json();
      const goldPriceUSD = data.rates?.XAU;

      if (goldPriceUSD) {
        const pricePerOunceUSD = 1 / goldPriceUSD;
        const usdToUgx = 3800; // Use actual forex API for accuracy
        const goldPriceUGX = pricePerOunceUSD * usdToUgx;

        setPrice(goldPriceUGX.toLocaleString(undefined, { maximumFractionDigits: 0 }));

        if (prevPrice !== null) {
          const diff = goldPriceUGX - prevPrice;
          const percent = (diff / prevPrice) * 100;
          setChange(`${percent > 0 ? "+" : ""}${percent.toFixed(2)}%`);
          setIsPositive(percent >= 0);
        }

        setPrevPrice(goldPriceUGX);
        localStorage.setItem("lastGoldFetch", Date.now().toString());
      } else {
        setPrice("-");
        setChange("");
      }
    } catch {
      setPrice("-");
      setChange("");
    }
    setIsUpdating(false);
  }, [prevPrice]);

  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, TWO_DAYS_MS);
    return () => clearInterval(interval);
  }, [fetchPrice, TWO_DAYS_MS]);

  return (
    <div className="floating-price-widget">
      <div className="price-label">Live Gold Price</div>
      <div className={`price-value ${isUpdating ? "price-updating" : ""}`}>
        UGX {price}/oz
      </div>
      {change && (
        <div className={`price-change ${isPositive ? "positive" : "negative"}`}>
          {change} (since last update)
        </div>
      )}
    </div>
  );
}