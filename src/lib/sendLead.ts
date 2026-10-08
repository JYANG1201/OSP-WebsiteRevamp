/* Shared submit for both lead forms (Contact page + consultation CTA).
   Posts to Web3Forms; resolves true only when the service confirms delivery. */
export async function sendLead(accessKey: string, fields: Record<string, string>): Promise<boolean> {
  if (!accessKey) return false;
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: accessKey, from_name: 'One Search Pro website', ...fields }),
    });
    const data = await res.json().catch(() => null);
    return res.ok && Boolean(data && data.success);
  } catch {
    return false;
  }
}

export const SEND_ERROR_MESSAGE =
  "Sorry, your message couldn't be sent. Please try again or email info@onesearchpro.my.";
