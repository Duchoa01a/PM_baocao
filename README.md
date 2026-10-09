# Báo cáo hết khóa & Thông tin khóa học
**Trung tâm GDNN & SHLX Kim Thành**

Phần mềm hỗ trợ xử lý dữ liệu báo cáo cabin và tra cứu thông tin khóa học lái xe.

---

## 🌟 Chức năng chính

### 1. Báo cáo (Gộp Cabin Viettel & Ecotek)
- Tải file báo cáo cabin Viettel và Ecotek của cùng một khóa.
- Tự động đối chiếu theo mã học viên, họ tên và ngày sinh.
- Kiểm tra điều kiện đáp ứng, cập nhật số liệu và gán nhãn loại Cabin.
- Bộ lọc thông minh theo loại Cabin (Viettel, Ecotek, Chưa đáp ứng) và tìm kiếm học viên.
- Xuất báo cáo hoàn chỉnh ra file Excel theo đúng định dạng mẫu.

### 2. Thông tin khóa học
- Tải file danh sách khóa học bất kỳ (`.xlsx`, `.xls`, `.csv`).
- Tự động nhận diện mã khóa học, tổng số học viên và các cột dữ liệu.
- Tìm kiếm tức thì theo bất kỳ thông tin nào (Họ tên, CCCD/CMND, Mã HV, Ngày sinh, v.v.).
- Xuất danh sách học viên trong khóa ra file Excel.

---

## 📥 Tải bản cài đặt sẵn (.exe)

Bạn có thể tải trực tiếp bản chạy `.exe` sẵn có tại mục [**Releases**](https://github.com/Duchoa01a/PM_baocao/releases):
1. Tải file `BaoCaoHetKhoa_v1.0.0_win64.zip`.
2. Giải nén ra thư mục và mở file `BaoCaoHetKhoa.exe` để sử dụng (không cần cài đặt).

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
