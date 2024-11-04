package com.devman.projectmanagement.controller;

import com.devman.projectmanagement.models.Publication;
import com.devman.projectmanagement.services.PublicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/publications")
public class PublicationController {
    @Autowired
    private PublicationService publicationService;

    @GetMapping("/list/")
    public List<Publication> getAllPub(){
        return this.publicationService.getAllPublication();
    }

    @PostMapping("/create/")
    public Publication savePublication(Publication publication){
        return this.publicationService.createPublication(publication);
    }
}
