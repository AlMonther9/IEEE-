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
        <div className="absolute left-0 top-0 h-full w-40  bg-gradient-to-r from-[#030B22] to-transparent pointer-events-none z-10" />

        
        <div className="absolute right-0 top-0 h-full w-40  bg-gradient-to-l from-[#030B22] to-transparent pointer-events-none  z-10" />

        <div className="flex items-center gap-16 animate-scroll whitespace-nowrap">
          {duplicatedSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="min-w-[200px] text-center"
            >
              <span className="text-foreground/60 text-xl md:text-2xl font-semibold tracking-wide">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
