//0. Thêm phần tử số vào mảng
/*
- Đầu vào: Khai báo mảng toàn cục arrNumbers[] để nhận các giá trị số mà người dùng nhập vào.
- Xử lý: add số của người dùng xử lý push() vào mảng arrNumbers.
- Đầu ra: Xuất ra màn hình các giá trị (phần tử) trong mảng.
*/
let arrNumbers = [];
document.getElementById('themPhanTuVaoMang').onclick = function () {
    let number = document.getElementById('txtNumber').value * 1;
    arrNumbers.push(number);
    document.getElementById('kqMang').innerHTML = arrNumbers;
    document.getElementById('kqMang').classList.add('styleKQ');

    // console.log(arrNumbers);//Kiểm tra giá trị mảng ở giao diện console log.
}

//1. Tính tổng các số dương trong mảng arrNumbers
/*
- Đầu vào: mảng giá trị arrNumbers[]
- Xử lý: Duyệt qua từng phần tử trong mảng, nếu phần tử đó là số dương thì cộng dồn giá trị của phần tử đó vào biến tổng
- Đầu ra: Xuất ra màn hình tổng cộng các số dương trong mảng.
*/
document.getElementById('btnTongSoDuong').onclick = function () {
    let tong = 0;
    for (let i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i] > 0) {
            tong += arrNumbers[i];
        }
    }
    document.getElementById('tongSoDuong').innerHTML = `Tổng số dương: ${tong}`;
    document.getElementById('tongSoDuong').classList.add('styleKQ');
}

//2. Đếm số dương trong mảng
/*
- Đầu vào: mảng giá trị arrNumbers[]
- Xử lý: Duyệt qua từng phần tử trong mảng, nếu phần tử đó là số dương thì tăng biến đếm lên 1
- Đầu ra: Xuất ra màn hình số lượng số dương trong mảng.
*/
document.getElementById('btnDemSoDuong').onclick = function () {
    let dem = 0;
    for (let i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i] > 0) {
            dem++;
        }
    }
    document.getElementById('kqDemSoDuong').innerHTML = `Có ${dem} số dương`;
    //add class cho thẻ kqDemSoDuong
    document.getElementById('kqDemSoDuong').classList.add('styleKQ');
}

//3.1 Tìm số nhỏ nhất trong mảng
/*
- Đầu vào: mảng giá trị arrNumbers[]
- Xử lý: Dùng Math.min(...mảng) để tìm số nhỏ nhất. Or dùng sort() để sắp xếp mảng tăng dần, số nhỏ nhất là phần tử đầu tiên, nếu sắp xếp giảm dần thì số nhỏ nhất là phần tử cuối cùng.
- Đầu ra: Xuất ra màn hình số nhỏ nhất
*/
document.getElementById('btnSoNhoNhat').onclick = function () {
    //C1:
    // let min = arrNumbers[0];
    // for (let i = 1; i < arrNumbers.length; i++) {
    //     if (arrNumbers[i] < min) {
    //         min = arrNumbers[i];
    //     }
    // }

    //C2: ngắn hơn, dùng Math.min(...mảng)
    if (arrNumbers.length > 0) {
        let min = Math.min(...arrNumbers);
        document.getElementById('kqSoNhoNhat').innerHTML = `Số nhỏ nhất trong mảng là: ${min}`;
        document.getElementById('kqSoNhoNhat').classList.add('styleKQ');
    } else {
        Swal.fire({
            title: 'Thông báo',
            text: 'Mảng chưa có phần tử nào',
            icon: 'info',
            confirmButtonText: 'OK',
            allowOutsideClick: false
        });
    }
}
//3.2 Tìm số lớn nhất trong mảng
/*
- Đầu vào: mảng giá trị arrNumbers[]
- Xử lý: Dùng Math.max(...mảng) để tìm số lớn nhất. Or dùng sort() để sắp xếp mảng tăng dần, số lớn nhất là phần tử cuối cùng, nếu sắp xếp giảm dần thì số lớn nhất là phần tử đầu tiên.
- Đầu ra: Xuất ra màn hình số lớn nhất.
*/
document.getElementById('btnSoLonNhat').onclick = function () {
    //C1:
    // let max = arrNumbers[0];
    // for (let i = 1; i < arrNumbers.length; i++) {
    //     if (arrNumbers[i] > max) {
    //         max = arrNumbers[i];
    //     }
    // }

    //C2: ngắn hơn, dùng Math.max(...mảng)
    if (arrNumbers.length > 0) {
        let max = Math.max(...arrNumbers);
        document.getElementById('kqSoLonNhat').innerHTML = `Số lớn nhất trong mảng là: ${max}`;
        document.getElementById('kqSoLonNhat').classList.add('styleKQ');
    } else {
        Swal.fire({
            title: 'Thông báo',
            text: 'Mảng chưa có phần tử nào',
            icon: 'info',
            confirmButtonText: 'OK',
            allowOutsideClick: false
        });
    }
}

//4. Tìm số dương nhỏ nhất trong mảng
document.getElementById('btnSoDuongNhoNhat').onclick = function () {
    let newNumbers = [];
    for (let i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i] > 0) {
            newNumbers.push(arrNumbers[i]);
        }
    }
    let min = Math.min(...newNumbers);
    document.getElementById('kqSoDuongNhoNhat').innerHTML = `Số dương nhỏ nhất trong mảng là: ${min}`;
    document.getElementById('kqSoDuongNhoNhat').classList.add('styleKQ');
}


//5. Tìm số chẵn cuối cùng trong mảng arrNumbers:
/*
- Đầu vào: mảng giá trị arrNumbers[]
- Xử lý: Tìm số chẵn cuối cùng trong mảng: duyệt qua từng phần tử trong mảng từ cuối lên đầu mảng, nếu tìm thấy số chẵn (số chia hết cho 2) thì dừng vòng lặp
- Đầu ra: Xuất giá trị có số chẵn ra màn hình
*/
document.getElementById('btnSoChanCuoiCung').onclick = function () {
    let lastNumber = -1;//gán = -1 để khi không có số chẵn nào thì vẫn in ra -1
    for (let i = arrNumbers.length - 1; i >= 0; i--) {
        if (arrNumbers[i] % 2 === 0) {
            lastNumber = arrNumbers[i];
            break;
        }
    }
    if (lastNumber === -1) {
        document.getElementById('kqSoChanCuoiCung').innerHTML = `Không có số chẵn nào trong mảng`;
    } else {
        document.getElementById('kqSoChanCuoiCung').innerHTML = `Số chẵn cuối cùng trong mảng là: ${lastNumber}`;
        // document.getElementById('kqSoChanCuoiCung').classList.add('styleKQ');
    }
    document.getElementById('kqSoChanCuoiCung').classList.add('styleKQ');
}

//6. Đổi chỗ 2 giá trị trong mảng
/*
- Đầu vào: mảng giá trị arrNumbers[]
- Xử lý: DOM tới 2 vị trí mà người dùng nhập vào, thực hiện hoán đổi giá trị 2 vị trí trong mảng
- Đầu ra: Xuất ra màn hình giá trị mảng mới sau khi hoán đổi
*/
document.getElementById('btnDoiCho').onclick = function () {
    let vitri1 = document.getElementById('txtViTri1').value * 1;
    let vitri2 = document.getElementById('txtViTri2').value * 1;
    // let temp=arrNumbers[vitri1];
    // arrNumbers[vitri1]=arrNumbers[vitri2];
    // arrNumbers[vitri2]=temp;
    [arrNumbers[vitri1], arrNumbers[vitri2]] = [arrNumbers[vitri2], arrNumbers[vitri1]];
    document.getElementById('kqDoiCho').innerHTML = `Mảng sau khi đổi chỗ: ${arrNumbers}`;
    document.getElementById('kqDoiCho').classList.add('styleKQ');
}


//7. Sắp xếp mảng tăng dần
/*
- Đầu vào: mảng giá trị arrNumbers[]
- Xử lý: Dùng phương thức sort() của mảng (arrNumbers.sort(function(){})) để sắp xếp mảng tăng/giảm dần
- Đầu ra: Xuất ra màn hình giá trị mảng sau khi sắp xếp tăng dần
*/
document.getElementById('btnSapXepTang').onclick = function () {
    //C1: dùng vòng lặp theo phương pháp Selection Sort
    // for (let i = 0; i < arrNumbers.length - 1; i++) {
    //     for (let j = i + 1; j < arrNumbers.length; j++) {
    //         if (arrNumbers[i] > arrNumbers[j]) {
    //             [arrNumbers[i], arrNumbers[j]] = [arrNumbers[j], arrNumbers[i]];//Hoán đổi vị trí phần tử của i & j
    //         }
    //     }
    // }

    //C2: dùng phương thức sort() của array
    arrNumbers.sort((q, t) => q - t);

    document.getElementById('kqSapXepTang').innerHTML = `Mảng sau khi sắp xếp: ${arrNumbers}`;
    document.getElementById('kqSapXepTang').classList.add('styleKQ');
}


//8. Tìm số nguyên tố đầu tiên trong mnảng
/*
- Đầu vào: mảng giá trị arrNumbers[]
- Xử lý: Duyệt từng phần tử số trong mảng arrNumbers, nếu phần tử thứ i là số nguyên tố trả về kết quả, dừng lại vòng lặp (break)
- Đầu ra: Xuất ra màn hình giá trị số nguyên tố đầu tiên trong màng là số x (arrNumber[i])
*/
//Hàm kiểm tra số nguyên tố
function isPrime(number) {
    let soNguyenTo = true;//Or không cần khai báo biến này vì trả về true/false luôn
    if (number < 2) {
        soNguyenTo = false;//Or return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            soNguyenTo = false;//Or return false;
        }
    }
    return soNguyenTo;//Or return true;
}
document.getElementById('btnSoNguyenToDauTien').onclick = function () {
    let firstPrime = -1;
    for (let i = 0; i < arrNumbers.length; i++) {
        if (isPrime(arrNumbers[i])) {
            firstPrime = arrNumbers[i];
            break;
        }
    }
    if (firstPrime === -1) {
        document.getElementById('kqSoNguyenToDauTien').innerHTML = `Không có số nguyên tố nào trong mảng`;
    } else {
        document.getElementById('kqSoNguyenToDauTien').innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${firstPrime}`;
    }
    document.getElementById('kqSoNguyenToDauTien').classList.add('styleKQ');
}

//9. Đếm số nguyên trong mảng
/*
- Đầu vào: Nhập vào 1 số => add vào màng giaTriSo[];
- Xử lý: Duyệt từng phần tử số trong mảng giaTriSo[], nếu phần tử thứ i là số nguyên (Number.isInteger()) thì tăng biến đếm lên 1 đơn vị
- Đầu ra: Hiển thị ra màn hình số lượng số nguyên trong mảng
*/

//Khai báo mảng giaTriSo để lưu trữ các số nhập vào
let giaTriSo = [];
document.getElementById('themSo').onclick = function () {
    let number = document.getElementById('nhapSo').value * 1;
    //add số number vào mảng giaTriSo[]
    giaTriSo.push(number);
    //Xuất kết quả mảng số ra màn hình
    document.getElementById('kqThemSo').innerHTML = giaTriSo;
    document.getElementById('kqThemSo').classList.add('styleKQ');
    // console.log(giaTriSo);
}

//Xử lý đếm số nguyên trong mảng
document.getElementById('btnDemSoNguyen').onclick = function () {
    let count = 0;
    for (let i = 0; i < giaTriSo.length; i++) {
        if (Number.isInteger(giaTriSo[i])) {
            count++;
        }
    }
    //Xuất kết quả ra màn hình
    document.getElementById('kqDemSoNguyen').innerHTML = `Có ${count} số nguyên`;
    document.getElementById('kqDemSoNguyen').classList.add('styleKQ');
}


//10. So sánh số lượng Số Âm & Số Dương trong mảng
/*
- Đầu vào: Mảng số nguyên arrrNumbers[] ở trên
- Xử lý: Duyệt từng phần tử số trong mảng, nếu số nào âm (<0) thì tăng biến đếm số âm lên 1 đơn vị, ngược lại (>0) thì tăng biến đếm số dương lên 1 đơn vị.
- Đầu ra: Xuất ra màn hình kết quả So sánh số lượng Số Âm & Số Dương trong mảng. Vd: Số dương > Số âm; Số Âm > Số Dương; Số Âm = Số Dương.
*/
document.getElementById('btnSoSanh').onclick = function () {
    let demSoDuong = 0; //Biến đếm số dương (Positive)
    let demSoAm = 0; //Biến đếm số âm ((Negative)
    //Xử lý đếm số dương và số âm
    for (let i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i] > 0) {
            demSoDuong++;
        } else if (arrNumbers[i] < 0) {
            demSoAm++;
        }
    }
    //Xử lý in kết quả ra màn hình
    if (demSoDuong > demSoAm) {
        document.getElementById('kqSoSanh').innerHTML = `Số dương > Số âm`;
    } else if (demSoDuong < demSoAm) {
        document.getElementById('kqSoSanh').innerHTML = `Số dương < Số âm`;
    } else {
        document.getElementById('kqSoSanh').innerHTML = `Số dương = Số âm`;
    }
    document.getElementById('kqSoSanh').classList.add('styleKQ');
}


/* ======================================^A^==================================== */

//Tính tổng các số từ 1-->n
//Hàm tính tổng từ 1->n
function sumNumber(number) {
    let tong = 0;
    if (number <= 100) {
        for (let i = 1; i <= number; i++) {
            tong += i;
        }
    } else {
        // alert(`Số nhập vào không được lớn hơn 100`);
        Swal.fire({
            title: 'Thông báo',
            text: 'Số nhập vào không được lớn hơn 100',
            icon: 'info',
            confirmButtonText: 'OK',
            allowOutsideClick: false
        });
        return 0;
    }
    return tong;
}

// //Gọi nút tính tổng
// document.getElementById('tongSoDuong').onclick = function () {
//     let num = document.getElementById('txtNum').value * 1;
//     document.getElementById('txtKetQua').value = sumNumber(num);
// }

//In ra dãy số lẽ & chẵn từ 1->n
//Hàm lấy ra dãy số lẻ
function demSoLe(number) {
    let tong = "";
    if (number <= 100) {
        for (let i = 1; i <= number; i++) {
            if (i % 2 !== 0) {
                tong += i + ', ';
            }
        }
    } else {
        Swal.fire({
            title: 'Thông báo',
            text: 'Số nhập vào không được lớn hơn 100',
            icon: 'info',
            confirmButtonText: 'OK',
            allowOutsideClick: false
        });
        return "";
    }
    return tong;
}
//Hàm lấy ra dãy số chẵn
function demSoChan(number) {
    let tong = '';
    if (number <= 100) {
        for (let i = 1; i <= number; i++) {
            if (i % 2 === 0) {
                tong += i + ', ';
            }
        }
    } else {
        Swal.fire({
            title: 'Thông báo',
            text: 'Số nhập vào không được lớn hơn 100',
            icon: 'info',
            confirmButtonText: 'OK',
            allowOutsideClick: false
        });
        return "";
    }
    return tong;
}

// //Gọi nút tính tổng số lẻ
// // document.getElementById('tongSoLe').onclick = function () {
// //     let num = document.getElementById('txtNum').value * 1;
// //     document.getElementById('txtKetQua').value = tongSoLe(num);
// // }
// // //Gọi nút tính tổng số chẵn
// // document.getElementById('tongSoChan').onclick = function () {
// //     let num = document.getElementById('txtNum').value * 1;
// //     document.getElementById('txtKetQua').value = tongSoChan(num);
// }


// //Số chia hết cho 3 (từ 0 -> 1000)
// document.getElementById('chiaHetCho3').onclick = function () {
//     let count = 0;
//     for (let i = 0; i <= 1000; i++) {
//         if (i % 3 === 0) {
//             count++;
//         }
//     }
//     document.getElementById('xuatSoChiaHetCho3').innerHTML = `Có ${count} số chia hết cho 3`;
// }

// function createDivs() {
//     for (let i = 1; i <= 10; i++) {
//         // const div = document.createElement("div"); // Tạo một thẻ div mới
//         // div.textContent = `Thẻ div ${i}`; // Thêm nội dung vào div
//         // div.style.backgroundColor = i % 2 === 0 ? "red" : "blue"; // Nếu chẵn thì đỏ, lẻ thì xanh
//         // div.style.padding = "8px"; // Thêm khoảng cách cho đẹp
//         // div.style.margin = "5px 0"; // Tạo khoảng cách giữa các div
//         // div.style.color = "white"; // Màu chữ trắng để dễ nhìn
//         let pTag = document.createElement('p');
//         pTag.innerText = `Thẻ <p> thứ ${i}`;
//         if (i % 2 === 0) {
//             pTag.style.backgroundColor = "palegreen";
//         } else {
//             pTag.style.backgroundColor = "yellow";
//         }
//         pTag.style.padding = "5px"
//         pTag.style.margin = "5px 0";
//         pTag.style.color = "red";
//         pTag.style.textAlign = "center";

//         const container = document.getElementById("container"); // Chọn phần tử chứa các div
//         container.appendChild(pTag); // Thêm thẻ p vào trong phần tử chứa
//     }
// }

//5. Hàm tìm số nguyên dương nhỏ nhất trong khoảng 1->1000
function findSmallestN(targetNumber) {
    let sum = 0, n = 0;
    while (sum <= targetNumber) {
        n++;
        sum += n;
    }
    return n;
}

// console.log(findSmallestN(10));

// document.getElementById('timSoNguyenDuongNhoNhat').onclick = function (q) {
//     q.preventDefault();
//     let targetNumber = document.getElementById('targetNumber').value * 1;
//     let soN = findSmallestN(targetNumber);
//     document.getElementById('txtKQ').value = soN;
// }

// //6. Tính tổng S(n)
//Hàm tính mũ
function tinhSoMu(x, y) {
    return Math.pow(x, y);
}

// document.getElementById('tongSn').onclick = function () {
//     let tong = 0;
//     let x = document.getElementById('x').value * 1;
//     let n = document.getElementById('n').value * 1;
//     for (let i = 1; i <= n; i++) {
//         tong += tinhSoMu(x, i);
//     }
//     document.getElementById('divKQ').innerHTML = tong.toLocaleString();
// }

//Hàm tính giai thừa của 1 số
function tinhGiaiThua(number) {
    let tong = 1;
    for (let i = 1; i <= number; i++) {
        tong *= i;
    }
    return tong;
}

// document.getElementById('tongGiaiThua').onclick = function () {
//     let num = document.getElementById('txtSoGiaiThua').value * 1;
//     // let tongGiaiThua = tinhGiaiThua(num);
//     document.getElementById('kqGiaiThua').innerHTML = `Tổng giai thừa của ${num} là: ${tinhGiaiThua(num).toLocaleString()}`;
// }

// //In ra dãy số từ 1-->n
// document.getElementById('inDaySo').onclick = function () {
//     let inputNumber = document.getElementById('txtN').value * 1;
//     let daySo = '';
//     for (let i = 1; i <= inputNumber; i++) {
//         daySo += (i + ', ');
//     }
//     document.getElementById('kqDaySo').innerHTML = daySo.trim().substring(0, daySo.trim().length - 1);//dùng phương thức substring(startIndex, endIndex)

//     // let kq = daySo.trim().endsWith(",") ? daySo.slice(0, -1) : daySo;
//     // document.getElementById('kqDaySo').innerHTML = kq;
// }

//Hàm tìm số lớn nhất và nhỏ nhất trong mảng
function findHighestAndLowest(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return null;
    }

    let min = array[0], max = array[0];
    let minIndex = 0, maxIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
        if (array[i] > max) {
            max = array[i];
            maxIndex = i;
        }
    }

    return {
        highest: {
            value: max,
            index: maxIndex
        },
        lowest: {
            value: min,
            index: minIndex
        }
    };
}
