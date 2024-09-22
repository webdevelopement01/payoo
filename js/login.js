
//

//search: form submit reloading the page

//step 2: set event handler
// document.getElementById('button-login')
//          // step -2: Prevent default behavior (prevent reloading browser)   
//         .addEventListener('click', function(event){
//             event.preventDefault(); //
             
//             // step -3: get hte phone number and pin number
//             const phoneNumber = document.getElementById('phone-number').value;
//             const pinNumber = document.getElementById('pin-number').value;
            
//             console.log(phoneNumber, pinNumber);

//             //step -4: validate phone number
//             // this is temporary . you should do like this
//             if(phoneNumber === '5' && pinNumber === '1234'){
//                 console.log('you are logged in');
//                 // step -5: allow user to use the website 

//             }
//             else{
//                 console.log('wrong phone number');
//             }
// })

document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();

    //get phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('your are login')
        window.location.href = '/home.html'
    }
    else{
        console.log('wrong pin or number')
    }



    
})