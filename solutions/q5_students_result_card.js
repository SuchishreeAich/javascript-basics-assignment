// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.

function calculateValues()
{
    // Write your code here
    for(let i = 0; i <= 9; i = i + 1)
    {
        let score1 = document.getElementById('Student' + parseInt(i, 0)
        + 'Subject1Score').innerText;
        let score2 = document.getElementById('Student' + parseInt(i, 0)
        + 'Subject2Score').innerText;

        let totalScore = parseInt(score1, 0) + parseInt(score2, 0);

        let averageScore = parseInt(totalScore, 0) / 2;

        document.getElementById('Student' + parseInt(i, 0) + 'TotalScore').innerText = totalScore;

        document.getElementById('Student' + parseInt(i, 0) + 'AverageScore').innerText
        = averageScore;
    }
}

const calculate = () => {
	// Write your code here
    calculateValues();
};

module.exports = calculate;
