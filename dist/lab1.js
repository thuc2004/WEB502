"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//bai1: Tính chu vi và diện tích hình chữ nhật
function tinhChuViDienTichHinhChuNhat(chieuDai, chieuRong) {
    const chuVi = 2 * (chieuDai + chieuRong);
    const dienTich = chieuDai * chieuRong;
    return { chuVi, dienTich };
}
console.log(tinhChuViDienTichHinhChuNhat(5, 10));
//bai2: Tính tổng nhiều số
function tinhTong(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0); // duyệt mảng cộng dồn các phần tử,sum: là tổng tạm thời, num: là số đang duyệt,  0 là giá trị ban đầu
}
// Ví dụ
console.log(tinhTong(1, 2, 3, 4, 5)); // 15
//bai3: Đếm số lần xuất hiện của một ký tự trong chuỗi
function demKyTu(chuoi, kyTu) {
    let count = 0; //biến đếm
    for (const char of chuoi) { //duyệt từng ký tự trong chuỗi
        if (char === kyTu) { //nếu ký tự trùng thì tăng biến đếm
            count++;
        }
    }
    return count; //trả về số lần xuất hiện của ký tự
}
// Ví dụ
console.log(demKyTu("typescript", "t")); // 2
//bai4: Kiểm tra số nguyên tố
function laSoNguyenTo(n) {
    if (n < 2 || !Number.isInteger(n))
        return false; //số nguyên tố phải lớn hơn hoặc bằng 2 và là số nguyên
    for (let i = 2; i <= Math.sqrt(n); i++) { //kiểm tra từ 2 đến căn bậc hai của n
        if (n % i === 0)
            return false; //nếu chia hết thì trả về false
    }
    return true; //ngược lại trả về true
}
// Ví dụ
console.log(laSoNguyenTo(7)); // true
console.log(laSoNguyenTo(10)); // false
