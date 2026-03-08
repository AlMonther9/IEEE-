

const EventHeroSkeleton=()=>{

        return(
            <div className="-mt-24 min-h-screen bg-gradient-main px-2 text-white">
      <div className="mx-auto w-full max-w-6xl animate-pulse">
        <section className="relative overflow-hidden border border-primary-blue/30 bg-black/20">
          <div className="absolute inset-0 bg-primary-blue/20" />

          <div className="relative z-10 min-h-95 px-5 pb-14 pt-6 sm:px-8 lg:px-10">
            <div className="flex items-center justify-between">
              <div className="h-8 w-20 rounded-full bg-white/15" />
              <div className="h-8 w-8 rounded-full bg-white/15" />
            </div>

            <div className="mt-14 max-w-2xl space-y-4">
              <div className="h-6 w-24 rounded-full bg-white/15" />
              <div className="h-8 w-4/5 rounded-md bg-white/15" />
              <div className="h-8 w-3/5 rounded-md bg-white/15" />
            </div>
          </div>
        </section>

        <div className="relative z-20 -mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-10">
          <div className="space-y-8">
            <article className="rounded-2xl border border-primary-blue/30 bg-white/5 p-6 backdrop-blur-md sm:p-7">
              <div className="h-6 w-36 rounded-md bg-white/15" />
              <div className="mt-4 space-y-2">
                <div className="h-4 w-full rounded-md bg-white/15" />
                <div className="h-4 w-11/12 rounded-md bg-white/15" />
                <div className="h-4 w-9/12 rounded-md bg-white/15" />
              </div>
            </article>

            <section>
              <div className="h-7 w-40 rounded-md bg-white/15" />
              <div className="mt-6 space-y-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <article
                    key={`schedule-${index}`}
                    className="rounded-lg border border-primary-blue/20 bg-white/5 p-4"
                  >
                    <div className="space-y-2">
                      <div className="h-4 w-28 rounded-md bg-white/15" />
                      <div className="h-5 w-3/4 rounded-md bg-white/15" />
                      <div className="h-4 w-full rounded-md bg-white/15" />
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <div className="h-7 w-28 rounded-md bg-white/15" />
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <article
                    key={`speaker-${index}`}
                    className="rounded-2xl border border-primary-blue/25 bg-white/5 px-4 py-6 text-center backdrop-blur-md"
                  >
                    <div className="mx-auto h-14 w-14 rounded-full bg-white/15" />
                    <div className="mx-auto mt-4 h-4 w-28 rounded-md bg-white/15" />
                    <div className="mx-auto mt-2 h-4 w-20 rounded-md bg-white/15" />
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="sticky top-20 h-fit rounded-[28px] border border-primary-blue/20 bg-gradient-secondary/85 p-6 backdrop-blur-md lg:mt-16">
            <div className="space-y-7">
              {Array.from({ length: 3 }).map((_, index) => (
                <div className="flex items-start gap-4" key={`meta-${index}`}>
                  <div className="h-14 w-14 rounded-xl bg-white/15" />
                  <div className="space-y-2">
                    <div className="h-4 w-20 rounded-md bg-white/15" />
                    <div className="h-4 w-32 rounded-md bg-white/15" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex h-36 items-center justify-center rounded-2xl bg-white/5">
              <div className="h-10 w-28 rounded-full bg-white/15" />
            </div>

            <div className="mt-6 border-t border-primary-blue/20 pt-5">
              <div className="flex items-end justify-between">
                <div className="h-4 w-24 rounded-md bg-white/15" />
                <div className="h-5 w-12 rounded-md bg-white/15" />
              </div>

              <div className="mt-4 h-12 w-full rounded-xl bg-white/15" />
              <div className="mx-auto mt-5 h-4 w-28 rounded-md bg-white/15" />
            </div>
          </aside>
        </div>
      </div>
    </div>
        )

}

export default EventHeroSkeleton;