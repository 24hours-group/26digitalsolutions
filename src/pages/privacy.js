import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    id: "intro-scope",
    num: "1",
    title: "Introduction and Scope",
    content: [
      "26 Digital Solutions (“Company,” “we,” “us,” or “our”) respects your privacy and is committed to handling personal information in accordance with applicable law. This Privacy Policy (the “Policy”) explains how we collect, use, disclose, sell, share, and otherwise process information in connection with our websites, platforms, applications, and related products and services (collectively, the “Services”).",
      "By accessing or using the Services, voluntarily submitting information to us, or otherwise interacting with us, you acknowledge that you have read and understood this Policy. If you do not agree with this Policy, do not access or use the Services.",
      "This Policy is governed by the laws of the United States and applies to information processed in the United States and Canada. The Services are intended for users located in the United States and Canada only and are not directed to, or intended for use by, individuals located in the European Economic Area, the United Kingdom, or other jurisdictions whose laws may conflict with this Policy."
    ]
  },
  {
    id: "definitions",
    num: "2",
    title: "Key Definitions",
    content: [
      "“Member” means an individual or entity that subscribes to or registers for the Services.",
      "“Customer” means a contact, lead, or end recipient within a Member’s audience or distribution lists.",
      "“User,” “you,” and “your” include Members, Customers, and any visitor to the Services.",
      "“Personal Information” (or “Personal Data”) means information that identifies, relates to, describes, or could reasonably be linked, directly or indirectly, with a particular individual or household, as defined under applicable law.",
      "“Sensitive Personal Information” has the meaning given under applicable privacy laws and may include government identifiers, financial account information, and similar categories.",
      "“Sell,” “Sale,” “Share,” and “Process” have the meanings given under applicable privacy laws, including the California Consumer Privacy Act as amended (the “CCPA/CPRA”)."
    ]
  },
  {
    id: "role",
    num: "3",
    title: "Our Role in Processing",
    content: [
      "With respect to Personal Information about Members and visitors that we collect directly, we act as a business and/or controller. With respect to Personal Information that a Member uploads, imports, or otherwise provides about its Customers, we generally act as a service provider, processor, and/or contractor that processes such information on the Member’s behalf and in accordance with the Member’s instructions and our agreements with the Member. Members are responsible for providing all legally required notices to, and obtaining all legally required consents from, their Customers."
    ]
  },
  {
    id: "collect",
    num: "4",
    title: "Information We Collect",
    subsections: [
      {
        id: "collect-provide",
        num: "4.1",
        title: "Information You Provide",
        content: [
          "We collect Personal Information you provide when you register, place an order, contact customer support, integrate a third-party service, respond to communications, or otherwise interact with us. This may include identifiers (such as name, email address, postal address, and telephone number), demographic and professional information, account credentials, and the contents of communications.",
          "Members who register for paid accounts provide billing and financial information (such as payment card number and expiration date) used to process orders and payments. Where required by law (for example, to meet IRS reporting obligations), we may collect a taxpayer identification number, Social Security number, or Employer Identification Number."
        ]
      },
      {
        id: "collect-customers",
        num: "4.2",
        title: "Information Members Provide About Customers",
        content: [
          "To use certain features, Members may upload distribution lists or otherwise provide Personal Information about their Customers, such as names, email addresses, and telephone numbers. We process this information to provide the Services in accordance with the Member’s instructions and applicable agreements."
        ]
      },
      {
        id: "collect-auto",
        num: "4.3",
        title: "Information Collected Automatically",
        content: [
          "When you use the Services, we and our partners automatically collect certain information through cookies, log files, clear gifs/web beacons, pixels, software development kits, and similar technologies. This may include IP address, device and browser information, internet service provider, referring and exit pages, platform type, date/time stamps, clickstream data, and usage and performance metrics. We may combine this information with other Personal Information to create a profile reflecting inferred preferences and interests."
        ]
      },
      {
        id: "collect-third-party",
        num: "4.4",
        title: "Information From Third Parties",
        content: [
          "We may obtain information about you from third-party sources, including data providers, advertising and analytics partners, business partners, and publicly available sources, and may combine or supplement it with information we already hold."
        ]
      }
    ]
  },
  {
    id: "use",
    num: "5",
    title: "How We Use Information",
    content: [
      "We use Personal Information for the following business and commercial purposes, to the extent permitted by applicable law:"
    ],
    listItems: [
      "Providing, operating, maintaining, securing, and improving the Services;",
      "Processing transactions, billing, and collecting amounts owed;",
      "Creating and maintaining accounts and providing customer support;",
      "Personalizing content and experiences and developing inferences and profiles;",
      "Marketing, advertising, and promotional activities, including targeted and cross-context behavioral advertising and retargeting;",
      "Sending administrative, transactional, and service-related communications;",
      "Conducting research, analytics, and product development;",
      "Detecting, investigating, and preventing fraud, abuse, security incidents, and unlawful activity;",
      "Enforcing our terms and protecting our rights, property, and safety and those of others; and",
      "Complying with legal obligations and responding to legal process and governmental requests."
    ]
  },
  {
    id: "cookies",
    num: "6",
    title: "Cookies and Tracking Technologies",
    content: [
      "We use both session and persistent cookies, as well as clear gifs/web beacons, pixels, and similar technologies, to operate the Services, analyze usage, and deliver and measure advertising. Persistent cookies remain on your device until they expire or you delete them. You may adjust your browser settings to refuse or remove cookies; however, some features of the Services may not function properly if you do so.",
      "Some of our partners, including advertisers and analytics providers, may set and access their own cookies and similar technologies through the Services. We do not control these third-party technologies, and their use is governed by the third parties’ own privacy policies.",
      "We and our advertising partners may use tracking technologies and remarketing pixels to display advertising to you across the internet based on your activity. You may opt out of certain interest-based advertising through your browser settings, your device settings, or industry opt-out tools such as those offered by the Digital Advertising Alliance (optout.aboutads.info) and the Network Advertising Initiative (optout.networkadvertising.org)."
    ]
  },
  {
    id: "disclose",
    num: "7",
    title: "How We Disclose, Sell, and Share Information",
    content: [
      "We disclose Personal Information to third parties for the purposes described in this Policy. The categories of recipients include affiliates, service providers and processors, advertising and marketing partners, data and analytics partners, business partners, and the categories of buyers and recipients described below."
    ],
    subsections: [
      {
        id: "disclose-sale",
        num: "7.1",
        title: "Sale and Sharing of Personal Information",
        content: [
          "We sell and share Personal Information. For monetary or other valuable consideration, and to support our and our partners’ business and advertising activities, we sell and/or share Personal Information — including identifiers, demographic and professional information, internet and network activity information, inferences, and profiles — with third parties such as data buyers, advertising networks, marketing partners, and business partners. We also share Personal Information for cross-context behavioral advertising. We do not knowingly sell or share the Personal Information of individuals we know to be under the age of 18.",
          "Your right to opt out. You have the right to opt out of the sale and sharing of your Personal Information. To exercise this right, email us at privacy@26digitalsolutions.com with the subject line “Do Not Sell or Share My Personal Information,” use any opt-out link or preference control we make available, or submit a request as described in Section 11. We will also honor recognized opt-out preference signals (such as Global Privacy Control) where required by law."
        ]
      },
      {
        id: "disclose-providers",
        num: "7.2",
        title: "Service Providers and Processors",
        content: [
          "We engage third parties to perform services on our behalf, such as payment processing, hosting, analytics, communications delivery, and customer support. These parties are permitted to use Personal Information only as necessary to perform services for us and consistent with our instructions and applicable law."
        ]
      },
      {
        id: "disclose-payment",
        num: "7.3",
        title: "Payment Processors",
        content: [
          "We use third-party payment processors to bill Members. These processors use payment and financial information only for billing purposes and store such information in accordance with industry-standard security practices."
        ]
      },
      {
        id: "disclose-marketing",
        num: "7.4",
        title: "Advertising and Marketing Partners",
        content: [
          "We disclose Personal Information to advertising and marketing partners to deliver, target, and measure advertising and to send offers, products, and services that may be of interest to you."
        ]
      },
      {
        id: "disclose-aggregated",
        num: "7.5",
        title: "Aggregated and De-identified Information",
        content: [
          "We may use and disclose aggregated, anonymized, or de-identified information, which is not subject to this Policy, for any lawful purpose. We will maintain and use de-identified information in de-identified form and will not attempt to re-identify it except as permitted by law."
        ]
      }
    ]
  },
  {
    id: "legal",
    num: "8",
    title: "Law Enforcement, Government Requests, and Legal Process",
    content: [
      "We may access, preserve, and disclose Personal Information and any other information about you to law enforcement agencies, regulators, courts, government officials, and other third parties where we determine, in our sole discretion and acting in good faith, that such access, preservation, or disclosure is reasonably necessary or appropriate to: (a) comply with applicable law, regulation, legal process, subpoena, court order, or governmental request; (b) enforce this Policy or our agreements; (c) detect, prevent, or address fraud, security, abuse, or technical issues; (d) protect the rights, property, or safety of the Company, our Users, or others; or (e) respond to an emergency. To the extent permitted by applicable law, we may make such disclosures without prior notice to you. By using the Services, you consent to such disclosures to the fullest extent permitted by law."
    ]
  },
  {
    id: "communications",
    num: "9",
    title: "Communications From Us",
    content: [
      "We send Members a welcome message upon registration and may send newsletters, offers, and updates. We may also send service-related announcements (such as maintenance notices), which are not promotional and which Members generally cannot opt out of while maintaining an account. You may opt out of promotional communications using the unsubscribe link in our emails, by replying STOP to text messages, or by contacting us as described in Section 11. Message and data rates may apply. By contacting us by telephone, you consent to our returning your call notwithstanding your presence on any Do Not Call list, to the extent permitted by law."
    ]
  },
  {
    id: "rights",
    num: "10",
    title: "Your Privacy Rights",
    content: [
      "Depending on where you reside and subject to applicable law and exceptions, you may have the right to: (a) know and access the Personal Information we hold about you; (b) request deletion of your Personal Information; (c) request correction of inaccurate Personal Information; (d) request portability of your Personal Information; (e) opt out of the sale or sharing of your Personal Information; (f) opt out of targeted or cross-context behavioral advertising; and (g) be free from unlawful discrimination for exercising your rights."
    ],
    subsections: [
      {
        id: "rights-state",
        num: "10.1",
        title: "State-Specific Rights (California, Virginia, Colorado, Connecticut, Texas, and Others)",
        content: [
          "Residents of certain U.S. states have specific rights under their state privacy laws. California residents may, among other things, request disclosure of the categories and specific pieces of Personal Information collected, the categories of sources, the business or commercial purposes for collecting, selling, or sharing, and the categories of third parties to whom information is disclosed. Residents of Virginia, Colorado, Connecticut, Texas, and other states with comprehensive privacy laws have comparable rights, including the right to appeal a denial of a request.",
          "We will not discriminate against you for exercising any of these rights. We may offer financial incentives for the collection, sale, or retention of Personal Information as permitted by law, the material terms of which will be disclosed at the time of the offer."
        ]
      },
      {
        id: "rights-customers",
        num: "10.2",
        title: "Customers of Members",
        content: [
          "If you are a Customer and wish to exercise rights regarding Personal Information processed by us on a Member’s behalf, please contact the relevant Member directly, or contact us and we will refer your request to the applicable Member or assist as required by law."
        ]
      }
    ]
  },
  {
    id: "exercise",
    num: "11",
    title: "How to Exercise Your Rights",
    content: [
      "To submit a privacy request or opt out of the sale or sharing of your Personal Information, email us at privacy@26digitalsolutions.com, or write to us at the address in Section 17. We will verify your request as required by law and may request additional information to confirm your identity. You may use an authorized agent to submit a request where permitted by law. We will respond within the timeframe required by applicable law."
    ]
  },
  {
    id: "retention",
    num: "12",
    title: "Data Retention",
    content: [
      "We retain Personal Information for as long as necessary to fulfill the purposes described in this Policy, including providing the Services, complying with our legal, tax, accounting, and regulatory obligations, resolving disputes, and enforcing our agreements. Retention periods are determined based on the type of information, the purposes for which it is processed, and applicable legal requirements. When information is no longer needed, we will delete, de-identify, or anonymize it in accordance with our retention practices."
    ]
  },
  {
    id: "security",
    num: "13",
    title: "Security",
    content: [
      "We use industry-standard administrative, technical, and physical safeguards designed to protect Personal Information, including encryption of sensitive financial information during transmission and storage and access controls limiting access to personnel who need it. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials."
    ]
  },
  {
    id: "transfers",
    num: "14",
    title: "Business Transfers",
    content: [
      "In the event of a merger, acquisition, financing, reorganization, bankruptcy, sale of all or part of our assets, or similar transaction, Personal Information may be transferred or disclosed as part of, or in connection with, that transaction, consistent with applicable law."
    ]
  },
  {
    id: "links",
    num: "15",
    title: "Third-Party Links and Referrals",
    content: [
      "The Services may contain links to third-party websites and services that we do not control. We are not responsible for the privacy practices of those third parties, and we encourage you to review their privacy policies. If a Member uses our referral feature, we may send a one-time message to the referred contact and store the referral information solely to send that message; the contact may request removal by following the instructions in the message."
    ]
  },
  {
    id: "children",
    num: "16",
    title: "Children’s Privacy",
    content: [
      "The Services are not directed to, and we do not knowingly collect Personal Information from, individuals under the age of 18. If you are under 18, you may not use the Services. If we learn that we have collected Personal Information from a child under 13 in violation of the Children’s Online Privacy Protection Act, or from an individual under 18 in violation of applicable law, we will take steps to delete such information."
    ]
  },
  {
    id: "contact-us",
    num: "17",
    title: "Contact Us",
    content: [
      "If you have questions about this Policy or our privacy practices, or wish to exercise your rights, contact us at:"
    ],
    address: [
      "26 Digital Solutions",
      "Email: privacy@26digitalsolutions.com"
    ]
  },
  {
    id: "governing-law",
    num: "18",
    title: "Governing Law and Changes to This Policy",
    content: [
      "This Policy and any dispute arising out of or relating to it are governed by the laws of the State of Florida and applicable U.S. federal law, without regard to conflict-of-laws principles.",
      "We may update this Policy at any time. We will post the updated Policy with a revised “Last Updated” date and, where required by law, provide additional notice. If we intend to use previously collected Personal Information in a materially different manner, we will provide notice and, where required, obtain your consent. Your continued use of the Services after changes become effective constitutes acceptance of the updated Policy."
    ]
  }
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const scrollPos = window.scrollY + 160;
      let currentSection = "";

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          currentSection = section.id;
        }
        if (section.subsections) {
          for (const sub of section.subsections) {
            const subEl = document.getElementById(sub.id);
            if (subEl && subEl.offsetTop <= scrollPos) {
              currentSection = sub.id;
            }
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatText = (text) => {
    // Replace emails with mailto links
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    const parts = text.split(emailRegex);
    return parts.map((part, i) => {
      if (part.match(emailRegex)) {
        return (
          <a key={i} href={`mailto:${part}`} className="text-[#1B49FF] hover:underline font-medium">
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <>
      <Head>
        <title>Privacy Policy — 26 Digital Solutions</title>
        <meta name="description" content="Read the Privacy Policy of 26 Digital Solutions, explaining how we collect, use, and safeguard personal data." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <Navbar />

      <main className="pt-0">
        {/* Header Hero Section */}
        <section className="privacy-hero-premium">
          <div className="wrap">
            <span className="label on-dark">Legal Document</span>
            <h1 className="mb-8! text-neutral-900 dark:text-white text-7xl">Privacy <em>Policy<span className="dot">.</span></em></h1>
            <p className="font-mono text-[11px] text-[rgba(0,0,0,0.84)] tracking-wider uppercase">
              Effective Date: June 1, 2020 &nbsp;|&nbsp; Last Updated: June 15, 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="privacy-body-premium grain">
          <div className="wrap">
            <div className="flex flex-col lg:flex-row gap-12 items-start relative">
              {/* Sidebar Table of Contents (Desktop Only) */}
              <aside className="w-full lg:w-1/4 hidden lg:block toc-sidebar-premium">
                <h4 className="toc-title-premium">Contents</h4>
                <nav className="space-y-1">
                  {sections.map((sec) => (
                    <div key={sec.id} className="space-y-1">
                      <a
                        href={`#${sec.id}`}
                        className={`toc-link-premium ${activeSection === sec.id ? 'active' : ''}`}
                      >
                        {sec.num}. {sec.title}
                      </a>
                      {sec.subsections && (
                        <div className="space-y-1">
                          {sec.subsections.map((sub) => (
                            <a
                              key={sub.id}
                              href={`#${sub.id}`}
                              className={`toc-sub-link-premium ${activeSection === sub.id ? 'active' : ''}`}
                            >
                              {sub.num} {sub.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </aside>

              {/* Document Body Content */}
              <article className="w-full lg:w-3/4 privacy-card-premium">
                <div className="privacy-content-premium">
                  {sections.map((sec) => (
                    <section key={sec.id} id={sec.id} className="scroll-mt-36">
                      <h2>
                        {sec.num}. {sec.title}
                      </h2>
                      {sec.content && sec.content.map((p, idx) => (
                        <p key={idx}>
                          {formatText(p)}
                        </p>
                      ))}

                      {/* Styled bullet list for section 5 */}
                      {sec.listItems && (
                        <ul>
                          {sec.listItems.map((item, idx) => (
                            <li key={idx}>
                              {formatText(item)}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Address Block for section 17 */}
                      {sec.address && (
                        <div className="privacy-address-box-premium">
                          {sec.address.map((line, idx) => (
                            <p key={idx} className="mb-0">{formatText(line)}</p>
                          ))}
                        </div>
                      )}

                      {/* Recursive Subsection Render */}
                      {sec.subsections && (
                        <div className="space-y-6 mt-6 pl-4 border-l border-[rgba(255,255,255,0.04)]">
                          {sec.subsections.map((sub) => (
                            <div key={sub.id} id={sub.id} className="scroll-mt-36">
                              <h3>
                                {sub.num} {sub.title}
                              </h3>
                              {sub.content && sub.content.map((p, idx) => (
                                <p key={idx}>
                                  {formatText(p)}
                                </p>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top-premium ${showBackToTop ? 'visible' : ''}`}
        aria-label="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

      <Footer />
    </>
  );
}
