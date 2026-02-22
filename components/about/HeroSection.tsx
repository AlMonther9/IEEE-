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
  "relative w-full overflow-hidden bg-gradient-main text-white";
const contentClass =
  "relative z-10 mx-auto flex min-h-[826px] w-full max-w-6xl flex-col px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-0";
const cardClass =
  "mx-auto h-auto min-h-72 w-full max-w-xl rounded-xl border border-[#8690F8]/20 bg-[#8690F8]/5 px-8 pb-8 pt-10 shadow-2xl backdrop-blur-md lg:h-80";

export default function Hero() {
  return (
    <section className="-mt-24">
      <div className={frameClass}>
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030B22]/40 via-[#02040A]/35 to-[#02040A]/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,78,216,0.23)_0%,rgba(3,11,34,0.8)_54%,rgba(2,4,10,0.95)_100%)]" />
          <div className="absolute inset-0 opacity-25 mix-blend-screen" />
        </div>

        <div className={contentClass}>
          <p className="mx-auto inline-flex rounded-md border border-primary-blue/40 bg-linear-to-b from-[#02040A] to-[#061231] px-4 py-1 text-sm font-semibold text-primary-blue">
            Established 2020
          </p>

          <h1 className="mx-auto mt-6 text-center text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Empowering Future
            <span className="block my-1 bg-gradient-header bg-clip-text text-transparent sm:inline sm:my-0 sm:mx-3">
              Engineers
            </span>
            Through Technology
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-white/80 sm:text-base sm:leading-7">
            IEEE SVU Student Branch is a dynamic student community that promotes technical learning,
            innovation, and professional growth. The branch provides students with opportunities to
            develop technical skills, engage in hands-on projects, and connect with the global IEEE
            network, preparing them to become future technology leaders.
          </p>

          <div className="mt-20 grid gap-6 lg:grid-cols-2 lg:gap-7">
            {cards.map((card) => (
              <article key={card.title} className={cardClass}>
                <div className="flex items-center gap-3">
                  <Image src={card.icon} alt={card.iconAlt} width={56} height={56} className="size-14" />
                  <h2 className="text-5xl font-semibold leading-none sm:text-5xl">{card.title}</h2>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/80">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
