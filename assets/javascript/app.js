$(document).ready(function () {    

    var questions = [
        "1. What is the name of the town Parks and Recreation is set in?",
        "2. Which alter ego eventually earns Andy Dwyer a TV Show?",
        "3. What was Ben’s favorite food which everyone hated?",
        "4. What is the name of the land/pit that started it all?",
        "5. Finish this Ron Swanson quote: “Fishing relaxes me. It’s like yoga, except _____”",
        "6. What gift does Leslie give Ben for their Anniversary?",
        "7. Which of the following names is NOT associated with Gergich?",
        "8. What is Tom and Donna’s favorite holiday of the year?",
        "9. What neighboring town did Pawnee celebrate it’s Unity Concert with?",
        "10. What is the one thing Ron hates more than lying?",
        "11. Who is the beloved horse mourned by everyone after its death?",
        "12. Leslie has a long standing crush on what person?",
        "13. Fill in the blank: “Bye, bye, Li’l Sebastian! __________”",
        "14. Where do Ann and Chris eventually move to?",
        "15. What multiplayer game does Ben invent?",
        "16. Ron has only seen three movies in his life. Which of the following is NOT one of them?",
        "17. What is Leslie’s favorite food?",
        "18. What phrase does Chris Traeger uses constantly?",
        "19. Which company did Tom NOT own?",
        "20. Who is Ron’s surprising alter ego?"
    ];

    var possibleAnswers = {
        1: [  
            "Scranton, PA", 
            "Everwood, CO", 
            "Pawnee, IN", 
            "Stars Hollow, CT"
        ],
        2: [
            "Burt Macklin, FBI",
            "Andy Radical", 
            "Sgt. Thunderfist, MD", 
            "Johnny Karate"
        ],
        3: [
            "Mini muffins",
            "Calzones",
            "Untoasted Pop Tarts",
            "Hot Pockets"
        ],
        4: [
            "Lot 59",
            "Lot 17",
            "Lot 33",
            "Lot 48"
        ],
        5: [
            "“I still get to kill something.”",
            "“I’m in nature, where men belong.”",
            "“George Washington would have done it.”",
            "“It’s an American tradition, unlike yoga, which is from India.”",
        ],
        6: [
            "Luke’s lightsaber",
            "The Iron Throne from Game of Thrones",
            "Captain America’s shield",
            "The Green morpher from Power Rangers"
        ],
        7: [
            "Terry",
            "Larry",
            "Berry",
            "Jerry"
        ],
        8: [
            "Harvest Day",
            "Treat Yo’ Self",
            "Ted Party Day",
            "Galentine’s Day"
        ],
        9: [
            "Indianapolis",
            "Fort Wayne",
            "Bloomington",
            "Eagleton"
        ],
        10: [
            "Salad",
            "Skim Milk",
            "Tammy 2",
            "FDR"
        ],
        11: [
            "Seabiscuit",
            "Archimedes",
            "Lil’ Sebastian",
            "Marcel"
        ],
        12: [
            "Paul Krugman",
            "Pete Seger",
            "Ryan Seacrest",
            "Joe Biden"
        ],
        13: [
            "“Miss you with the greatest passion!”",
            "“Miss you in the saddest fashion!”",
            "“In World War II, the food was rationed!”",
            "“Through the Pearly Gates you’re crashin’!”"
        ],
        14: [
            "Illinois",
            "Florida",
            "Michigan",
            "New York"
        ],
        15: [
            "True American",
            "What do you Meme",
            "Punderdome",
            "The Cones of Dunshire"
        ],
        16: [
            "Patton",
            "Saving Private Ryan",
            "Herbie: Fully Loaded",
            "Bridge on the River Kwai"
        ],
        17: [
            "Lasagna",
            "Pancakes",
            "Corn Dogs",
            "Waffles"
        ],
        18: [
            "Literally",
            "Good Job",
            "My God",
            "Why, hello!"
        ],
        19: [
            "Entertainment 720",
            "Rent-a-Swag",
            "Sweetums",
            "Tom’s Bistro"
        ],
        20: [
            "Elwood Blues",
            "Duke Silver",
            "Art Vandelays",
            "Roger Draper"
    ]}

    var correctAnswers = ["Pawnee, IN","Johnny Karate","Calzones","Lot 48","“I still get to kill something.”","The Iron Throne from Game of Thrones","Berry","Treat Yo’ Self","Eagleton","Skim Milk","Lil’ Sebastian","Joe Biden","“Miss you with the greatest passion!”","Michigan","The Cones of Dunshire","Saving Private Ryan","Waffles","Literally","Sweetums","Duke Silver",];

    // Image that will be displayed after every question
    var imageAnswers = [
    "assets/images/q1.png","assets/images/q2.gif","assets/images/q3.gif","assets/images/q4.jpeg","assets/images/q5.gif","assets/images/q6.png","assets/images/q7.jpg","assets/images/q8.gif","assets/images/q9.png","assets/images/q10.gif","assets/images/q11.gif","assets/images/q12.gif","assets/images/q13.gif","assets/images/q14.png","assets/images/q15.jpg","assets/images/q16.jpg","assets/images/q17.gif","assets/images/q18.jpg","assets/images/q19.gif","assets/images/q20.gif"
    ]

    // Fun facts, commentary, or quotes will display before the image
    var funStuff = [
        "Did you know that Pawnee's City Hall is actually Pasadena, California's City Hall?",
        "Ninjas, attack!!!",
        "“Talking 'bout the highway to the calzone zone!“ - Ben",
        "Leslie battled hard to renovate that lot since season 1.",
        "“I also think it’s pointless for a human to paint scenes of nature when they can go outside and stand in it.” - Ron",
        "“When you play the game of thrones...you win or you die.“ - Ben",
        "Poor Terry...Larry?...or is it Jerry?",
        "Treat Yo' Self Beverly Hills from the final season.",
        "Big perfomaners including Jeff Tweedy, the Decemberists, Ginuwine, and Yo La Tengo!",
        "It's true though...",
        "“You’re champion little horse, and you’re dead. You’re the champion of death.“ - Andy",
        "After making an appearance in Season 5, I'm sure security have their eyes constantly peeled for Leslie.",
        "“What's 5000 times better than a candle in the wind?“ - Andy",
        "Yeah, that took a while for Leslie to get over.",
        "“A brand-new gaming experience...two wizards, a Maverick, the arbiter, two warriors, a corporal, and a ledgerman!“ - Ben",
        "Now that's one heck of a triple header...",
        "“We need to remember what's important in life: friends, waffles, work. Or waffles, friends, work. Doesn't matter, but work is third.“ - Leslie",
        "You did, didn't you?",
        "“Most people would say ‘the deets’, but I say ‘the tails’. Just another example of innovation.” - Tom",
        "Best twist in the entire show..."
    ]

    var resultsImage = ["assets/images/ron.gif","assets/images/monalisa.gif","assets/images/donna.gif","assets/images/jammed.gif",]

    var answerBlock = 1
    var questionIndex = 0
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var questionTime = 10;
    var interval;

    $("#start").on("click", function() {
        $("#audio").remove(); 
        trivia ();

    })

    function trivia () {
        resetResults();
        $("#start").remove();
        $("#buttonWrap").removeClass("align-items-center");
        $("#title2").text("");
        $("#countdown").html("<p>Time Left: 10 Seconds</p>");
    
        countdown();
    
        var answerIndex = 0
        var answerString = possibleAnswers[answerBlock];
       
        $("#question").text(questions[questionIndex]);
        $("#choice1").text(answerString[answerIndex]);
        $("#choice2").text(answerString[answerIndex + 1]);
        $("#choice3").text(answerString[answerIndex + 2]);
        $("#choice4").text(answerString[answerIndex + 3]);
    }

    $("#answerRow").on("click", function(user) {
        
        var answerText = $(user.target).text();

        if (answerText === correctAnswers[questionIndex]) {
            correct++;
            resetGame ()
            stopCountdown ();  
            userCorrect ();        
        }
        else {
            incorrect++;
            resetGame ()
            stopCountdown ();
            userIncorrect ()     
        }
    })

    function userCorrect () {

        $("#resultsTitle").text("That's Correct!")
        $("#resultsImage").html("<img src=" + imageAnswers[questionIndex] + ">")
        $("#resultsMessage").html(funStuff[questionIndex]);

        answerBlock++;
        questionIndex++;

        if (questionIndex === questions.length){
            setTimeout(endGame, 7000);
            return;
        }
        setTimeout(trivia, 7000);
    }

    function userIncorrect () {

        resetResults ()
        $("#resultsTitle").text("Too Bad...the answer is " + correctAnswers[questionIndex])
        $("#resultsImage").html("<img src=" + imageAnswers[questionIndex] + ">")
        $("#resultsMessage").html(funStuff[questionIndex]);

        answerBlock++;
        questionIndex++;

        if (questionIndex === questions.length){
            setTimeout(endGame, 7000);
            return;
        }
        setTimeout(trivia, 7000);
    }

    function endGame () {

        if (correct >= 15) { 
            //Final Image = Ron
            resetGame ()
            $("#resultsTitle").text("All Done!")
            $("#correctAnswers").text("Correct Answers: " + correct);
            $("#incorrectAnswers").text("Incorrect Answers: " + incorrect);
            $("#unanswered").text("Unanswered: " + unanswered);
            $("#resultsImage").html("<img class='rounded' src=" + resultsImage[0] + ">");
            $("#resultsMessage").text("Excellent! You even made Ron Dance!");
            $("#startOver").text("Start Over")
            $("#startOver").on("click", function(){
                stopCountdown ();
                answerBlock = 1
                questionIndex = 0
                correct = 0;
                incorrect = 0;
                unanswered = 0;
                questionTime = 10;
                interval;
                trivia();
            })
        }
        else if (correct < 15 && correct >= 10 ) {
            //Final Image = Jean Ralphio and Mona Lisa
            resetGame ()
            $("#resultsTitle").text("All Done!")
            $("#correctAnswers").text("Correct Answers: " + correct);
            $("#incorrectAnswers").text("Incorrect Answers: " + incorrect);
            $("#unanswered").text("Unanswered: " + unanswered);
            $("#resultsImage").html("<img class='rounded' src=" + resultsImage[1] + ">");
            $("#resultsMessage").text("Good Job! You got Jean Ralphio and Mona Lisa in the groove!");
            $("#startOver").text("Start Over")
            $("#startOver").on("click", function(){
                stopCountdown ();
                answerBlock = 1
                questionIndex = 0
                correct = 0;
                incorrect = 0;
                unanswered = 0;
                questionTime = 10;
                interval;
                trivia();
            })
        }
        else if (correct < 10  && correct >= 5 ) { 
            //Final Image = Donna
            resetGame ()
            $("#resultsTitle").text("All Done!");
            $("#correctAnswers").text("Correct Answers: " + correct);
            $("#incorrectAnswers").text("Incorrect Answers: " + incorrect);
            $("#unanswered").text("Unanswered: " + unanswered);
            $("#resultsImage").html("<img class='rounded' src=" + resultsImage[2] + ">");
            $("#resultsMessage").text("Donna's definitely gonna be tweeting this...");
            $("#startOver").text("Start Over")        
            $("#startOver").on("click", function(){
                stopCountdown ();
                answerBlock = 1
                questionIndex = 0
                correct = 0;
                incorrect = 0;
                unanswered = 0;
                questionTime = 10;
                interval;
                trivia();
            })
        }
        else {
            //Final Image = Jamm
            resetGame ()
            $("#resultsTitle").text("All Done!")
            $("#correctAnswers").text("Correct Answers: " + correct);
            $("#incorrectAnswers").text("Incorrect Answers: " + incorrect);
            $("#unanswered").text("Unanswered: " + unanswered);
            $("#resultsImage").html("<img class='rounded' src=" + resultsImage[3] + ">");
            $("#resultsMessage").text("You just got Jammed!");
            $("#startOver").text("Start Over")
            $("#startOver").on("click", function(){
                stopCountdown ();
                answerBlock = 1
                questionIndex = 0
                correct = 0;
                incorrect = 0;
                unanswered = 0;
                questionTime = 10;
                interval;
                trivia();
            })
        }
    }
    
    function resetGame () {
        $("#countdown").text ("")
        $("#question").text("");
        $("#choice1").text("");
        $("#choice2").text("");
        $("#choice3").text("");
        $("#choice4").text("");
    }

    function resetResults () {
        $("#resultsTitle").text("")
        $("#resultsImage").text("")
        $("#resultsMessage").text("");
        $("#resultImage").text("");
        $("#correctAnswers").text("");
        $("#incorrectAnswers").text("");
        $("#unanswered").text("");
        $("#startOver").text("")
    }

    // Countdown Timer
    function countdown () {
        interval = setInterval(count, 1000)
    }

    function stopCountdown () {
        clearInterval(interval)
        questionTime = 10;
    }

    function count() {
        questionTime--
        $("#countdown").html("<p>Time Left: " + questionTime + " Seconds</p>")

        // When time runs out, send to answer page
        if (questionTime === 0) {
            unanswered++;
           resetGame ();
            stopCountdown ();
            userIncorrect ();
        }
    }
})



