

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';


export class ClientGuard implements CanActivate {

    async canActivate(context: ExecutionContext): Promise<boolean>{
        const request = context.switchToHttp().getRequest();

        return true
    }

}