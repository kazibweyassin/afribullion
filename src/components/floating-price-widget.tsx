"use client"

import { useState, useEffect } from "react";

export function FloatingPriceWidget() {
  const [price, setPrice] = useState("2,350,000");
  const [change, setChange] = useState("+2.5%");
  const [isPositive, setIsPositive] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      
      // Simulate price fluctuation
      setTimeout(() => {
        const basePrice = 2350000;
        const variation = Math.random() * 50000 - 25000; // ±25,000 UGX
        const newPrice = basePrice + variation;
        const priceChange = (variation / basePrice) * 100;
        
        setPrice(newPrice.toLocaleString());
        setChange(`${priceChange > 0 ? '+' : ''}${priceChange.toFixed(1)}%`);
        setIsPositive(priceChange >= 0);
        setIsUpdating(false);
      }, 500);
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-price-widget">
      <div className="price-label">Live Gold Price</div>
      <div className={`price-value ${isUpdating ? 'price-updating' : ''}`}>
        UGX {price}/oz
      </div>
      <div className={`price-change ${isPositive ? 'positive' : 'negative'}`}>
        {change} today
      </div>
    </div>
  );
} 