import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = "be2ee6d3e4ca57ce800341b89bd1f9cb";

export const initMixpanel = () => {
  if (typeof window !== "undefined") {
    console.log("📈 Initializing Mixpanel...");
    mixpanel.init(MIXPANEL_TOKEN, { debug: true });
  }
};

export const trackEvent = (name: string, props?: object) => {
  if (typeof window !== "undefined") {
    console.log("track event");
    mixpanel.track(name, props);
  }
};
