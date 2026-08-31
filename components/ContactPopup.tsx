import { useState, useRef } from 'react'
import { X } from 'lucide-react'
import emailjs from '@emailjs/browser';
interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')

    try {
      // EmailJS configuration
      // Replace these with your actual EmailJS configuration
      const serviceId = 'service_w8oazpb'
      const templateId = 'template_9of34t9'
      const publicKey = 'OXouWa8keECbVwoq5'

      // Initialize EmailJS with public key
      emailjs.init(publicKey)

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone_number: formData.phoneNumber,
        message: formData.message,
        first_name_initial: formData.firstName.charAt(0).toUpperCase(),
        last_name_initial: formData.lastName.charAt(0).toUpperCase(),
        date: new Date().toLocaleDateString('ro-RO'),
        time: new Date().toLocaleTimeString('ro-RO', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        to_name: 'LSAC Iași'
      }

      console.log('Sending email with params:', templateParams)
      
      // Try to send email
      const result = await emailjs.send(serviceId, templateId, templateParams)
      console.log('Email sent successfully:', result)
      
      setStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
      })
      
      // Close popup after 2 seconds
      setTimeout(() => {
        onClose()
        setStatus('idle')
      }, 2000)
      
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: ''
    })
    setStatus('idle')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />
      
      {/* Popup Container */}
      <div className="relative w-full max-w-lg mx-4 glass-card rounded-2xl p-8 transform transition-all duration-300 scale-100 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full glass hover:glass-strong transition-all duration-200 group"
          aria-label="Închide"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:rotate-90 transition-transform duration-200" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Contactează-ne
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Trimite-ne un mesaj și îți vom răspunde în cel mai scurt timp!
          </p>
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg">
            <p className="text-green-800 dark:text-green-300 text-sm">
              ✓ Mesajul a fost trimis cu succes! Îți mulțumim pentru contactare.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg">
            <p className="text-red-800 dark:text-red-300 text-sm">
              ⚠ A apărut o eroare. Te rugăm să încerci din nou.
            </p>
          </div>
        )}

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {/* First Name & Last Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Prenume *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 glass rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Prenumele tău"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nume *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 glass rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Numele tău"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 glass rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="email@exemplu.com"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Număr de telefon
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 glass rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="0712 345 678"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mesaj *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 glass rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
              placeholder="Scrie mesajul tău aici..."
            />
          </div>

          {/* Send Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Se trimite...
                </div>
              ) : (
                'Trimite mesajul'
              )}
            </button>
          </div>
        </form>

        {/* EmailJS Setup Instructions */}
        {status === 'error' && (
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-blue-800 dark:text-blue-300 text-xs">
              Pentru a configura EmailJS, înlocuiește YOUR_SERVICE_ID, YOUR_TEMPLATE_ID și YOUR_PUBLIC_KEY în ContactPopup.tsx cu valorile tale din contul EmailJS.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}