const selectOpt=document.getElementsByTagName('select');
const dark=document.getElementById('drkmd')
const dotCom=document.getElementById('dotCom')

const td=document.getElementsByTagName('td')
const tr=document.getElementsByTagName('tr')



dark.addEventListener('click',()=>{
    if(dark.checked==true){
        
        document.body.style.background='#191d28'

        dotCom.style.color='white'

        selectOpt[0].style.background='#2e3241'
        selectOpt[1].style.background='#2e3241'
        selectOpt[0].style.color='white'
        selectOpt[1].style.color='white'
        for (let index = 0; index < td.length; index++) {
            td[index].removeAttribute('class');
            td[index].setAttribute('class','dark-data')
        }
        for (let index = 0; index < tr.length; index++) {
            tr[index].removeAttribute('class')
            tr[index].setAttribute('class','dark-row')
            
        }

    }else{
        
    
        document.body.style.background='white'

        dotCom.style.color='black'

        selectOpt[0].style.background='#f8f9fa'
        selectOpt[1].style.background='#f8f9fa'
        // selectOpt[0].style.border='1px solid gray'
        // selectOpt[1].style.border='1px solid gray'
        selectOpt[0].style.color='#0f124a'
        selectOpt[1].style.color='#0f124a'

        for (let index = 0; index < td.length; index++) {
            td[index].removeAttribute('class');
            td[index].setAttribute('class','light-data')
            
        }
        for (let index = 0; index < tr.length; index++) {
            tr[index].removeAttribute('class')
            tr[index].setAttribute('class','light-row')
            
        }



    }
})
