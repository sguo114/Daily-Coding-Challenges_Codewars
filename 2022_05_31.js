// kata completed

// 6kyu: The Deaf Rats of Hamelin
var countDeafRats = function(town) {
  let right = [], PP = false, count = 0

  for(let i = 0; i<town.length; i++){
    if(town[i] == 'P'){
      PP = true
      continue;
    }
    
    if(right.length<1 && PP == false && town[i] == '~'){
      right.push(town[i])
      continue;
    } else if(right.length<1 && PP == true && town[i]=='O'){
      right.push(town[i])
      continue;
    } else if(right.length<1 && town[i]!=' ') {
      right.push(town[i])
      count++
      continue;
    }
    
    if(town[i] == '~' || town[i] == 'O') right.pop()
  }
  return count;
}
