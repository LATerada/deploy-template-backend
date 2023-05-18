import { Request, Response } from "express";
import { ZodError } from "zod";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public getUsers = async (req: Request, res: Response) => {
    try {
      const input = { q: req.query.q };

      const output = await this.userBusiness.getUsers(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Unexpected Error");
      }
    }
  };
  //   public signup = async (req: Request, res: Response) => {
  //     try {
  //       const input = {};

  //       const output = await this.userBusiness.signup();

  //       res.status(201).send(output);
  //     } catch (error) {
  //       console.log(error);

  //       if (error instanceof ZodError) {
  //         res.status(400).send(error.issues);
  //       } else if (error instanceof BaseError) {
  //         res.status(error.statusCode).send(error.message);
  //       } else {
  //         res.status(500).send("Unexpected Error");
  //       }
  //     }
  //   };
  //   public login = async (req: Request, res: Response) => {
  //     try {
  //       const input = {};

  //       const output = await this.userBusiness.login();

  //       res.status(200).send(output);
  //     } catch (error) {
  //       console.log(error);

  //       if (error instanceof ZodError) {
  //         res.status(400).send(error.issues);
  //       } else if (error instanceof BaseError) {
  //         res.status(error.statusCode).send(error.message);
  //       } else {
  //         res.status(500).send("Unexpected Error");
  //       }
  //     }
  //   };
}
