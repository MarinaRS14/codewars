function friend(friends){
let arrHolder = []
  let strHolder = ""
  for (i = 0 ; i < friends.length ; i++){
    strHolder = friends[i].toString()
    if(strHolder.length == 4){
      arrHolder.push(strHolder)
    } else{}
      }
  return arrHolder
}