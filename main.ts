import  human  from "./inheritance";
import {swimmer, teacher} from "./child";

var yahan = new human("Yahan_human");
yahan.walk();

var hansi = new swimmer("hansi_Swimmer");
hansi.swim(800);

var teach = new teacher("Teacher");
teach.walk(52);
teach.teach("English");
