# AngularBasic

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:5005/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

<!-- ng g c new-task --skip-tests --inline-style -->

## Init tasks data

1. Open console tab in dev tools
2. Run
```js
   localStorage.setItem('tasks', JSON.stringify([
  {
    id: "t1",
    userId: "u1",
    title: "Thiết kế UI dashboard",
    summary: "Tạo wireframe cho dashboard quản lý",
    dueDate: "2025-06-01"
  },
  {
    id: "t2",
    userId: "u2",
    title: "Tích hợp API phòng họp",
    summary: "Kết nối API lấy dữ liệu phòng họp",
    dueDate: "2025-06-03"
  },
  {
    id: "t3",
    userId: "u3",
    title: "Tối ưu truy vấn database",
    summary: "Cải thiện tốc độ truy vấn với index",
    dueDate: "2025-06-05"
  },
  {
    id: "t4",
    userId: "u4",
    title: "Viết test cho module đặt phòng",
    summary: "Thêm unit test và integration test",
    dueDate: "2025-06-02"
  },
  {
    id: "t5",
    userId: "u5",
    title: "Fix bug hiển thị lịch",
    summary: "Lỗi không hiện thứ đúng trên calendar",
    dueDate: "2025-06-04"
  },
  {
    id: "t6",
    userId: "u6",
    title: "Cập nhật UI mobile",
    summary: "Responsive giao diện cho thiết bị nhỏ",
    dueDate: "2025-06-06"
  },
  {
    id: "t7",
    userId: "u1",
    title: "Thêm tính năng lọc theo phòng",
    summary: "Cho phép người dùng lọc danh sách phòng",
    dueDate: "2025-06-03"
  },
  {
    id: "t8",
    userId: "u2",
    title: "Đồng bộ hóa thời gian thực",
    summary: "Sử dụng websocket để cập nhật real-time",
    dueDate: "2025-06-07"
  },
  {
    id: "t9",
    userId: "u3",
    title: "Viết tài liệu hướng dẫn sử dụng",
    summary: "Soạn tài liệu cho admin và user",
    dueDate: "2025-06-09"
  },
  {
    id: "t10",
    userId: "u4",
    title: "Deploy staging",
    summary: "Đưa bản test lên môi trường staging",
    dueDate: "2025-06-01"
  },
  {
    id: "t11",
    userId: "u5",
    title: "Code review module đặt thiết bị",
    summary: "Kiểm tra logic và hiệu năng code",
    dueDate: "2025-06-08"
  },
  {
    id: "t12",
    userId: "u6",
    title: "Refactor mã nguồn thiết bị",
    summary: "Tách các component lớn thành nhỏ",
    dueDate: "2025-06-10"
  },
  {
    id: "t13",
    userId: "u1",
    title: "Thêm validate dữ liệu đầu vào",
    summary: "Ngăn dữ liệu không hợp lệ khi submit",
    dueDate: "2025-06-02"
  },
  {
    id: "t14",
    userId: "u2",
    title: "Thiết kế biểu đồ thống kê",
    summary: "Hiển thị biểu đồ số lượng đặt phòng",
    dueDate: "2025-06-06"
  },
  {
    id: "t15",
    userId: "u3",
    title: "Xử lý lỗi khi mất kết nối",
    summary: "Thêm thông báo khi mất mạng",
    dueDate: "2025-06-04"
  },
  {
    id: "t16",
    userId: "u4",
    title: "Gửi email nhắc lịch họp",
    summary: "Tự động gửi email trước 15 phút",
    dueDate: "2025-06-05"
  },
  {
    id: "t17",
    userId: "u5",
    title: "Tạo chức năng xuất Excel",
    summary: "Cho phép export danh sách phòng",
    dueDate: "2025-06-09"
  },
  {
    id: "t18",
    userId: "u6",
    title: "Tạo custom pipe định dạng ngày",
    summary: "Hiển thị ngày theo định dạng dd/MM/yyyy",
    dueDate: "2025-06-07"
  },
  {
    id: "t19",
    userId: "u2",
    title: "Chuyển trạng thái phòng",
    summary: "Thêm nút chuyển trạng thái phòng",
    dueDate: "2025-06-08"
  },
  {
    id: "t20",
    userId: "u3",
    title: "Tối ưu ảnh người dùng",
    summary: "Resize và lazy load avatar",
    dueDate: "2025-06-10"
  }
]))
```
