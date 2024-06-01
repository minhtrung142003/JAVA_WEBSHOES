package com.haminhtrung.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.haminhtrung.backend.entity.OrderItem;
import com.haminhtrung.backend.repository.OrderItemRepository;
import com.haminhtrung.backend.service.OrderItemService;
import java.util.List;
import java.util.Optional;

@Service
public class OrderItemServiceImpl implements OrderItemService {

    @Autowired
    private OrderItemRepository orderItemRepository;

    // get by id
    @Override
    public OrderItem getOrderItemById(Long orderItemId) {
        Optional<OrderItem> optionalOrderItem = orderItemRepository.findById(orderItemId);
        return optionalOrderItem.orElse(null);
    }

    // get order by id
    @Override
    public List<OrderItem> getOrderItemsByOrderId(Long orderId) {
        return orderItemRepository.findByOrderId(orderId);
    }

    // get all
    @Override
    public List<OrderItem> getAllOrderItems() {
        return orderItemRepository.findAll();
    }

    @Override
    public OrderItem addOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }

    @Override
    public OrderItem updateOrderItem(Long orderItemId, OrderItem updatedOrderItem) {
        OrderItem existingOrderItem = orderItemRepository.findById(orderItemId).orElse(null);

        if (existingOrderItem != null) {
            existingOrderItem.setProduct(updatedOrderItem.getProduct());
            existingOrderItem.setOrder(updatedOrderItem.getOrder());
            existingOrderItem.setPriceOrder(updatedOrderItem.getPriceOrder());
            existingOrderItem.setQuantity(updatedOrderItem.getQuantity());
            return orderItemRepository.save(existingOrderItem);
        }
        return null;
    }

    @Override
    public void deleteOrderItem(Long orderItemId) {
        orderItemRepository.deleteById(orderItemId);
    }
}