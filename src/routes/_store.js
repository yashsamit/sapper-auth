import { writable } from "svelte/store";

function useLocalStorage(store, key) {
  const json = localStorage.getItem(key);
  if (json) {
    store.set(JSON.parse(json));
  }

  store.subscribe(value => localStorage.setItem(key, JSON.stringify(value)));
}

export const user = writable({});
if (process.browser) {
  useLocalStorage(user, "sapper");
}