package com.haminhtrung.backend.service;

import java.util.List;

import com.haminhtrung.backend.dto.OrderItemDto;
import com.haminhtrung.backend.entity.OrderItem;

public interface OrderItemService {
    OrderItem addOrderItem(OrderItem orderItem);

    OrderItem getOrderItemById(Long orderItemId);

    List<OrderItem> getAllOrderItems();

    OrderItem updateOrderItem(Long orderItemId, OrderItem updatedOrderItem);

    void deleteOrderItem(Long orderItemId);

    List<OrderItemDto> getOrderItemsByOrderId(Long orderId);
}
