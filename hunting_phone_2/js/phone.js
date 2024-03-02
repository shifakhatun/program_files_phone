const loadPhone2=async(searchText='13', isShowAll)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data= await res.json();
    //console.log(data);
    const phones=data.data;
    //console.log(phones);
    displayPhones(phones, isShowAll);
}


const displayPhones=(phones, isShowAll)=>{
  const phoneContainer=document.getElementById('phone-container')
  const showAllContainer=document.getElementById('show-all-container');
  if(phones.length>12){
       showAllContainer.classList.remove('hidden')
  }else{
    showAllContainer.classList.add('hidden')
  }

  console.log('is show all', isShowAll)
      phones=phones.slice(0,12);
  phoneContainer.textContent='';

    phones.forEach(phone => {
        //console.log(phone);
       //reate  div
        const phoneCard=document.createElement('div')
        phoneCard.classList=`card w-96 bg-grey-100`;
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
        `
       phoneContainer.appendChild(phoneCard);
        
    });
    toggleSpinner(false);
}
  

//handler search 
const handleSearch=(isShowAll)=>{
  toggleSpinner(true);
  const inputFeild= document.getElementById("text-feild");
  const searchText=inputFeild.value;
  console.log(searchText);
  loadPhone2(searchText);
}

loadPhone2();
const toggleSpinner = (isLoading)=>{
 const loadingSpinner=document.getElementById("loading-container");
 if(isLoading){
  loadingSpinner.classList.remove('hidden')
 } else{
  loadingSpinner.classList.add('hidden')
 }
}

const handleShow= () => {
  handleSearch(true)
}
 

const handleShowDetail=async(id)=>{
  console.log('clicked', id);
//load phone data
  const res=await fetch(` https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json();
  const phone=data.data;

 
  showDetailModal(phone)
}

const showDetailModal=(phone)=>{
  console.log(phone);
  const phoneName=document.getElementById('show-detail-phone-name')
  phoneName.innerText=phone.name;

  const showDetailContainer=document.getElementById('show-detail-container');
   showDetailContainer.innerHTML=`
   <img src="${phone.image}" alt="">
   <p class="text-2xl"> <b>Storage:</b> ${phone?.mainFeatures?.storage} </p>
   <p class="text-2xl"> <b>Display Size:</b> ${phone?.mainFeatures?.displaySize} </p>
   <p class="text-2xl"> <b>Chipset:</b> ${phone?.mainFeatures?.chipSet} </p>
   <p class="text-2xl"> <b>Memory:</b> ${phone?.mainFeatures?.memory} </p>
   <p class="text-2xl"> <b>GPS:</b> ${phone.others?.GPS || 'no GPS Available'} </p>
   <p class="text-2xl"> <b>GPS:</b> ${phone.others?.GPS ? phone.others.GPS :  'no GPS Available in this device'} </p>

   
   
   `
  //show the modal
  show_details_modal.showModal();
}

