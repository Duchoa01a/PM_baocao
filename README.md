# Phần mềm báo cáo
**Trung tâm GDNN & SHLX Kim Thành**

Phần mềm hỗ trợ xử lý dữ liệu báo cáo cabin, tra cứu thông tin khóa học và tổng hợp nhiều lớp đào tạo lái xe.

---

## 🌟 3 Chức năng chính

### 1. 📊 Báo cáo (Gộp Cabin Viettel & Ecotek)
- Tải file báo cáo cabin Viettel và Ecotek của cùng một khóa.
- Tự động đối chiếu theo mã học viên, họ tên và ngày sinh.
- Kiểm tra điều kiện đáp ứng, cập nhật số liệu và gán nhãn loại Cabin.
- Bộ lọc thông minh theo loại Cabin (Viettel, Ecotek, Chưa đáp ứng) và tìm kiếm học viên.
- Xuất báo cáo hoàn chỉnh ra file Excel theo đúng định dạng mẫu.

### 2. 🎓 Thông tin khóa học
- Tải file danh sách khóa học bất kỳ (`.xlsx`, `.xls`, `.csv`) để xem và tra cứu độc lập từng file.
- Tự động nhận diện mã khóa học, tổng số học viên và các cột dữ liệu.
- Tìm kiếm tức thì theo bất kỳ thông tin nào (Họ tên, CCCD/CMND, Mã HV, Ngày sinh, v.v.).
- Xuất danh sách học viên trong khóa ra file Excel.

### 3. 📑 Báo cáo tổng (Gộp & cập nhật nhiều lớp)
- Nạp nhiều file Excel lớp/khóa cùng lúc hoặc nạp lần lượt từng file.
- Tự động **cộng dồn nối tiếp học viên** vào danh sách tổng hợp duy nhất.
- **Tự động nhận diện học viên cũ:** Nếu nạp lại file của lớp đã có, phần mềm sẽ **cập nhật thông tin mới nhất** mà không bị nhân đôi (duplicate) dòng.
- Tự động đánh lại STT chuẩn liên tục từ `1` đến `Tổng số học viên`.
- Xuất toàn bộ danh sách gộp của tất cả các lớp ra **1 file Excel Báo cáo tổng**.

---

## 📥 Tải bản cài đặt sẵn (.exe)

Bạn có thể tải trực tiếp bản chạy `.exe` sẵn có tại mục [**Releases**](https://github.com/Duchoa01a/PM_baocao/releases):
1. Tải file `PhanMemBaoCao_v1.0.0_win64.zip`.
2. Giải nén ra thư mục và mở file `PhanMemBaoCao.exe` để sử dụng (không cần cài đặt).

---

## 💻 Dành cho lập trình viên (Chạy từ mã nguồn)

Yêu cầu: Đã cài đặt [Node.js](https://nodejs.org/) (khuyên dùng Node.js 18 trở lên).

```bash
# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Chạy ứng dụng ở chế độ phát triển
npm start

# 3. Đóng gói ra file .exe
npm run package
```
