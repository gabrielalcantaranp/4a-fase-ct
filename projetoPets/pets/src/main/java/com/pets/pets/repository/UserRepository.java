package com.pets.pets.repository;

import com.pets.pets.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends
JpaRepository<User, Integer> {
}

