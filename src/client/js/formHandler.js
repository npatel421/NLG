async function handleSubmit(event) {
  event.preventDefault();
   
  const data = {};
  let formText = document.getElementById('name').value;
  document.getElementById('results').innerHTML = ''
  data.text = formText

  let URLValidater = Client.validateURL(formText)
  
  if (document.getElementById("classify").checked) {
    console.log("classify radio selected")
    if (URLValidater) {
      postData('http://localhost:8082/userResponse', data)
      .then(sendDataClass('http://localhost:8082/allclassify'))
    } else {
      document.getElementById('results').innerHTML = "This is not a valid URL, please try again."
      document.getElementById('text').innerHTML = ""
      document.getElementById('label').innerHTML = ""
      document.getElementById('labelConfidence').innerHTML = ""
      document.getElementById('text').innerHTML = ""
      document.getElementById('polarity').innerHTML = ""
      document.getElementById('subjectivity').innerHTML = ""
    }
  } else if (document.getElementById("sentiment").checked){
      postData('http://localhost:8082/userResponse', data)
      .then(sendDataSent('http://localhost:8082/allsentiment'))
  }
  
}

// POST user response to server
const postData = async (url='', data={}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  try {
    const newData = await response.json();
    console.log(newData)
    return newData;
  } catch (error) {
    console.log(error);
  }
}

// GET ROUTE for classify.. send api data to client side
const sendDataClass = async (url = '') => {
    const res =  await fetch(url)
    try {
        const apidata = await res.json();
        document.getElementById('polarity').innerHTML = ""
        document.getElementById('subjectivity').innerHTML = ""
        document.getElementById('text').innerHTML = `Article Text: ${apidata.text}`;
        document.getElementById('label').innerHTML = `Article Subject: ${apidata.categories[0].label}`;
        document.getElementById('labelConfidence').innerHTML = `Subject Confidence: ${apidata.categories[0].confidence}`;
        console.log(apidata)
        return apidata;
    } catch(error) {
        console.log('error',error);
    }
}

// GET ROUTE for sentiment.. send api data to client side
const sendDataSent = async (url = '') => {
  const res =  await fetch(url)
  try {
      const apidata = await res.json();
      document.getElementById('label').innerHTML = ""
      document.getElementById('labelConfidence').innerHTML = ""
      document.getElementById('text').innerHTML = `User Text: ${apidata.text}`;
      document.getElementById('polarity').innerHTML = `Polarity: ${apidata.polarity}`;
      document.getElementById('subjectivity').innerHTML = `Subjectivity: ${apidata.subjectivity}`;
      console.log(apidata)
      return apidata;
  } catch(error) {
      console.log('error',error);
  }
}

export { handleSubmit }