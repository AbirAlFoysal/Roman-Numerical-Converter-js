function convertToRoman(num) {
    let str = num.toString().split('')
    let str1 = str.slice().reverse()
    let t = []
    for(let x of str1){
      let y = parseInt(x)
      t.push(y*Math.pow(10,str1.indexOf(x)))
      str1[str1.indexOf(x)]='item removed'
    }
    str = t.reverse().map(a=>a.toString())
    let temp =[]
    let fin =[]
  for(let x of str){
    if(x.length==1){
  temp = ['I','V', 'X']}
    else if(x.length==2){
  temp = ['X','L','C']}
  else if(x.length==3){
  temp = ['C','D','M']}
  else if(x.length>3){
    for(let m=1;m<=parseInt(x[0]);m++){
      fin.push('M')
    }
  }
    switch(x[0]) {
    case '0':
      fin.push('')
      break;
    case '1':
      fin.push(temp[0])
      break;
    case '2':
      fin.push(temp[0])
      fin.push(temp[0])
      break;
    case '3':
      fin.push(temp[0])
      fin.push(temp[0])
      fin.push(temp[0])
      break;
    case '4':
      fin.push(temp[0])
      fin.push(temp[1])
      break;
    case '5':
      fin.push(temp[1])
      break;
    case '6':
      fin.push(temp[1])
      fin.push(temp[0])
      break;
    case '7':
      fin.push(temp[1])
      fin.push(temp[0])
      fin.push(temp[0])
      break;
    case '8':
      fin.push(temp[1])
      fin.push(temp[0])
      fin.push(temp[0])
      fin.push(temp[0]) 
      break;
    case '9':
      fin.push(temp[0])
      fin.push(temp[2])
      break;
    case '10':
      fin.push(temp[2])
      break;
      }
  }
   return fin.join('');
  }
  
  console.log(convertToRoman(400));