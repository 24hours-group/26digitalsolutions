import React, { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Intro from '../components/Intro';
import Solutions from '../components/Solutions';
import Engine from '../components/Engine';
import GlobalMap from '../components/GlobalMap';
import Insights from '../components/Insights';
import ContactForm from '../components/ContactForm';
import CareersForm from '../components/CareersForm';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation triggers using IntersectionObserver
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>26 Digital Solutions — The Science of Scalable Growth</title>
        <meta
          name="description"
          content="26 Digital Solutions is a performance marketing agency engineering measurable growth through AI, full-funnel execution, and data precision. Founded 2008."
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0B1934" />
        <link rel="canonical" href="https://26digitalsolutions.com/" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='12' fill='%230B1934'/><text x='32' y='44' text-anchor='middle' font-family='Georgia,serif' font-size='30' font-weight='600' fill='%23C8A96E'>26</text></svg>"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="26 Digital Solutions" />
        <meta property="og:title" content="26 Digital Solutions — The Science of Scalable Growth" />
        <meta
          property="og:description"
          content="Performance marketing engineered for revenue. AI-powered attribution, full-funnel execution, and a proprietary intelligence engine."
        />
        <meta property="og:url" content="https://26digitalsolutions.com/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="26 Digital Solutions" />
        <meta name="twitter:description" content="Performance marketing engineered for revenue." />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Intro />
        <Solutions />
        <Engine />
        <GlobalMap />
        <Insights />
        <ContactForm />
        <CareersForm />
      </main>

      <Footer />
    </>
  );
}
