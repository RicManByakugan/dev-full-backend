package com.devman.projectmanagement.controller;

import com.devman.projectmanagement.models.Publication;
import com.devman.projectmanagement.services.PublicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/publication")
public class PublicationController {
    @Autowired
    private PublicationService publicationService;

    @GetMapping("list")
    public List<Publication> getAllPub(){
        return this.publicationService.getAllPublication();
    }
}
