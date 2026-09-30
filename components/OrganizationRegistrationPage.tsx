import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Facebook, Instagram, Mail, Phone, UserRound } from 'lucide-react'
import { Button } from './ui/button'

const departmentOptions = ['FR', 'PR', 'HR', 'IT', 'Design', 'Entertainment']
const dayOptions = ['Sâmbătă', 'Duminică', 'Luni', 'Marți']

export function OrganizationRegistrationPage() {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([])
  const [selectedDay, setSelectedDay] = useState('')
  const [selectedHour, setSelectedHour] = useState('18')
  const [selectedMinute, setSelectedMinute] = useState('30')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleDepartmentToggle = (department: string) => {
    setSelectedDepartments((current) => {
      if (current.includes(department)) {
        return current.filter((item) => item !== department)
      }

      if (current.length >= 2) {
        return current
      }

      return [...current, department]
    })
  }

  const handleHourChange = (value: string) => {
    const nextValue = value.replace(/\D/g, '').slice(0, 2)
    setSelectedHour(nextValue)
  }

  const handleMinuteChange = (value: string) => {
    const nextValue = value.replace(/\D/g, '').slice(0, 2)
    setSelectedMinute(nextValue)
  }

  const normalizeHour = () => {
    const numericValue = Number(selectedHour)
    if (!selectedHour) {
      setSelectedHour('14')
      return
    }
    if (numericValue < 14) setSelectedHour('14')
    if (numericValue > 20) setSelectedHour('20')
  }

  const normalizeMinute = () => {
    const numericValue = Number(selectedMinute)
    if (!selectedMinute) {
      setSelectedMinute('00')
      return
    }
    if (numericValue < 0) setSelectedMinute('00')
    if (numericValue > 59) setSelectedMinute('59')
  }

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxO5yn0lSA7kuEY1GTSF8t3aYVoC0emzZOAE8CHyDj95cSD_4VhELVoBr-KbSMJvow/exec'

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!selectedDay) {
      alert('Te rugăm să alegi o zi preferată.')
      return
    }

    if (selectedDepartments.length === 0) {
      alert('Te rugăm să alegi cel puțin un departament.')
      return
    }

    setSubmitStatus('loading')

    const form = event.currentTarget
    const formDataObj = new FormData(form)

    const payload = {
      nume: formDataObj.get('nume'),
      anStudiu: formDataObj.get('an-studiu'),
      descriere: formDataObj.get('descriere'),
      departamente: selectedDepartments.join(', '),
      telefon: formDataObj.get('telefon'),
      email: formDataObj.get('email'),
      facebook: formDataObj.get('facebook'),
      instagram: formDataObj.get('instagram'),
      ziPreferata: selectedDay,
      oraPreferata: `${selectedHour}:${selectedMinute}`
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Eroare HTTP: ${response.status}`)
      }

      setSubmitStatus('success')
    } catch (error) {
      console.error('Eroare la trimiterea înscrierii:', error)
      setSubmitStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50/30 to-green-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Înapoi la acasă
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 dark:bg-blue-900/80 px-3 py-2 text-sm font-medium text-blue-800 dark:text-blue-200">
            <UserRound className="h-4 w-4" />
            Formular de înscriere
          </div>
        </div>

        <div className="glass-card rounded-[32px] p-6 sm:p-8 lg:p-10">
          {submitStatus === 'loading' ? (
            <div className="flex min-h-[420px] items-center justify-center">
              <div className="w-full max-w-md rounded-[28px] border border-white/20 bg-white/70 p-8 text-center shadow-xl backdrop-blur-sm dark:bg-gray-900/70">
                <div className="mb-5 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600 dark:border-blue-800 dark:border-t-blue-300" />
                  </div>
                </div>

                <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  Se trimite formularul...
                </h2>

                <p className="text-base text-gray-700 dark:text-gray-200">
                  Te rugăm să aștepți câteva secunde.
                </p>
              </div>
            </div>
          ) : submitStatus !== 'idle' ? (
            <div className="flex min-h-[420px] items-center justify-center">
              <div className="w-full max-w-md rounded-[28px] border border-white/20 bg-white/70 p-8 text-center shadow-xl backdrop-blur-sm dark:bg-gray-900/70">
                <div className="mb-4 flex justify-center">
                  {submitStatus === 'success' ? (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300">
                      <span className="text-3xl font-bold">!</span>
                    </div>
                  )}
                </div>

                <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                  {submitStatus === 'success' ? 'Formular trimis cu succes' : 'Formularul nu a putut fi trimis'}
                </h2>

                <p className="mb-6 text-base text-gray-700 dark:text-gray-200">
                  {submitStatus === 'success'
                    ? 'Mulțumim! Cererea ta a fost înregistrată și vă vom contacta în curând.'
                    : 'A apărut o eroare la trimitere. Te rugăm să încerci din nou mai târziu.'}
                </p>

                <Link
                  to="/"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Înapoi la pagina principală
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-8 text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  LSAC Iași
                </p>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
                  Înscriere în organizație
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 dark:text-gray-200 md:text-lg">
                  Completează formularul pentru a ne cunoaște mai bine și pentru a te înscrie în departamentele noastre.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="nume" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Nume și prenume
              </label>
              <input
                id="nume"
                type="text"
                name="nume"
                required
                placeholder="Ex: Maria Popescu"
                className="w-full rounded-2xl border border-white/20 bg-white/60 px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-900/60 dark:text-white dark:focus:ring-blue-800"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="an-studiu" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Anul de studiu
              </label>
              <select
                id="an-studiu"
                name = "an-studiu"
                required
                defaultValue=""
                className="w-full rounded-2xl border border-white/20 bg-white/60 px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-900/60 dark:text-white dark:focus:ring-blue-800"
              >
                <option value="" disabled>
                  Selectează anul
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="lg:col-span-2 space-y-2">
              <label htmlFor="descriere" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Descriere despre tine
              </label>
              <textarea
                id="descriere"
                name="descriere"
                required
                rows={4}
                placeholder="Spune-ne puțin despre tine, interesele tale și ce te-ar interesa să faci în organizație..."
                className="w-full rounded-2xl border border-white/20 bg-white/60 px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-900/60 dark:text-white dark:focus:ring-blue-800"
              />
            </div>

            <div className="lg:col-span-2 space-y-3">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Departamentul pe care îl alegi (maxim 2)
              </label>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {departmentOptions.map((department) => {
                  const isSelected = selectedDepartments.includes(department)

                  return (
                    <button
                      key={department}
                      type="button"
                      onClick={() => handleDepartmentToggle(department)}
                      className={[
                        'rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200',
                        isSelected
                          ? 'border-blue-500 bg-blue-500/10 text-blue-700 shadow-md dark:border-blue-400 dark:bg-blue-500/15 dark:text-blue-200'
                          : 'border-white/20 bg-white/50 text-gray-700 hover:border-blue-300 hover:bg-blue-50/70 dark:bg-gray-900/60 dark:text-gray-200 dark:hover:border-blue-500 dark:hover:bg-blue-500/10',
                        selectedDepartments.length >= 2 && !isSelected ? 'opacity-60' : ''
                      ].join(' ')}
                    >
                      {department}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="telefon" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                <Phone className="h-4 w-4" />
                Număr de telefon
              </label>
              <input
                id="telefon"
                type="tel"
                name="telefon"
                required
                placeholder="Ex: 0722 123 456"
                className="w-full rounded-2xl border border-white/20 bg-white/60 px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-900/60 dark:text-white dark:focus:ring-blue-800"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                <Mail className="h-4 w-4" />
                Adresă de email
              </label>
              <input
                id="email"
                type="email"
                name = "email"
                required
                placeholder="nume@email.com"
                className="w-full rounded-2xl border border-white/20 bg-white/60 px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-900/60 dark:text-white dark:focus:ring-blue-800"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="facebook" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                <Facebook className="h-4 w-4" />
                Facebook
              </label>
              <input
                id="facebook"
                name = "facebook"
                type="text"
                placeholder="facebook.com/numele_tau"
                className="w-full rounded-2xl border border-white/20 bg-white/60 px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-900/60 dark:text-white dark:focus:ring-blue-800"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="instagram" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                <Instagram className="h-4 w-4" />
                Instagram
              </label>
              <input
                id="instagram"
                name = "instagram"
                type="text"
                placeholder="@nume_utilizator"
                className="w-full rounded-2xl border border-white/20 bg-white/60 px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-900/60 dark:text-white dark:focus:ring-blue-800"
              />
            </div>

            <div className="space-y-3 lg:col-span-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Preferința zi</label>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {dayOptions.map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={[
                      'rounded-2xl border px-4 py-3 text-sm font-medium transition-all duration-200',
                      selectedDay === day
                        ? 'border-blue-500 bg-blue-500/10 text-blue-700 dark:border-blue-400 dark:bg-blue-500/15 dark:text-blue-200'
                        : 'border-white/20 bg-white/50 text-gray-700 hover:border-blue-300 hover:bg-blue-50/70 dark:bg-gray-900/60 dark:text-gray-200 dark:hover:border-blue-500 dark:hover:bg-blue-500/10'
                    ].join(' ')}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 lg:col-span-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Preferința oră</label>

              <div className="rounded-[30px] border border-white/20 bg-white/50 p-5 shadow-inner dark:bg-gray-900/60">
                <div className="mb-4 flex items-center justify-center gap-3 rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 shadow-sm ring-2 ring-transparent transition-all duration-200 hover:border-blue-300 focus-within:border-blue-500 focus-within:ring-blue-200 dark:border-blue-800 dark:from-gray-900 dark:to-slate-900 dark:text-blue-200 dark:focus-within:border-blue-400 dark:focus-within:ring-blue-900/60">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={selectedHour}
                    onChange={(event) => handleHourChange(event.target.value)}
                    onBlur={normalizeHour}
                    placeholder="14"
                    className="w-16 bg-transparent text-center text-2xl font-semibold text-blue-700 outline-none placeholder:text-blue-300 dark:text-blue-200 dark:placeholder:text-blue-500/60"
                    aria-label="Ora preferata"
                  />
                  <span className="text-2xl font-semibold text-blue-600 dark:text-blue-200">:</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={selectedMinute}
                    onChange={(event) => handleMinuteChange(event.target.value)}
                    onBlur={normalizeMinute}
                    placeholder="30"
                    className="w-16 bg-transparent text-center text-2xl font-semibold text-blue-700 outline-none placeholder:text-blue-300 dark:text-blue-200 dark:placeholder:text-blue-500/60"
                    aria-label="Minute preferate"
                  />
                </div>

                <div className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">Ore</span>
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">Minute</span>
                </div>
              </div>
            </div>

            <input type="hidden" name="departamente" value={selectedDepartments.join(', ')} />
            <input type="hidden" name="ziPreferata" value={selectedDay} />
            <input type="hidden" name="oraPreferata" value={`${selectedHour}:${selectedMinute}`} />

            <div className="lg:col-span-2 flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
              <Button type="submit" className="min-w-[220px] rounded-2xl bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Trimite înscrierea
              </Button>
              <Link to="/" className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
                Înapoi la site
              </Link>
            </div>

              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
