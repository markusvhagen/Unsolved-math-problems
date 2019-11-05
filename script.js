allProblems = [
  [
    "Riemann Hypothesis",
    "Bernhard Riemann",
    "1859",
    "Unsolved",
    "The real part of every non-trivial zero of the Riemann Zeta function is $\\frac12$.",
    "The Riemann Hypothesis (often abbreviated RH) is one of seven Millenium Prize Problems. RH gives us a very precise bound on the prime counting function $\\pi(x)$. More precisely, due to a result by <i>Schoenfeld</i> (1976), RH implies that $|\\pi(x)-\\text{\li(x)}|<\\frac{1}{8\\pi}\\sqrt{x}\\log(x)$.",
    "NT"
  ],

  [
    "Twin Prime Conjecture",
    "Alphonse de Polignac",
    "1849",
    "Unsolved",
    "There are an infinite amount of prime numbers that differ by 2.",
    "In 2013, <i>Yitang Zhang</i> proved that there exists some integer $N< 70 \\, 000 \\, 000$, such that there are infinitely many primes that differ by $N$. The <i>Polymath 8</i>-project reduced the bound on $N$ to $246$. Assuming the generalized <i>Elliot-Hilbertsam conjecture</i> this bound can be furthermore reduced to $6$.",
    "NT"
  ]
];

allProblems.sort();

function problemOutput(proposedBy, year, probStatus, desc, other) {
  let outputThisInExpand = '<p><b>Proposed by (year):</b> <i>' + proposedBy + '</i> (' + year + ').<br>';
  outputThisInExpand += '<b>Status:</b> ' + probStatus + '<br>';
  outputThisInExpand += '<b>Statement:</b> ' + desc + '<br>';
  outputThisInExpand += '<b>More info: </b> ' + other + '</p>';
  return outputThisInExpand;
}

let hasLoaded = false;

document.addEventListener("readystatechange", function() {
  let maxCounter = allProblems.length;

  if (!hasLoaded) {
    for (i = 1; i <= maxCounter; i++) {
      document.getElementById("expand" + i).style.display = "none";
      let content = problemOutput(allProblems[i-1][1],allProblems[i-1][2],allProblems[i-1][3],allProblems[i-1][4],allProblems[i-1][5]);
      document.getElementById(i).innerHTML = "<h3>" + allProblems[i-1][0] + "   [" + allProblems[i-1][6] + "]</h3>";
      document.getElementById("expand" + i).innerHTML = content;
    }
    hasLoaded = true;
  }

});


function expand(el) {
  let elClickedExpand = document.getElementById("expand" + el.id);

  if (elClickedExpand.style.display == "block") {
      elClickedExpand.style.display = "none";
  }

  else if (elClickedExpand.style.display == "none") {
    elClickedExpand.style.display = "block";
  }
  console.log(elClickedExpand);
}

MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [ ['$','$'], ["\\(","\\)"] ],
      processEscapes: true
    }
  });
