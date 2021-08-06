const storage = localStorage;

export function loadStorageItem(key) {
  return JSON.parse(storage.getItem(key)) || null;
}

export function saveStorageItem(key, value) {
  storage.setItem(key, JSON.stringify(value));
  return value;
}

export function removeStorageItem(key) {
  storage.removeItem(key);
  return null;
}
