package com.haminhtrung.backend.service.impl;

import com.haminhtrung.backend.entity.Payment;
import com.haminhtrung.backend.repository.PaymentRepository;
import com.haminhtrung.backend.service.PaymentService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class PaymentServiceImpl implements PaymentService {

    PaymentRepository paymentRepository;

    @Override
    public Payment capturePayPalOrder(Long orderId) {
        Payment payment = new Payment();
        payment.setOrderId(orderId);
        payment.setPaymentTime(LocalDateTime.now());
        return paymentRepository.save(payment);
    }
}
