const authorization = "Bearer";
// TODO

//1. Target the form
const form = document.getElementById('clearbitForm');

// 2. Add Event Listener on the submit button
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let inputEmail = document.getElementById('clearbitForm').children[0].value;
  console.log(inputEmail);
  //callClearbitAPI(inputEmail);
  //call the api
  callClearbitAPI(inputEmail);
  // add the field to the correct spot
});

// 3. Call the API with the input text as a field
const callClearbitAPI = (email) => {
  const url = `https://person.clearbit.com/v1/people/email/${email}`;
  fetch(url, { headers: { Authorization: authorization, 'User-Agent': 'Mozilla/5.0 (Windows NT 5.1; rv:15.0) Gecko/20100101 Firefox/15.0.1' }})
    .then(response => response.json())
    .then((data) => {
      console.log(email);
      let jsonMessage = JSON.stringify(data.error.message);
      setUserInfo(jsonMessage,email)
    });
};
// 4. Read the JSON coming from the API

 const setUserInfo = (jsonMessage, email) => {
   const userName = document.querySelector("#userName");
   const userEmail = document.querySelector("#userEmail");
   userName.innerText = jsonMessage;
   userEmail.innerText = email;
 }
//5. Convert the JSON into an array/hash/string
//6. Display the results in a div/table/ul


