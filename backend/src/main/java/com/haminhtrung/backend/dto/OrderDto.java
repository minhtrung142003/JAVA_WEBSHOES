package com.haminhtrung.backend.dto;

import java.time.LocalDateTime;
import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderDto {
    Long id;
    Double totalPrice;
    String userName;
    String firstName;
    String lastName;
    String phone;
    String email;
    String address;
    int totalDiscount;
    LocalDateTime approvedAt;
    LocalDateTime deliveredCarrierAt;
    LocalDateTime deliveredCustomerAt;
    LocalDateTime createdAt;
    String status;
    String paymentMethod; // method thanh toan
    String userId;
    List<OrderItemDto> orderItemDto;
    List<Long> listIdCart;
    List<CartProductDto> cartProductDtos;

}
