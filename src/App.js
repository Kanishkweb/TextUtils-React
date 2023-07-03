import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './About';

function App() {
  const [mode, setMode] = useState('primary'); // Whether Dark Mode is Enabled or not
  const [alertData, setAlertData] = useState(null);

  const showAlert = (message, type) => {
    setAlertData({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlertData(null);
    }, 1300);
  };

  const toggleMode = () => {
    if (mode === 'primary') {
      setMode('dark');
      document.body.style.backgroundColor = '#333333'; // #1d084d  // navy blue #050A30
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('primary');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  const navyMode = () => {
    if (mode === 'primary') {
      setMode('dark');
      document.body.style.backgroundColor = '#071267'; // Navy blue #050A30
      showAlert("Navy Dark mode has been enabled", "success");
    } else {
      setMode('primary');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  const purpleMode = () => {
    if (mode === 'primary') {
      setMode('dark');
      document.body.style.backgroundColor = ' #800080'; // Navy blue #050A30
      showAlert("Purple Dark mode has been enabled", "success");
      // document.title = 'TextUtils-Dark-Purple-Mode'; // To change the title when Enable Dark-Mode
      // User Attracting Title
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install text utils now";
      // }, 1500);
    } else {
      setMode('primary');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils';
    }
  };

  const greenMode = () => {
    if (mode === 'primary') {
      setMode('dark');
      document.body.style.backgroundColor = ' #228B22'; // Forest Green #228B22
      showAlert("Forest Green Dark mode has been enabled", "success");
    } else {
      setMode('primary');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils2"
        showAlert={showAlert}
        aboutText="TextAbouts"
        mode={mode}
        toggleMode={toggleMode}
        forestGreen={greenMode}
        purpleMode={purpleMode}
        navyMode={navyMode}
      />
      <Alert alert={alertData} />
      <TextForm showAlert={showAlert} heading="TextUtils - | Text Counter | Word Counter | Lowercase to Uppercase | Uppercase to Lowercase | Remove Extra Spaces" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
