package com.pets.pets.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.pets.pets.model.Order;
import com.pets.pets.repository.OrderRepository;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getCategoryById(Integer id) {
        Optional<Order> order = orderRepository.findById(id);
        return order.orElse(null);
    }

    @Transactional 
    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    @Transactional 
    public Order updateCategory(Integer id, Order updatedOrder) {
        Optional<Order> existingOrder = orderRepository.findById(id);
        if (existingOrder.isPresent()) {
            Order order = existingOrder.get();
            order.setName(updatedOrder.getName());
            return orderRepository.save(order);
        }
        return null;
    }
}
