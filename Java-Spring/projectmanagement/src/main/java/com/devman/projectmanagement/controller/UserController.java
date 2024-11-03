package com.devman.projectmanagement.controller;

import com.devman.projectmanagement.models.User;
import com.devman.projectmanagement.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/list")
    public List<User> getAllUsers(){
        return this.userService.getAllUser();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }

    @PostMapping("/create")
    public User saveUser(User user){
        return this.userService.save(user);
    }

    @GetMapping("/{id}/update/")
    public User updateUser(@PathVariable Long id, @RequestBody User user){
        user.setId(id);
        return userService.save(user);
    }

    @DeleteMapping("/{id}/delete/")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id){
        userService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
