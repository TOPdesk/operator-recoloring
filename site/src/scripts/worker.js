import { hexToCSSFilter } from 'hex-to-css-filter';

const BASE_CONFIG = {
  acceptanceLossPercentage: 1,
  maxChecks: 10000, /* maybe progressive? */
};

self.onmessage = (event) => {
  try {
    const config = { ...BASE_CONFIG, forceFilterRecalculation: event.data.clearCache };
    const result = hexToCSSFilter(event.data.color, config);

    self.postMessage(result);
  }
  catch(e) {
    self.postMessage({ error: e.message });
  }
};