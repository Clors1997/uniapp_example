const setStorage = function(key, value) {
  // #ifdef APP-PLUS
  plus.storage.setItem(key, value)
  // #endif
  // #ifndef APP-PLUS
  uni.setStorageSync(key, value)
  // #endif
}

const getStorage = function(key) {
  // #ifdef APP-PLUS
  return plus.storage.getItem(key)
  // #endif
  // #ifndef APP-PLUS
  return uni.getStorageSync(key)
  // #endif
}

const removeStorage = function(key) {
  // #ifdef APP-PLUS
  return plus.storage.removeItem(key)
  // #endif
  // #ifndef APP-PLUS
  return uni.removeStorageSync(key)
  // #endif
}

const clearStorage = function(key) {
  // #ifdef APP-PLUS
  return plus.storage.clear()
  // #endif
  // #ifndef APP-PLUS
  return uni.clearStorageSync()
  // #endif
}

export default {
  setStorage,
  getStorage,
  removeStorage,
  clearStorage
}