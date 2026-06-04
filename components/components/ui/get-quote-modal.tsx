"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2, Loader2, MapPin, Phone, User, Package, FileText, Truck } from "lucide-react"
import { useQuoteModal } from "@/components/ui/quote-context"

interface FormData {
  fullName: string
  mobileNumber: string
  pickupLocation: string
  deliveryLocation: string
  typeOfGoods: string
  notes: string
}

interface FormErrors {
  fullName?: string
  mobileNumber?: string
  pickupLocation?: string
  deliveryLocation?: string
}

const INITIAL_FORM: FormData = {
  fullName: "",
  mobileNumber: "",
  pickupLocation: "",
  deliveryLocation: "",
  typeOfGoods: "",
  notes: "",
}

const goodsTypes = [
  "Chemical / Solvent",
  "Pharmaceutical / Medicine",
  "Bulk / Raw Materials",
  "Finished Goods",
  "Container / Heavy Load",
  "Other",
]

export function GetQuoteModal() {
  const { isOpen, openModal, closeModal } = useQuoteModal()

  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  /* â”€â”€ Reset state when modal opens â”€â”€ */
  useEffect(() => {
    if (isOpen) {
      setForm(INITIAL_FORM)
      setErrors({})
      setIsSubmitting(false)
      setIsSuccess(false)
    }
  }, [isOpen])

  /* â”€â”€ Listen for global open event (from hero button etc.) â”€â”€ */
  useEffect(() => {
    const handler = () => openModal()
    window.addEventListener("prasanth:open-quote", handler)
    return () => window.removeEventListener("prasanth:open-quote", handler)
  }, [openModal])

  /* â”€â”€ ESC key to close â”€â”€ */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeModal()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, closeModal])

  /* â”€â”€ Body scroll lock â”€â”€ */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name"
    }
    const phone = form.mobileNumber.replace(/\s/g, "")
    if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
      newErrors.mobileNumber = "Enter a valid 10-digit Indian mobile number"
    }
    if (!form.pickupLocation.trim()) {
      newErrors.pickupLocation = "Pickup location is required"
    }
    if (!form.deliveryLocation.trim()) {
      newErrors.deliveryLocation = "Delivery location is required"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    const subject = `New Quote Request from ${form.fullName}`
    const body = [
      "PRASANTH ROADLINES — QUOTE REQUEST",
      "=====================================",
      "",
      `Full Name      : ${form.fullName}`,
      `Mobile Number  : ${form.mobileNumber}`,
      `Pickup Location: ${form.pickupLocation}`,
      `Delivery Location: ${form.deliveryLocation}`,
      `Type of Goods  : ${form.typeOfGoods || "Not specified"}`,
      `Additional Notes: ${form.notes || "None"}`,
      "",
      "Please respond within 2 hours with a customized quote.",
    ].join("\n")

    const mailtoLink = `mailto:prasanthroadlines@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Create a hidden anchor and click it — most reliable mailto trigger
    const a = document.createElement("a")
    a.href = mailtoLink
    a.style.display = "none"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleClose = useCallback(() => {
    if (isSubmitting) return
    closeModal()
  }, [isSubmitting, closeModal])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* â”€â”€ Backdrop â”€â”€ */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[9990] bg-black/75 backdrop-blur-md"
            onClick={handleClose}
          />

          {/* â”€â”€ Modal wrapper (centres card) â”€â”€ */}
          <div className="fixed inset-0 z-[9991] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.90, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.90, y: 24 }}
              transition={{ type: "spring", damping: 26, stiffness: 340 }}
              className="pointer-events-auto relative w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glass card */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(10,22,40,0.97) 0%, rgba(15,30,55,0.97) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(249,115,22,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
                  backdropFilter: "blur(24px)",
                }}
              >
                {/* Orange top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

                {/* Subtle glow */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full bg-orange-500/8 blur-3xl pointer-events-none" />

                <div className="relative z-10 max-h-[88vh] overflow-y-auto px-7 py-8">

                  {/* â”€â”€ Close button â”€â”€ */}
                  <button
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="absolute top-5 right-5 h-8 w-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all disabled:opacity-40"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  {/* â•â•â•â•â•â•â•â•â•â• SUCCESS STATE â•â•â•â•â•â•â•â•â•â• */}
                  <AnimatePresence mode="wait">
                    {isSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", damping: 24, stiffness: 300 }}
                        className="text-center py-10"
                      >
                        {/* Animated checkmark ring */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", damping: 18, stiffness: 280, delay: 0.1 }}
                          className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                          style={{
                            background: "rgba(34,197,94,0.12)",
                            border: "2px solid rgba(34,197,94,0.5)",
                            boxShadow: "0 0 30px rgba(34,197,94,0.2)",
                          }}
                        >
                          <CheckCircle2 className="h-10 w-10 text-green-400" />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25 }}
                        >
                          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-orange-400 mb-3">
                            Request Received
                          </p>
                          <h3 className="text-2xl font-black text-white mb-4">
                            Thank You!
                          </h3>
                          <p className="text-white/55 text-sm leading-relaxed max-w-xs mx-auto mb-8">
                            Your quotation request has been received. Our team will
                            contact you shortly with a customized quote.
                          </p>
                          <button
                            onClick={handleClose}
                            className="px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm transition-colors"
                          >
                            Close
                          </button>
                        </motion.div>
                      </motion.div>

                    ) : (

                      /* â•â•â•â•â•â•â•â•â•â• FORM STATE â•â•â•â•â•â•â•â•â•â• */
                      <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>

                        {/* Header */}
                        <div className="mb-7">
                          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-orange-400 mb-2 flex items-center gap-2">
                            <span className="inline-block w-4 h-[1.5px] bg-orange-500 rounded-full" />
                            We&apos;ll get back to you within 2 hours with a customized quotation.
                          </p>
                          <h2 className="text-2xl font-black text-white leading-tight">
                            Get a Free Transport Quote
                          </h2>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} noValidate className="space-y-4">

                          {/* Full Name */}
                          <Field
                            label="Full Name"
                            required
                            icon={<User className="h-4 w-4" />}
                            error={errors.fullName}
                          >
                            <input
                              name="fullName"
                              value={form.fullName}
                              onChange={handleChange}
                              placeholder="e.g. Ravi Kumar"
                              className={inputCls(!!errors.fullName)}
                            />
                          </Field>

                          {/* Mobile */}
                          <Field
                            label="Mobile Number"
                            required
                            icon={<Phone className="h-4 w-4" />}
                            error={errors.mobileNumber}
                          >
                            <input
                              name="mobileNumber"
                              value={form.mobileNumber}
                              onChange={handleChange}
                              placeholder="e.g. 9948729999"
                              maxLength={10}
                              inputMode="numeric"
                              className={inputCls(!!errors.mobileNumber)}
                            />
                          </Field>

                          {/* Two-column row */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field
                              label="Pickup Location"
                              required
                              icon={<MapPin className="h-4 w-4" />}
                              error={errors.pickupLocation}
                            >
                              <input
                                name="pickupLocation"
                                value={form.pickupLocation}
                                onChange={handleChange}
                                placeholder="City / Area"
                                className={inputCls(!!errors.pickupLocation)}
                              />
                            </Field>

                            <Field
                              label="Delivery Location"
                              required
                              icon={<MapPin className="h-4 w-4" />}
                              error={errors.deliveryLocation}
                            >
                              <input
                                name="deliveryLocation"
                                value={form.deliveryLocation}
                                onChange={handleChange}
                                placeholder="City / Area"
                                className={inputCls(!!errors.deliveryLocation)}
                              />
                            </Field>
                          </div>

                          {/* Type of Goods */}
                          <Field
                            label="Type of Goods"
                            icon={<Package className="h-4 w-4" />}
                          >
                            <select
                              name="typeOfGoods"
                              value={form.typeOfGoods}
                              onChange={handleChange}
                              className={inputCls(false) + " appearance-none"}
                              style={{ colorScheme: "dark" }}
                            >
                              <option
                                value=""
                                style={{ background: "#0d1f3c", color: "#ffffff" }}
                              >
                                Select type (optional)
                              </option>
                              {goodsTypes.map((t) => (
                                <option
                                  key={t}
                                  value={t}
                                  style={{ background: "#0d1f3c", color: "#ffffff" }}
                                >
                                  {t}
                                </option>
                              ))}
                            </select>
                          </Field>

                          {/* Notes */}
                          <Field
                            label="Additional Notes"
                            icon={<FileText className="h-4 w-4" />}
                          >
                            <textarea
                              name="notes"
                              value={form.notes}
                              onChange={handleChange}
                              placeholder="Quantity, weight, special handling needs... (optional)"
                              rows={3}
                              className={inputCls(false) + " resize-none"}
                            />
                          </Field>

                          {/* Buttons */}
                          <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white transition-all disabled:opacity-70"
                              style={{
                                background: isSubmitting
                                  ? "rgba(249,115,22,0.6)"
                                  : "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                                boxShadow: isSubmitting ? "none" : "0 8px 24px rgba(249,115,22,0.35)",
                              }}
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                  Submitting...
                                </>
                              ) : (
                                <>
                                  <Truck className="h-4 w-4" />
                                  Submit Quote Request
                                </>
                              )}
                            </button>

                            <button
                              type="button"
                              onClick={handleClose}
                              disabled={isSubmitting}
                              className="sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/25 transition-all disabled:opacity-40"
                            >
                              Cancel
                            </button>
                          </div>

                          {/* WhatsApp Button */}
                          <a
                            href={`https://wa.me/919407279999?text=${encodeURIComponent("Hello Prasanth Roadlines, I need a transport quote.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all"
                            style={{ background: "#25D366" }}
                          >
                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.845L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.732.885.936-3.617-.235-.372A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                            </svg>
                            Chat on WhatsApp — +91 9948729999
                          </a>

                          <p className="text-[10px] text-white/25 text-center pt-1">
                            Required fields are marked with *
                          </p>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

/* â”€â”€ Reusable field wrapper â”€â”€ */
function Field({
  label,
  required,
  icon,
  error,
  children,
}: {
  label: string
  required?: boolean
  icon?: React.ReactNode
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-1.5">
        {icon && <span className="text-orange-400/70">{icon}</span>}
        {label}
        {required && <span className="text-orange-500">*</span>}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-[11px] mt-1 flex items-center gap-1"
        >
          <span className="w-1 h-1 rounded-full bg-red-400 inline-block" />
          {error}
        </motion.p>
      )}
    </div>
  )
}

/* â”€â”€ Input class helper â”€â”€ */
function inputCls(hasError: boolean) {
  return [
    "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25",
    "bg-white/[0.04] border transition-all outline-none",
    "focus:ring-2 focus:ring-orange-500/25",
    hasError
      ? "border-red-500/50 focus:border-red-400"
      : "border-white/8 focus:border-orange-500/50",
  ].join(" ")
}
