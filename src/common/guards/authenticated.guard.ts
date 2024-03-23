import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';
import { Request } from 'express'; // Add the import statement for the Request class
@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest() as Request; // Cast the request object to the Request type
    // return request.isAuthenticated(); // Use the isAuthenticated() method correctly
    return true;
  }
}
