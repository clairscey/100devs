//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class MakeShow{
    constructor (showTitle, numEpisodes, language, episodeLength) {
        this.showTitle = showTitle
        this.numEpisodes = numEpisodes
        this.language = language
        this.episodeLength = episodeLength
    }
    timeToBinge() {
        console.log(this.episodeLength * this.numEpisodes + ' minutes')
    }
    useSubtitles(myLanguage) {
        if (myLanguage === this.language){
            return 'You don\'t need subtitles'
        }else {
            return 'You probably need subtitles'
        }
    }
    showDescription() {
        console.log(`This ${this.language} language show is called ${this.showTitle}. It has ${this.numEpisodes} episodes that are each about ${this.episodeLength} minutes long.`)
    }
}

let oldEnough = new MakeShow('Old Enough', 15, 'Japanese', 10)