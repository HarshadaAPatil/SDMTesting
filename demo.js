function ValidateEmail(inputText)
{
	var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(inputText.value.match(mailformat))
	{
		alert("This is not a valid email address");


		
		console.log("askdckjbsjcb")
		return false;
		}
}


ValidateEmail(" @gmail.com")