//check property selection residential or commercial
function yesnoCheck() {
	if (document.getElementById('resident').checked) {
		
		document.getElementById('residentialselection').style.display = 'block';
		document.getElementById('commercialselection').style.display = 'none';
		document.getElementById('buyc').checked = false;
		document.getElementById('lease').checked = false;
		document.getElementById('propertyType').selectedIndex=0;
		document.getElementById('city').selectedIndex=0;


		

	} else {
		document.getElementById('residentialselection').style.display = 'none';
		// document.getElementById('residentialselection').style.display = 'none';
	}

	if (document.getElementById('commercial').checked) {
		document.getElementById('commercialselection').style.display = 'block';
		document.getElementById('buyr').checked = false;
		document.getElementById('rent').checked = false;
		document.getElementById('pg').checked = false;
		document.getElementById('propertyResidential').selectedIndex=0;
		document.getElementById('city').selectedIndex=0;

		

		// document.getElementById('commercialselection').style.display = 'block';
	} else {
		document.getElementById('commercialselection').style.display = 'none';
		// document.getElementById('commercialselection').style.display = 'none';
	}
	document.getElementById('propertyErrorMessage').innerHTML='';
}



//check furnished or unfurnished selection
function yesnoCheck1() {
	if (document.getElementById('furnished').checked) {
		document.getElementById('facilities').style.display = 'block';
	} else {
		document.getElementById('facilities').style.display = 'none';
	}
	// if checked then hide error message
	document.getElementById('youNeedErrorMessage').innerHTML='';
}



// function for furnished or unfurnished selection
var expanded = false;

function showCheckboxes() {
	var checkboxes = document.getElementById('facilities');
	if (!expanded) {
		checkboxes.style.display = 'block';
		//expanded = true;
	} else {
		checkboxes.style.display = 'none';
		//expanded = false;
	}
}



// Checkbox

var checkList = document.getElementById('list1');


checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
	if (checkList.classList.contains('visible')) checkList.classList.remove('visible');
	else checkList.classList.add('visible');
};



//function for select you want (ready to move or unconstrution)

function yesnoCheck2() {
	if (document.getElementById('ready').checked) {
		document.getElementById('builtin').style.display = 'block';
		// document.getElementById('commercialselection').style.display = 'none';
	} else {
		document.getElementById('builtin').style.display = 'none';
		//document.getElementById('possessionby').style.display = 'block';
	}
	if (document.getElementById('underconstruction').checked) {
		document.getElementById('possessionby').style.display = 'block';
	} else {
		document.getElementById('possessionby').style.display = 'none';
	}
	//if ready to move or underconstruction is selected than hide error message
	document.getElementById('youWantErrorMessage').innerHTML='';
}


// check innerblock Error Message
// Hide error message if you selected
 function  hideErrorMessageYouWantTo(){
	 document.getElementById('youWantToPropertyErrorMessage').innerHTML='';
 } 


//Hide error message if you selected
function hideErrorMessageYouWant(){
	document.getElementById('youWantPropertyErrorMessage').innerHTML='';
}


//Hide error message if property type is select
function removeErrorMessagePropertyType()
{
	document.getElementById('residentialPropertyTypeErrorMessage').innerHTML='';
	document.getElementById('commercialPropertyTypeErrorMessage').innerHTML='';

}


//Hide error message if built in and possession by date is selected
function removeErrorMessageBuitPossession()
{
	document.getElementById('possessionErrorMessage').innerHTML=''
	document.getElementById('builtErrorMessage').innerHTML=''


}






const validatePropertyType = () => {
	// if any of property is selected , return true
	// show error
	if (document.getElementById('resident').checked || document.getElementById('commercial').checked) {
		document.getElementById('propertyErrorMessage').innerHTML = '';

		// checked buy ,pg and rent if selected than hide error message otherwise display error message
		if((document.getElementById('resident').checked) && (document.getElementById('buyr').checked || document.getElementById('rent').checked
		 || document.getElementById('pg').checked )){
			 document.getElementById('youWantPropertyErrorMessage').innerHTML=''
		 }
		 else{
			 if(document.getElementById('resident').checked)
			 document.getElementById('youWantToPropertyErrorMessage').innerHTML='please select choice';
			 else
			 document.getElementById('youWantPropertyErrorMessage').innerHTML='please select choice';
		 }
		 if(document.getElementById('commercial').checked && document.getElementById('lease').checked)
		 document.getElementById('youWantPropertyErrorMessage').innerHTML='';

		 if(document.getElementById('commercial').checked && document.getElementById('buyc').checked)
		 document.getElementById('youWantPropertyErrorMessage').innerHTML='';


		 //show error if  property in dropdown is not selected
         

		 if((document.getElementById('propertyResidential').value == -1)  && 
		   (document.getElementById('resident').checked)){
			 document.getElementById('residentialPropertyTypeErrorMessage').innerHTML='please select property'
		 }
		 else if((document.getElementById('propertyType').value== -1) && 
		 (document.getElementById('commercial').checked)){
			 document.getElementById('commercialPropertyTypeErrorMessage').innerHTML='please select property'
		 }



		return true;
	}
	document.getElementById('propertyErrorMessage').innerHTML = 'Please select any property';
	return false;
};



const validateCity = () => {
	var city = document.getElementById('city');
	if (city.value == -1) {
		document.getElementById('cityErrorMessage').innerHTML = 'please select city';
		return false;
	}
	document.getElementById('cityErrorMessage').innerHTML = '';
	return true;
};
//check city selected or not
function checkCitySelected(){
	var cityValue = document.getElementById('city').value
	if(cityValue!=-1){
		document.getElementById('cityErrorMessage').innerHTML='';
	}
}


const validateYouNeed = () => {
	if (document.getElementById('furnished').checked || document.getElementById('unfurnished').checked) {
		document.getElementById('youNeedErrorMessage').innerHTML = '';
		return true;
	}
	document.getElementById('youNeedErrorMessage').innerHTML = 'please select your choice';
	return false;
};
//


const validateYouWant = () => {
	if (document.getElementById('ready').checked || document.getElementById('underconstruction').checked) {
		document.getElementById('youWantErrorMessage').innerHTML = '';
		return true;
	}
	document.getElementById('youWantErrorMessage').innerHTML = 'please select your choice';
	return false;
};



function validateYouWantAndPrintErrorMessage(){
	if(document.getElementById('ready').checked && (document.getElementById('builtInId').value == -1)){
		document.getElementById('builtErrorMessage').innerHTML='please select date'
		document.getElementById('possessionErrorMessage').innerHTML=''

	}
	else if(document.getElementById('underconstruction').checked && (document.getElementById('possessionById').value == -1)){
		document.getElementById('possessionErrorMessage').innerHTML='please select date'
		document.getElementById('builtErrorMessage').innerHTML=''

	}		
} 



const validateFullName = () => {
	var a = document.getElementById('fullname').value;
	if (a == '') {
		document.getElementById('fullNameErrorMessage').innerHTML = 'please enter full name';
		return false;
	}
	document.getElementById('fullNameErrorMessage').innerHTML = '';
	return true;
};


function validateEmail() {
	var email = document.getElementById('Emailid').value;
	if (email == '') {
		document.getElementById('emailErrorMessage').innerHTML = 'please enter your email';
		return false;
	}
	document.getElementById('emailErrorMessage').innerHTML = '';
	return true;
}


function validateNumber() {
	var number = document.getElementById('numberid').value;
	if (number == '') {
		document.getElementById('mobileErrorMessage').innerHTML = 'please enter your number';
		return false;
	}
	document.getElementById('mobileErrorMessage').innerHTML = '';
	return true;
}

//validate name format

function checkName(value) {
	for (var i = 0; i < value.length; i++) {
		const currChar = value[i];
		if (!((currChar >= 'A' && currChar <= 'Z') || (currChar >= 'a' && currChar <= 'z')||(currChar===' '))) {
			// show error message
			document.getElementById('fullNameErrorMessage').innerHTML = 'Error : Use alphabetical character';
			return false;
		}
	}
	document.getElementById('fullNameErrorMessage').innerHTML = '';
	return true;
}


//validate email format
function checkEmail(emailField) {
	if (emailField.length == 0) {
		document.getElementById('emailErrorMessage').innerHTML = '';
		return false;
	}
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (!emailField.match(reg)) {
		// show error
		document.getElementById('emailErrorMessage').innerHTML = 'Invalid Email';
		return false;
	}

	// remove error
	document.getElementById('emailErrorMessage').innerHTML = '';
	return true;
}


//validate Mobile number
function checkNumber(value) {
	for (var i = 0; i < value.length; i++) {
		var currChar = value[i];

		if (!(currChar >= '0' && currChar <= '9')) {
			document.getElementById('mobileErrorMessage').innerHTML = 'Error : Enter valid Number';
			return false;
		}
	}

	document.getElementById('mobileErrorMessage').innerHTML = '';
	return true;
}


// check mobile no is 10 digit or not on submit
function checkMobileDigit() {
	var noOfDigit = document.getElementById('numberid').value.length;

	if (noOfDigit != 10) {
		document.getElementById('mobileErrorMessage').innerHTML = 'Number should be 10 digit';
		return false;
	}
	document.getElementById('mobileErrorMessage').innerHTML = '';
	return true;
}



function submitForm() {
	const v1 = validatePropertyType();
	const v2 = validateCity();
	const v3 = validateYouNeed();
	const v4 = validateYouWant();
	validateYouWantAndPrintErrorMessage();
	const v5 = validateFullName();
	const v6 = validateEmail();
	const v7 = validateNumber();
	const checkDigit = checkMobileDigit();
	if (!v1 || !v2 || !v3 || !v4 || !v5 || !v6 || !v7 || !checkDigit) return false;

	saveInStorage();

	return true;
}

function savePropertyTypeSaveYouWant() {
	const propertySelected = document.getElementById('resident').checked ? 'Resident' : 'Commercial';
	var youWant = '';
	var propertyOptionChoose = '';
	if (propertySelected === 'Commercial') {
		youWant = document.getElementById('buyc').checked ? 'Buy' : 'Lease';
		localStorage.setItem('Youwant', youWant);
		var e = document.getElementById('propertyType');
		propertyOptionChoose = e.options[e.selectedIndex].text;
	} else {
		if (document.getElementById('buyr').checked) {
			youWant = 'Buy';
		} else if (document.getElementById('rent').checked) {
			youWant = 'Rent';
		} else {
			youWant = 'PG';
		}

		var e = document.getElementById('propertyResidential');
		propertyOptionChoose = e.options[e.selectedIndex].text;
	}
	localStorage.setItem('key', propertySelected);
	localStorage.setItem('Youwant', youWant);
	localStorage.setItem('propertyType', propertyOptionChoose);
}

// function saveYouWantTo(){

// }

// function saveYOuWant(){

// }

function saveCity() {
	var e = document.getElementById('city');
	const city = e.options[e.selectedIndex].text;
	localStorage.setItem('city', city);
}



function saveFurnishedunfurnishedsaveFacilities() {
	const youNeed = document.getElementById('furnished').checked ? 'furnished' : 'unfurnished';
	//facilities
	var facility1 = '',
		facility2 = '';
	if (youNeed === 'furnished') {
		if (document.getElementById('checkbox1').checked) {
			facility1 = document.getElementById('checkbox1').value;
			localStorage.setItem('checkbox1', facility1);
		}
		if (document.getElementById('checkbox2').checked) {
			facility2 = document.getElementById('checkbox2').value;
			localStorage.setItem('checkbox2', facility2);
		}
		if (document.getElementById('checkbox3').checked) {
			var facility3 = '';
			facility3 = document.getElementById('checkbox3').value;
			localStorage.setItem('checkbox3', facility3);
		}
		if (document.getElementById('checkbox4').checked) {
			var facility4 = '';
			facility4 = document.getElementById('checkbox4').value;
			localStorage.setItem('checkbox4', facility4);
		}
		if (document.getElementById('checkbox5').checked) {
			var facility5 = '';
			facility5 = document.getElementById('checkbox5').value;
			localStorage.setItem('checkbox5', facility5);
		}
		if (document.getElementById('checkbox6').checked) {
			var facility6 = '';
			facility6 = document.getElementById('checkbox6').value;
			localStorage.setItem('checkbox6', facility6);
		}
	}
	localStorage.setItem('youneed', youNeed);
}

// function saveFacilities(){

// }



function saveReadyToMoveUnderConstructionBuiltInPossessionBy() {
	//ready to move or underconstruction
	var moveUnderConstruction = document.getElementById('ready').checked ? 'READY TO MOVE' : 'UNDER CONSTRUCTION';
	//Built in or Possession by
	var builtInPossessionBy = '';
	if (moveUnderConstruction === 'READY TO MOVE') {
		var e = document.getElementById('builtInId');
		builtInPossessionBy = e.options[e.selectedIndex].text;
	} else {
		var e = document.getElementById('possessionById');
		builtInPossessionBy = e.options[e.selectedIndex].text;
	}
	localStorage.setItem('moveUnderConstruction', moveUnderConstruction);
	localStorage.setItem('builtIn', builtInPossessionBy);
}

// function saveBuiltInPossessionBy(){

// }



function saveName() {
	var name = document.getElementById('fullname').value;
	localStorage.setItem('fullName', name);
}


function saveEmail() {
	var email = document.getElementById('Emailid').value;
	localStorage.setItem('email', email);
}


function savePhoneNo() {
	var number = document.getElementById('numberid').value;
	localStorage.setItem('number', number);
}

// close dropdown when click on outside





function saveInStorage() {
	savePropertyTypeSaveYouWant();
	saveCity();
	saveFurnishedunfurnishedsaveFacilities();
	saveReadyToMoveUnderConstructionBuiltInPossessionBy();
	saveName();
	saveEmail();
	savePhoneNo();
    
	// const propertySelected = document.getElementById('resident').checked ? 'Resident' : 'Commercial';
	// var youWant = '';
	// var propertyOptionChoose = '';
	// if (propertySelected === 'Commercial') {
	// 	youWant = document.getElementById('buyc').checked ? 'Buy' : 'Lease';
	// 	localStorage.setItem('Youwant', youWant);
	// 	var e = document.getElementById('propertyType');
	// 	propertyOptionChoose = e.options[e.selectedIndex].text;
	// } else {
	// 	if (document.getElementById('buyr').checked) {
	// 		youWant = 'Buy';
	// 	} else if (document.getElementById('rent').checked) {
	// 		youWant = 'Rent';
	// 	} else {
	// 		youWant = 'PG';
	// 	}
	// 	var e = document.getElementById('propertyResidential');
	// 	propertyOptionChoose = e.options[e.selectedIndex].text;
	// 	localStorage.setItem('Youwant', youWant);
	// }
	// var e = document.getElementById('city');
	// const city = e.options[e.selectedIndex].text;

	// //you need
	// const youNeed = document.getElementById('furnished').checked ? 'furnished' : 'unfurnished';
	// //facilities
	// var facility1 = '',
	// 	facility2 = '';
	// if (youNeed === 'furnished') {
	// 	if (document.getElementById('checkbox1').checked) {
	// 		facility1 = document.getElementById('checkbox1').value;
	// 		localStorage.setItem('checkbox1', facility1);
	// 	}
	// 	if (document.getElementById('checkbox2').checked) {
	// 		facility2 = document.getElementById('checkbox2').value;
	// 		localStorage.setItem('checkbox2', facility2);
	// 	}
	// 	if (document.getElementById('checkbox3').checked) {
	// 		var facility3 = '';
	// 		facility3 = document.getElementById('checkbox3').value;
	// 		localStorage.setItem('checkbox3', facility3);
	// 	}
	// 	if (document.getElementById('checkbox4').checked) {
	// 		var facility4 = '';
	// 		facility4 = document.getElementById('checkbox4').value;
	// 		localStorage.setItem('checkbox4', facility4);
	// 	}
	// 	if (document.getElementById('checkbox5').checked) {
	// 		var facility5 = '';
	// 		facility5 = document.getElementById('checkbox5').value;
	// 		localStorage.setItem('checkbox5', facility5);
	// 	}
	// 	if (document.getElementById('checkbox6').checked) {
	// 		var facility6 = '';
	// 		facility6 = document.getElementById('checkbox6').value;
	// 		localStorage.setItem('checkbox6', facility6);
	// 	}
	// }
	// //ready to move or underconstruction
	// var moveUnderConstruction = document.getElementById('ready').checked ? 'READY TO MOVE' : 'UNDER CONSTRUCTION';
	// //Built in or Possession by
	// var builtInPossessionBy = ''
	// if(moveUnderConstruction === 'READY TO MOVE'){

	//     var e = document.getElementById('builtInId')
	//     builtInPossessionBy = e.options[e.selectedIndex].text

	// }
	// else{

	//   var e = document.getElementById('possessionById')
	//   builtInPossessionBy = e.options[e.selectedIndex].text

	// }

	// // Personal details
	// var name = document.getElementById('fullname').value
	// var email = document.getElementById('Emailid').value
	// var number = document.getElementById('numberid').value

	// localStorage.setItem('key', propertySelected);
	// localStorage.setItem('propertyType', propertyOptionChoose);
	// localStorage.setItem('city', city);
	// localStorage.setItem('youneed', youNeed);
	// localStorage.setItem('moveUnderConstruction', moveUnderConstruction);
	// localStorage.setItem('builtIn',builtInPossessionBy)
	// localStorage.setItem('fullName',name)
	// localStorage.setItem('email',email)
	// localStorage.setItem('number',number)
}
