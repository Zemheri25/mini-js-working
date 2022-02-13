let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let btnPalindrome = document.getElementById("palindrome");
let btnPerfect = document.getElementById("perfect");
let Palindrometext = document.getElementById("palindrome-text");
let Perfecttext = document.getElementById("perfect-text");

btnPalindrome.addEventListener("click", pal);

function pal() {
  let newarr = [];

  for (let i = Number(number1.value); i < Number(number2.value); i++) {
    newarr.push(String(i));
  }

  for (let i = 0; i < newarr.length; i++) {
    if (newarr[i] == newarr[i].split("").reverse().join("")) {
      Palindrometext.innerHTML += newarr[i] + "\n";
    }
  }
}

btnPerfect.addEventListener("click", per);

function per() {
  let newarr1 = [];

  for (let i = Number(number1.value); i < Number(number2.value); i++) {
    newarr1.push(i);
  }

  for (let i = 0; i < newarr1.length; i++) {
    let count1 = 0;
    for (let j = 0; j < newarr1[i]; j++) {
      if (newarr1[i] % j == 0) {
        count1 += j;
        
      }
    }
    if (count1 == newarr1[i]) {
      Perfecttext.innerHTML += newarr1[i] + "\n";
    }
  }
}
