let dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";
console.log(dna)
//a) Replace the gene "GCT" with "AGG", and then print the altered strand.
let dnaStrand = dna.replace("GCT","AGG")
console.log(dnaStrand)


//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
let foundCat = dnaStrand.indexOf("CAT")

if (foundCat = true){
  console.log("CAT gene found");
}
else { console.log("CAT gene NOT found")};



//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
let splice = dnaStrand.slice(16,19);
console.log(splice);



//d) Use a template literal to print, "The DNA strand is ___ characters long."
let firstFourWords = "The DNA strand is"
let secondTwoWords = "characters long "
console.log(firstFourWords,dna.length,secondTwoWords)



//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
