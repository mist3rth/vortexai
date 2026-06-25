const isDev = process.env.NODE_ENV === "development";

export const log = {
  dev: (...args: any[]) => {
    if (isDev) {
      console.log("[DEV-LOG]:", ...args);
    }
  },
  error: (...args: any[]) => {
    console.error("[ERROR]:", ...args);
  },
  warn: (...args: any[]) => {
    console.warn("[WARN]:", ...args);
  }
};
