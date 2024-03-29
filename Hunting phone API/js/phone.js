//console.log('hunting phone')

const loadPhone= async()=>{
    const res= await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')

    const data= await res.json();
    const phones=data.data;
     //console.log(phones);
    displayPhones(phones);
}
const displayPhones=phones=>{
    // console.log(phones);
    //container create
    //const phoneContainer=document.getElementById('phone-container');
    const phoneContainer=document.getElementById('phone-container')

    phones.forEach( phone => {
        console.log(phone);
        //1 create a div
        const phoneCard=document.createElement('div');
        phoneCard.classList=`card bg-gray-100 p-4 shadow-xl`;
        //2 set innerHTML
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
        </div>
        
        
        `;
        //append child
        phoneContainer.appendChild(phoneCard);
    })

}
loadPhone();