import React, { useEffect, useState } from 'react';
import MapContainer from './Map';
import OnboardingModal from '../OnboardingModal';

const MapView = () => {
  const [showOnboardingModal, setShowOnboardingModal] = useState(false);

  useEffect(() => {
    const visitedBefore = localStorage.getItem('visitedBefore');
    if (!visitedBefore) {
      setShowOnboardingModal(true);
      localStorage.setItem('visitedBefore', 'true');
    }
  }, []);

  const closeOnboardingModal = () => {
    setShowOnboardingModal(false);
  };

  return (
    <>
      <MapContainer />
      {showOnboardingModal && <OnboardingModal onClose={closeOnboardingModal} />}
    </>
  );
};

export default MapView;




