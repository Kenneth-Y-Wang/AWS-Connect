const covertVanity=string =>{
  const lastSeven= string.slice(4).split('');

  let vanityOptions=[];
  for (let i = 0; i < lastSeven.length;i++){
    if (lastSeven[i]==='0'){
      vanityOptions.push('0')
    } else if (lastSeven[i]==='1'){
      vanityOptions.push('1')
    } else if (lastSeven[i]==='2'){
      vanityOptions.push(['A','B','C'][Math.floor(Math.random()*3)])
    } else if (lastSeven[i] === '3') {
      vanityOptions.push(['D', 'E', 'F'][Math.floor(Math.random() * 3)])
    } else if (lastSeven[i] === '4') {
      vanityOptions.push(['G', 'H', 'I'][Math.floor(Math.random() * 3)])
    } else if (lastSeven[i] === '5') {
      vanityOptions.push(['J', 'K', 'L'][Math.floor(Math.random() * 3)])
    } else if (lastSeven[i] === '6') {
      vanityOptions.push(['M', 'N', 'O'][Math.floor(Math.random() * 3)])
    } else if (lastSeven[i] === '7') {
      vanityOptions.push(['P', 'Q', 'R','S'][Math.floor(Math.random() * 4)])
    } else if (lastSeven[i] === '8') {
      vanityOptions.push(['T', 'U', 'V'][Math.floor(Math.random() * 3)])
    } else if (lastSeven[i] === '9') {
      vanityOptions.push(['W', 'X', 'Y','Z'][Math.floor(Math.random() * 4)])
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
    vanityOptions.push('1')
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
