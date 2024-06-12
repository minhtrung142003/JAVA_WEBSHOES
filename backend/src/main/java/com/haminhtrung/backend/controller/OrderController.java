package com.haminhtrung.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.haminhtrung.backend.dto.OrderDto;
import com.haminhtrung.backend.dto.OrderItemDto;
import com.haminhtrung.backend.entity.Cart;
import com.haminhtrung.backend.entity.Color;
import com.haminhtrung.backend.entity.Order;
import com.haminhtrung.backend.entity.OrderItem;
import com.haminhtrung.backend.entity.Product;
import com.haminhtrung.backend.entity.Size;
import com.haminhtrung.backend.service.OrderService;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin({ "http://localhost:3000", "http://localhost:3001" })
@RequestMapping("api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    // get all orders
    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }

    // get order by id
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable("id") Long orderId) {
        Order order = orderService.getOrderById(orderId);
        if (order != null) {
            return ResponseEntity.ok(order);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // get orders by user id
    @GetMapping("/users/{userId}")
    public ResponseEntity<List<OrderDto>> getOrdersByUserId(@PathVariable("userId") String userId) {
        List<Order> orders = orderService.getOrdersByUserId(userId);
        List<OrderDto> ordersDto = new ArrayList<>();
        for (Order order : orders) {
            OrderDto orderDto = new OrderDto();
            orderDto.setTotalPrice(order.getTotalPrice());
            orderDto.setUserName(order.getUserName());
            orderDto.setAddress(order.getAddress());
            orderDto.setFirstName(order.getFirstName());
            orderDto.setLastName(order.getLastName());
            orderDto.setEmail(order.getEmail());
            orderDto.setPhone(order.getPhone());
            orderDto.setTotalDiscount(order.getTotalDiscount());
            orderDto.setApprovedAt(order.getApprovedAt());
            orderDto.setDeliveredCarrierAt(order.getDeliveredCarrierAt());
            orderDto.setDeliveredCustomerAt(order.getDeliveredCustomerAt());
            orderDto.setStatus(order.getStatus());
            orderDto.setCreatedAt(order.getCreatedAt());
            orderDto.setUserId(order.getUserId());

            // lấy danh sách order and change thành DTO
            List<OrderItemDto> orderItemDtos = new ArrayList<>();
            for (OrderItem orderItem : order.getItems()) {
                OrderItemDto orderItemDto = new OrderItemDto();
                Product product = orderItem.getProduct();
                Color color = orderItem.getColor();
                Size size = orderItem.getSize();
                orderItemDto.setProductId(product.getId());
                orderItemDto.setQuantity(product.getQuantity());
                orderItemDto.setPriceOrder(orderItem.getPriceOrder());
                orderItemDto.setTitle(product.getTitle());
                orderItemDto.setDescription(product.getDescription());
                orderItemDto.setDiscount(product.getDiscount());
                orderItemDto.setQuantity(product.getQuantity());
                orderItemDto.setPrice(product.getPrice());
                orderItemDto.setShortDescription(product.getShortDescription());
                orderItemDto.setCategories(product.getCategories());
                orderItemDto.setTags(product.getTags());
                orderItemDto.setGalleries(product.getGalleries());
                orderItemDto.setColorName(color.getName());            
                orderItemDto.setSizeName(size.getName());      
                orderItemDto.setProducts(product);       
                orderItemDtos.add(orderItemDto);
            }
            orderDto.setOrderItemDto(orderItemDtos);
            // get all id cart
            List<Long> listIdCart = new ArrayList<>();
            for (Cart cart : order.getCarts()) {
                listIdCart.add(cart.getId());
            }
            orderDto.setListIdCart(listIdCart);
            ordersDto.add(orderDto);
        }
        return ResponseEntity.ok(ordersDto);
    }

    // post order
    @PostMapping
    public ResponseEntity<?> addOrder(@RequestBody OrderDto orderDto) {
        return orderService.addOrder(orderDto);
    }

    // put order
    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable("id") Long orderId, @RequestBody Order updatedOrder) {
        Order order = orderService.updateOrder(orderId, updatedOrder);
        if (order != null) {
            return ResponseEntity.ok(order);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // delete order
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable("id") Long orderId) {
        orderService.deleteOrder(orderId);
        return ResponseEntity.noContent().build();
    }
}