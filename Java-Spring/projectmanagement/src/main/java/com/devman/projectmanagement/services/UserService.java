package com.devman.projectmanagement.services;

import com.devman.projectmanagement.models.User;
import com.devman.projectmanagement.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUser(){
        return this.userRepository.findAll();
    }

    public User getUserById(Long id){
        return this.userRepository.findById(id).orElse(null);
    }

    public User save(User user){
        return this.userRepository.save(user);
    }

    public void deleteById(Long Id){
        this.userRepository.deleteById(Id);
    }
}
