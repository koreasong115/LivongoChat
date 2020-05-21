package com.example.repository;

import com.example.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MessageRepository extends JpaRepository<Post, Long> {


}