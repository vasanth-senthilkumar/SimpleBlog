export default class Post {
    constructor(id = 0, title, content, author, loveIts = 0, dontLoveIts = 0) {
        this.id = id
        this.title = title
        this.content = content
        this.author = author
        this.loveIts = loveIts
        this.dontLoveIts = dontLoveIts
    }

    increaseLoveIts = () => this.loveIts++

    decreaseLoveIts = () => this.loveIts--

    increaseDontLoveIts = () => this.dontLoveIts++

    decreaseDontLoveIts = () => this.dontLoveIts--
}