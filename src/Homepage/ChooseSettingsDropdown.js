import React from 'react';
import './ChooseSettingsDropdown.css';

const difficulty = [
    {
        category: "General Knowledge",
        type: "boolean",
        difficulty: "any difficulty",
        question: "Pluto is a planet.",
        correct_answer: "False",
        incorrect_answers: [
        "True"
        ]
        },
    
    {
        category: "Entertainment: Music",
        type: "boolean",
        difficulty: "easy",
        question: "The music group Daft Punk got their name from a negative review they recieved.",
        correct_answer: "True",
        incorrect_answers: [
        "False"
        ]
     },
     {
        category: "Geography",
        type: "multiple",
        difficulty: "medium",
        question: "The land of Gotland is located in which European country?",
        correct_answer: "Sweden",
        incorrect_answers: [
        "Denmark",
        "Norway",
        "Germany"
        ]
     },
        {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "hard",
        question: "Brian May was the guitarist for which band?",
        correct_answer: "Queen",
        incorrect_answers: [
        "Pink Floyd",
        "Rolling Stones",
        "The Doors"
        ]
    }

]
    const categories =  [{
        id: 9,
        name: "General Knowledge"
    },
    {
        id: 10,
        name: "Entertainment: Books"
    },
    {
        id: 11,
        name: "Entertainment: Film"
    },
    {
        id: 12,
        name: "Entertainment: Music"
    },
    {
        id: 13,
        name: "Entertainment: Musicals & Theatres"
    },
    {
        id: 14,
        name: "Entertainment: Television"
    },
    {
        id: 15,
        name: "Entertainment: Video Games"
    },
    {
        id: 16,
        name: "Entertainment: Board Games"
    },
    {
        id: 17,
        name: "Science & Nature"
    },
    {
        id: 18,
        name: "Science: Computers"
    },
    {
        id: 19,
        name: "Science: Mathematics"
    },
    {
        id: 20,
        name: "Mythology"
    },
    {
        id: 21,
        name: "Sports"
    },
    {
        id: 22,
        name: "Geography"
    },
    {
        id: 23,
        name: "History"
    },
    {
        id: 24,
        name: "Politics"
    },
    {
        id: 25,
        name: "Art"
    },
    {
        id: 26,
        name: "Celebrities"
    },
    {
        id: 27,
        name: "Animals"
    },
    {
        id: 28,
        name: "Vehicles"
    },
    {
        id: 29,
        name: "Entertainment: Comics"
    },
    {
        id: 30,
        name: "Science: Gadgets"
    },
    {
        id: 31,
        name: "Entertainment: Japanese Anime & Manga"
    },
    {
        id: 32,
        name: "Entertainment: Cartoon & Animations"
    }   
    ]


const Difficulty = () => (
    <div className="chooseSettingsWrapp">
        <select>
            {difficulty.map(diff => (
            
                    <option key={diff.question} >{diff.difficulty}</option>
            ))}

        </select>
        <select>
            {categories.map(cat => (
            
                    <option key={cat.id} >{cat.name}</option>
            ))}

        </select>
    </div>

);



export default Difficulty;

