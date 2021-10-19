var list = []
const selectedProperty = localStorage.getItem('key');

list.push({PropertySelected: selectedProperty})



//console.log(selectedProperty)
document.getElementById('property').innerHTML = selectedProperty;
if(selectedProperty==='Resident'){
document.getElementById('selectyouwant').innerHTML='You want to' 
document.getElementById('youwanttype').innerHTML='You want Residential' 
}
else{
document.getElementById('selectyouwant').innerHTML='You want' 
document.getElementById('youwanttype').innerHTML='You want Commercial' 

}

const youWant = localStorage.getItem('Youwant');


document.getElementById('youwant').innerHTML = youWant;


const PropertyType = localStorage.getItem('propertyType');
document.getElementById('propertytype').innerHTML = PropertyType;

const City = localStorage.getItem('city');
document.getElementById('city').innerHTML = City;



const youNeed = localStorage.getItem('youneed');
document.getElementById('YouNeed').innerHTML = youNeed;

if(youNeed=='unfurnished')
document.getElementById('first').innerHTML = 'N/A';
else{

if(localStorage.getItem('checkbox1')!=null)
document.getElementById('first').innerHTML = localStorage.getItem('checkbox1')+',';
if(localStorage.getItem('checkbox2')!=null)
document.getElementById('second').innerHTML = localStorage.getItem('checkbox2')+',';
if(localStorage.getItem('checkbox3')!=null)
document.getElementById('third').innerHTML = localStorage.getItem('checkbox3')+',';
if(localStorage.getItem('checkbox4')!=null)
document.getElementById('fourth').innerHTML = localStorage.getItem('checkbox4')+',';
if(localStorage.getItem('checkbox5')!=null)
document.getElementById('fifth').innerHTML = localStorage.getItem('checkbox5')+' ';
if(localStorage.getItem('checkbox6')!=null)
document.getElementById('sixth').innerHTML = localStorage.getItem('checkbox6');
}


const MoveUnderConstruction  = localStorage.getItem('moveUnderConstruction');
document.getElementById('moveUnderConstruction').innerHTML = MoveUnderConstruction
if(MoveUnderConstruction==='READY TO MOVE'){
    document.getElementById('builtPossession').innerHTML='Built in'
   
}
else{
    document.getElementById('builtPossession').innerHTML='Possession'
}


document.getElementById('builtInPossession').innerHTML = localStorage.getItem('builtIn');
document.getElementById('nameid').innerHTML = localStorage.getItem('fullName');
document.getElementById('email').innerHTML = localStorage.getItem('email');
document.getElementById('number').innerHTML = localStorage.getItem('number');


function goback()
{
   window.history.back()
}
 localStorage.clear()

 
