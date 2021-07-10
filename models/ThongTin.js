export class ThongTin {
    ten = '';
    ho = '';
    email = '';
    soDienThoai = '';
    ngay = '';
    thang = '';
    nam = '';
    diaChi = '';
    thongTinDiChuyen = '';
    loaiNhiem = '';
    
    constructor (){

    }
    hienThiThongTin = () => {
        return `
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h5 class="my-0">Họ và tên</h5>
                </div>
                <span class="text-muted"></span>${this.ho} ${this.ten}
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h5 class="my-0">Email</h5>
                </div>
                <span class="text-muted"></span>${this.email}
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h5 class="my-0">Số điện thoại</h5>
                </div>
                <span class="text-muted">${this.soDienThoai}
                </span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h5 class="my-0">Ngày tháng năm sinh</h5>
                </div>
                <span class="text-muted">${this.ngay} ${this.thang} ${this.nam}
                </span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h5 class="my-0">Địa chỉ</h5>
                </div>
                <span class="text-muted">${this.diaChi}
                </span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h5 class="my-0">Thông tin di chuyển</h5>
                </div>
                <span class="text-muted">${this.thongTinDiChuyen}
                </span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h5 class="my-0">Tình trạng bị nhiễm</h5>
                </div>
                <span class="text-muted">${this.loaiNhiem}
                </span>
            </li>
        </ul>
        `
    }
}