/* const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
}) */
/* <!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://fontawesome.com/icons/list-check?f=classic&s=solid">
    <title>increment counter </title>
</head>
<body>
   <div class="counter-container">
    <i class="fa-solid fa-mug-hot "></i>
    <div class="counter " data-target ="400"></div>
<span>Happy Clint</span>
    
   </div> 
   <div class="counter-container">
    <i class="fa-solid fa-user "></i>
    <div class="counter " data-target ="1500"></div>
<span>On going Project</span>
    
   </div> 
   <div class="counter-container">
    <i class="fa-solid fa-list-check"></i>
    <div class="counter " data-target ="500"></div>
<span>Project Completed</span>
    
   </div> 
</body>
</html>--></meta> */
document.cdocument.cookie = "your_cookie_name=your_cookie_value; expires=Thu, 01 Jan 2023 00:00:00 UTC; path=/; domain=yourdomain.com; samesite=strict";
document.cookie = "your_cookie_name=your_cookie_value; expires=Thu, 01 Jan 2023 00:00:00 UTC; path=/; domain=yourdomain.com; samesite=strict";

document.cookie = "your_cookie_name=your_cookie_value; expires=Thu, 01 Jan 2023 00:00:00 UTC; path=/; domain=yourdomain.com; samesite=lax";

Cookies.set('your_cookie_name', 'your_cookie_value', { expires: 1, secure: true, sameSite: 'None' });
Cookies.set('your_cookie_name', 'your_cookie_value', { expires: 1, sameSite: 'Strict' });
Cookies.set('your_cookie_name', 'your_cookie_value', { expires: 1, sameSite: 'Lax' });
