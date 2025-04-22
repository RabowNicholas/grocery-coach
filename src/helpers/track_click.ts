import { trackEvent } from "@/services/mixpanel";

export const trackClick = (
  label: string,
  location: string,
  props?: Record<string, unknown>
) => {
  trackEvent("button_clicked", {
    label,
    location,
    ...props,
  });
};
