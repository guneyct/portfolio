import { Mail, Send, MessageSquare } from 'lucide-react';
import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY  = import.meta.env.VITE_PUBLIC_KEY;

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      // başarı: formu sıfırla
      formRef.current.reset();
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4 font-mono">
            <span className="text-sky-400">05.</span> Get In Touch
          </h2>
          <div className="w-full max-w-md h-px bg-gradient-to-r from-slate-700 to-transparent" />
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-500/10 border border-sky-500/30 rounded-full mb-6">
            <MessageSquare className="w-10 h-10 text-sky-400" />
          </div>
          <h3 className="text-3xl font-bold text-slate-200 mb-4">Let's Work Together</h3>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance work and full-time opportunities. Whether you have
            a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-8 mb-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-slate-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-black border border-slate-800 rounded text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors font-mono text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-slate-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-black border border-slate-800 rounded text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors font-mono text-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-mono text-slate-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-black border border-slate-800 rounded text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors resize-none font-mono text-sm"
                placeholder="Tell me about your project..."
              />
            </div>
              <input 
                type="hidden" 
                name="time" 
                value={new Date().toLocaleString()} 
              />
            <button
              type="submit"
              disabled={status !== 'idle'}
              className="w-full px-8 py-4 bg-sky-500/10 border border-sky-500 text-sky-400 rounded font-mono hover:bg-sky-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'idle' && (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Message Sent!'}
              {status === 'error' && 'Failed. Try again.'}
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:guneycandeniz@gmail.com"
            className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors font-mono text-sm group"
          >
            <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            guneycandeniz@gmail.com
          </a>

        <div className="text-center text-slate-500 text-sm font-mono pt-8 border-t border-slate-800 w-full">
            <p>Designed & Built by guneyct</p>
            <p className="mt-2">© 2025 All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}