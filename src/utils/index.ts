export const caculateHashCode = (str: string) => {
  if (!str || str?.length === 0) return Math.round(Math.random() * 100000);
  const chars = Array.from(str).map((ele) => +ele.charCodeAt(0));
  return chars.reduce((prev, cur) => {
    return ((prev << 5) - prev + cur) | 0;
  }, 0);
};

export const importAll = (rc: __WebpackModuleApi.RequireContext) =>
  rc.keys().map(rc);
