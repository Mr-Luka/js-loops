var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

// Outputing Strings with a for...of Loop

console.log(programmingLanguages);

for (var language of programmingLanguages ) {
  console.log(`I want to learn ${language}!`);
}

// Create a Numbered List with forEach()

programmingLanguages.forEach(function (item, index){
  console.log(`${index + 1}. ${item.toUpperCase()}`)
});

// Filter Elements by a String

var updatedLanguages = programmingLanguages.filter(function (language){
  return language.includes("y");
});
console.log(updatedLanguages);