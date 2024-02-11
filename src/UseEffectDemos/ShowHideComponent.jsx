import React, { useState, useEffect } from 'react';

export default function ShowHideComponent() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return <div>{isVisible ? 'Content is visible' : 'Content is hidden'}</div>;
}
