package com.haminhtrung.backend.service;

import com.haminhtrung.backend.entity.Payment;

public interface PaymentService {
    Payment capturePayPalOrder(Long orderId);
}
