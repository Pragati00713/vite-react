import React from 'react';
import myImage from './images/./Oppo.jpeg'; // Adjust the path to your image

function MyComponent() {
  return (
    <div>
      {/* Use the imported image */}
      <img src={myImage} alt="My Image" />
    </div>
  );
}

export default MyComponent;
