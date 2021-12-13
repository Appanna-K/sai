// alert("working")
console.log('welcome to js')



document.getElementById("submitBtn").onclick=() =>
{
    document.getElementById("titleshow").innerHTML="Degree Marks";

    console.log(document)
    console.log(`Subject1 Marks:${
        document.getElementById("sub1Marks").value
    }`)

    console.log(`Subject2 Marks:${
        document.getElementById("sub2Marks").value}`)

    console.log(`Subject3 Marks:${
        document.getElementById("sub3Marks").value}`)   


    console.log(`Subject4 Marks:${
        document.getElementById("sub4Marks").value}`)


    console.log(`Subject5 Marks:${
        document.getElementById("sub5Marks").value}`)

    console.log(`Subject6 Marks:${
        document.getElementById("sub6Marks").value}`)  
                        

let totalMarks=document.getElementById("totalMarks").value;                        
let Subject1Marks = parseInt(document.getElementById("sub1Marks").value);
let Subject2Marks = parseInt(document.getElementById("sub2Marks").value);
let Subject3Marks = parseInt(document.getElementById("sub3Marks").value);
let Subject4Marks = parseInt(document.getElementById("sub4Marks").value);
let Subject5Marks = parseInt(document.getElementById("sub5Marks").value);
let Subject6Marks = parseInt(document.getElementById("sub6Marks").value);

// subject1

    if (Subject1Marks >= 35)
    {
    document.getElementById("result").innerHTML="Pass";
     } 
     else 
     {
    document.getElementById("result").innerHTML="fail";
    }


    // else if 
    // {
    //     Subject1Marks >= 100;
    //     document.getElementById("result").innerHTML="invalid"; 
    // }




// subject2    
    if (Subject2Marks >= 35)
    {
    document.getElementById("result1").innerHTML="Pass";
     } 
     else 
     {
    document.getElementById("result1").innerHTML="fail";
    }


// subject3    
    if (Subject3Marks >= 35)
    {
    document.getElementById("result2").innerHTML="Pass";
     } 
     else 
     {
    document.getElementById("result2").innerHTML="fail";
    }

// subject4  
    if (Subject4Marks >= 35)
    {
    document.getElementById("result3").innerHTML="Pass";
     } 
     else 
     {
    document.getElementById("result3").innerHTML="fail";
    }
// subject5  
    if (Subject5Marks >= 35)
    {
    document.getElementById("result4").innerHTML="Pass";
     } 
     else 
     {
    document.getElementById("result4").innerHTML="fail";
    }


// subject6      
    if (Subject6Marks >= 35)
    {
    document.getElementById("result5").innerHTML="Pass";
     } 
     else 
     {
    document.getElementById("result5").innerHTML="fail";
    }


//   final marks
    // if (totalMarks >=210)
    // {
    //     document.getElementById("finalResult").innerHTML="Pass";
    //      } 
    //      else 
    //      {
    //     document.getElementById("finalResult").innerHTML="fail";
    //     }


    if ((Subject1Marks >= 35) && (Subject2Marks >= 35) && (Subject3Marks >= 35) && (Subject4Marks >= 35) && (Subject5Marks >= 35) && (Subject6Marks >= 35))
    {
        document.getElementById("finalResult").innerHTML="Pass";
    } 
    else 
    {
        document.getElementById("finalResult").innerHTML="Fail";
    }






totalMarks = Subject1Marks+Subject2Marks+Subject3Marks+Subject4Marks+Subject5Marks+Subject6Marks ;

let name=document.getElementById("studentName").value
console.log(`Total Marks Are ${totalMarks}`);



document.getElementById("totalMarks").innerHTML=`${name} Total Marks Are  ${totalMarks}`;

}



document.getElementById("submit1Btn").onclick=() =>
{
    document.getElementById("title1show").innerHTML="Degree Marks";

    console.log(document)
    console.log(`Subject21 Marks:${
        document.getElementById("sub21Marks").value
    }`)
    console.log(`Subject22 Marks:${
        document.getElementById("sub22Marks").value}`)

    console.log(`Subject23 Marks:${
        document.getElementById("sub23Marks").value}`)   


    console.log(`Subject24 Marks:${
        document.getElementById("sub24Marks").value}`)


    console.log(`Subject25 Marks:${
        document.getElementById("sub25Marks").value}`)

    console.log(`Subject26 Marks:${
        document.getElementById("sub26Marks").value}`)  
                        

let total1Marks=document.getElementById("total1Marks").value;                        
let Subject21Marks = parseInt(document.getElementById("sub21Marks").value);
let Subject22Marks = parseInt(document.getElementById("sub22Marks").value);
let Subject23Marks = parseInt(document.getElementById("sub23Marks").value);
let Subject24Marks = parseInt(document.getElementById("sub24Marks").value);
let Subject25Marks = parseInt(document.getElementById("sub25Marks").value);
let Subject26Marks = parseInt(document.getElementById("sub26Marks").value);


total1Marks = Subject21Marks+Subject22Marks+Subject23Marks+Subject24Marks+Subject25Marks+Subject26Marks ;

let name=document.getElementById("student1Name").value
console.log(`Total Marks aAe ${total1Marks}`);

document.getElementById("total1Marks").innerHTML=`${name},Total Marks Are  ${total1Marks}`

}



document.getElementById("submit2Btn").onclick=() =>
{
    document.getElementById("title2show").innerHTML="Degree Marks";
    

    console.log(document)
    console.log(`Subject31 Marks:${
        document.getElementById("sub31Marks").value
    }`)
    console.log(`Subject32 Marks:${
        document.getElementById("sub32Marks").value}`)

    console.log(`Subject33 Marks:${
        document.getElementById("sub33Marks").value}`)   


    console.log(`Subject34 Marks:${
        document.getElementById("sub34Marks").value}`)


    console.log(`Subject35 Marks:${
        document.getElementById("sub35Marks").value}`)

    console.log(`Subject36 Marks:${
        document.getElementById("sub36Marks").value}`)  
                        

let total2Marks=document.getElementById("total2Marks").value;                        
let Subject31Marks = parseInt(document.getElementById("sub31Marks").value);
let Subject32Marks = parseInt(document.getElementById("sub32Marks").value);
let Subject33Marks = parseInt(document.getElementById("sub33Marks").value);
let Subject34Marks = parseInt(document.getElementById("sub34Marks").value);
let Subject35Marks = parseInt(document.getElementById("sub35Marks").value);
let Subject36Marks = parseInt(document.getElementById("sub36Marks").value);


total2Marks = Subject31Marks+Subject32Marks+Subject33Marks+Subject34Marks+Subject35Marks+Subject36Marks ;

let name=document.getElementById("student2Name").value
console.log(`Total Marks aAe ${total2Marks}`);

document.getElementById("total2Marks").innerHTML=`${name},Total Marks Are  ${total2Marks}`

}



document.getElementById("submit3Btn").onclick=() =>
{
    document.getElementById("title3show").innerHTML="Degree Marks";
    
    // document.getElementById("studentName").innerHTML("Sujith");

    console.log(document)
    console.log(`Subject41 Marks:${
        document.getElementById("sub41Marks").value
    }`)
    console.log(`Subject42 Marks:${
        document.getElementById("sub42Marks").value}`)

    console.log(`Subject43 Marks:${
        document.getElementById("sub43Marks").value}`)   


    console.log(`Subject44 Marks:${
        document.getElementById("sub44Marks").value}`)


    console.log(`Subject45 Marks:${
        document.getElementById("sub45Marks").value}`)

    console.log(`Subject46 Marks:${
        document.getElementById("sub46Marks").value}`)  
                        

let total3Marks=document.getElementById("total3Marks").value;                        
let Subject41Marks = parseInt(document.getElementById("sub41Marks").value);
let Subject42Marks = parseInt(document.getElementById("sub42Marks").value);
let Subject43Marks = parseInt(document.getElementById("sub43Marks").value);
let Subject44Marks = parseInt(document.getElementById("sub44Marks").value);
let Subject45Marks = parseInt(document.getElementById("sub45Marks").value);
let Subject46Marks = parseInt(document.getElementById("sub46Marks").value);


total3Marks = Subject41Marks+Subject42Marks+Subject43Marks+Subject44Marks+Subject45Marks+Subject46Marks ;

let name=document.getElementById("student3Name").value
console.log(`Total Marks aAe ${total3Marks}`);

document.getElementById("total3Marks").innerHTML=`${name},Total Marks Are  ${total3Marks}`

}



document.getElementById("submit4Btn").onclick=() =>
{
    document.getElementById("title4show").innerHTML="Degree Marks";
    
 

    console.log(document)
    console.log(`Subject51 Marks:${
        document.getElementById("sub51Marks").value
    }`)
    console.log(`Subject52 Marks:${
        document.getElementById("sub52Marks").value}`)

    console.log(`Subject53 Marks:${
        document.getElementById("sub53Marks").value}`)   


    console.log(`Subject54 Marks:${
        document.getElementById("sub54Marks").value}`)


    console.log(`Subject55 Marks:${
        document.getElementById("sub55Marks").value}`)

    console.log(`Subject56 Marks:${
        document.getElementById("sub56Marks").value}`)  
                        

let total4Marks=document.getElementById("total4Marks").value;                        
let Subject51Marks = parseInt(document.getElementById("sub51Marks").value);
let Subject52Marks = parseInt(document.getElementById("sub52Marks").value);
let Subject53Marks = parseInt(document.getElementById("sub53Marks").value);
let Subject54Marks = parseInt(document.getElementById("sub54Marks").value);
let Subject55Marks = parseInt(document.getElementById("sub55Marks").value);
let Subject56Marks = parseInt(document.getElementById("sub56Marks").value);


total4Marks = Subject51Marks+Subject52Marks+Subject53Marks+Subject54Marks+Subject55Marks+Subject56Marks ;

let name=document.getElementById("student4Name").value
console.log(`Total Marks aAe ${total4Marks}`);

document.getElementById("total4Marks").innerHTML=`${name},Total Marks Are  ${total4Marks}`

}


document.getElementById("submit5Btn").onclick=() =>
{
    document.getElementById("title5show").innerHTML="Degree Marks";
    
 

    console.log(document)
    console.log(`Subject61 Marks:${
        document.getElementById("sub61Marks").value
    }`)
    console.log(`Subject62 Marks:${
        document.getElementById("sub62Marks").value}`)

    console.log(`Subject63 Marks:${
        document.getElementById("sub63Marks").value}`)   


    console.log(`Subject64 Marks:${
        document.getElementById("sub64Marks").value}`)


    console.log(`Subject65 Marks:${
        document.getElementById("sub65Marks").value}`)

    console.log(`Subject66 Marks:${
        document.getElementById("sub66Marks").value}`)  
                        

let total5Marks=document.getElementById("total5Marks").value;                        
let Subject61Marks = parseInt(document.getElementById("sub61Marks").value);
let Subject62Marks = parseInt(document.getElementById("sub62Marks").value);
let Subject63Marks = parseInt(document.getElementById("sub63Marks").value);
let Subject64Marks = parseInt(document.getElementById("sub64Marks").value);
let Subject65Marks = parseInt(document.getElementById("sub65Marks").value);
let Subject66Marks = parseInt(document.getElementById("sub66Marks").value);


total5Marks = Subject61Marks+Subject62Marks+Subject63Marks+Subject64Marks+Subject65Marks+Subject66Marks ;

let name=document.getElementById("student5Name").value
console.log(`Total Marks aAe ${total5Marks}`);

document.getElementById("total5Marks").innerHTML=`${name},Total Marks Are  ${total5Marks}`

}













