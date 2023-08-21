// change text


// textContent and innerText

const submitBtn = document.getElementById("sub");
console.log(submitBtn.textContent);

submitBtn.textContent = "Submit";
console.log(submitBtn.textContent);


const heading = document.getElementById("head");

console.log(heading.textContent);   // it also displays hide element (child element)


// innerText

console.log(heading.innerText);     // it will not display hide elements
                                    // gives the same output



const innerElement1 = document.querySelector("div#head h2");   // <----- when we want element present
                                                               // inside main div tag

console.log(innerElement1);























