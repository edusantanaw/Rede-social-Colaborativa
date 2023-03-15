import { NextFunction, Request, Response } from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg" || ".png" || ".wepg");
  },
});

const upload = multer({ storage }).single("image");

export const fileUpload = (req: Request, res: Response, next: NextFunction) => {
  upload(req, res, (err) => {
    if (err) console.log(err);
    next(undefined);
  });
};
