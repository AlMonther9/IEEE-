import Image from "next/image";

const cards = [
  {
    title: "Our Mission",
    description:
      "To support students in developing technical and professional skills through workshops, projects, and community engagement, while fostering innovation and collaboration in line with IEEE values.",
    icon: "/Rectangle.svg",
    iconAlt: "Mission icon",
  },
  {
    title: "Our Vision",
    description:
      "To be a leading student community that inspires innovation, empowers future engineers, and contributes to technological advancement locally and globally.",
    icon: "/company-vision%201%20(1).svg",
    iconAlt: "Vision icon",
  },
] as const;

const frameClass =
  "relative mx-auto w-full max-w-[1425px] overflow-hidden rounded-[10px] border border-[#0A97FF]/70 bg-gradient-main text-white";
const contentClass =
  "relative z-10 mx-auto flex min-h-[826px] w-full max-w-[1140px] flex-col px-5 pb-12 pt-[108px] sm:px-8 sm:pt-[118px] lg:px-0";
const cardClass =
  "mx-auto h-auto min-h-[280px] w-full max-w-[546px] rounded-[10px] border border-[#8690F8]/20 bg-[rgba(134,144,248,0.05)] px-8 pb-8 pt-10 shadow-[0_0_35px_rgba(0,0,0,0.5)] backdrop-blur-[7px] lg:h-[334px]";

export default function Hero() {
  return (
    <section className="px-3 pb-14 pt-4 sm:px-6 lg:px-8">
      <div className={frameClass}>
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1425px) 1425px, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030B22]/90 via-[#02040A]/85 to-[#02040A]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,78,216,0.23)_0%,rgba(3,11,34,0.8)_54%,rgba(2,4,10,0.95)_100%)]" />
          <div className="absolute inset-0 bg-[#030B22] opacity-25 mix-blend-screen" />
        </div>

        <div className={contentClass}>
          <p className="mx-auto inline-flex rounded-md border border-primary-blue/40 bg-primary-blue/10 px-4 py-1 text-[13px] font-semibold text-primary-blue">
            Established 2020
          </p>

          <h1 className="mx-auto mt-6 max-w-[760px] text-center text-[38px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[52px] lg:text-[68px]">
            Empowering Future{" "}
            <span className="bg-gradient-header bg-clip-text text-transparent">Engineers</span>
            <br className="hidden sm:block" />
            Through Technology
          </h1>

          <p className="mx-auto mt-4 max-w-[650px] text-center text-[14px] leading-[1.62] text-white/80 sm:text-[15px] sm:leading-7">
            IEEE SVU Student Branch is a dynamic student community that promotes technical learning,
            innovation, and professional growth. The branch provides students with opportunities to
            develop technical skills, engage in hands-on projects, and connect with the global IEEE
            network, preparing them to become future technology leaders.
          </p>

          <div className="mt-[74px] grid gap-6 lg:grid-cols-2 lg:gap-[26px]">
            {cards.map((card) => (
              <article key={card.title} className={cardClass}>
                <div className="flex items-center gap-3">
                  <Image src={card.icon} alt={card.iconAlt} width={58} height={58} className="h-[58px] w-[58px]" />
                  <h2 className="text-[44px] font-semibold leading-none sm:text-[50px]">{card.title}</h2>
                </div>
                <p className="mt-5 text-[14px] leading-[1.6] text-white/78">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
