const covertVanity=(string, callerId) =>{
// debugger;
  const lastSeven= string.slice(4).split('');

  let vanityOptions=[];

  if(digitOption(lastSeven[0]).includes(callerId[0])){
    for (let i=0; i< lastSeven.length;i++){
      if (digitOption(lastSeven[i]).includes(callerId[i])){
        vanityOptions.push(callerId[i]);
      } else {
         vanityOptions.push(digitOption(lastSeven[i])[Math.floor(Math.random() * (digitOption(lastSeven[i]).length))])
        }
      // for(let j=0;j< callerId.length;j++){
      //   if (i===j && digitOption(lastSeven[i]).includes(callerId[j])){
      //     vanityOptions.push(callerId[j]);
      //     callerId.splice(j,1)
      //     j++
      //     break
      //   }else{
      //     vanityOptions.push(digitOption(lastSeven[i])[Math.floor(Math.random() * (digitOption(lastSeven[i]).length))])
      //     callerId.splice(i, 1)
      //     break
      //   }
      // }
    }
  }else{

  for (let i = 0; i < lastSeven.length;i++){
    const vanityOption= digitOption(lastSeven[i])
    vanityOptions.push(vanityOption[Math.floor(Math.random()*(vanityOption.length))])

  }
}
  const lastSevenVanity= vanityOptions.join('');
  const vanityNumber = `${string.slice(0, 1)}-${string.slice(1, 4)}-${lastSevenVanity}`
  return vanityNumber;
}


const digitOption= string => {
  let option;
  if(string ==='0'){
    option=['0']
  } else if (string === '1') {
    option=['1']
  } else if (string === '2') {
    option =['A', 'B', 'C']
  } else if (string === '3') {
    option =['D', 'E', 'F']
  } else if (string === '4') {
    option =['G', 'H', 'I']
  } else if (string === '5') {
    option =['J', 'K', 'L']
  } else if (string === '6') {
    option =['M', 'N', 'O']
  } else if (string === '7') {
    option =['P', 'Q', 'R', 'S']
  } else if (string === '8') {
    option =['T', 'U', 'V']
  } else if (string === '9') {
    option =['W', 'X', 'Y', 'Z']
  }

  return option
}
