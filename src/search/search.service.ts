
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; 
import { Model } from 'mongoose'; 

@Injectable()
export class SearchService {
    constructor(@InjectModel('YourModel') private readonly yourModel: Model<any>) { } 

    async search(query: string): Promise<any[]> {
        
        const results = await this.yourModel.find({ }).exec();
        return results;
    }
}
