const timer=document.getElementById('time-count');
const table=document.getElementById('main-table')

const table1=document.getElementsByTagName('table');
let curTime=60;
let theme='dark'
setInterval(() => {
        if(curTime==60 || curTime<=0){
            fetch('/fetch/data')
                .then((response)=>{
                return response.json();
                })
                .then((details)=>{
                    
                    table.innerHTML=""
                    table.innerHTML=`<th nowrap>#</th> 
                    <th nowrap>name</th>
                    <th nowrap>Last</th>
                    <th nowrap>Buy/Sell Price</th>
                    <th nowrap>volume</th>
                    <th nowrap>base_unit</th>`
                    for (let index = 0; index < details.length; index++) {
                        if(dark.checked==true){
                            theme='dark';
                        }else{
                            theme='light'
                        }
                        let newRow=document.createElement('tr');
                        newRow.setAttribute('class', `${theme}-row`)
                        newRow.innerHTML=`<td class='finder ${theme}-data' nowrap> ${index+1} </td>
                        <td class='finder ${theme}-data' nowrap> ${details[index].name} </td>
                        <td class='finder ${theme}-data' nowrap>
                            <i class="fa fa-rupee"></i>${details[index].last}
                        </td>
                        <td class='finder ${theme}-data' nowrap>
                            <i class="fa fa-rupee" ></i>
                            ${details[index].buy} /
                            <i class="fa fa-rupee"></i>
                            ${details[index].sell}
                        </td>
                        <td class='finder ${theme}-data' nowrap> ${details[index].volume} </td>
                        <td class='finder ${theme}-data' nowrap> ${details[index].base_unit} </td>`
    
                        table.appendChild(newRow)
                    }
                })
                .catch((error)=>{
                    console.log(error);
                })
            
            curTime=60;

        }
          
        timer.innerText=curTime--;
    
}, 1000);

