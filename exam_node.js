import { stdout } from 'process'


import readline from 'readline'

const rl=readline.createInterface({input:process.stdin, output:stdout,})

const expenseList=new Map();

function showMenu()
{
console.log(`Expense Manager:
        1.Add Expense
        2.View Expense
        3.Update Expense
        4.Delete an Expense
        5.Show total Expense
        6.Exit
    `)
    rl.question("Enter the vaue between 1 and 6: ",menu);

}
function menu(value)
{

    switch(value.trim())
    {
        case "1":rl.question("enter the Expense name : ",(nam)=>
        {
            rl.question("Enter the amount ",(amt)=>{
                
                if(nam.trim()!="" && amt.trim()!=""){
                    expenseList.set(nam,amt);
                    console.log(expenseList);
                    showMenu();
                }else{
                    console.log("Enter valid name :");
                    showMenu();
                }
            })
        })
               
        break;
        case "2":
            if(expenseList.size>0)
            {
                console.log("The Expense List is:")
                for(let [nam,amt] of expenseList.entries())
                {
                   console.log(`${nam} ${amt}`)
                   
                }
                showMenu();
            }else{
                console.log("the list is empty");
                showMenu();
            }
            break;
        
        case "3": rl.question("enter the expense name to update: ",(nam)=>
                 {
                    // for (let [nam,amt] of expenseList.entries())
                    // {
                    if(expenseList.has(nam))
                    {
                        rl.question("enter the amount to update:  ",(amt)=>
                        {
                            expenseList.set(nam,amt);
                            showMenu();
                        })
                    }else{
                        console.log("the expense name is not available")
                        showMenu();                    
                    }
                    // }
                })
                break;

        case "4":rl.question("enter the expense name to delete",(nam)=>
        {   
            // for(let [nam,amt] of expenseList.entries())
            // {
            if(expenseList.has(nam))
            {
                expenseList.delete(nam);
                showMenu()
            }else
            {
                console.log("The expense name is not available")
                showMenu();
            }
        //  }
        })
        break;
        case"5":
                const sum=0;

                for(let [nam,amt] of expenseList.entries())
                {
                    sum=sum+ parseInt(expenseList.amt )

                }
                console.log("the total Expense is", sum);
                
            break;

        case "6":
            rl.close();
            break;

        default:console.log("invalid entry")
        showMenu();

    }
}
showMenu();