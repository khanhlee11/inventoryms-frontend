# 📦 InventoryMS Backend

**InventoryMS Frontend** là phần giao diện người dùng của hệ thống quản lý kho Inventory Management System, được xây dựng bằng ReactJS. Ứng dụng cho phép người dùng tương tác với hệ thống backend để quản lý sản phẩm, tồn kho và người dùng.

---

## 🛠️ Công Nghệ Sử Dụng

- ReactJS
- Axios để gọi API backend
- React Router DOM để điều hướng giữa các trang

---

🧩 Tính Năng Ứng Dụng

| Tính năng               | Mô tả                                                               |
| ----------------------- | ------------------------------------------------------------------- |
| **Quản lý sản phẩm**    | Hiển thị danh sách sản phẩm, thêm mới, chỉnh sửa và xóa sản phẩm.   |
| **Quản lý tồn kho**     | Theo dõi số lượng sản phẩm, nhập kho, xuất kho theo thời gian thực. |
| **Quản lý người dùng**  | Đăng ký, đăng nhập, phân quyền người dùng (Admin, Nhân viên).       |
| **Phân quyền chi tiết** | Hiển thị hoặc ẩn các chức năng dựa trên vai trò người dùng.         |
| **Tìm kiếm và lọc**     | Tìm kiếm sản phẩm theo tên, mã hoặc lọc theo danh mục.              |
| **Responsive Design**   | Giao diện tương thích với nhiều kích thước màn hình khác nhau.      |


🖼️ Giao diện Ứng Dụng (Frontend)
💡 Hình ảnh minh họa từ frontend ReactJS kết nối đến backend Spring Boot

![image](https://github.com/user-attachments/assets/da0632c4-5cfe-48f1-8fe1-89e70d6db513)
![image](https://github.com/user-attachments/assets/2549e191-e791-413f-b526-6a9c06fbcf31)




## ⚙️ Cài Đặt và Chạy Ứng Dụng

1. Clone Repository
bash
Copy
Edit
git clone https://github.com/khanhlee11/inventoryms-frontend.git
cd inventoryms-frontend
2. Cài Đặt Dependencies
bash
Copy
Edit
npm install
3. Cấu Hình Biến Môi Trường
Tạo file .env trong thư mục gốc của dự án và thêm dòng sau:
env
REACT_APP_API_URL=http://localhost:5050/api

📌 Đảm bảo rằng backend đang chạy tại địa chỉ trên. Nếu không, hãy thay đổi URL cho phù hợp.

4. Chạy Ứng Dụng
bash
Copy
Edit
npm start
Mở trình duyệt và truy cập http://localhost:3000 để sử dụng ứng dụng.


📌 Liên kết liên quan
🔗 [Backend - InventoryMS (Java)](https://github.com/khanhlee11/inventoryms-backend)

📚 Tài Liệu Tham Khảo

ReactJS Documentation

Axios Documentation

React Router Documentation

