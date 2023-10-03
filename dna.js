function DNAtoRNA(dna) {
   let arrayedRNA = ""
  for (let i = 0 ; i < dna.length ; i++){
    if(dna[i] == "T"){
      arrayedRNA += "U"
    } else{
      arrayedRNA += dna[i]
    }
  }
  return arrayedRNA
}