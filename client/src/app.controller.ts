import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { BookDTO } from './bookDTO';

@Controller('bookstore')
export class AppController {
  constructor(@Inject("BOOKS_SERVICE") private client:ClientProxy) {}

  @Get()
   getAllBooks(){
    try{
      const result = this.client.send({cmd:'get_books'}, {})
      result.forEach((lal) => console.log(lal))
      console.log(result)
      return result
    } catch(error){
      console.log("deu ruim", error)
    }
   
  }

  @Get(':id')
  getBookByid(@Param('id') id) {
    return this.client.send({cmd:'get_book'}, id)
  }

  @Post()
  createNewBook(@Body() book:BookDTO) {
    return this.client.send({cmd:'new_book'}, book)
  }
}
