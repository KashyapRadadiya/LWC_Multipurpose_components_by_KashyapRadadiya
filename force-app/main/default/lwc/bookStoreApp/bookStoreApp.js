import { LightningElement } from 'lwc';

export default class BookStoreApp extends LightningElement {

    searchTerm = '';
    books = [];
    typingTimer = 0

    handleSearchChange(event) {
        this.searchTerm = event.target.value;
        clearTimeout(this.typingTimer);

        // Debounce for live search
        this.typingTimer = setTimeout(() => {
            if (this.searchTerm.length > 2) {
                this.getbooksdata();
            } else {
                this.books = [];
            }
        }, 500);
    }

    async getbooksdata() {
        if (!this.searchTerm) return;

        const encodedSearch = encodeURIComponent(this.searchTerm);
        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodedSearch}`; // API key
        try {

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            const data = await response.json();
            this.books = data ? this.formatData(data) : [];

        } catch (error) {
            console.error(error)
        }

    }

    formatData(data){
        console.log(data)
        let books =  data.items.map(item=>{
            let id = item.id
            let thumbnail = item.volumeInfo.imageLinks && ( item.volumeInfo.imageLinks.thumbnail || ( item.volumeInfo.imageLinks.smallThumbnail)) 
            let title = item.volumeInfo.title
            let publishedDate = item.volumeInfo.publishedDate
            let averageRating = item.volumeInfo.averageRating ||'NA'
            return {id, thumbnail, title, publishedDate, averageRating}
        })
        return books
    }
}