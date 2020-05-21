package com.example.controllers;

import com.example.models.Post;
import com.example.repository.MessageRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RequestMapping("/api/message")
@RestController
public class MessageApi {

    @Autowired
    MessageRepository messageRepository;

    @PostMapping
    public ResponseEntity<String> addMessage(@RequestBody Map<String, String> req) throws JsonProcessingException {
        Post post = new Post(new Date(), req.get("name"), req.get("message"));
        messageRepository.save(post);
        String res = ControllerUtils.DefaultObjectToJsonString(post);
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<String> getAllMessages() throws ResourceNotFoundException, JsonProcessingException {
        List<Post> posts = new ArrayList<>();
        for (Post msg : messageRepository.findAll()){
            posts.add(msg);
        }

        String res = ControllerUtils.DefaultObjectToJsonString(posts);
        return ResponseEntity.ok().body(res);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<String> updateMessage(@PathVariable(value = "id") Long messageId, @RequestBody Map<String, String> req) throws JsonProcessingException {
        Post post = messageRepository.findOne(messageId);
        post.setMessage(req.get("message"));
        messageRepository.save(post);
        String res = ControllerUtils.DefaultObjectToJsonString(post);
        return ResponseEntity.ok().body(res);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMessage(@PathVariable(value = "id") Long messageId) throws JsonProcessingException {
        Post deletedPost = messageRepository.findOne(messageId);
        messageRepository.delete(messageId);
        String res = ControllerUtils.DefaultObjectToJsonString(deletedPost);
        return ResponseEntity.ok().body(res);
    }
}
