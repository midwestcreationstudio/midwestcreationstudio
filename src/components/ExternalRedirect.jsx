import { useEffect } from 'react';

// Orien moved to its own site. Old links land here and are sent on.
const ExternalRedirect = ({ to }) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <div className="container text-center" style={{ padding: '8rem 2rem' }}>
      <p>This page moved to <a href={to}>{to.replace('https://', '')}</a>.</p>
    </div>
  );
};

export default ExternalRedirect;
