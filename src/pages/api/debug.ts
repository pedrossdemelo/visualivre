import { getMercadoLibreToken } from "lib/mlToken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const results: Record<string, unknown> = {};
  results.hasClientId = !!process.env.MERCADOLIBRE_CLIENT_ID;
  results.hasClientSecret = !!process.env.MERCADOLIBRE_CLIENT_SECRET;
  const token = await getMercadoLibreToken();
  results.tokenObtained = !!token;
  results.tokenPrefix = token ? token.slice(0, 20) + "..." : null;
  try {
    const r1 = await fetch("https://api.mercadolibre.com/sites/MLB/search?q=nike&limit=1");
    const d1 = await r1.json();
    results.noAuthStatus = r1.status;
    results.noAuthBody = JSON.stringify(d1).slice(0, 200);
  } catch (e) { results.noAuthError = String(e); }
  if (token) {
    try {
      const r2 = await fetch("https://api.mercadolibre.com/sites/MLB/search?q=nike&limit=1",
        { headers: { Authorization: `Bearer ${token}` } });
      const d2 = await r2.json();
      results.withTokenStatus = r2.status;
      results.withTokenBody = JSON.stringify(d2).slice(0, 200);
    } catch (e) { results.withTokenError = String(e); }
    try {
      const r3 = await fetch("https://api.mercadolibre.com/users/me",
        { headers: { Authorization: `Bearer ${token}` } });
      const d3 = await r3.json();
      results.meStatus = r3.status;
      results.meBody = JSON.stringify(d3).slice(0, 200);
    } catch (e) { results.meError = String(e); }
  }
  res.status(200).json(results);
}
