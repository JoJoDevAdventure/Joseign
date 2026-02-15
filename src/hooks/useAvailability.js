import { useState, useEffect } from "react";

/**
 * Returns dynamic availability based on day of week.
 * - Monday/Tuesday: 2 spots left
 * - Wednesday–Saturday: 1 spot left
 * - Sunday: 0 spots, booking for next week
 */
export default function useAvailability() {
  const [availability, setAvailability] = useState({
    spotsLeft: 1,
    taken: 2,
    total: 3,
    isSunday: false,
  });

  useEffect(() => {
    const day = new Date().getDay(); // 0=Sun, 1=Mon, ..., 6=Sat

    if (day === 0) {
      setAvailability({ spotsLeft: 0, taken: 3, total: 3, isSunday: true });
    } else if (day <= 2) {
      setAvailability({ spotsLeft: 2, taken: 1, total: 3, isSunday: false });
    } else {
      setAvailability({ spotsLeft: 1, taken: 2, total: 3, isSunday: false });
    }
  }, []);

  return availability;
}
