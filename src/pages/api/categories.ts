import { getMercadoLibreToken } from "lib/mlToken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const headers: HeadersInit = {};
  const token = await getMercadoLibreToken();
  if (token) headers["Authorization"] = `Bearer ${token}`;

  try {
    const response = await fetch(
      "https://api.mercadolibre.com/sites/MLB/categories",
      { headers }
    );
    const data = await response.json();
    res.status(response.status).json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch from Mercado Livre API" });
  }
}
