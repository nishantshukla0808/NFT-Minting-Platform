import React, { useState } from 'react';
import ThemeSelection from './components/ThemeSelection';
import PhotoUpload from './components/PhotoUpload';
import LoadingScreen from './components/LoadingScreen';
import ConfirmationPage from './components/ConfirmationPage';
import "./App.css";
import Header from "./components/Header";

const App = () => {
  const [currentPage, setCurrentPage] = useState('themeSelection');
  const [theme, setTheme] = useState(null);
  const [editedImage, setEditedImage] = useState(null);

  const handleThemeSelect = (selectedTheme) => {
    setTheme(selectedTheme);
    setCurrentPage('photoUpload');
  };

  // const handleUploadComplete = (file, email) => {
  //   setCurrentPage('loading');
    
  //   setTimeout(() => {
  //     setEditedImage('/path/to/edited/image.jpg'); // Replace with actual image path
  //     setCurrentPage('confirmation');
  //   }, 3000);
  // };


  return (
    <div>
      <Header />
      {currentPage === 'themeSelection' && (
        <ThemeSelection onSelectTheme={handleThemeSelect} />
      )}
      {currentPage === 'photoUpload' && (
        <PhotoUpload 
          selectedTheme={theme} // Pass the selected theme as a prop
        />
      )}
      {/* {currentPage === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      {currentPage === 'confirmation' && (
        <ConfirmationPage editedImage={editedImage} onShare={handleShare} />
      )} */}
    </div>
  );
};

export default App;
