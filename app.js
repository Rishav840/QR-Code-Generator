const inputQr = document.getElementById("qr-input");
const buttonQr = document.getElementById("qr-button");
const imageQr = document.getElementById("qr-image");





buttonQr.addEventListener("click",()=>{
    
    const inputValue =inputQr.value.trim();
    console.log(inputValue);

    if(!inputValue){
        alert("paste your url");
    }
    else{

        // imageQr.src=`https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${inputValue}&choe=UTF-8`;
        imageQr.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=job${inputValue}`;

        imageQr.alt=`${inputValue}`;
    }
});
