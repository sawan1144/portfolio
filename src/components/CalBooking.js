"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        styles: { branding: { brandColor: "#ff3b00" } }, // Custom orange branding accent
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div className="w-full max-w-[960px] mx-auto overflow-hidden rounded-2xl border border-[#111110]/15 bg-[#111110] shadow-2xl h-[550px]">
      <Cal
        namespace="15min"
        calLink="sawan-panwar-jltxno/15min"
        style={{ width: "100%", height: "100%" }}
        config={{
          theme: "dark",
          layout: "month_view"
        }}
      />
    </div>
  );
}
