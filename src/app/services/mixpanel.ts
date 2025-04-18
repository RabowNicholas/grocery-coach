import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = "be2ee6d3e4ca57ce800341b89bd1f9cb";

export const initMixpanel = () => {
  if (typeof window !== "undefined") {
    mixpanel.init(MIXPANEL_TOKEN, { debug: true });
  }
};

export const trackEvent = (name: string, props?: object) => {
  initMixpanel();
  if (typeof window !== "undefined") {
    mixpanel.track(name, props);
  }
};
