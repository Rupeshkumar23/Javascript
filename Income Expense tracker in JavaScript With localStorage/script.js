const yourBalance=document.querySelector('.balance');
const income=document.querySelector('#income');
const expense=document.querySelector('#expense');
const form=document.querySelector('.form');
const inputDescription=document.querySelector('#description');
const inputAmount=document.querySelector('#amount');
const trans=document.querySelector('.trans');
/*--------updating in local storage------------*/
let localStorageDummydata=JSON.parse(localStorage.getItem("dummyData"));
let dummydata=localStorage.getItem("dummyData")!==null?localStorageDummydata:[];
function updatingLocalStorage() {
    localStorage.setItem("dummyData",JSON.stringify(dummydata));
};
/*------------------------------------*/
window.addEventListener('DOMContentLoaded',()=>{
    inputDescription.select();}
    )
window.addEventListener('DOMContentLoaded',updateData());
function updateData(){
    trans.innerHTML="";
    dummydata.forEach((item)=>{
        let desc=item.desc;
        let amount=item.amount;
        let itemId=item.id;
        let sign=amount>0?"+":"-";
        let spanClass=amount>0?"plus":"minus";
        const liElement=document.createElement('li');
        liElement.classList.add(spanClass)
        liElement.innerHTML=`
        <span class="desc ${spanClass}">${desc}</span>
        <span class="amt">${sign} ${Math.abs(amount).toFixed(2)}</span>
        <button class="btn10"onclick="removeList(${itemId})">❌</button>`;
        trans.appendChild(liElement);
        updateBalance();
        updatingLocalStorage();
    })
}
/*----------------------------------------*/
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    loadTransaction();
});
function loadTransaction(){
    trans.innerHTML=''
    let newId=Math.floor(Math.random()*1000000);
    let newDesc=inputDescription.value.trim();
    let newAmount=+inputAmount.value.trim();
    let newTransaction= {id:newId, desc:newDesc, amount:newAmount};
    dummydata.push(newTransaction);
    updateData();
    inputDescription.value="";
    inputAmount.value="";
    inputDescription.select();
}

function removeList(id){
    if(confirm("Are you sure you want to delete?")){
        dummydata=dummydata.filter((item)=>item.id!==id);
        updateData();
        updateBalance();
        updatingLocalStorage();
    };
};
/*---------updating balance---------*/
function updateBalance(){
        let totalAmount=dummydata.map((item)=>item.amount).reduce((acc,item)=>(acc+=item),0);
        yourBalance.innerHTML=`💰 ${totalAmount.toFixed(2)}`;
        let incomeTotal=dummydata.map((item)=>item.amount).filter((item)=>item>0).reduce((acc,item)=>(acc+=item),0);
        let expenceTotal=dummydata.map((item)=>item.amount).filter((item)=>item<0).reduce((acc,item)=>(acc+=item),0);
        income.innerHTML=`💰 ${incomeTotal.toFixed(2)}`;
        expense.innerHTML=`⛔ ${Math.abs(expenceTotal).toFixed(2)}`;    
}

