$(document).ready(function () {    

    // All the arrays or objects, containg questions, answers, images, and fun facts

    var questions = [
        "1. What is the name of the town Parks and Recreation is set in?",
        "2. Which alter ego eventually earns Andy Dwyer a TV Show?",
        "3. What was Ben’s favorite food which everyone hated?",
        "4. What is the name of the land/pit that started it all?",
        "5. Finish this Ron Swanson quote: “Fishing relaxes me. It’s like yoga, except _____”",
        "6. What gift does Leslie give Ben for their Anniversary?",
        "7. Which of the following names is not associated with Gergich?",
        "8. What is Tom and Donna’s favorite holiday of the year?",
        "9. What neighboring town did Pawnee celebrate it’s Unity Concert with?",
        "10. What is the one thing Ron hates more than lying?",
        "11. Who is the beloved horse mourned by everyone after its death?",
        "12. Leslie has a long standing crush on what person?",
        "13. Fill in the blank: “Bye, bye, Li’l Sebastian! __________”",
        "14. Where do Ann and Chris eventually move to?",
        "15. What multiplayer game does Ben invent?",
        "16. Ron has only seen three movies in his life. Which of the following is not one of them?",
        "17. What is Leslie’s favorite food?",
        "18. What phrase does Chris Traeger uses constantly?",
        "19. Which company did Tom not own?",
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
            "A replica of Luke’s lightsaber",
            "A replica of the Iron Throne from Game of Thrones",
            "A replica of Captain America’s shield",
            "A replica of the Green morpher from Mighty Morphing Power Rangers"
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
        ]
    };

    var correctAnswers = ["Pawnee, IN","Johnny Karate","Calzones","Lot 48","“I still get to kill something.”","A replica of the Iron Throne from Game of Thrones","Berry","Treat Yo’ Self","Eagleton","Skim Milk","Lil’ Sebastian","Joe Biden","“Miss you with the greatest passion!”","Michigan","The Cones of Dunshire","Saving Private Ryan","Waffles","Literally","Sweetums","Duke Silver",];

    var imageAnswers = [
    "assets/images/q1.png","assets/images/q2.gif","assets/images/q3.gif","assets/images/q4.jpeg","assets/images/q5.gif","assets/images/q6.jpg","assets/images/q7.jpg","assets/images/q8.gif","assets/images/q9.png","assets/images/q10.gif","assets/images/q11.gif","assets/images/q12.gif","assets/images/q13.gif","assets/images/q14.png","assets/images/q15.jpg","assets/images/q16.jpg","assets/images/q17.gif","assets/images/q18.jpg","assets/images/q19.gif","assets/images/q20.gif"
    ]

    var funStuff = [
        "Did you know that Pawnee's City Hall is actually in Pasadena, CA?",
        "Ninjas, attack!!!",
        "Talking 'bout the highway to the calzone zone!",
        "Leslie battled hard to renovate that lot since season 1.",
        "Gotta love Ron...",
        "When you play the game of thrones...you win or you die.",
        "Poor Terry...Larry?...or is it Jerry?",
        "Treat Yo' Self Beverly Hills from the final season.",
        "Big perfomaners including Jeff Tweedy, the Decemberists, Ginuwine, and Yo La Tengo!",
        "It's true though...",
        "You’re champion little horse, and you’re dead. You’re the champion of death.",
        "After making an appearance in Season 5, I'm sure security have their eyes constantly peeled for Leslie.",
        "What's 5000 times better than a candle in the wind?",
        "Yeah, that took a while for Leslie to get over.",
        "A brand-new gaming experience...two wizards, a Maverick, the arbiter, two warriors, a corporal, and a ledgerman!",
        "Who doens't love Herbie!",
        "We need to remember what's important in life: friends, waffles, work. Or waffles, friends, work. Doesn't matter, but work is third.",
        "You did, didn't you?",
        "“Most people would say ‘the deets’, but I say ‘the tails’. Just another example of innovation.”",
        "Best twist in the entire show..."
    ]

    var resultsImage = ["assets/images/ron.gif","assets/images/monalisa.gif","assets/images/donna.gif","assets/images/jammed.gif",]


    // Declaring all variables needed for game play

    var answerBlock = 1
    var questionIndex = 0
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var questionTime = 10;
    var interval;
    
    // Click function that starts the game
    $("#start").one("click", function() {
        trivia ()
    })

    // Function that displays each question through the game
    function trivia () {

        resetResults ()

        $("#start").text("")
        $("#countdown").html("<p>Time Left: 10 Seconds</p>")
        
        countdown();
    
        var answerIndex = 0
        var answerString = possibleAnswers[answerBlock];

        console.log("Answer String: " + answerString);
        
        $("#question").text(questions[questionIndex]);

        $("#choice1").text(answerString[answerIndex]);
        $("#choice2").text(answerString[answerIndex + 1]);
        $("#choice3").text(answerString[answerIndex + 2]);
        $("#choice4").text(answerString[answerIndex + 3]);
    }

    // Click function that passes user anser choice and compares to correct answer
    $("#answerRow").on("click", function(user) {
        
        var answerText = $(user.target).text();
      
        debugger;
        // If statement comparing conditions of player's answers
        // Each condition calls on function to stop and restart timer
        // Each condition calls on function to display fun fact page after question
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

    // Function userCorrect and userIncorrect send you to the answer page
    // Both functions recycle divs from Function trivia to mimize code length
    function userCorrect () {

        $("#resultsTitle").text("That's Correct!")
        $("#resultsImage").html("<img src=" + imageAnswers[questionIndex] + ">")
        $("#resultsMessage").html(funStuff[questionIndex]);

        // This count helps Function trivia display the question/answers in the following element
        answerBlock++;
        questionIndex++;

        // If statement with condition when last question is answered to send to results page
        //Holds function call for 5 seconds
        if (questionIndex === questions.length){
            setTimeout(endGame, 10000);
            return;
        }

        // setTimeout delays the progression to the next question by 5 seconds to allow user to read info on page
        setTimeout(trivia, 10000);

    }

    function userIncorrect () {

        resetResults ()
        $("#resultsTitle").text("Nope! The answer is " + correctAnswers[questionIndex])
        $("#resultsImage").html("<img src=" + imageAnswers[questionIndex] + ">")
        $("#resultsMessage").html(funStuff[questionIndex]);

        // This count helps Function trivia display the question/answers in the following element
        answerBlock++;
        questionIndex++;

        // If statement with condition when last question is answered to send to results page
        //Holds function call for 5 seconds
        if (questionIndex === questions.length){
            setTimeout(endGame, 10000);
            return;
        }

        // setTimeout delays the progression to the next question by 5 seconds to allow user to read info on page
        setTimeout(trivia, 10000);
    }

    // Function sends user to results page when last questions is answered
    function endGame () {

        console.log("Part 2: Correct: " + questionIndex);

        // if statement gives different results based on correct answers
        if (correct >= 15) {
            
            resetGame ()

            $("#resultsTitle").text("All Done!")
            $("#correctAnswers").text("Correct Answers: " + correct);
            $("#incorrectAnswers").text("Incorrect Answers: " + incorrect);
            $("#unanswered").text("Unanswered: " + unanswered);
            $("#resultsImage").html("<img src=" + resultsImage[0] + ">");
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
            
            resetGame ()

            $("#resultsTitle").text("All Done!")
            $("#correctAnswers").text("Correct Answers: " + correct);
            $("#incorrectAnswers").text("Incorrect Answers: " + incorrect);
            $("#unanswered").text("Unanswered: " + unanswered);
            $("#resultsImage").html("<img src=" + resultsImage[1] + ">");
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
            
            resetGame ()

            $("#resultsTitle").text("All Done!");
            $("#correctAnswers").text("Correct Answers: " + correct);
            $("#incorrectAnswers").text("Incorrect Answers: " + incorrect);
            $("#unanswered").text("Unanswered: " + unanswered);
            $("#resultsImage").html("<img src=" + resultsImage[2] + ">");
            $("#resultsMessage").text("She's definitely gonna be tweeting this...");
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
            
            resetGame ()

            $("#resultsTitle").text("All Done!")
            $("#correctAnswers").text("Correct Answers: " + correct);
            $("#incorrectAnswers").text("Incorrect Answers: " + incorrect);
            $("#unanswered").text("Unanswered: " + unanswered);
            $("#resultsImage").html("<img src=" + resultsImage[3] + ">");
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
    
    // Function clears out Game text for results page to show
    function resetGame () {
        $("#countdown").text ("")
        $("#question").text("");
        $("#choice1").text("");
        $("#choice2").text("");
        $("#choice3").text("");
        $("#choice4").text("");
    }

    // Function clears out results page text when player starts trivia over
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




    // Function countdown stopCountdown and count manage the timer
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

        // When time runs out, you get send to answer page
        if (questionTime === 0) {
            unanswered++;
            stopCountdown ();
            userIncorrect ()
        }
    }


})



