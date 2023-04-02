document.querySelector("#otp_submit").addEventListener("click", otp_sub)

    function otp_sub() {
        event.preventDefault()
        let ans = document.querySelector("#sent_otp")


        if (ans.value == 1234) {
            alert("Payment Successfull")
            window.location.href = "index.html"
        } else {
            alert("Please Enter the correct otp")
            window.location.reload();
        }
    }