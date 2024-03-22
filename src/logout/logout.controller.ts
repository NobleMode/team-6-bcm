import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';

@Controller('logout')
export class LogoutController {
    constructor(private authService: AuthService) { }

    
    logout(@Req() req, @Res() res) {
        
        req.logout(); 

        
        res.redirect('/login'); 
}
}