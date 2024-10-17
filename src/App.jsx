import React, { useState } from 'react';
import ThemeSelection from './components/ThemeSelection';
import PhotoUpload from './components/PhotoUpload';
import LoadingScreen from './components/LoadingScreen';
import ConfirmationPage from './components/ConfirmationPage';
import Header from "./components/header"
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState('themeSelection');
  const [theme, setTheme] = useState(null);
  const [editedImage, setEditedImage] = useState(null);

  const handleThemeSelect = (selectedTheme) => {
    setTheme(selectedTheme);
    setCurrentPage('photoUpload');
  };

  const handleUploadComplete = (file, email) => {
    setCurrentPage('loading');
    // Simulate backend processing for image editing
    setTimeout(() => {
      setEditedImage('/path/to/edited/image.jpg');
      setCurrentPage('confirmation');
    }, 3000);
  };

  const handleLoadingComplete = () => {
    setCurrentPage('confirmation');
  };


  return (
    <div>
      <Header/>
      {currentPage === 'themeSelection' && (
        <ThemeSelection onSelectTheme={handleThemeSelect} />
      )}
      {currentPage === 'photoUpload' && (
        <PhotoUpload onUploadComplete={handleUploadComplete} />
      )}
      {currentPage === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      {currentPage === 'confirmation' && (
        <ConfirmationPage editedImage={editedImage} />
      )}
    </div>
  );
};

export default App;
