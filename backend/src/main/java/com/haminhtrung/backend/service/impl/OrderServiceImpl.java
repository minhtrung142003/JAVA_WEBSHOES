package com.haminhtrung.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.haminhtrung.backend.dto.OrderDto;
import com.haminhtrung.backend.dto.OrderItemDto;
import com.haminhtrung.backend.entity.Cart;
import com.haminhtrung.backend.entity.Order;
import com.haminhtrung.backend.entity.OrderItem;
import com.haminhtrung.backend.entity.Product;
import com.haminhtrung.backend.repository.CartRepository;
import com.haminhtrung.backend.repository.ColorRepository;
import com.haminhtrung.backend.repository.OrderItemRepository;
import com.haminhtrung.backend.repository.OrderRepository;
import com.haminhtrung.backend.repository.ProductRepository;
import com.haminhtrung.backend.service.OrderService;
import java.util.*;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ColorRepository colorRepository;

    // get by id
    @Override
    public Order getOrderById(Long orderId) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        return optionalOrder.orElse(null);
    }

    // get all
    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // get order by userId
    @Override
    public List<Order> getOrdersByUserId(String userId) {
        return orderRepository.findByUserId(userId);
    }

    // add order
    @Override
    @Transactional(rollbackFor = Exception.class)
    public ResponseEntity<?> addOrder(OrderDto orderDto) {
        Order order = new Order();
        order.setId(orderDto.getId());
        order.setTotalPrice(orderDto.getTotalPrice());
        order.setUserName(orderDto.getUserName());
        order.setLastName(orderDto.getLastName());
        order.setFirstName(orderDto.getFirstName());
        order.setUserName(orderDto.getUserName());
        order.setPhone(orderDto.getPhone());
        order.setEmail(orderDto.getEmail());
        order.setAddress(orderDto.getAddress());
        order.setTotalDiscount(orderDto.getTotalDiscount());
        order.setApprovedAt(orderDto.getApprovedAt());
        order.setDeliveredCarrierAt(orderDto.getDeliveredCarrierAt());
        order.setDeliveredCustomerAt(orderDto.getDeliveredCustomerAt());
        order.setCreatedAt(orderDto.getCreatedAt());
        order.setUserId(orderDto.getUserId());

        // add status theo method payment
        String paymentMethod = orderDto.getPaymentMethod();
        String status = paymentMethod != null && paymentMethod.equals("shipcod") ? "Chưa thanh toán" : "Đã thanh toán";
        order.setStatus(status);
        order.setPaymentMethod(paymentMethod);
        Order savedOrder = orderRepository.save(order);
        if (orderDto.getOrderItemDto() != null) {
            for (OrderItemDto orderItemDto : orderDto.getOrderItemDto()) {
                Product product = productRepository.findById(orderItemDto.getProductId()).orElse(null);
                if (product != null) {
                    OrderItem orderItem = new OrderItem();
                    orderItem.setOrder(savedOrder);
                    orderItem.setProduct(product);
                    orderItem.setColor(colorRepository.findByName(orderItemDto.getColorName()).orElse(null));
                    orderItem.setPriceOrder(orderItemDto.getPriceOrder());
                    orderItem.setQuantity(orderItemDto.getQuantity());
                    orderItemRepository.save(orderItem);
                }
            }
        }
        for (Long a : orderDto.getListIdCart()) {
            Optional<Cart> oDeleteCart = cartRepository.findById(a);
            oDeleteCart.ifPresent(cart -> cartRepository.deleteById(cart.getId()));
        }
        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }

    // put order
    @Override
    public Order updateOrder(Long orderId, Order updatedOrder) {
        Order existingOrder = orderRepository.findById(orderId).orElse(null);

        if (existingOrder != null) {
            existingOrder.setUserId(updatedOrder.getUserId());
            existingOrder.setFirstName(updatedOrder.getFirstName());
            existingOrder.setLastName(updatedOrder.getLastName());
            existingOrder.setUserName(updatedOrder.getUserName());
            existingOrder.setEmail(updatedOrder.getEmail());
            existingOrder.setAddress(updatedOrder.getAddress());
            existingOrder.setPhone(updatedOrder.getPhone());
            existingOrder.setTotalPrice(updatedOrder.getTotalPrice());
            existingOrder.setStatus(updatedOrder.getStatus());
            existingOrder.setApprovedAt(updatedOrder.getApprovedAt());
            existingOrder.setDeliveredCarrierAt(updatedOrder.getDeliveredCarrierAt());
            existingOrder.setDeliveredCustomerAt(updatedOrder.getDeliveredCustomerAt());
            existingOrder.setCreatedAt(updatedOrder.getCreatedAt());
            return orderRepository.save(existingOrder);
        }
        return null;
    }

    // delete order
    @Override
    public void deleteOrder(Long orderId) {
        orderRepository.deleteById(orderId);
    }

}
