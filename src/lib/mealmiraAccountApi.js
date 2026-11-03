import { mealmiraAppConfig } from '../config/mealmiraApp';

/**
 * Permanently deletes the signed-in user's MealMira account and data.
 * @param {string} idToken Firebase ID token
 */
export async function deleteMealmiraAccount(idToken) {
  const { apiBaseUrl, deleteAccountPath } = mealmiraAppConfig;

  if (!apiBaseUrl) {
    return {
      ok: false,
      message: 'API base URL is not configured (VITE_MEALMIRA_API_BASE_URL).',
      code: 'config_missing',
    };
  }

  const url = `${apiBaseUrl}${deleteAccountPath}`;

  let response;
  try {
    response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${idToken}`,
        Accept: 'application/json',
      },
    });
  } catch {
    return {
      ok: false,
      message: 'Could not reach the server. Check your connection and try again.',
      code: 'network_error',
    };
  }

  if (response.status === 204 || response.ok) {
    return { ok: true };
  }

  let message = `Request failed (${response.status}).`;
  let code = `http_${response.status}`;

  try {
    const data = await response.json();
    if (data?.error?.message) message = data.error.message;
    if (data?.error?.code) code = data.error.code;
  } catch {
    // non-JSON body
  }

  return { ok: false, message, code };
}
