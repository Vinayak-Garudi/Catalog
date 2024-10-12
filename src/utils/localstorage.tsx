// utils/localStorageUtils.ts

export function setLocalStorageItem<T>(key: string, value: T): void {
    if (typeof window !== "undefined") {
        try {
            const serializedValue = JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
        } catch (error) {
            console.error("Error setting localStorage item", error);
        }
    }
}

export function getLocalStorageItem<T>(key: string): T | null {
    if (typeof window !== "undefined") {
        try {
            const serializedValue = localStorage.getItem(key);
            if (serializedValue === null) {
                return null;
            }
            return JSON.parse(serializedValue) as T;
        } catch (error) {
            console.error("Error getting localStorage item", error);
            return null;
        }
    }
    return null;
}
