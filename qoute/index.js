var quoates = [

    {"author": '― Oscar Wilde', 
     "quote": '“Be yourself; everyone else is already taken.”'
    },

    {"author": '― Frank Zappa', 
     "quote": '“So many books, so little time.”'
    },

    {"author": '― Marcus Tullius Cicero', 
     "quote": '“A room without books is like a body without a soul.”'
    },

    {"author": '― Mae West', 
     "quote": '“You only live once, but if you do it right, once is enough.”'
    },

    {
     "author": '― Mahatma Gandhi', 
     "quote": '“Be the change that you wish to see in the world.”'
    },

    {"author": 'Elbert Hubbard', 
     "quote": 'Do not take life too seriously. You will not get out alive.'
    },

    // {"author": 'مكروباص', 
    //  "quote": 'كنت عصفور اكلوني عملت اسد صاحبوني "__"  '
    // }, for fun
]

let lastNum = -1; 

function GetQuotes() {
    let num = Math.floor(Math.random()*quoates.length);
    if (num === lastNum && quoates.length > 1) {

        num = (num + 1) % quoates.length;
    }
    
    lastNum = num; 
    // console.log(num);-------------لتجرية ان الارقام متتكررش 

    document.getElementById("quote").innerHTML= quoates[num].quote 
   document.getElementById("author").innerHTML= quoates[num].author
}
