
//

//search: form submit reloading the page

//step 2: set event handler
document.getElementById('button-login')
         // step -2: Prevent default behavior (prevent reloading browser)   
        .addEventListener('click', function(event){
            event.preventDefault(); //
            console.log('login button click');

            // step -3: get hte phone number
            const phoneNumber = document.getElementById('phone-number').value;
            console.log(phoneNumber);
            

})