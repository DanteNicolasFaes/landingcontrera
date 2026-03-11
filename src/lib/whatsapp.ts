/**
 * Centralised WhatsApp configuration.
 * Update WHATSAPP_NUMBER here and it propagates to the entire site.
 */

export const WHATSAPP_NUMBER = '5491132025939';

/**
 * Returns the correct WhatsApp URL based on the user's device.
 *
 * - Mobile  → opens the WhatsApp app via wa.me
 * - Desktop → opens WhatsApp Web in a new tab
 *
 * @param encodedMsg - A pre-encoded URI component string (from encodeURIComponent)
 */
export function getWhatsAppUrl(encodedMsg: string): string {
  const isMobile =
    typeof navigator !== 'undefined' &&
    /android|iphone|ipad|ipod|blackberry|windows phone/i.test(navigator.userAgent);

  if (isMobile) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
  }

  return `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMsg}`;
}
