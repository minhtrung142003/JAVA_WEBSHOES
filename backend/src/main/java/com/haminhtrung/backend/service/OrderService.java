package com.haminhtrung.backend.service;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;

import com.haminhtrung.backend.dto.OrderDto;
import com.haminhtrung.backend.entity.Order;



public interface OrderService {
    ResponseEntity<?> addOrder(OrderDto orderDto);

    Order getOrderById(Long orderId);

    List<Order> getAllOrders();

    Order updateOrder(Long orderId, Order updatedOrder);

    void deleteOrder(Long orderId);

    List<Order> getOrdersByUserId(String userId);

}
