import { ThongTin } from "../models/ThongTin.js";


document.querySelector('.signup-form .actions ul li:last-child a').onclick = function () {
    let thongTin = new ThongTin ()

    var arrInput = document.querySelectorAll('form input, form select');
    for(let input of arrInput){
        let {id,value} = input;
        thongTin[id] = value;
    }
    document.querySelector('.hienThiThongTin').innerHTML = thongTin.hienThiThongTin();   
}