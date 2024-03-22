import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
    constructor(private readonly searchService: SearchService) { }

    @Get()
    async search(@Query('q') query: string): Promise<any> {
        try {
          
            const results = await this.searchService.search(query);
            return { success: true, data: results }; 
        } catch (error) {
           
            return { success: false, message: 'Failed to perform search' };
        }
    }
}
