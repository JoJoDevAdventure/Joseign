import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookMe() { // Changed the function name to start with an uppercase letter
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "catch-up" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center">
      <Cal
        className=""
        namespace="catch-up"
        calLink="joseph-bouhlel/catch-up"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}