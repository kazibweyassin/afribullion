import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://api.metalpriceapi.com/v1/latest?api_key=be024b1faffa4762c84f50920312be04&base=USD&currencies=EUR,XAU,XAG";
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch prices" }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}