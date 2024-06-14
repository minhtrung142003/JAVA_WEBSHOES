package com.haminhtrung.backend.dto;

import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderDto {
    private Long id;
    private Double totalPrice;
    private String userName;
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private String address;
    private int totalDiscount;
    private LocalDateTime approvedAt;
    private LocalDateTime deliveredCarrierAt;
    private LocalDateTime deliveredCustomerAt;
    private LocalDateTime createdAt;
    private String status;
    private String paymentMethod; // method thanh toan
    private String userId;
    private List<OrderItemDto> orderItemDto;
    private List<Long> listIdCart;
    private List<CartProductDto> cartProductDtos;

}
