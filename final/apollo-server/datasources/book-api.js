// book-api.js
const { RESTDataSource } = require('apollo-datasource-rest');

class BookAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://book-api-j51z.onrender.com/';
    }

    async getAllBooks() {
        return this.get('books');
    }

    async getBookById(id) {
        return this.get(`books/${id}`);
    }

    async createBook(bookData) {
        return this.post('books', bookData);
    }

    async updateBook(id, bookData) {
        return this.put(`books/${id}`, bookData);
    }

    async deleteBook(id) {
        return this.delete(`books/${id}`);
    }
}

module.exports = BookAPI;
