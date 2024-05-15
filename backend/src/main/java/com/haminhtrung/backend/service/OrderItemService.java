package com.haminhtrung.backend.service;


import java.util.List;
import java.util.UUID;

import com.haminhtrung.backend.entity.OrderItem;



public interface OrderItemService {
    OrderItem addOrderItem(OrderItem orderItem);

    OrderItem getOrderItemById(Long orderItemId);

    List<OrderItem> getAllOrderItems();

    OrderItem updateOrderItem(Long orderItemId, OrderItem updatedOrderItem);

    void deleteOrderItem(Long orderItemId);
    
    List<OrderItem> getOrderItemsByOrderId(Long orderId);
}

