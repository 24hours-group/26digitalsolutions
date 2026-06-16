import React, { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

const submitApplication = async (formData) => {
  const res = await fetch('/api/apply', {
    method: 'POST',
    body: formData, // Sending multipart/form-data
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Submission failed');
  }
  return res.json();
};

export default function CareersForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    location: '',
    role: '',
  });
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const mutation = useMutation({
    mutationFn: submitApplication,
    onSuccess: () => {
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        location: '',
        role: '',
      });
      setFile(null);
    },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      const validTypes = ['.pdf', '.doc', '.docx'];
      const fileExt = droppedFile.name.substring(droppedFile.name.lastIndexOf('.')).toLowerCase();
      if (validTypes.includes(fileExt) && droppedFile.size <= 10 * 1024 * 1024) {
        setFile(droppedFile);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.firstname.trim() ||
      !formData.lastname.trim() ||
      !formData.email.trim() ||
      !formData.location.trim() ||
      !formData.role ||
      !file
    ) {
      return;
    }

    const uploadData = new FormData();
    uploadData.append('firstname', formData.firstname);
    uploadData.append('lastname', formData.lastname);
    uploadData.append('email', formData.email);
    uploadData.append('location', formData.location);
    uploadData.append('role', formData.role);
    uploadData.append('cv', file);

    mutation.mutate(uploadData);
  };

  return (
    <section id="careers" className="grain">
      <div className="wrap">
        <div className="careers-grid">
          <div className="careers-left reveal">
            <span className="label">Join the team</span>
            <h2 className="h-display">
              We hire builders,
              <br />
              not <em>passengers<span className="dot">.</span></em>
            </h2>
            <p>
              Every person on the team is expected to think like an owner, challenge assumptions with data, and leave every
              client in a measurably better position than they found them.
            </p>
            <p>
              We don't care where you grew up, where you went to school, or what's printed on your business card. We care about
              what you've built, what you've broken, and what you've learned from both.
            </p>

            <div className="careers-roles">
              <div className="careers-role">
                <span className="n">01</span>
                <span className="t">Performance Marketers</span>
                <span className="d">
                  PPC, paid social, programmatic, SEO. Specialists who live in platforms and think in CAC, ROAS, and LTV.
                </span>
              </div>
              <div className="careers-role">
                <span className="n">02</span>
                <span className="t">Software Engineers</span>
                <span className="d">
                  Full-stack, ML engineers, and data architects who build things that scale and don't break at 3am.
                </span>
              </div>
              <div className="careers-role">
                <span className="n">03</span>
                <span className="t">Dispatch &amp; Operations Agents</span>
                <span className="d">
                  Bilingual, calm under pressure, and obsessed with conversion. The voice and judgment our clients hear when it
                  matters most.
                </span>
              </div>
              <div className="careers-role">
                <span className="n">04</span>
                <span className="t">Strategists &amp; Consultants</span>
                <span className="d">
                  Revenue-obsessed operators who can design a GTM at 9am and present it to a CFO at 2pm.
                </span>
              </div>
            </div>
          </div>

          <div className="careers-form-card reveal">
            <h3>Send us your details.</h3>
            <p className="lede">We review every application personally. If we see a fit — now or later — we'll reach out directly.</p>

            <form id="applicationForm" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="car-firstname">First name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="car-firstname"
                    name="firstname"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="car-lastname">Last name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="car-lastname"
                    name="lastname"
                    required
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="car-email">Email <span className="req">*</span></label>
                  <input
                    type="email"
                    id="car-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="car-location">Location <span className="req">*</span></label>
                  <input
                    type="text"
                    id="car-location"
                    name="location"
                    placeholder="City, Country"
                    required
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field full">
                  <label htmlFor="car-role">Discipline <span className="req">*</span></label>
                  <select
                    id="car-role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="">Select your primary discipline</option>
                    <option>Performance Marketing</option>
                    <option>SEO / Content</option>
                    <option>AI / ML Engineering</option>
                    <option>Software Engineering</option>
                    <option>Brand &amp; Creative</option>
                    <option>Dispatch &amp; Contact Center</option>
                    <option>Strategy &amp; Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-field full">
                  <label>CV / Résumé <span className="req">*</span></label>
                  <div
                    className={`file-drop ${dragActive ? 'drag-active' : ''}`}
                    onClick={() => fileInputRef.current.click()}
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    style={dragActive ? { borderColor: '#1B49FF', backgroundColor: 'rgba(27,73,255,0.08)' } : {}}
                  >
                    <div className="lbl" id="fileLabel">
                      {file ? file.name : 'Click or drag to upload'}
                    </div>
                    <div className="sub">PDF, DOC, or DOCX · max 10MB</div>
                    <input
                      type="file"
                      id="cvFile"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      required
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn-apply"
                disabled={mutation.isPending || mutation.isSuccess}
                style={(mutation.isPending || mutation.isSuccess) ? { opacity: 0.7, cursor: 'default' } : {}}
              >
                {mutation.isPending
                  ? 'Uploading CV…'
                  : mutation.isSuccess
                  ? 'Application received — thank you'
                  : 'Submit application'}
              </button>

              {mutation.isError && (
                <div
                  className="contact-msg show"
                  style={{
                    display: 'block',
                    marginTop: '16px',
                    borderColor: '#FF5A47',
                    color: '#FF5A47',
                    backgroundColor: 'rgba(255,90,71,0.1)',
                  }}
                >
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
