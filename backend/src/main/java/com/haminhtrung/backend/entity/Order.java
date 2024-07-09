package com.haminhtrung.backend.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    Long id;
    Double totalPrice;
    String userName;
    String firstName;
    String lastName;
    String phone;
    String email;
    String address;
    int totalDiscount;
    @Column(name = "order_approved_at")
    LocalDateTime approvedAt;

    @Column(name = "order_delivered_carrier_date")
    LocalDateTime deliveredCarrierAt;

    @Column(name = "order_delivered_customer_date")
    LocalDateTime deliveredCustomerAt;

    @Column(name = "created_at")
    LocalDateTime createdAt;

    String status;

    @Column(name = "payment_method")
    String paymentMethod; // phương thuc thanh toan

    @Column(name = "user_id")
    String userId;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    Set<OrderItem> items = new HashSet<>();

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "order_cart_items", joinColumns = @JoinColumn(name = "order_id"), inverseJoinColumns = @JoinColumn(name = "cart_item_id"))

    Set<Cart> carts = new HashSet<>();

}
