const studentsDatabase= ['jordan', 'erick', 'john','michel']


const findStudent = (allStudets, studentsName) => {

  for(let i = 0; i<allStudets.length; i++){

    if(allStudets[i] === studentsName){
      console.log(`Found ${studentsName}`)
    }
  }
  
}


findStudent(studentsDatabase,'erick')