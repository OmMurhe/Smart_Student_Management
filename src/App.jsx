import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import AppContent from "./AppContent";
import InquiryPopup from "./assets/components/inquiry/InquiryPopup";

function App() {
  const [showInquiryPopup, setShowInquiryPopup] = useState(false);

  return (
    <BrowserRouter>

      <AppContent
        setShowInquiryPopup={setShowInquiryPopup}
      />

      {showInquiryPopup && (
        <InquiryPopup
          onClose={() => setShowInquiryPopup(false)}
        />
      )}

    </BrowserRouter>
  );
}

export default App;