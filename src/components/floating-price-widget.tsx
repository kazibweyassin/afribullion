"use client"

import { useState, useEffect } from "react";

export function FloatingPriceWidget() {
  const [price, setPrice] = useState<string>("");
  const [change, setChange] = useState<string>("");
  const [isPositive, setIsPositive] = useState<boolean>(true);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [prevPrice, setPrevPrice] = useState<number | null>(null);

  // Fetch live gold price from API
  const fetchPrice = async () => {
    setIsUpdating(true);
    try {
      const res = await fetch("/api/gold-prices");
      const data = await res.json();
      // XAU is gold price per troy ounce in USD
      const goldPriceUSD = data.rates?.XAU;
      if (goldPriceUSD) {
        // Example: convert USD to UGX (Uganda Shilling)
        // You may want to fetch USD/UGX rate from the API for accuracy
        const pricePerOunceUSD = 1 / goldPriceUSD;
        const usdToUgx = 3800; // Example rate
        const goldPriceUGX = pricePerOunceUSD * usdToUgx;
        setPrice(goldPriceUGX.toLocaleString(undefined, { maximumFractionDigits: 0 }));
        if (prevPrice !== null) {
          const diff = goldPriceUGX - prevPrice;
          const percent = (diff / prevPrice) * 100;
          setChange(`${percent > 0 ? "+" : ""}${percent.toFixed(2)}%`);
          setIsPositive(percent >= 0);
        }
        setPrevPrice(goldPriceUGX);
      } else {
        setPrice("-");
        setChange("");
      }
    } catch {
      setPrice("-");
      setChange("");
    }
    setIsUpdating(false);
  };

  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-price-widget">
      <div className="price-label">Live Gold Price</div>
      <div className={`price-value ${isUpdating ? "price-updating" : ""}`}>
        UGX {price ? price : "-"}/oz
      </div>
      {change && (
        <div className={`price-change ${isPositive ? "positive" : "negative"}`}>
          {change} today
        </div>
      )}
    </div>
  );
} 