const sponsors = [
  { name: "ETC" },
  { name: "ITIDA" },
  { name: "AES" },
  { name: "ROBOCANO" },
  { name: "CREATIVA" },
  { name: "TICO" },
];

const duplicatedSponsors = [...sponsors, ...sponsors];

export default function Sponsors() {
  return (
    <section className="relative bg-gradient-main py-20 overflow-hidden">

      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Our Sponsors &{" "}
          <span className="bg-gradient-header bg-clip-text text-transparent">
            Partners
          </span>
        </h2>

        <p className="text-foreground/70 text-sm md:text-base">
          Backed by industry leaders who believe in the next generation of engineers.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full z-10 pointer-events-none w-[clamp(80px,12vw,220px)] bg-[linear-gradient(to_right,#030B22_5%,transparent)]" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full z-10 pointer-events-none w-[clamp(80px,12vw,220px)] bg-[linear-gradient(to_left,#030B22_5%,transparent)]" />

        <div
          className="flex items-center animate-scroll whitespace-nowrap"
          style={{ gap: "clamp(2rem, 6vw, 6rem)" }}
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <div key={index} className="shrink-0 px-2">
              <span className="text-foreground/50 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-widest uppercase">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
