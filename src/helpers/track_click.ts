import { trackEvent } from "@/app/services/mixpanel";

export const trackClick = (
  label: string,
  location: string,
  props?: Record<string, any>
) => {
  trackEvent("button_clicked", {
    label,
    location,
    ...props,
  });
};
