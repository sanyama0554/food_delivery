import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  // register user
  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;
    const user = {
      name,
      email,
      password
    };
    return user;
  }

  // Login service
  async Login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = {
      email,
      password
    };
    return user;
  }

  // get all users service
  async getUsers() {
    const users = [
      {
        id: "1234",
        name: "test",
        email: "abc@gmail.com",
        password: "12345678"
      }
    ];
    return users;
  }
}
