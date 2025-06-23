let failedAttempts = 0;
const maxAttempts = 5;

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn trang reload

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const messageEl = document.getElementById("message");

    // Biểu thức kiểm tra email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Kiểm tra định dạng
    if (!emailRegex.test(email)) {
        messageEl.textContent = "Email không hợp lệ.";
        return;
    }

    if (password.length < 6) {
        messageEl.textContent = "Mật khẩu phải có ít nhất 6 ký tự.";
        return;
    }

    // Giả lập xác thực đúng (có thể thay bằng fetch API gửi tới server)
    if (email === "test@example.com" && password === "123456") {
        messageEl.style.color = "green";
        messageEl.textContent = "Đăng nhập thành công!";
        setTimeout(() => {
            window.location.href = "welcome.html"; // Chuyển hướng sau 1 giây
        }, 1000);
    } else {
        failedAttempts++;
        if (failedAttempts >= maxAttempts) {
            messageEl.textContent = `Bạn đã nhập sai quá ${maxAttempts} lần. Vui lòng thử lại sau.`;
            // Có thể vô hiệu hóa form:
            document.getElementById("email").disabled = true;
            document.getElementById("password").disabled = true;
        } else {
            messageEl.textContent = `Sai email hoặc mật khẩu. Lần ${failedAttempts}/${maxAttempts}.`;
        }
    }
});

// Show/hide password
function togglePassword() {
    const passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
