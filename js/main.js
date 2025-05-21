//0. Thêm phần tử số vào mảng
let arrNumbers = [];
document.getElementById('themPhanTuVaoMang').onclick = function () {
    let number = document.getElementById('txtNumber').value * 1;
    arrNumbers.push(number);
    document.getElementById('kqMang').innerHTML = arrNumbers;
    document.getElementById('kqMang').classList.add('styleKQ');

    // console.log(arrNumbers);
}

//1. Tính tổng các số dương trong mảng arrNumbers
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
document.getElementById('btnSapXepTang').onclick = function () {
    //C1: dùng vòng lặp thep phương pháp selection sort
    // for (let i = 0; i < arrNumbers.length - 1; i++) {
    //     for (let j = i + 1; j < arrNumbers.length; j++) {
    //         if (arrNumbers[i] > arrNumbers[j]) {
    //             [arrNumbers[i], arrNumbers[j]] = [arrNumbers[j], arrNumbers[i]];
    //         }
    //     }
    // }

    //C2: dùng phương thức sort() của array
    arrNumbers.sort((a, b) => a - b);

    document.getElementById('kqSapXepTang').innerHTML = `Mảng sau khi sắp xếp: ${arrNumbers}`;
    document.getElementById('kqSapXepTang').classList.add('styleKQ');
}


//8. Tìm số nguyên tố đầu tiên trong mnảng
//Hàm kiểm tra số nguyên tố
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
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

let giaTriSo = [];
document.getElementById('themSo').onclick = function () {
    let number = document.getElementById('nhapSo').value * 1;
    giaTriSo.push(number);
    document.getElementById('kqThemSo').innerHTML = giaTriSo;
    document.getElementById('kqThemSo').classList.add('styleKQ');

    // console.log(giaTriSo);
}

document.getElementById('btnDemSoNguyen').onclick = function () {
    let count = 0;
    for (let i = 0; i < giaTriSo.length; i++) {
        if (Number.isInteger(giaTriSo[i])) {
            count++;
        }
    }
    document.getElementById('kqDemSoNguyen').innerHTML = `Có ${count} số nguyên`;
    document.getElementById('kqDemSoNguyen').classList.add('styleKQ');
}


//10. So sánh số lượng Số Âm & Số Dương trong mảng
document.getElementById('btnSoSanh').onclick = function () {
    let countPositive = 0; //Biến đếm số dương
    let countNegative = 0; //Biến đếm số âm
    for (let i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i] > 0) {
            countPositive++;
        } else if (arrNumbers[i] < 0) {
            countNegative++;
        }
    }
    if (countPositive > countNegative) {
        document.getElementById('kqSoSanh').innerHTML = `Số dương > Số âm`;
    } else if (countPositive < countNegative) {
        document.getElementById('kqSoSanh').innerHTML = `Số dương < Số âm`;
    } else {
        document.getElementById('kqSoSanh').innerHTML = `Số dương = Số âm`;
    }
    document.getElementById('kqSoSanh').classList.add('styleKQ');
}

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

document.getElementById('timSoNguyenDuongNhoNhat').onclick = function (q) {
    q.preventDefault();
    let targetNumber = document.getElementById('targetNumber').value * 1;
    let soN = findSmallestN(targetNumber);
    document.getElementById('txtKQ').value = soN;
}

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


