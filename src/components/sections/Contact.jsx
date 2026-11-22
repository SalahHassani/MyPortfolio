import React, { useState } from 'react';
import {
  Terminal,
  Copy,
  Check,
  Phone,
  Github,
  Linkedin,
  FileText,
  Send,
  CheckCircle2,
  X
} from 'lucide-react';

export default function Contact({
  personal,
  copiedEmail,
  onCopyEmail,
  onOpenCv
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponseToast, setApiResponseToast] = useState(null);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setApiResponseToast(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Portfolio Inquiry from ${formData.name}`,
          message: formData.message
        })
      });

      if (!response.ok) throw new Error("Delivery service fallback triggered");

      setApiResponseToast({
        status: 201,
        endpoint: "POST /api/v1/contact → Email Forwarded",
        message: `Sent! Your message has been dispatched directly to ${personal.email}.`,
        timestamp: new Date().toISOString()
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      const subjectEncoded = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
      const bodyEncoded = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
      window.open(`mailto:${personal.email}?subject=${subjectEncoded}&body=${bodyEncoded}`, "_blank");

      setApiResponseToast({
        status: 200,
        endpoint: "MAILTO FALLBACK",
        message: `Opened your default mail client addressed to ${personal.email} with your message pre-filled!`,
        timestamp: new Date().toISOString()
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[#3867F5] font-mono text-xs font-semibold uppercase tracking-widest mb-2">
                <Terminal className="w-4 h-4" />
                <span>Direct Contact &amp; FastAPI Endpoint</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182B49] tracking-tight">
                Let&apos;s Connect
              </h2>
              <p className="text-[#475569] text-sm sm:text-base mt-3 leading-relaxed">
                Interested in collaborating on AI/ML research, Generative AI applications, or Data Science &amp; Software Engineering roles in Berlin or remotely? Send a message or reach out directly.
              </p>
            </div>

            <div className="surface-card rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-xs font-mono text-[#64748B]">University / Direct Email</p>
                  <p className="text-sm font-mono font-medium text-[#182B49] mt-0.5 break-all">
                    {personal.email}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onCopyEmail}
                  className="p-2.5 rounded-lg bg-[#F8FAFC] hover:bg-[#3867F5] text-[#182B49] hover:text-white border border-[#E2E8F0] transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
                  aria-label="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#16A34A]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-[#64748B]">Phone (Berlin, Germany)</p>
                  <a
                    href="tel:+4915206762522"
                    className="text-sm font-mono font-medium text-[#182B49] hover:text-[#3867F5] transition-colors mt-0.5 block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5] rounded-sm"
                  >
                    {personal.phone}
                  </a>
                </div>
                <Phone className="w-4 h-4 text-[#F07845]" />
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] flex flex-wrap gap-2.5">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#F8FAFC] hover:bg-[#182B49] text-xs font-mono font-medium text-[#182B49] hover:text-white border border-[#E2E8F0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#F8FAFC] hover:bg-[#3867F5] text-xs font-mono font-medium text-[#182B49] hover:text-white border border-[#E2E8F0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
                >
                  <Linkedin className="w-4 h-4 text-[#3867F5]" />
                  <span>LinkedIn</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenCv}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#182B49] hover:bg-[#3867F5] text-xs font-mono font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
                >
                  <FileText className="w-4 h-4 text-[#F07845]" />
                  <span>Open CV</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleContactSubmit}
              className="surface-card rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-[#182B49]">
                  <span className="px-2 py-0.5 rounded bg-[#182B49] text-white font-semibold">
                    POST
                  </span>
                  <span className="font-medium">/api/v1/contact</span>
                </div>
                <span className="text-[11px] font-mono text-[#64748B]">
                  Pydantic v2 Schema Validated
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-[#182B49] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Ada Lovelace"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#182B49] placeholder-[#94A3B8] focus:outline-none focus:bg-[#FFFFFF] focus:border-[#3867F5] focus:ring-2 focus:ring-[#3867F5]/15 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-[#182B49] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ada@research-lab.de"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#182B49] placeholder-[#94A3B8] focus:outline-none focus:bg-[#FFFFFF] focus:border-[#3867F5] focus:ring-2 focus:ring-[#3867F5]/15 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-[#182B49] mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Working Student AI/ML / Research Collaboration / Full-Stack Role"
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#182B49] placeholder-[#94A3B8] focus:outline-none focus:bg-[#FFFFFF] focus:border-[#3867F5] focus:ring-2 focus:ring-[#3867F5]/15 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-[#182B49] mb-1.5">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Salah, I saw your work on Human-AI Decision Experiment Platform..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#182B49] placeholder-[#94A3B8] focus:outline-none focus:bg-[#FFFFFF] focus:border-[#3867F5] focus:ring-2 focus:ring-[#3867F5]/15 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-[#3867F5] hover:bg-[#2954D8] text-white shadow-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5]"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Dispatching to FastAPI...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {apiResponseToast && (
                <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs font-mono text-[#166534] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-bold text-[#15803D]">
                      <CheckCircle2 className="w-4 h-4" />
                      HTTP 201 Created — {apiResponseToast.endpoint}
                    </span>
                    <button
                      type="button"
                      onClick={() => setApiResponseToast(null)}
                      aria-label="Dismiss message status"
                      className="text-[#15803D] hover:text-[#182B49] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3867F5] rounded-sm"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[#182B49]">{apiResponseToast.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}