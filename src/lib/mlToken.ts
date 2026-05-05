interface TokenCache {
  token: string;
  expiresAt: number;
}

let cache: TokenCache | null = null;

export async function getMercadoLibreToken(): Promise<string | null> {
  const clientId = process.env.MERCADOLIBRE_CLIENT_ID;
  const clientSecret = process.env.MERCADOLIBRE_CLIENT_SECRET;

  if (!clientId || !clientSecret) return null;

  // Return cached token if still valid (with 60s buffer)
  if (cache && Date.now() < cache.expiresAt - 60_000) {
    return cache.token;
  }

  const res = await fetch("https://api.mercadolibre.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  });

  if (!res.ok) return null;

  const data = await res.json();
  cache = {
    token: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };

  return cache.token;
}
