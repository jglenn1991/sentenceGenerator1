function generateRandomNumber (num) {
    return Math.floor(Math.random() * num)
};

const whyJarvis = {
    whatYouSeek: ['creative', 'excited', 'motivated', 'dedicated', 'loyal'],
    howIAm: ['creative', 'logical', 'enthusiastic', 'precise', 'analytical', 'problem solver'],
    whyChooseMe: ['to move your organization forward.', 'to grow into the type of person your organization needs.', 'to gain and give beneficial insight.', 'to provide substantive and insightful input.']
};

let hireJarvis = [];

for (let prop in whyJarvis) {
    let optionIndex = generateRandomNumber (whyJarvis[prop].length)

    switch(prop) {
        case 'whatYouSeek':
            hireJarvis.push(`What you seek in your next developer is "${whyJarvis[prop][optionIndex]}".`)
            break
        case 'howIAm': 
            hireJarvis.push(`What I offer to your organization is "${whyJarvis[prop][optionIndex]}".`)
            break
        case 'whyChooseMe':
            hireJarvis.push(`Choosing Jarvis will help "${whyJarvis[prop][optionIndex]}".`)
            break
        default:
            hireJarvis.push('There is not enough information')
    }
};


   // const formatted = hireJarvis.join('\n')
    //console.log(formatted)

function formatHireJarvis() {
    const formatted = hireJarvis.join('\n')
    console.log(formatted)
}


formatHireJarvis()

//jarvis work