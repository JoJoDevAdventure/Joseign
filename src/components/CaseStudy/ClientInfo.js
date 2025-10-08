import ScrollStack, { ScrollStackItem } from "../ScrollStack";

const hexToRgba = (hex, alpha) => {
  const h = hex.replace("#", "");
  const bigint = parseInt(
    h.length === 3
      ? h
          .split("")
          .map((x) => x + x)
          .join("")
      : h,
    16
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Renders a vertical stack where each “page” slides in as
 * the user scrolls. Cards are created explicitly (no .map)
 * per the shape of the `client` object.
 */
const ClientInfo = ({ client }) => {
  const accent = client?.color ?? "#00511C";

  const handleStackComplete = () => {
    const offset = window.innerWidth > 500 ? 300 : 550;
    window.requestAnimationFrame(() => {
      window.scrollBy({ top: offset, behavior: "smooth" });
    });
  };

  const opacities = [0.05, 0.1, 0.2, 0.3, 0.4];

  return (
    <ScrollStack
      style={{ scrollbarWidth: "none" }}
      itemDistance={300}
      itemStackDistance={35}
      stackPosition="15%"
      blurAmount={0}
      onStackComplete={handleStackComplete}
    >
      {/* --- Card 1 : Basic info -------------------------------- */}
      <ScrollStackItem className="">
        <div
          className="relative z-20 flex flex-row md:flex-col gap-4 items-center md:items-start text-center space-y-4 px-8 h-full rounded-[40px] overflow-hidden"
          style={{ backgroundColor: hexToRgba(accent, opacities[0]) }}
        >
          <img
            src={client.info.logo}
            alt={`${client.info.name} logo`}
            className="md:absolute left-0 right-0 md:w-full w-96 h-60 bg-white/80 rounded-xl md:rounded-none overflow-hidden"
          />
          <div className="relative text-left items-start md:pt-60">
            <p
              className="max-w-md text-muted-foreground text-xs"
              style={{ color: accent }}
            >
              {" "}
              About
            </p>
            <h2 className="text-3xl font-semibold">{client.info.name}</h2>
            <p className="max-w-md text-muted-foreground">
              {client.info.description}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-white rounded-[40px]" />
      </ScrollStackItem>

      {/* --- Card 2 : Industry -------------------------------- */}
      <ScrollStackItem>
        <div
          className="relative z-20 flex flex-row md:flex-col gap-4 items-center md:items-start text-center space-y-4 px-8 h-full rounded-[40px] overflow-hidden"
          style={{ backgroundColor: hexToRgba(accent, opacities[1]) }}
        >
          <img
            src={client.industry.img}
            alt={`${client.industry.title} logo`}
            className="md:absolute left-0 right-0 md:w-full w-96 h-60 bg-white/80 rounded-xl md:rounded-none overflow-hidden"
          />
          <div className="relative text-left items-start md:pt-60">
            <p
              className="max-w-md text-muted-foreground text-xs"
              style={{ color: accent }}
            >
              {" "}
              Industry
            </p>
            <h2 className="text-3xl font-semibold">{client.industry.title}</h2>
            <p className="max-w-md text-muted-foreground">
              {client.industry.description}
            </p>
          </div>
        </div>
        <div className="absolute z-10 inset-0 bg-white rounded-[40px]" />
      </ScrollStackItem>

      {/* --- Card 3 : Values ------------------------------------ */}
      <ScrollStackItem>
        <div
          className="relative z-20 flex flex-row md:flex-col gap-4 items-center md:items-start text-center space-y-4 px-8 h-full rounded-[40px] overflow-hidden"
          style={{ backgroundColor: hexToRgba(accent, opacities[2]) }}
        >
                    <img
            src={client.values.img}
            alt={`${client.values.title} logo`}
            className="md:absolute left-0 right-0 md:w-full w-96 h-60 bg-white/80 rounded-xl md:rounded-none overflow-hidden"
          />
          <div className="relative text-left items-start md:pt-60">
            <p
              className="max-w-md text-muted-foreground text-xs"
              style={{ color: accent }}
            >
              {" "}
              Values
            </p>
            <h2 className="text-3xl font-semibold">{client.values.title}</h2>
            <p className="max-w-md text-muted-foreground">
              {client.values.description}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-white rounded-[40px]" />
      </ScrollStackItem>

      {/* --- Card 4 : Vision ------------------------------------ */}
      <ScrollStackItem>
        <div
          className="relative z-20 flex flex-row md:flex-col gap-4 items-center md:items-start text-center space-y-4 px-8 h-full rounded-[40px] overflow-hidden"
          style={{ backgroundColor: hexToRgba(accent, opacities[3]) }}
        >
                              <img
            src={client.vision.img}
            alt={`${client.vision.title} logo`}
            className="md:absolute left-0 right-0 md:w-full w-96 h-60 bg-white/80 rounded-xl md:rounded-none overflow-hidden"
          />
          <div className="relative text-left items-start md:pt-60">
            <p
              className="max-w-md text-muted-foreground text-xs"
              style={{ color: accent }}
            >
              {" "}
              Vision
            </p>
            <h2 className="text-3xl font-semibold">{client.vision.title}</h2>
            <p className="max-w-md text-muted-foreground">
              {client.vision.description}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-white rounded-[40px]" />
      </ScrollStackItem>

      {/* --- Card 5 : Final img ------------------------------- */}
      <ScrollStackItem>
        <div
          className="relative z-20 flex flex-row md:flex-col gap-4 items-center md:items-start text-center space-y-4 h-full rounded-[40px] overflow-hidden"
          style={{ backgroundColor: hexToRgba(accent, opacities[4]) }}
        >
          <img
            src={client.final_img}
            alt={`${client.final_img} logo`}
            className="md:absolute left-0 right-0 md:w-full md:h-full w-full bg-white/80 rounded-xl md:rounded-none overflow-hidden object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white rounded-[40px]" />
      </ScrollStackItem>
    </ScrollStack>
  );
};

export default ClientInfo;
