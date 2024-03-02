const loadPhone2=async(searchText)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data= await res.json();
    //console.log(data);
    const phones=data.data;
    //console.log(phones);
    displayPhones(phones);
}


const displayPhones=phones=>{
  const phoneContainer=document.getElementById('phone-container')
  const showAllContainer=document.getElementById('show-all-container');
  if(phones.length>12){
       showAllContainer.classList.remove('hidden')
  }else{
    showAllContainer.classList.add('hidden')
  }
      phones=phones.slice(0,12);
  phoneContainer.textContent='';

    phones.forEach(phone => {
        console.log(phone);
       //reate  div
        const phoneCard=document.createElement('div')
        phoneCard.classList=`card w-96 bg-grey-100`;
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
        `
       phoneContainer.appendChild(phoneCard);
        
    });
    toggleSpinner(false);
}
  

//handler search 
const handleSearch=()=>{
  toggleSpinner(true);
  const inputFeild= document.getElementById("text-feild");
  const searchText=inputFeild.value;
  console.log(searchText);
  loadPhone2(searchText);
}

const toggleSpinner = (isLoading)=>{
 const loadingSpinner=document.getElementById("loading-container");
 if(isLoading){
  loadingSpinner.classList.remove('hidden')
 } else{
  loadingSpinner.classList.add('hidden')
 }
}

const handleShow= () => {
  handleSearch()
}
