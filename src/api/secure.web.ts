/** Browser: no keychain, so the session token is kept in localStorage. */
const ls = () => { try { return globalThis.localStorage ?? null; } catch { return null; } };
export const secure = {
  get: async (k: string) => ls()?.getItem(k) ?? null,
  set: async (k: string, v: string) => { ls()?.setItem(k, v); },
  remove: async (k: string) => { ls()?.removeItem(k); },
};
