import React from 'react'

function theory() {
  return (
    <div>
      <h1>Difference between Axios and Fetch</h1>
      <p>Axios has url in request object.	
Axios is a stand-alone third party package that can be easily installed.	
Axios enjoys built-in XSRF protection.	
Axios uses the data property.	
Axios’ data contains the object.	
Axios request is ok when status is 200 and statusText is ‘OK’.	
Axios performs automatic transforms of JSON data.	
Axios allows cancelling request and request timeout.	</p>

<p>Fetch has no url in request object. <br />Fetch is built into most modern browsers; no installation is required as such.</p>
Fetch does not. <br /> Fetch uses the body property. <br />Fetch’s body has to be stringified. <br />Fetch request is ok when response object contains the ok property. <br />Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.
  <br />Fetch does not. 
    </div>
  )
}

export default theory
