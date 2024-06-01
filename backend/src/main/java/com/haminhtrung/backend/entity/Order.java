package com.haminhtrung.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    private Double totalPrice;
    private String userName;
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private String address;
    private int totalDiscount;
    @Column(name = "order_approved_at")
    private LocalDateTime approvedAt;

    @Column(name = "order_delivered_carrier_date")
    private LocalDateTime deliveredCarrierAt;

    @Column(name = "order_delivered_customer_date")
    private LocalDateTime deliveredCustomerAt;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    private String status;

    @Column(name = "payment_method")
    private String paymentMethod; // phương thuc thanh toan

    @Column(name = "user_id")
    private String userId;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private Set<OrderItem> items = new HashSet<>();

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "order_cart_items", joinColumns = @JoinColumn(name = "order_id"), inverseJoinColumns = @JoinColumn(name = "cart_item_id"))

    private Set<Cart> carts = new HashSet<>();

}
