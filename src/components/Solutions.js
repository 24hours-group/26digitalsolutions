import React from 'react';
import useStore from '../store/useStore';
import servicesData from '../data/servicesData.json';

export default function Solutions() {
  const { activeDivision, setActiveDivision, openAccordions, toggleAccordion, closeAccordionsInDivision } = useStore();

  const handleDivisionChange = (division) => {
    // Close open accordions in the previous division to keep the interface clean
    closeAccordionsInDivision(activeDivision);
    setActiveDivision(division);
  };

  const currentDivisionData = servicesData[activeDivision];

  return (
    <section id="solutions" className="grain">
      <div className="wrap">
        <div className="sol-head reveal">
          <div>
            <span className="label">What we do</span>
            <h2 className="h-display" style={{ marginTop: '20px' }}>
              Three divisions.
              <br />
              66 services.
              <br />
              <em>One growth machine<span className="dot">.</span></em>
            </h2>
          </div>
          <p>
            Marketing brings demand in. Technology makes it measurable and ownable. Dispatch turns it into booked revenue.
            Three integrated divisions, sixty-six services, engineered to operate as one revenue stack — from first impression
            to final invoice.
          </p>
        </div>

        <div className="div-tabs reveal" role="tablist" aria-label="Service divisions">
          <button
            className={`div-tab ${activeDivision === 'marketing' ? 'active' : ''}`}
            data-div="marketing"
            data-sig="paid"
            role="tab"
            aria-selected={activeDivision === 'marketing'}
            onClick={() => handleDivisionChange('marketing')}
          >
            <span className="div-tab-num">01</span>
            <span className="div-tab-label">Marketing</span>
            <span className="div-tab-count">26 services</span>
          </button>
          <button
            className={`div-tab ${activeDivision === 'technology' ? 'active' : ''}`}
            data-div="technology"
            data-sig="brand"
            role="tab"
            aria-selected={activeDivision === 'technology'}
            onClick={() => handleDivisionChange('technology')}
          >
            <span className="div-tab-num">02</span>
            <span className="div-tab-label">Technology</span>
            <span className="div-tab-count">20 services</span>
          </button>
          <button
            className={`div-tab ${activeDivision === 'dispatch' ? 'active' : ''}`}
            data-div="dispatch"
            data-sig="ai"
            role="tab"
            aria-selected={activeDivision === 'dispatch'}
            onClick={() => handleDivisionChange('dispatch')}
          >
            <span className="div-tab-num">03</span>
            <span className="div-tab-label">Dispatch</span>
            <span className="div-tab-count">20 services</span>
          </button>
        </div>

        {/* Division Content Panels */}
        {Object.entries(servicesData).map(([divKey, divData]) => {
          const isActive = activeDivision === divKey;
          return (
            <div
              key={divKey}
              className={`div-content ${isActive ? 'active' : ''}`}
              data-div={divKey}
              role="tabpanel"
              style={{ display: isActive ? 'block' : 'none' }}
            >
              <p className="div-blurb">{divData.blurb}</p>
              <div className="cats">
                {divData.categories.map((category, catIndex) => {
                  const accordionKey = `${divKey}-${catIndex}`;
                  const isOpen = !!openAccordions[accordionKey];

                  return (
                    <div key={catIndex} className={`cat ${isOpen ? 'open' : ''}`} data-color={category.color}>
                      <button
                        className="cat-head"
                        aria-expanded={isOpen}
                        onClick={() => toggleAccordion(divKey, catIndex)}
                      >
                        <span className="cat-num">{String(catIndex + 1).padStart(2, '0')}</span>
                        <span className="cat-title">{category.title}</span>
                        <span className="cat-count">{category.services.length} services</span>
                        <span className="cat-toggle" aria-hidden="true">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      <div className="cat-body" style={{ maxHeight: isOpen ? '5000px' : '0' }}>
                        <div className="cat-body-inner">
                          <p className="cat-intro">{category.intro}</p>
                          <ul className="svc-list">
                            {category.services.map((service, svcIndex) => (
                              <li key={svcIndex} className="svc">
                                <span className="svc-num">{service.num}</span>
                                <div>
                                  <h4>{service.title}</h4>
                                  <p>{service.description}</p>
                                  {service.example && (
                                    <p className="eg">
                                      <b>Example:</b> {service.example}
                                    </p>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
