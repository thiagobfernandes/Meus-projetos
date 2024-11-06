import { Injectable } from '@nestjs/common';
import { BookDTO } from './bookDTO';

const bookStore :BookDTO[] = []

@Injectable()
export class AppService {
  
  getBookByID(id:string){
    return bookStore.find((b:BookDTO) => b.id === id)
  }


  getAllBooks() {
    return bookStore;
    }

    newBook(book:BookDTO) {
      const exists = bookStore.find((b:BookDTO) => {
        return b.title == book.title &&
        b.author == book.author 
      })

      if(exists) return false;
      book.id = "Book_" + (bookStore.length + 1)
      bookStore.push(book)
      return book.id 
    }

  }
