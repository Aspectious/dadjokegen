const QuestionList = [
    "[\"Hip\",\"Hip!\"]",
    "{!False}",
    "Dad, I'm Hungry!",
    "127.0.0.1",
    "Why don’t bachelors like Git?",
    "What do you call a skinny ghost?",
    "What’s the second movie about a database engineer called?",
    "Karl Marx would really not like Java",
    "I was having a hard time understanding source control…"
]
const AnswerList = [
    "Hip Hip Array",
    "It's funny because it's True.",
    "Hi hungry, I'm Dad!",
    "There's no place like home.",
    "Because they are afraid to commit.",
    "BOOLEAN.",
    "The SQL ",
    "He was really more a classless sorta guy.",
    "but i’m starting to git it "
]

function executeOrder66() {
    var index = Math.floor(Math.random() * QuestionList.length);
    console.clear();
    console.log(QuestionList[index] + "\n" + AnswerList[index]);
    document.getElementById("sus").remove();
    var card = document.createElement("div")
    card.id = "sus"
    card.onclick = function() {
        card.childNodes[0].hidden = !card.childNodes[0].hidden
        card.childNodes[1].hidden = !card.childNodes[1].hidden
    }
    card.classList.add("card")

    var front = document.createElement("span");
    front.hidden = false;
    front.innerHTML = QuestionList[index];
    front.classList.add("nosel","text")


    var back = document.createElement("span");
    back.hidden = true;
    back.innerHTML = AnswerList[index]
    back.classList.add("nosel","text")



    card.append(front, back);
    document.getElementById("maindiv").append(card);
}
