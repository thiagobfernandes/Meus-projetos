import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { BookDTO } from './bookDTO';


function delay(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

@Controller()
export class AppController {
    constructor(private readonly appService : AppService) {}

    @MessagePattern({cmd:'new_book'})
     newBook (book:BookDTO): string {
      delay(10000)
      const result =  this.appService.newBook(book);
      if(!result){
        return "Book already existis"
      } else {
        return result;
      }
    }

    @MessagePattern({cmd:'get_books'})
    getBook():BookDTO[]{
      return this.appService.getAllBooks()
    }

    @MessagePattern({cmd:'get_book'})
    getBooks(id:string):BookDTO {
      return this.appService.getBookByID(id)
    }
  }

