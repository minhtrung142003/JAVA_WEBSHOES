package com.haminhtrung.backend.service.impl;


import com.haminhtrung.backend.entity.Payment;
import com.haminhtrung.backend.repository.PaymentRepository;
import com.haminhtrung.backend.service.PaymentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Override
    public Payment capturePayPalOrder(Long orderId) {
        Payment payment = new Payment();
        payment.setOrderId(orderId);
        payment.setPaymentTime(LocalDateTime.now());
        return paymentRepository.save(payment);
    }
}
