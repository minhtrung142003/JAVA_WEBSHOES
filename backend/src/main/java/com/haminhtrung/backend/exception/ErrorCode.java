package com.haminhtrung.backend.exception;

import lombok.Getter;

@Getter
public enum ErrorCode {
    USER_UNCATEGORIZED(9999, "Uncategorized error"), // tức là 1 lỗi nào đó xuất hiện
    INVALID_KEY(1001, "INVALID MESSAGE KEY"), // ví dụ ghi sai code thì show lỗi
    USER_EXISTED(1002, "User existed"), // user đã tồn tại
    USERNAME_INVALID(1003, "Username must be at least 3 character."),
    PASSWORD_ERROR(1004, "Password must be at least 8 character.")
    ;

    private int code;
    private String message;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

}
