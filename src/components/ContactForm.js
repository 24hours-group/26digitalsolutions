import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

const submitContactForm = async (data) => {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Something went wrong');
  }
  return res.json();
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      // Clear form on success
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstname.trim() || !formData.lastname.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    mutation.mutate(formData);
  };

  return (
    <section id="contact">
      <div className="ghost-decor" aria-hidden="true">26</div>
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-left reveal">
            <span className="label on-dark">Let's talk</span>
            <h2 className="h-display">
              Ready to engineer
              <br />
              your <em>growth<span className="dot">.</span></em>
            </h2>
            <p>
              Tell us about your business, your goals, and the constraints in your way. We'll respond within one business
              day with an honest assessment — even if we're not the right fit.
            </p>

            <div className="contact-info">
              <div className="contact-info-row">
                <span className="k">General</span>
                <span className="v">
                  <a href="mailto:hello@26digitalsolutions.com">hello@26digitalsolutions.com</a>
                </span>
              </div>
              <div className="contact-info-row">
                <span className="k">New Business</span>
                <span className="v">
                  <a href="mailto:newbusiness@26digitalsolutions.com">newbusiness@26digitalsolutions.com</a>
                </span>
              </div>
              <div className="contact-info-row">
                <span className="k">Phone</span>
                <span className="v">
                  <a href="tel:+18005551426">+1 (800) 555-1426</a>
                </span>
              </div>
              <div className="contact-info-row">
                <span className="k">Hours</span>
                <span className="v">24/7 across all hubs · Response within 1 business day</span>
              </div>
            </div>
          </div>

          <div className="contact-form reveal">
            <form id="contactForm" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="c-firstname">
                    First name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="c-firstname"
                    name="firstname"
                    required
                    autoComplete="given-name"
                    placeholder="Jane"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="c-lastname">
                    Last name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="c-lastname"
                    name="lastname"
                    required
                    autoComplete="family-name"
                    placeholder="Doe"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="c-email">
                    Email <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="c-email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="c-phone">Phone</label>
                  <input
                    type="tel"
                    id="c-phone"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field full">
                  <label htmlFor="c-company">Company &amp; role</label>
                  <input
                    type="text"
                    id="c-company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Acme Co · VP of Marketing"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field full">
                  <label htmlFor="c-message">
                    What can we help with? <span className="req">*</span>
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    required
                    placeholder="Tell us about your business, your growth goals, and what you've tried so far."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="form-bottom">
                <p className="fine">
                  By submitting, you agree to our{' '}
                  <a href="/privacy" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'underline' }}>
                    privacy policy
                  </a>
                  . We respond within one business day.
                </p>
                <button type="submit" className="btn-submit" disabled={mutation.isPending}>
                  {mutation.isPending ? 'Sending…' : 'Send Message'}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {mutation.isSuccess && (
                <div className="contact-msg show" id="contactMsg">
                  Thanks — your message is in. We'll be in touch within one business day.
                </div>
              )}
              {mutation.isError && (
                <div className="contact-msg show" style={{ borderColor: '#FF5A47', color: '#FF5A47', background: 'rgba(255,90,71,0.1)' }}>
                  Error: {mutation.error.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
