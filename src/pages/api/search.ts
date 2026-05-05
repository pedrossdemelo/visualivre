import { getMercadoLibreToken } from "lib/mlToken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params = new URLSearchParams(
    req.query as Record<string, string>
  ).toString();

  const headers: HeadersInit = {};
  const token = await getMercadoLibreToken();
  if (token) headers["Authorization"] = `Bearer ${token}`;

  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?${params}`,
      { headers }
    );
    const data = await response.json();
    res.status(response.status).json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch from Mercado Livre API" });
  }
}
