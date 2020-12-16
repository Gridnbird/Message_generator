// Messages database to keep the data
const dataBase = {
    astrologyBase: 
    [
        'Anyone can be a millionaire, but to become a billionaire you need an astrologer.', 
        'A physician without a knowledge of Astrology has no right to call himself a physician.', 
        'Astrology reveals the will of the gods.', 
        'Astrology is just a finger pointing at reality.', 
        'Astrology is one of the oldest and most accurate tools known to mankind.'
    ],
    inspirationBase:
    [
        'The best way to get started is to quit talking and begin doing.',
        'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.',
        'Don’t let yesterday take up too much of today.', 
        'You learn more from failure than from Success. Don’t let tt stop you. Failure builds character.',
        'It’s not whether you get knocked down, It’s whether you get up.'
    ],
    jokesBase:
    [
        'Whenever you feel worthless, remember. You were once the quickest sperm cell.',
        'Money can’t buy love, but it improves your bargaining position…',
        'A fast beating heart doesn’t always mean love. A blushing face is not always a sign that you’re in love. Sometimes hubog lang! Hahaha',
        'You can’t trust atoms. They make up everything!',
        'Can February March? No, but April May!'
    ]
};
// Store a Message to an Array
const personalMessage = [];
// Generate a random number to choose one message from every base in dataBase
const randomNumber = num => Math.floor(Math.random() * num);
