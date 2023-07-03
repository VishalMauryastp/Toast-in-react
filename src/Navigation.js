import React, { useEffect, useRef } from 'react';

const Navigation = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (ref, id) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${id}`);
  };

  const handleNavigation = (id) => {
    const ref = getSectionRefById(id);
    if (ref) {
      scrollToSection(ref, id);
    }
  };

  const getSectionRefById = (id) => {
    switch (id) {
      case 'section1':
        return section1Ref;
      case 'section2':
        return section2Ref;
      case 'section3':
        return section3Ref;
      default:
        return null;
    }
  };

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          window.history.pushState(null, '', `#${id}`);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(section1Ref.current);
    observer.observe(section2Ref.current);
    observer.observe(section3Ref.current);

    return () => {
      observer.unobserve(section1Ref.current);
      observer.unobserve(section2Ref.current);
      observer.unobserve(section3Ref.current);
    };
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => handleNavigation('section1')}>Section 1</button>
        </li>
        <li>
          <button onClick={() => handleNavigation('section2')}>Section 2</button>
        </li>
        <li>
          <button onClick={() => handleNavigation('section3')}>Section 3</button>
        </li>
      </ul>

      <div ref={section1Ref} id="section1">
        <h2>Section 1</h2>
        <p>This is the content of section 1.</p>
      </div>

      <div ref={section2Ref} id="section2">
        <h2>Section 2</h2>
        <p>This is the content of section 2.</p>
      </div>

      <div ref={section3Ref} id="section3">
        <h2>Section 3</h2>
        <p>This is the content of section 3.</p>
      </div>
    </nav>
  );
};

export default Navigation;
