export function NextEvent() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            Next Event
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Următorul nostru eveniment
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-600 to-green-500 p-1 shadow-xl">
          <div className="rounded-[22px] bg-white p-6 dark:bg-gray-900 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <span className="mb-3 inline-block rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300">
                  Eveniment LSAC Iași
                </span>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                  Prima Adunare Generala
                </h3>

                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                  Vino la primul AG din acest an pentru a descoperi membrii LSAC IASI. Exploreaza departamentele si spune DA uneia dintre cele mai frumoase experiente pe care le poate avea un student la AC IASI.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                  <span>📅 1 octombrie</span>
                  <span>📍 Amfiteatrul AC-01</span>
                </div>
              </div>

              {/*<div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
                <a
                  href="https://forms.gle/tEWKu6rtSbQYaWmr5"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Înscrie-te acum
                  <span className="ml-2" aria-hidden="true">→</span>
                </a>

                <a
                  href="https://campusconnect.lsaciasi.ro"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-cyan-600 px-6 py-3 font-semibold text-cyan-700 transition-colors hover:bg-cyan-50 dark:text-cyan-400 dark:hover:bg-cyan-950/30"
                >
                  Află mai multe
                </a>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}