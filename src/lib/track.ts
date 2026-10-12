/* Thin wrapper around the GTM dataLayer. Every analytics event on the site
   goes through here so event names and parameters stay consistent with the
   GTM container (see the tracking plan in the migration checklist). */
type Params = Record<string, string | number | undefined>;

export function track(event: string, params: Params = {}): void {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

export function trackFormError(formName: string, reason: 'validation' | 'send_failed', fields = ''): void {
  track('form_error', { form_name: formName, error_type: reason, error_fields: fields || undefined });
}
