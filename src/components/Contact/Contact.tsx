import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { validateContactForm, ContactFormValues, ContactFormErrors } from '../../utils/validation';
import { fadeUp, defaultViewport, defaultTransition } from '../../utils/animations';

const TYPING_SPEED = 40;

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormValues>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [typedCommand, setTypedCommand] = useState('');
  const [activeField, setActiveField] = useState<'name' | 'email' | 'message'>('name');

  const commands = {
    name: 'input --name',
    email: 'input --email',
    message: 'input --message',
  };

  useEffect(() => {
    const cmd = commands[activeField];
    let i = 0;
    setTypedCommand('');

    const interval = setInterval(() => {
      if (i <= cmd.length) {
        setTypedCommand(cmd.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, TYPING_SPEED);

    return () => clearInterval(interval);
  }, [activeField]);

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      // Mock API call or EmailJS integration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="container section-container contact-section">
      <SectionHeader number="07 // THE CONNECTION" title="Let's Collaborate" />

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <div className="availability">
            <div className="dot" />
            SYSTEM STATS: OPERATIONAL
          </div>
          <p className="contact-desc">
            Currently accepting placement offers and collaboration proposals. If you need a software
            developer who brings structure, discipline, and energy, get in touch.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="cd-icon">📧</div>
              <div className="cd-text">
                <h4>EMAIL PROTOCOL</h4>
                <p>contact@sanjay.dev</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="cd-icon">📍</div>
              <div className="cd-text">
                <h4>LOCATION</h4>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="terminal-card"
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
          transition={{ ...defaultTransition, delay: 0.15 }}
          noValidate
        >
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="dot-term r" />
              <div className="dot-term y" />
              <div className="dot-term g" />
            </div>
            <div className="terminal-title">contact_sys_v1.0</div>
          </div>

          <div className="terminal-body">
            {(['name', 'email', 'message'] as const).map((field) => (
              <div key={field} className="cmd-line">
                <span className="cmd-prompt">sanjay@portal:~$</span>
                <span className="cmd-input">
                  {activeField === field ? typedCommand : commands[field]}
                  {activeField === field && <span className="typing-cursor-inline">|</span>}
                </span>
                <div className="cmd-response">
                  <span>{'>>'} {field.toUpperCase()}:</span>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    className={`term-input ${errors[field] ? 'input-error' : ''}`}
                    placeholder={`Enter your ${field}`}
                    value={form[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    onFocus={() => setActiveField(field)}
                    aria-invalid={!!errors[field]}
                    aria-describedby={errors[field] ? `${field}-error` : undefined}
                  />
                </div>
                {errors[field] && (
                  <span id={`${field}-error`} className="field-error" role="alert">
                    <AlertCircle size={12} /> {errors[field]}
                  </span>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="term-btn magnetic-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'executing --send...' : 'execute --send'}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  className="contact-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <CheckCircle size={18} />
                  <span>Message transmitted successfully. Response ETA: 24hrs.</span>
                </motion.div>
              )}
              {status === 'error' && Object.keys(errors).length === 0 && (
                <motion.div className="contact-error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <AlertCircle size={18} />
                  <span>Transmission failed. Please retry.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
