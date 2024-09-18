package com.pets.pets.repository;

import com.pets.pets.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends
        JpaRepository<Order, Integer> {
}
