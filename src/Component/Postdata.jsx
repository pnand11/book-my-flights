import { useState } from "react";

function Postdata(props) {
  const [postData, setPostData] = useState(props);

  const handlePostData = async () => {
    try {
      const response = await fetch('http://localhost:8080/passengers/savePassenger', {
        method: 'POST',

        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        // Handle error responses
        console.error('Error:', response.status, response.statusText);
        return;
      }

      // Handle successful response
      const responseData = await response.json();
      console.log('Success:', responseData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handlePostData}>Post Data</button>
    </div>
  );
};

export default Postdata;