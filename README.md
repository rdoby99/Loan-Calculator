# Loan-Calculator
from JS-Beginners at https://github.com/JS-Beginners/mortgage-loan-calculator.git

HTML&CSS not mine but the JavaScript is

## What I Learned

This was a pretty simple task. My first instinct was to add an event listener to the page to detect changes and trigger the paragraph that calculated the monthly payment. However, I noticed that the HTML inputs had an attribute called 'onchange'. After looking it up, I realized I just needed to define the function that was assigned to it. After that the biggest challenge was making the computed monthly payment have commas that seperated the thousands. A quick StackOverflow search gave me a function I could use for that.

Once I was finished, I looked at the solution and realized that I could have made my code more concise by setting the initial variables to the values. I also suppose I didn't need the numberWithCommas function (I could have just put the finalAmount in a variable with the methods applying to it). I also could have put all the code in the computeLoan function.

The solution didn't convert the values to numbers, which is odd because my program was returning strings that would add weirdly.

## Biggest Takeaways/Reminders
- Try not to define variables gloablly if possible
- Try to define as little variables as possible
- Don't define functions unnecessarily
