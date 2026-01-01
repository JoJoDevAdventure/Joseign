import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookMe() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "bookme" });
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
        namespace="bookme"
        calLink="joseign/bookme"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}